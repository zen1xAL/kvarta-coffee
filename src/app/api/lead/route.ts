import { NextResponse } from "next/server";
import { validateLeadPayload } from "@/lib/validation";
import { saveLead } from "@/lib/lead-storage";
import type { StoredLead } from "@/lib/lead-storage";
import { HTTP_STATUS, LEAD_STATUS } from "@/constants/http";

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
  } catch {}
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validation = validateLeadPayload(body);

    if (!validation.success) {
      return NextResponse.json(
        { success: false, errors: validation.errors },
        { status: HTTP_STATUS.BAD_REQUEST },
      );
    }

    const saveResult = saveLead(validation.data);

    if (saveResult.duplicate) {
      return NextResponse.json(
        { success: false, status: LEAD_STATUS.DUPLICATE, message: saveResult.error },
        { status: HTTP_STATUS.OK },
      );
    }

    if (!saveResult.success) {
      return NextResponse.json(
        { success: false, message: saveResult.error ?? "Не удалось сохранить заявку" },
        { status: HTTP_STATUS.INTERNAL_SERVER_ERROR },
      );
    }

    void notifyTelegram(saveResult.lead);

    return NextResponse.json(
      {
        success: true,
        status: LEAD_STATUS.CREATED,
        lead: {
          id: saveResult.lead.id,
          name: saveResult.lead.name,
          interest: saveResult.lead.interest,
          createdAt: saveResult.lead.createdAt,
        },
      },
      { status: HTTP_STATUS.CREATED },
    );
  } catch {
    return NextResponse.json(
      { success: false, message: "Некорректный запрос" },
      { status: HTTP_STATUS.BAD_REQUEST },
    );
  }
}
