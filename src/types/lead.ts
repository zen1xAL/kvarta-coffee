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

export interface ValidatedLead {
  name: string;
  phone: string;
  normalizedPhone: string;
  interest: LeadInterest;
  comment: string;
  utm?: UtmParams;
}

export interface ValidationResult<T> {
  success: boolean;
  data?: T;
  errors?: Record<string, string>;
}

export interface PhoneValidationResult {
  valid: boolean;
  normalized?: string;
  error?: string;
}
