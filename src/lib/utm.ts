import type { UtmParams } from "@/types/lead";

const STORAGE_KEY = "kvarta_utm_attribution";

export function captureUtmParams(): void {
  if (typeof window === "undefined" || !window.sessionStorage) return;

  try {
    const existing = window.sessionStorage.getItem(STORAGE_KEY);
    const url = new URL(window.location.href);
    const params = url.searchParams;

    const utmSource = params.get("utm_source");
    const utmMedium = params.get("utm_medium");
    const utmCampaign = params.get("utm_campaign");
    const utmContent = params.get("utm_content");
    const utmTerm = params.get("utm_term");

    const hasUtmInUrl = Boolean(utmSource || utmMedium || utmCampaign || utmContent || utmTerm);
    if (existing && !hasUtmInUrl) return;

    const captured: UtmParams = {
      utm_source: utmSource || undefined,
      utm_medium: utmMedium || undefined,
      utm_campaign: utmCampaign || undefined,
      utm_content: utmContent || undefined,
      utm_term: utmTerm || undefined,
      referrer: document.referrer || undefined,
      page_url: window.location.href,
    };

    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(captured));
  } catch {}
}

export function getStoredUtmParams(): UtmParams | undefined {
  if (typeof window === "undefined" || !window.sessionStorage) return undefined;

  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return undefined;
    return JSON.parse(raw) as UtmParams;
  } catch {
    return undefined;
  }
}
