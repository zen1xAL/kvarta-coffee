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
      const anchor = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]');
      const selectEl = (e.target as HTMLElement).closest<HTMLElement>(
        "[data-lead-interest], [data-select-coffee], [data-select-interest]",
      );
      if (!anchor && !selectEl) return;

      const href = anchor?.getAttribute("href");
      const targetId = href && href.startsWith("#") ? href.slice(1) : "lead-form";
      const targetElement = targetId ? document.getElementById(targetId) : null;

      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        if (targetId && window.location.hash !== `#${targetId}`) {
          window.history.pushState(null, "", `#${targetId}`);
        }
      }

      if (selectEl) {
        const targetInterest = (selectEl.getAttribute("data-lead-interest") ||
          selectEl.getAttribute("data-select-interest")) as LeadInterest | null;
        const targetComment =
          selectEl.getAttribute("data-lead-comment") || selectEl.getAttribute("data-select-coffee");

        if (targetInterest) setInterest(targetInterest);
        if (targetComment) setComment(targetComment);
        setStatus("idle");

        setHighlightComment(true);
        window.clearTimeout(highlightTimerRef.current);
        highlightTimerRef.current = window.setTimeout(() => {
          setHighlightComment(false);
        }, 900);
      }
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
