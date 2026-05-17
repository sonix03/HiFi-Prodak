import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft01Icon, SentIcon } from "@hugeicons/core-free-icons";
import Icon from "../components/Icon";
import avatar from "../assets/avatar.png";
import landscapeItb from "../assets/landscape-itb.png";
import { messageThreads } from "../constants/data";

function SharedActivityBubble({ thread }) {
  return (
    <div className="ml-auto w-[272px] overflow-hidden rounded-[12px] bg-[var(--text)] text-white">
      <div className="p-4">
        <div className="row gap-3">
          <img className="h-9 w-9 rounded-full object-cover" src={avatar} alt="" />
          <div className="min-w-0">
            <h2 className="truncate text-[13px] font-black tracking-normal">Jane Doe</h2>
            <p className="mt-0.5 text-[12px] font-medium text-white/80">{thread.time === "14.22" ? "17 May 2026 at 14.22" : "Today"}</p>
          </div>
        </div>
        <h3 className="mt-4 text-[18px] font-black tracking-normal">Focus Work</h3>
      </div>
      <div className="h-[150px] overflow-hidden border-y border-white/10 bg-neutral-900">
        <img className="h-full w-full object-cover opacity-55 grayscale" src={landscapeItb} alt="Shared activity preview" />
      </div>
      <p className="px-4 py-3 text-[15px] font-medium">Got it</p>
    </div>
  );
}

function ComposerAttachment({ onRemove }) {
  return (
    <div className="relative rounded-[14px] border border-[var(--border)] bg-white p-4 shadow-[0_1px_4px_rgba(15,23,42,0.05)]">
      <button
        className="absolute right-3 top-3 grid h-7 w-7 place-items-center rounded-full bg-[var(--text-secondary)] text-white"
        onClick={onRemove}
        type="button"
        aria-label="Remove attached activity"
      >
        <Icon name="cancel" size="sm" stroke={2} />
      </button>
      <div className="row gap-3 pr-9">
        <img className="h-9 w-9 rounded-full object-cover" src={avatar} alt="" />
        <div className="min-w-0">
          <h2 className="truncate text-[13px] font-black tracking-normal">Jane Doe</h2>
          <p className="mt-0.5 text-[12px] font-medium text-[var(--text-secondary)]">17 May 2026 at 14.22</p>
        </div>
      </div>
      <h3 className="mt-4 text-[18px] font-black tracking-normal">Focus Work</h3>
    </div>
  );
}

export default function MessageDetail({
  onBack,
  thread = messageThreads[0],
  bottomInset = false,
  backLabel = "Messages",
  composeAttachment = false,
}) {
  return (
    <main className="screen flex h-full flex-col bg-white">
      <header className="relative flex h-[74px] shrink-0 items-center border-b border-[var(--border)] bg-white px-5 shadow-[var(--shadow-header)]">
        <button className="row gap-2 text-[18px] font-medium text-[var(--text)]" onClick={onBack} type="button">
          <HugeiconsIcon icon={ArrowLeft01Icon} size={24} color="currentColor" strokeWidth={2} />
          <span>{backLabel}</span>
        </button>
        <div className="pointer-events-none absolute left-1/2 max-w-[190px] -translate-x-1/2 text-center">
          <h1 className="truncate text-[18px] font-black leading-tight tracking-normal">{thread.name}</h1>
          <p className="mt-0.5 truncate text-[12px] font-medium text-[var(--text-secondary)]">last seen 2 months ago</p>
        </div>
      </header>

      <section className={`flex-1 overflow-y-auto px-4 pt-[335px] ${bottomInset ? "pb-[96px]" : "pb-4"}`}>
        <div className="mb-4 grid justify-items-center">
          <span className="rounded-full bg-[var(--text-secondary)] px-4 py-1 text-[12px] font-black text-white">17 May</span>
        </div>
        <SharedActivityBubble thread={thread} />
        <div className="mt-2 flex justify-end gap-2 pr-1 text-[13px] font-medium text-[var(--text-secondary)]">
          <Icon name="check" size="xs" stroke={2} />
          <span>{thread.time}</span>
        </div>
      </section>

      <footer className={`border-t border-[var(--border)] bg-white px-5 py-4 shadow-[var(--shadow-navbar)] ${bottomInset ? "mb-[84px]" : ""}`}>
        <div className="rounded-[24px] border border-[var(--border)] bg-white p-2 shadow-[0_1px_8px_rgba(15,23,42,0.08)]">
          {composeAttachment ? <ComposerAttachment /> : null}
          <div className="row gap-3">
            <div className="flex h-10 flex-1 items-center rounded-full px-2 text-[15px] font-medium text-[var(--text-secondary)]">
              Send a message
            </div>
            {composeAttachment ? (
              <button
                className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[var(--primary)] text-white"
                type="button"
                aria-label="Send message"
              >
                <HugeiconsIcon icon={SentIcon} size={22} color="currentColor" strokeWidth={2} />
              </button>
            ) : null}
          </div>
        </div>
      </footer>
    </main>
  );
}
