import { useEffect, useRef, useState } from "react";
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
  const [highlightComment, setHighlightComment] = useState(false);
  const highlightTimerRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    captureUtmParams();
    const onClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement).closest<HTMLElement>(
        "[data-lead-interest], [data-select-coffee], [data-select-interest]",
      );
      if (!el) return;
      e.preventDefault();

      const targetInterest = (el.getAttribute("data-lead-interest") ||
        el.getAttribute("data-select-interest")) as LeadInterest | null;
      const targetComment =
        el.getAttribute("data-lead-comment") || el.getAttribute("data-select-coffee");

      if (targetInterest) setInterest(targetInterest);
      if (targetComment) setComment(targetComment);
      setStatus("idle");

      const targetForm = document.getElementById("lead-form");
      if (targetForm) {
        targetForm.scrollIntoView({ behavior: "smooth", block: "start" });
      }

      setHighlightComment(true);
      window.clearTimeout(highlightTimerRef.current);
      highlightTimerRef.current = window.setTimeout(() => {
        setHighlightComment(false);
      }, 900);
    };

    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("click", onClick);
      window.clearTimeout(highlightTimerRef.current);
    };
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
    highlightComment,
  };
}
