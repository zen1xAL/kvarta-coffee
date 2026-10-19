import { ROASTERY } from "@/data/coffee";
import { UI } from "@/styles/ui";
import type { LeadFormStatus } from "@/types/lead";

const NON_DIGIT_PLUS_REGEX = /[^\d+]/g;
const AT_SYMBOL_REGEX = /@/g;

interface Props {
  status: LeadFormStatus;
  errorMsg: string;
}

export function LeadFormFeedback({ status, errorMsg }: Props) {
  if (status === "duplicate") {
    return <div className={UI.field.feedback}>{errorMsg}</div>;
  }

  if (status === "error") {
    return (
      <div className={UI.field.feedback}>
        <p>{errorMsg}</p>
        <p className="mt-2 text-xs">
          Свяжитесь напрямую:{" "}
          <a
            href={`tel:${ROASTERY.contacts.phone.replace(NON_DIGIT_PLUS_REGEX, "")}`}
            className="text-[#f6f7f2] underline"
          >
            {ROASTERY.contacts.phone}
          </a>{" "}
          или{" "}
          <a
            href={`https://t.me/${ROASTERY.contacts.telegram.replace(AT_SYMBOL_REGEX, "")}`}
            target="_blank"
            rel="noreferrer"
            className="text-[#f6f7f2] underline"
          >
            Telegram
          </a>
        </p>
      </div>
    );
  }

  return null;
}
