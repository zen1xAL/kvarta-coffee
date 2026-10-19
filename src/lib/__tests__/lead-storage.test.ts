import { beforeEach, describe, expect, it } from "vitest";
import { clearStoredLeads, getStoredLeads, isRecentDuplicate, saveLead } from "../lead-storage";
import type { ValidatedLead } from "../validation";

describe("Lead storage and 10-minute deduplication", () => {
  beforeEach(() => {
    clearStoredLeads();
  });

  const baseLead: ValidatedLead = {
    name: "Дмитрий",
    phone: "+375 29 123-45-67",
    normalizedPhone: "+375291234567",
    interest: "подписка",
    comment: "Для воронки",
  };

  it("saves a valid lead and persists it", () => {
    const result = saveLead(baseLead);
    expect(result.success).toBe(true);
    expect(result.lead?.id).toBeDefined();
    expect(result.lead?.createdAt).toBeDefined();

    const stored = getStoredLeads();
    expect(stored).toHaveLength(1);
    expect(stored[0].normalizedPhone).toBe("+375291234567");
  });

  it("blocks duplicate leads within 10 minutes for the same phone", () => {
    const baseTime = 1_700_000_000_000;
    const first = saveLead(baseLead, { now: baseTime });
    expect(first.success).toBe(true);

    const dupLead: ValidatedLead = {
      ...baseLead,
      phone: "80291234567",
      normalizedPhone: "+375291234567",
      comment: "Повторная отправка",
    };

    const second = saveLead(dupLead, { now: baseTime + 5 * 60 * 1000 });
    expect(second.success).toBe(false);
    expect(second.duplicate).toBe(true);
    expect(second.error).toContain("10 минут");
    expect(getStoredLeads()).toHaveLength(1);
  });

  it("allows submitting after the 10-minute window expires", () => {
    const baseTime = 1_700_000_000_000;
    saveLead(baseLead, { now: baseTime });

    const laterTime = baseTime + 10 * 60 * 1000 + 1000;
    const second = saveLead(baseLead, { now: laterTime });
    expect(second.success).toBe(true);
    expect(getStoredLeads()).toHaveLength(2);
  });

  it("allows different phone numbers within the 10-minute window", () => {
    const baseTime = 1_700_000_000_000;
    saveLead(baseLead, { now: baseTime });

    const otherLead: ValidatedLead = {
      name: "Аня",
      phone: "+375 44 987-65-43",
      normalizedPhone: "+375449876543",
      interest: "разовый заказ",
      comment: "Зерно в зернах",
    };

    const second = saveLead(otherLead, { now: baseTime + 1000 });
    expect(second.success).toBe(true);
    expect(getStoredLeads()).toHaveLength(2);
  });

  it("correctly identifies recent duplicates via isRecentDuplicate", () => {
    const now = 1_700_000_000_000;
    expect(isRecentDuplicate("+375291234567", undefined, now)).toBe(false);
    saveLead(baseLead, { now });
    expect(isRecentDuplicate("+375291234567", undefined, now + 1000)).toBe(true);
  });
});
