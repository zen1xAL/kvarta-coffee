import { describe, expect, it } from "vitest";
import { normalizeBelarusPhone, validateBelarusPhone, validateLeadPayload } from "../validation";

describe("Belarus phone validation", () => {
  it("accepts valid operator codes (25, 29, 33, 44) in various formats", () => {
    const validCases = [
      { raw: "+375 29 123-45-67", expected: "+375291234567" },
      { raw: "+375 (44) 987 65 43", expected: "+375449876543" },
      { raw: "+375335555555", expected: "+375335555555" },
      { raw: "+375 25 111-22-33", expected: "+375251112233" },
      { raw: "80291234567", expected: "+375291234567" },
      { raw: "8 044 765 43 21", expected: "+375447654321" },
      { raw: "291234567", expected: "+375291234567" },
    ];

    for (const { raw, expected } of validCases) {
      const res = validateBelarusPhone(raw);
      expect(res.valid).toBe(true);
      expect(res.normalized).toBe(expected);
      expect(normalizeBelarusPhone(raw)).toBe(expected);
    }
  });

  it("rejects invalid operator codes and landlines", () => {
    const invalidCodes = [
      "+375 17 123-45-67",
      "+375 16 123-45-67",
      "+375 55 123-45-67",
      "+375 99 123-45-67",
    ];

    for (const phone of invalidCodes) {
      const res = validateBelarusPhone(phone);
      expect(res.valid).toBe(false);
      expect(res.error).toContain("Неверный код оператора");
    }
  });

  it("rejects foreign numbers, invalid length and illegal characters", () => {
    expect(validateBelarusPhone("").valid).toBe(false);
    expect(validateBelarusPhone("   ").valid).toBe(false);
    expect(validateBelarusPhone("+7 999 123-45-67").valid).toBe(false);
    expect(validateBelarusPhone("+375 29 123").valid).toBe(false);
    expect(validateBelarusPhone("+375 29 1234567890").valid).toBe(false);
    expect(validateBelarusPhone("+375 29 abc-45-67").valid).toBe(false);
  });
});

describe("Lead payload validation", () => {
  it("validates valid lead payloads and normalizes interest", () => {
    const payload = {
      name: "Алексей",
      phone: "+375 (29) 123-45-67",
      interest: "subscription",
      comment: "Помол под воронку",
      utm: { utm_source: "instagram", utm_campaign: "coffee_promo" },
    };

    const res = validateLeadPayload(payload);
    expect(res.success).toBe(true);
    expect(res.data?.name).toBe("Алексей");
    expect(res.data?.normalizedPhone).toBe("+375291234567");
    expect(res.data?.interest).toBe("подписка");
    expect(res.data?.utm?.utm_source).toBe("instagram");
  });

  it("returns appropriate errors for missing or invalid fields", () => {
    const res = validateLeadPayload({
      name: "А",
      phone: "+375 17 123-45-67",
      interest: "unknown",
      comment: "a".repeat(1001),
    });

    expect(res.success).toBe(false);
    expect(res.errors?.name).toContain("не менее 2");
    expect(res.errors?.phone).toBeDefined();
    expect(res.errors?.interest).toBeDefined();
    expect(res.errors?.comment).toBeDefined();
  });
});
