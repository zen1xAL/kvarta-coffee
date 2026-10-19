import { beforeEach, describe, expect, it } from "vitest";
import { captureUtmParams, getStoredUtmParams } from "../utm";

describe("UTM capture and retrieval", () => {
  beforeEach(() => {
    const storage: Record<string, string> = {};
    (global as unknown as { window: unknown }).window = {
      sessionStorage: {
        getItem: (k: string) => storage[k] || null,
        setItem: (k: string, v: string) => {
          storage[k] = v;
        },
      },
      location: {
        href: "https://kvarta-coffee.by/?utm_source=instagram&utm_medium=cpc&utm_campaign=spring2026",
      },
    };
    (global as unknown as { document: unknown }).document = {
      referrer: "https://instagram.com/",
    };
  });

  it("captures UTM parameters and referrer from URL", () => {
    captureUtmParams();
    const stored = getStoredUtmParams();
    expect(stored).toBeDefined();
    expect(stored?.utm_source).toBe("instagram");
    expect(stored?.utm_medium).toBe("cpc");
    expect(stored?.utm_campaign).toBe("spring2026");
    expect(stored?.referrer).toBe("https://instagram.com/");
  });
});
