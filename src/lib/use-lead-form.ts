import { useEffect, useState } from "react";
import { formatBelarusPhoneInput } from "./phone-format";
import { captureUtmParams, getStoredUtmParams } from "./utm";
import { HTTP_STATUS, LEAD_STATUS } from "@/constants/http";
import type { LeadInterest, LeadFormStatus } from "@/types/lead";

export function useLeadForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [interest, setInterest] = useState<LeadInterest>("разовый заказ");
  const [comment, setComment] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<LeadFormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    captureUtmParams();
    const onClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement).closest<HTMLElement>("[data-lead-interest]");
      if (!el) return;
      const targetInterest = el.getAttribute("data-lead-interest") as LeadInterest;
      const targetComment = el.getAttribute("data-lead-comment");
      if (targetInterest) setInterest(targetInterest);
      if (targetComment) setComment(targetComment);
      setStatus("idle");
    };
    document.addEventListener("click", onClick, { passive: true });
    return () => document.removeEventListener("click", onClick);
  }, []);

  const handlePhoneChange = (val: string) => setPhone(formatBelarusPhoneInput(val));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrors({});
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, interest, comment, utm: getStoredUtmParams() }),
      });
      const data = await res.json();
      if (res.status === HTTP_STATUS.CREATED) setStatus("success");
      else if (data.status === LEAD_STATUS.DUPLICATE) {
        setStatus("duplicate");
        setErrorMsg(data.message);
      } else {
        setStatus("error");
        setErrors(data.errors || {});
        setErrorMsg(data.message || "Пожалуйста, проверьте данные формы");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Сбой сети. Позвоните нам или напишите в Telegram");
    } finally {
      setSubmitting(false);
    }
  };

  return {
    name,
    setName,
    phone,
    handlePhoneChange,
    interest,
    setInterest,
    comment,
    setComment,
    submitting,
    status,
    setStatus,
    errorMsg,
    errors,
    handleSubmit,
  };
}
