import { NextResponse } from "next/server";
import { validateLeadPayload } from "@/lib/validation";
import { saveLead } from "@/lib/lead-storage";
import type { StoredLead } from "@/lib/lead-storage";

async function notifyTelegram(lead: StoredLead): Promise<void> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) return;

  const lines = [
    "☕ Новая заявка — Кварта",
    `👤 Имя: ${lead.name}`,
    `📞 Телефон: ${lead.normalizedPhone}`,
    `🎯 Интерес: ${lead.interest}`,
    lead.comment ? `💬 Комментарий: ${lead.comment}` : "",
    lead.utm?.utm_source ? `🌐 Источник: ${lead.utm.utm_source}` : "",
    lead.utm?.utm_campaign ? `📊 Кампания: ${lead.utm.utm_campaign}` : "",
  ].filter(Boolean);

  try {
    await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text: lines.join("\n") }),
    });
  } catch {
    // Non-blocking notification failure
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validation = validateLeadPayload(body);

    if (!validation.success || !validation.data) {
      return NextResponse.json({ success: false, errors: validation.errors }, { status: 400 });
    }

    const saveResult = saveLead(validation.data);

    if (saveResult.duplicate) {
      return NextResponse.json(
        { success: false, status: "duplicate", message: saveResult.error },
        { status: 200 },
      );
    }

    if (!saveResult.success || !saveResult.lead) {
      return NextResponse.json(
        { success: false, message: "Не удалось сохранить заявку" },
        { status: 500 },
      );
    }

    void notifyTelegram(saveResult.lead);

    return NextResponse.json(
      {
        success: true,
        status: "created",
        lead: {
          id: saveResult.lead.id,
          name: saveResult.lead.name,
          interest: saveResult.lead.interest,
          createdAt: saveResult.lead.createdAt,
        },
      },
      { status: 201 },
    );
  } catch {
    return NextResponse.json({ success: false, message: "Некорректный запрос" }, { status: 400 });
  }
}
