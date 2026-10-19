"use client";

import { useLeadForm } from "@/lib/use-lead-form";
import { LeadFormNote } from "./LeadFormNote";
import { LeadFormFeedback } from "./LeadFormFeedback";
import { LeadFormSuccess } from "./LeadFormSuccess";
import { UI } from "@/styles/ui";
import type { LeadInterest } from "@/types/lead";

const INTERESTS: { id: LeadInterest; label: string }[] = [
  { id: "подписка", label: "Подписка" },
  { id: "разовый заказ", label: "Разовый заказ" },
  { id: "вопрос", label: "Вопрос" },
];

export function LeadFormSection() {
  const form = useLeadForm();

  return (
    <section id="lead-form" className={UI.section.dark}>
      <div className={UI.container}>
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <LeadFormNote />

          <div className={`lg:col-span-7 ${UI.card.blank}`}>
            {form.status === "success" ? (
              <LeadFormSuccess onReset={() => form.setStatus("idle")} />
            ) : (
              <form onSubmit={form.handleSubmit} className="space-y-5">
                <div>
                  <label className={UI.form.label}>01 / Формат заказа</label>
                  <div className="mt-2 grid grid-cols-3 gap-1 rounded-[4px] border border-[#242a27] bg-[#0b0e0d] p-1">
                    {INTERESTS.map((item) => (
                      <button
                        type="button"
                        key={item.id}
                        onClick={() => form.setInterest(item.id)}
                        className={`rounded-[3px] py-2 font-sans text-[12px] font-medium transition-colors sm:text-[13px] ${
                          form.interest === item.id
                            ? "bg-[#f6f7f2] text-[#0e1311]"
                            : "text-[#b3b3b3] hover:text-[#ffffff]"
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className={UI.form.label}>02 / Ваше имя</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => form.setName(e.target.value)}
                      placeholder="Алексей"
                      className={UI.form.input}
                    />
                    {form.errors.name && (
                      <p className="mt-1 text-xs text-[#dfdbca]">{form.errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className={UI.form.label}>03 / Телефон РБ</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => form.handlePhoneChange(e.target.value)}
                      placeholder="+375 (29) 000-00-00"
                      className={UI.form.input}
                    />
                    <p className="mt-1 font-sans text-[11px] text-[#808080]">
                      Коды: 25, 29, 33, 44
                    </p>
                    {form.errors.phone && (
                      <p className="mt-1 text-xs text-[#dfdbca]">{form.errors.phone}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className={UI.form.label}>04 / Сорт кофе, помол или вопрос</label>
                  <textarea
                    rows={3}
                    value={form.comment}
                    onChange={(e) => form.setComment(e.target.value)}
                    placeholder="Например: Эфиопия Иргачеффе, смолоть под воронку V60"
                    className={UI.form.input}
                  />
                </div>

                <LeadFormFeedback status={form.status} errorMsg={form.errorMsg} />

                <div className="flex flex-col gap-4 border-t border-[#242a27] pt-5 sm:flex-row sm:items-center sm:justify-between">
                  <p className="font-sans text-[12px] text-[#808080]">
                    Менеджер перезвонит для подтверждения заказа
                  </p>
                  <button
                    type="submit"
                    disabled={form.submitting}
                    className="inline-flex shrink-0 items-center justify-center rounded-[4px] bg-[#f6f7f2] px-7 py-3.5 font-sans text-sm font-medium text-[#0e1311] transition-colors hover:bg-[#dfdbca] disabled:opacity-50"
                  >
                    {form.submitting ? "Отправка..." : "Отправить заявку →"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
