import { useEffect } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { CheckmarkCircle01Icon } from "@hugeicons/core-free-icons";

export default function ActivitySavedSplash({ activity, onNavigate }) {
  useEffect(() => {
    const timer = setTimeout(() => onNavigate?.("feed"), 3000);
    return () => clearTimeout(timer);
  }, [onNavigate]);

  return (
    <main className="screen flex flex-col items-center justify-center bg-white px-8">
      <span className="text-[var(--success)]">
        <HugeiconsIcon icon={CheckmarkCircle01Icon} size={96} strokeWidth={1.5} />
      </span>

      <h1 className="mt-8 text-[28px] font-black tracking-tight text-[var(--text)]">Activity Saved!</h1>

      <div className="mt-10 grid w-full max-w-[280px] grid-cols-3 gap-4 rounded-[20px] bg-[var(--surface-muted)] px-4 py-5">
        <div className="text-center">
          <p className="text-[22px] font-black text-[var(--text)]">{activity.duration}</p>
          <p className="mt-1 text-[11px] font-semibold text-[var(--text-secondary)]">Duration</p>
        </div>
        <div className="text-center">
          <p className="text-[22px] font-black text-[var(--text)]">{activity.focusScore}</p>
          <p className="mt-1 text-[11px] font-semibold text-[var(--text-secondary)]">Score</p>
        </div>
        <div className="text-center">
          <p className="text-[22px] font-black text-[var(--text)]">{activity.output}</p>
          <p className="mt-1 text-[11px] font-semibold text-[var(--text-secondary)]">Steps</p>
        </div>
      </div>

      <button
        className="mt-10 w-full max-w-[320px] rounded-full bg-[var(--primary)] py-4 text-[16px] font-black text-white shadow-[0_12px_24px_rgba(37,99,235,0.3)]"
        onClick={() => onNavigate?.("feed")}
        type="button"
      >
        View Activity
      </button>
    </main>
  );
}
