"use client";

import { useLeadForm } from "@/lib/use-lead-form";
import { LeadFormNote } from "./LeadFormNote";
import { LeadFormFeedback } from "./LeadFormFeedback";
import { LeadFormSuccess } from "./LeadFormSuccess";
import { Reveal } from "./Reveal";
import { INTERESTS, FORM_CONFIG } from "@/constants/lead-form";
import { UI } from "@/styles/ui";

export function LeadFormSection() {
  const form = useLeadForm();
  const config = FORM_CONFIG[form.interest] ?? FORM_CONFIG["разовый заказ"];

  return (
    <section id="lead-form" className={UI.section.dark}>
      <div className={UI.container}>
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal delay={0} className="lg:col-span-5">
            <LeadFormNote />
          </Reveal>

          <Reveal delay={100} className="lg:col-span-7">
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
                      className={`rounded-[4px] border px-4 py-2.5 font-sans text-[13px] font-medium transition-all duration-200 active:scale-[0.98] ${
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
                    placeholder={config.placeholder}
                    className="w-full rounded-[4px] border border-[#333333] bg-[#262626] px-4 py-3 font-sans text-[15px] text-[#ffffff] placeholder-[#808080] transition-colors focus:border-white/50 focus:outline-none"
                  />
                </div>

                <LeadFormFeedback status={form.status} errorMsg={form.errorMsg} />

                <button
                  type="submit"
                  disabled={form.submitting}
                  className="w-full rounded-[4px] bg-[#f6f7f2] py-3.5 font-sans text-[14px] font-medium text-[#0e1311] transition-all duration-200 hover:bg-[#ffffff] active:scale-[0.98] disabled:opacity-50"
                >
                  {form.submitting ? "Отправка..." : config.buttonText}
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
