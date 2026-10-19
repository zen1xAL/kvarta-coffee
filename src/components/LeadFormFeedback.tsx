import { ROASTERY } from "@/data/coffee";
import { UI } from "@/styles/ui";

interface Props {
  status: "idle" | "success" | "duplicate" | "error";
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
          Напрямую:{" "}
          <a
            href={`tel:${ROASTERY.contacts.phone.replace(/[^\d+]/g, "")}`}
            className="text-caramel underline"
          >
            {ROASTERY.contacts.phone}
          </a>{" "}
          или{" "}
          <a
            href={`https://t.me/${ROASTERY.contacts.telegram.replace("@", "")}`}
            target="_blank"
            rel="noreferrer"
            className="text-caramel underline"
          >
            Telegram
          </a>
        </p>
      </div>
    );
  }

  return null;
}
