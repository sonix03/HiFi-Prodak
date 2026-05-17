import Icon from "./Icon";
import avatar from "../assets/avatar.png";
import indomieLogo from "../assets/indomie-logo.png";
import landscapeItb from "../assets/landscape-itb.png";

const recipients = [
  { id: "new", name: "New Chat", icon: "plus" },
  { id: "jane", name: "Jane Doe", image: avatar },
];

const postTargets = [
  { id: "followers", name: "Your Followers", icon: "users" },
  { id: "hmif", name: "HMIF ITB Work Club", image: indomieLogo },
  { id: "gajah", name: "Gajah Lulumpatan", image: avatar },
  { id: "deep-work", name: "Deep Work Bandung", image: landscapeItb },
  { id: "code", name: "Code Workers : IATB", icon: "club" },
];

function CircleTarget({ item, rounded = "rounded-[12px]" }) {
  return (
    <button className="grid w-[82px] shrink-0 justify-items-center gap-3 text-center text-[13px] font-semibold leading-tight text-[var(--text)]" type="button">
      {item.image ? (
        <img className={`h-[66px] w-[66px] ${rounded} object-cover`} src={item.image} alt="" />
      ) : (
        <span className="grid h-[66px] w-[66px] place-items-center rounded-full bg-[var(--surface-muted)] text-[var(--text)]">
          <Icon name={item.icon} size={34} stroke={2} />
        </span>
      )}
      <span className="line-clamp-2">{item.name}</span>
    </button>
  );
}

export default function FeedShareSheet({ onClose }) {
  return (
    <div className="absolute inset-0 z-50 flex flex-col justify-end bg-black/12">
      <div className="max-h-[82%] overflow-y-auto rounded-t-[16px] bg-white px-6 pb-9 pt-3 shadow-[0_-10px_30px_rgba(15,23,42,0.12)]">
        <div className="mx-auto h-1.5 w-9 rounded-full bg-[var(--border)]" />

        <div className="between mt-6">
          <h2 className="text-[22px] font-black tracking-normal">Send to</h2>
          <button className="grid h-8 w-8 place-items-center text-[var(--text)]" onClick={onClose} type="button" aria-label="Close feed share">
            <Icon name="cancel" size="lg" stroke={2} />
          </button>
        </div>

        <div className="-mx-2 mt-6 flex gap-6 overflow-x-auto px-2 pb-2">
          {recipients.map((recipient) => (
            <CircleTarget item={recipient} key={recipient.id} rounded="rounded-full" />
          ))}
        </div>

        <h2 className="mt-6 text-[22px] font-black tracking-normal">Post to</h2>
        <div className="-mx-2 mt-6 flex gap-5 overflow-x-auto px-2 pb-7">
          {postTargets.map((target) => (
            <CircleTarget item={target} key={target.id} />
          ))}
        </div>

        <div className="border-t border-[var(--border)] pt-7">
          <div className="flex gap-7">
            <button className="grid w-[82px] justify-items-center gap-3 text-center text-[13px] font-semibold text-[var(--text)]" type="button">
              <span className="grid h-[66px] w-[66px] place-items-center rounded-full bg-[var(--surface-muted)]">
                <Icon name="share" size={34} stroke={2} />
              </span>
              Share To
            </button>
            <button className="grid w-[82px] justify-items-center gap-3 text-center text-[13px] font-semibold text-[var(--text)]" type="button">
              <span className="grid h-[66px] w-[66px] place-items-center rounded-full bg-[var(--surface-muted)]">
                <Icon name="copy" size={34} stroke={2} />
              </span>
              Copy Link
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
