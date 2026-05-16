import { useState } from "react";
import Icon from "../components/Icon";

export default function CreatePost({ onNavigate, initialStep = 0 }) {
  const [step, setStep] = useState(initialStep);
  const [allowComments, setAllowComments] = useState(true);
  const isCompose = step === 0;

  function goBack() {
    if (isCompose) {
      onNavigate?.("feed");
      return;
    }
    setStep(0);
  }

  return (
    <main className="screen flex h-full flex-col">
      <header className="between border-b border-[var(--border)] bg-white px-5 py-4 shadow-[var(--shadow-header)]">
        <button className="text-sm font-semibold" onClick={goBack}>Close</button>
        <button className="text-sm font-semibold text-[var(--text-secondary)]" onClick={isCompose ? () => setStep(1) : () => onNavigate?.("feed")}>Publish</button>
      </header>

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
              className="min-h-[360px] w-full resize-none border-0 bg-transparent text-[18px] font-medium outline-none placeholder:text-[var(--text-tertiary)]"
              defaultValue="What’s going on?"
            />
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
