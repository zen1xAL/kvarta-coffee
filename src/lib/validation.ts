import type {
  LeadInterest,
  LeadPayload,
  PhoneValidationResult,
  UtmParams,
  ValidatedLead,
  ValidationResult,
} from "@/types/lead";

export type {
  LeadInterest,
  LeadPayload,
  PhoneValidationResult,
  UtmParams,
  ValidatedLead,
  ValidationResult,
};

const VALID_OPERATORS = new Set(["25", "29", "33", "44"]);
const UTM_KEYS: (keyof UtmParams)[] = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "referrer",
  "page_url",
];
const INTEREST_MAP: Record<string, LeadInterest> = {
  subscription: "подписка",
  "one-time": "разовый заказ",
  question: "вопрос",
  подписка: "подписка",
  "разовый заказ": "разовый заказ",
  вопрос: "вопрос",
};

export function normalizeBelarusPhone(raw: string): string {
  const digits = raw.replace(/\D/g, "");
  if (digits.startsWith("80") && digits.length === 11) return `+375${digits.slice(2)}`;
  if (digits.length === 9 && VALID_OPERATORS.has(digits.slice(0, 2))) return `+375${digits}`;
  return `+${digits}`;
}

export function validateBelarusPhone(raw: unknown): PhoneValidationResult {
  if (typeof raw !== "string" || !raw.trim())
    return { valid: false, error: "Укажите номер телефона" };
  if (/[^\d\s+\-()]/.test(raw))
    return { valid: false, error: "Номер содержит недопустимые символы" };

  const digits = raw.replace(/\D/g, "");
  let norm = digits;
  if (digits.startsWith("80") && digits.length === 11) norm = `375${digits.slice(2)}`;
  else if (digits.length === 9 && VALID_OPERATORS.has(digits.slice(0, 2))) norm = `375${digits}`;

  if (!norm.startsWith("375"))
    return { valid: false, error: "Поддерживаются только номера Беларуси (+375)" };
  if (norm.length !== 12)
    return { valid: false, error: "Номер должен содержать 9 цифр после кода +375" };
  if (!VALID_OPERATORS.has(norm.slice(3, 5))) {
    return { valid: false, error: "Неверный код оператора. Допустимы только 25, 29, 33, 44" };
  }
  return { valid: true, normalized: `+${norm}` };
}

function sanitizeUtm(raw: unknown): UtmParams | undefined {
  if (!raw || typeof raw !== "object") return undefined;
  const utm = raw as Record<string, unknown>;
  const res: UtmParams = {};
  for (const k of UTM_KEYS) {
    if (typeof utm[k] === "string" && utm[k].trim()) res[k] = utm[k].trim().slice(0, 200);
  }
  return Object.keys(res).length > 0 ? res : undefined;
}

export function validateLeadPayload(payload: unknown): ValidationResult<ValidatedLead> {
  if (!payload || typeof payload !== "object") {
    return { success: false, errors: { form: "Некорректные данные формы" } };
  }
  const data = payload as LeadPayload;
  const errors: Record<string, string> = {};

  const name = typeof data.name === "string" ? data.name.trim() : "";
  if (!name) errors.name = "Укажите ваше имя";
  else if (name.length < 2) errors.name = "Имя должно содержать не менее 2 символов";
  else if (name.length > 60) errors.name = "Имя не должно превышать 60 символов";

  const phoneRes = validateBelarusPhone(data.phone);
  if (!phoneRes.valid || !phoneRes.normalized)
    errors.phone = phoneRes.error ?? "Некорректный номер телефона";

  const interestKey = typeof data.interest === "string" ? data.interest.trim().toLowerCase() : "";
  const mapped = INTEREST_MAP[interestKey];
  if (!mapped) errors.interest = "Выберите вариант: подписка, разовый заказ или вопрос";

  const comment = typeof data.comment === "string" ? data.comment.trim() : "";
  if (comment.length > 1000) errors.comment = "Комментарий не должен превышать 1000 символов";

  if (Object.keys(errors).length > 0) return { success: false, errors };

  return {
    success: true,
    data: {
      name,
      phone: String(data.phone).trim(),
      normalizedPhone: phoneRes.normalized!,
      interest: mapped,
      comment,
      utm: sanitizeUtm(data.utm),
    },
  };
}
