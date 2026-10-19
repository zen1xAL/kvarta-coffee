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

          <div className="lg:col-span-7">
            {form.status === "success" ? (
              <div className="rounded-[4px] border border-[#333333] bg-[#262626] p-8">
                <LeadFormSuccess onReset={() => form.setStatus("idle")} />
              </div>
            ) : (
              <form onSubmit={form.handleSubmit} className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {INTERESTS.map((item) => (
                    <button
                      type="button"
                      key={item.id}
                      onClick={() => form.setInterest(item.id)}
                      className={`rounded-[4px] border px-4 py-2.5 font-sans text-[13px] font-medium transition-colors ${
                        form.interest === item.id
                          ? "border-[#f6f7f2] bg-[#f6f7f2] text-[#0e1311]"
                          : "border-[#333333] bg-[#262626] text-[#b3b3b3] hover:text-[#ffffff]"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>

                <div>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => form.setName(e.target.value)}
                    placeholder="Ваше имя"
                    className="w-full rounded-[4px] border border-[#333333] bg-[#262626] px-4 py-3 font-sans text-[15px] text-[#ffffff] placeholder-[#808080] transition-colors focus:border-white/50 focus:outline-none"
                  />
                  {form.errors.name && (
                    <p className="mt-1 text-xs text-[#dfdbca]">{form.errors.name}</p>
                  )}
                </div>

                <div>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => form.handlePhoneChange(e.target.value)}
                    placeholder="+375 (29) 000-00-00"
                    className="w-full rounded-[4px] border border-[#333333] bg-[#262626] px-4 py-3 font-sans text-[15px] text-[#ffffff] placeholder-[#808080] transition-colors focus:border-white/50 focus:outline-none"
                  />
                  <p className="mt-1 font-sans text-[12px] text-[#808080]">
                    Коды операторов РБ: 25, 29, 33, 44
                  </p>
                  {form.errors.phone && (
                    <p className="mt-1 text-xs text-[#dfdbca]">{form.errors.phone}</p>
                  )}
                </div>

                <div>
                  <textarea
                    rows={3}
                    value={form.comment}
                    onChange={(e) => form.setComment(e.target.value)}
                    placeholder="Сорт кофе, помол (под турку, воронку, чашку) или вопрос"
                    className="w-full rounded-[4px] border border-[#333333] bg-[#262626] px-4 py-3 font-sans text-[15px] text-[#ffffff] placeholder-[#808080] transition-colors focus:border-white/50 focus:outline-none"
                  />
                </div>

                <LeadFormFeedback status={form.status} errorMsg={form.errorMsg} />

                <button
                  type="submit"
                  disabled={form.submitting}
                  className="w-full rounded-[4px] bg-[#f6f7f2] py-3.5 font-sans text-[14px] font-medium text-[#0e1311] transition-colors hover:bg-[#ffffff] disabled:opacity-50"
                >
                  {form.submitting ? "Отправка..." : "Отправить заявку"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
