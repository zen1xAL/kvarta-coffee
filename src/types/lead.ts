export interface UtmParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  referrer?: string;
  page_url?: string;
}

export interface LeadPayload {
  name: unknown;
  phone: unknown;
  interest: unknown;
  comment?: unknown;
  utm?: unknown;
}

export type LeadInterest = "подписка" | "разовый заказ" | "вопрос";
export type LeadFormStatus = "idle" | "success" | "duplicate" | "error";

export interface ValidatedLead {
  name: string;
  phone: string;
  normalizedPhone: string;
  interest: LeadInterest;
  comment: string;
  utm?: UtmParams;
}

export type ValidationResult<T> =
  | { success: true; data: T; errors?: never }
  | { success: false; errors: Record<string, string>; data?: never };

export type PhoneValidationResult =
  | { valid: true; normalized: string; error?: never }
  | { valid: false; error: string; normalized?: never };
