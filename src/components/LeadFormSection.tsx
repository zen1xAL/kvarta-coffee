"use client";

import { useLeadForm } from "@/lib/use-lead-form";
import { LeadFormNote } from "./LeadFormNote";
import { LeadFormFeedback } from "./LeadFormFeedback";
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
    <section id="lead-form" className={UI.section.roast}>
      <div className={UI.container}>
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <LeadFormNote />

          <div className="lg:col-span-7">
            {form.status === "success" ? (
              <div className="rounded-panel border border-line-strong bg-bean p-8">
                <h3 className="font-serif text-2xl text-crema">Спасибо, заявка принята!</h3>
                <p className={`mt-2 ${UI.typography.body}`}>
                  Мы уже получили ваш заказ и свяжемся с вами в течение 15 минут.
                </p>
                <button
                  onClick={() => form.setStatus("idle")}
                  className="mt-6 text-sm text-caramel underline"
                >
                  Отправить еще одну заявку
                </button>
              </div>
            ) : (
              <form onSubmit={form.handleSubmit} className="space-y-5">
                <div className="flex flex-wrap gap-2.5">
                  {INTERESTS.map((item) => (
                    <button
                      type="button"
                      key={item.id}
                      onClick={() => form.setInterest(item.id)}
                      className={`${UI.optionPill.base} ${
                        form.interest === item.id ? UI.optionPill.active : UI.optionPill.inactive
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
                    className={UI.inputPill}
                  />
                  {form.errors.name && (
                    <p className="mt-1.5 text-xs text-caramel">{form.errors.name}</p>
                  )}
                </div>

                <div>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => form.handlePhoneChange(e.target.value)}
                    placeholder="+375 (29) 000-00-00"
                    className={UI.inputPill}
                  />
                  <p className={`mt-1.5 text-xs ${UI.typography.bodySm}`}>
                    Коды операторов РБ: 25, 29, 33, 44
                  </p>
                  {form.errors.phone && (
                    <p className="mt-1.5 text-xs text-caramel">{form.errors.phone}</p>
                  )}
                </div>

                <textarea
                  rows={3}
                  value={form.comment}
                  onChange={(e) => form.setComment(e.target.value)}
                  placeholder="Сорт кофе, помол (под турку, воронку, чашку) или пожелания"
                  className={UI.field.textarea}
                />

                <LeadFormFeedback status={form.status} errorMsg={form.errorMsg} />

                <button
                  type="submit"
                  disabled={form.submitting}
                  className={`w-full ${UI.button.primary} disabled:opacity-50`}
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
