import { ROASTERY } from "@/data/coffee";

interface Props {
  status: "idle" | "success" | "duplicate" | "error";
  errorMsg: string;
}

export function LeadFormFeedback({ status, errorMsg }: Props) {
  if (status === "duplicate") {
    return (
      <div className="rounded-control border border-caramel bg-bean p-4 text-sm text-soft">
        {errorMsg}
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="rounded-control border border-caramel bg-bean p-4 text-sm text-soft">
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
