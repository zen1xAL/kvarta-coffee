"use client";

import { useLeadForm } from "@/lib/use-lead-form";
import { LeadFormFeedback } from "./LeadFormFeedback";
import type { LeadInterest } from "@/types/lead";

const INTERESTS: LeadInterest[] = ["подписка", "разовый заказ", "вопрос"];

export function LeadFormSection() {
  const form = useLeadForm();

  return (
    <section id="lead-form" className="border-b border-charcoal bg-roast py-20 text-cream sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <h2 className="font-serif text-3xl font-medium tracking-tight text-cream sm:text-5xl">
          Оформить заказ или задать вопрос
        </h2>
        <p className="mt-3 text-base text-cream-dim sm:text-lg">
          Свяжемся с вами в течение 15 минут в рабочее время для подтверждения.
        </p>

        {form.status === "success" ? (
          <div className="mt-10 rounded-panel border border-line-strong bg-bean p-8">
            <h3 className="font-serif text-2xl text-crema">Спасибо, заявка принята!</h3>
            <p className="mt-2 text-soft">
              Мы уже получили ваш заказ и свяжемся с вами в ближайшее время.
            </p>
            <button
              onClick={() => form.setStatus("idle")}
              className="mt-6 text-sm text-caramel underline"
            >
              Отправить еще одну заявку
            </button>
          </div>
        ) : (
          <form onSubmit={form.handleSubmit} className="mt-10 space-y-6">
            <div className="flex flex-wrap gap-2.5">
              {INTERESTS.map((item) => (
                <button
                  type="button"
                  key={item}
                  onClick={() => form.setInterest(item)}
                  className={`rounded-control border px-4 py-3 text-sm font-semibold capitalize transition-colors ${
                    form.interest === item
                      ? "border-crema bg-crema text-ink"
                      : "border-line-strong bg-transparent text-cream hover:border-crema"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <div>
              <input
                type="text"
                value={form.name}
                onChange={(e) => form.setName(e.target.value)}
                placeholder="Ваше имя"
                className="w-full rounded-pill border border-[#8a5c3c] bg-bean px-5 py-3.5 text-cream placeholder-[#bfa58a] focus:border-caramel focus:outline-none"
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
                className="w-full rounded-pill border border-[#8a5c3c] bg-bean px-5 py-3.5 text-cream placeholder-[#bfa58a] focus:border-caramel focus:outline-none"
              />
              <p className="mt-1.5 text-xs text-soft">Коды операторов РБ: 25, 29, 33, 44</p>
              {form.errors.phone && (
                <p className="mt-1.5 text-xs text-caramel">{form.errors.phone}</p>
              )}
            </div>

            <textarea
              rows={3}
              value={form.comment}
              onChange={(e) => form.setComment(e.target.value)}
              placeholder="Комментарий (сорт кофе, способ заваривания или пожелания)"
              className="w-full rounded-control border border-[#8a5c3c] bg-bean px-5 py-3.5 text-cream placeholder-[#bfa58a] focus:border-caramel focus:outline-none"
            />

            <LeadFormFeedback status={form.status} errorMsg={form.errorMsg} />

            <button
              type="submit"
              disabled={form.submitting}
              className="w-full rounded-pill bg-crema py-4 text-base font-semibold text-ink transition-colors hover:bg-caramel disabled:opacity-50"
            >
              {form.submitting ? "Отправка..." : "Отправить заявку"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
