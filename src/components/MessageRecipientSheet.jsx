import Icon from "./Icon";
import avatar from "../assets/avatar.png";

const recipients = [
  { id: "new", name: "New Chat", icon: "plus" },
  { id: "jane", name: "Jane Doe", image: avatar },
];

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
          {recipients.map((recipient) => (
            <button
              className="grid w-[82px] shrink-0 justify-items-center gap-3 text-center text-[13px] font-semibold leading-tight text-[var(--text)]"
              key={recipient.id}
              onClick={() => onSelect?.(recipient)}
              type="button"
            >
              {recipient.image ? (
                <img className="h-[66px] w-[66px] rounded-full object-cover" src={recipient.image} alt="" />
              ) : (
                <span className="grid h-[66px] w-[66px] place-items-center rounded-full bg-[var(--surface-muted)] text-[var(--text)]">
                  <Icon name={recipient.icon} size={38} stroke={2} />
                </span>
              )}
              <span className="line-clamp-2 whitespace-pre-line">{recipient.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
