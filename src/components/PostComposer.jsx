import { useState } from "react";
import Icon from "./Icon";

function AttachmentPreview({ attachment }) {
  if (!attachment) return null;

  return (
    <div className="mt-7 flex overflow-hidden rounded-[18px] bg-white shadow-[0_8px_24px_rgba(15,23,42,0.12)]">
      <div className="h-[104px] w-[116px] shrink-0 overflow-hidden bg-[var(--surface-muted)]">
        <img className="h-full w-full object-cover" src={attachment.image} alt={attachment.alt} />
      </div>
      <div className="flex min-w-0 flex-1 flex-col justify-center px-5">
        <h2 className="truncate text-[16px] font-black tracking-normal text-[var(--text)]">{attachment.title}</h2>
        <p className="mt-4 text-[11px] font-bold uppercase tracking-wide text-[var(--text-secondary)]">{attachment.source}</p>
      </div>
    </div>
  );
}

function PostingAs({ account }) {
  if (!account) return null;

  return (
    <div className="between border-b border-[var(--border)] bg-white px-6 py-4">
      <div className="row min-w-0 gap-3">
        <div className="grid h-9 w-9 shrink-0 place-items-center overflow-hidden rounded-md bg-[var(--surface-muted)]">
          {account.image ? (
            <img className="h-full w-full object-cover" src={account.image} alt="" />
          ) : (
            <Icon name="users" size="md" />
          )}
        </div>
        <div className="min-w-0">
          <p className="text-[13px] font-semibold text-[var(--text-secondary)]">Posting as</p>
          <p className="truncate text-[16px] font-semibold text-[var(--text)]">{account.name}</p>
        </div>
      </div>
      <button className="shrink-0 text-[13px] font-semibold text-[var(--primary)]" onClick={account.onChange} type="button">
        Change
      </button>
    </div>
  );
}

export default function PostComposer({
  initialStep = 0,
  headerTitle,
  postingAs,
  attachment,
  onClose,
  onPublish,
}) {
  const [step, setStep] = useState(initialStep);
  const [allowComments, setAllowComments] = useState(true);
  const isCompose = step === 0;

  function handleClose() {
    if (isCompose && initialStep === 0) {
      onClose?.();
      return;
    }

    if (step > 0 && initialStep === 0) {
      setStep(0);
      return;
    }

    onClose?.();
  }

  return (
    <main className="screen flex h-full flex-col bg-white">
      {headerTitle ? (
        <header className="relative border-b border-[var(--border)] bg-white px-5 py-4 shadow-[var(--shadow-header)]">
          <button className="absolute left-5 top-1/2 -translate-y-1/2 text-sm font-semibold" onClick={handleClose} type="button">
            Close
          </button>
          <h1 className="mx-16 truncate text-center text-[18px] font-black tracking-normal">{headerTitle}</h1>
          <button
            className="absolute right-5 top-1/2 -translate-y-1/2 text-sm font-semibold text-[var(--text-tertiary)]"
            onClick={isCompose ? () => setStep(1) : onPublish}
            type="button"
          >
            Publish
          </button>
        </header>
      ) : (
        <header className="between border-b border-[var(--border)] bg-white px-5 py-4 shadow-[var(--shadow-header)]">
          <button className="text-sm font-semibold" onClick={handleClose} type="button">
            Close
          </button>
          <button
            className="text-sm font-semibold text-[var(--text-secondary)]"
            onClick={isCompose ? () => setStep(1) : onPublish}
            type="button"
          >
            Publish
          </button>
        </header>
      )}

      <PostingAs account={postingAs} />

      <section className="flex-1 px-6 py-8">
        {isCompose ? (
          <div className="flex h-full flex-col">
            <textarea
              className="min-h-[420px] flex-1 resize-none border-0 bg-transparent text-[20px] font-medium outline-none placeholder:text-[var(--text-tertiary)]"
              defaultValue="What’s going on?"
            />
          </div>
        ) : (
          <div className="stack">
            <input
              className="w-full border-0 bg-transparent text-[22px] font-bold outline-none placeholder:text-[var(--text-secondary)]"
              defaultValue="Add a Title (Optional)"
            />
            <textarea
              className={`${attachment ? "min-h-[210px]" : "min-h-[360px]"} w-full resize-none border-0 bg-transparent text-[18px] font-medium outline-none placeholder:text-[var(--text-tertiary)]`}
              defaultValue="What’s going on?"
            />
            <AttachmentPreview attachment={attachment} />
          </div>
        )}
      </section>

      <footer className="between border-t border-[var(--border)] bg-white px-6 py-5 shadow-[var(--shadow-navbar)]">
        <button
          className={`row text-sm font-semibold ${allowComments ? "text-[var(--text)]" : "text-[var(--text-secondary)]"}`}
          onClick={() => setAllowComments((current) => !current)}
          type="button"
        >
          <span
            className={`grid h-5 w-5 place-items-center rounded-md border ${
              allowComments
                ? "border-[var(--text)] bg-[var(--text)] text-white"
                : "border-[var(--border)] bg-white text-transparent"
            }`}
          >
            <Icon name="check" size="xs" stroke={2} />
          </span>
          Allow Comments
        </button>
        <div className="row text-[var(--text)]">
          <button
            className="grid h-8 w-8 place-items-center"
            onClick={() => setStep(1)}
            type="button"
            aria-label="Open post details"
          >
            <Icon name="list" size="lg" />
          </button>
          <button className="grid h-8 w-8 place-items-center" type="button" aria-label="Add media">
            <Icon name="media" size="lg" />
          </button>
        </div>
      </footer>
    </main>
  );
}
