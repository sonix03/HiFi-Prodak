import Icon from "./Icon";
import CircleTarget from "./CircleTarget";
import { messageRecipients } from "../constants/data";

export default function MessageRecipientSheet({ onClose, onSelect }) {
  return (
    <div className="absolute inset-0 z-50 flex flex-col justify-end bg-black/12">
      <div className="rounded-t-[16px] bg-white px-6 pb-7 pt-3 shadow-[0_-10px_30px_rgba(15,23,42,0.12)]">
        <div className="mx-auto h-1.5 w-9 rounded-full bg-[var(--border)]" />
        <div className="between mt-6">
          <h2 className="text-[22px] font-black tracking-normal">Send to</h2>
          <button className="grid h-8 w-8 place-items-center text-[var(--text)]" onClick={onClose} type="button" aria-label="Close message recipients">
            <Icon name="cancel" size="lg" stroke={2} />
          </button>
        </div>

        <div className="-mx-2 mt-6 flex gap-6 overflow-x-auto px-2 pb-2">
          {messageRecipients.map((recipient) => (
            <CircleTarget
              item={recipient}
              key={recipient.id}
              rounded="rounded-full"
              onClick={() => onSelect?.(recipient)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
