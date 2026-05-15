import { ArrowLeft, Bell, MoreHorizontal, Search, Settings, Share2 } from "lucide-react";

const iconMap = { bell: Bell, search: Search, settings: Settings, share: Share2, more: MoreHorizontal };

export default function Header({ title, eyebrow, onBack, right = "bell", transparent = false }) {
  const RightIcon = typeof right === "string" ? iconMap[right] : right;

  return (
    <header className={`between ${transparent ? "" : "mb-5"}`}>
      <div className="row min-w-0">
        {onBack ? (
          <button className="icon-btn" onClick={onBack} aria-label="Back">
            <ArrowLeft size={19} />
          </button>
        ) : null}
        <div className="min-w-0">
          {eyebrow ? <p className="meta mb-1 uppercase tracking-[0.14em] text-[var(--primary)]">{eyebrow}</p> : null}
          <h1 className="title truncate">{title}</h1>
        </div>
      </div>
      {RightIcon ? (
        <button className="icon-btn" aria-label="Screen action">
          <RightIcon size={19} />
        </button>
      ) : null}
    </header>
  );
}
