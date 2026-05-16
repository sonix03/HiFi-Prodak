import { useState } from "react";
import Icon from "../components/Icon";

export default function CreatePost({ onNavigate, initialStep = 0 }) {
  const [step, setStep] = useState(initialStep);
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
            <div className="rounded-2xl bg-[var(--surface-muted)] p-4">
              <p className="meta">Audience</p>
              <p className="mt-1 text-sm font-semibold">Followers, comments allowed</p>
            </div>
          </div>
        )}
      </section>

      <footer className="between border-t border-[var(--border)] bg-white px-6 py-5 shadow-[var(--shadow-navbar)]">
        <button className="row text-sm font-medium text-[var(--text-secondary)]"><Icon name="check" size="md" />Allow Comments</button>
        <div className="row text-[var(--text)]">
          <Icon name="list" size="lg" />
          <Icon name="media" size="lg" />
        </div>
      </footer>
    </main>
  );
}
