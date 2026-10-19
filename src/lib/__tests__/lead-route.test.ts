import { beforeEach, describe, expect, it } from "vitest";
import { GET, POST } from "@/app/api/lead/route";
import { clearStoredLeads } from "@/lib/lead-storage";
import { HTTP_STATUS, LEAD_STATUS } from "@/constants/http";

describe("POST /api/lead endpoint", () => {
  beforeEach(() => {
    clearStoredLeads();
  });

  it("returns 201 for a valid lead submission", async () => {
    const req = new Request("http://localhost/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Екатерина",
        phone: "+375 (29) 111-22-33",
        interest: "подписка",
        comment: "Доставка в офис",
      }),
    });

    const res = await POST(req);
    expect(res.status).toBe(HTTP_STATUS.CREATED);
    const json = await res.json();
    expect(json.success).toBe(true);
    expect(json.status).toBe(LEAD_STATUS.CREATED);
    expect(json.lead.name).toBe("Екатерина");
  });

  it("returns 400 for invalid data", async () => {
    const req = new Request("http://localhost/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "A",
        phone: "+375 17 000-00-00",
        interest: "invalid",
      }),
    });

    const res = await POST(req);
    expect(res.status).toBe(HTTP_STATUS.BAD_REQUEST);
    const json = await res.json();
    expect(json.success).toBe(false);
    expect(json.errors).toBeDefined();
  });

  it("returns 200 with status duplicate within 10 minutes", async () => {
    const payload = {
      name: "Дмитрий",
      phone: "+375 44 765-43-21",
      interest: "разовый заказ",
    };

    const req1 = new Request("http://localhost/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const res1 = await POST(req1);
    expect(res1.status).toBe(HTTP_STATUS.CREATED);

    const req2 = new Request("http://localhost/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const res2 = await POST(req2);
    expect(res2.status).toBe(HTTP_STATUS.OK);
    const json2 = await res2.json();
    expect(json2.status).toBe(LEAD_STATUS.DUPLICATE);
    expect(json2.message).toContain("10 минут");
  });

  it("returns stored leads list on GET", async () => {
    const postReq = new Request("http://localhost/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Анна",
        phone: "+375 (29) 999-88-77",
        interest: "подписка",
      }),
    });
    await POST(postReq);

    const getRes = await GET();
    expect(getRes.status).toBe(HTTP_STATUS.OK);
    const json = await getRes.json();
    expect(json.count).toBe(1);
    expect(json.leads).toHaveLength(1);
    expect(json.leads[0].name).toBe("Анна");
    expect(json.leads[0].normalizedPhone).toBe("+375299998877");
  });
});
