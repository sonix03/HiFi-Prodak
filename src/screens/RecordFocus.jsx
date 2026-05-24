import { useEffect, useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowShrink02Icon, PauseIcon, PlayIcon, RacingFlagIcon } from "@hugeicons/core-free-icons";

const focusSegmentsByPhase = {
  running: [
    { label: "Focus", value: 52, color: "var(--blue)" },
    { label: "Device", value: 58, color: "var(--blue)" },
    { label: "Output", value: 88, color: "var(--yellow)" },
    { label: "Context", value: 76, color: "var(--yellow)" },
  ],
  stopped: [
    { label: "Focus", value: 46, color: "var(--blue)" },
    { label: "Device", value: 42, color: "var(--blue)" },
    { label: "Output", value: 78, color: "var(--yellow)" },
    { label: "Context", value: 86, color: "var(--yellow)" },
  ],
};

export default function RecordFocus({ initialPhase = "running", workType = "Work", onNavigate }) {
  const [phase, setPhase] = useState(initialPhase === "stopped" ? "stopped" : "running");
  const [liveSharing, setLiveSharing] = useState(false);
  const [elapsedSeconds, setElapsedSeconds] = useState(18);
  const [workingSeconds, setWorkingSeconds] = useState(13);
  const isStopped = phase === "stopped";
  const focusSegments = focusSegmentsByPhase[phase];

  useEffect(() => {
    const timer = setInterval(() => {
      setElapsedSeconds((current) => current + 1);
      if (!isStopped) {
        setWorkingSeconds((current) => current + 1);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [isStopped]);

  const returnToRecord = () => {
    onNavigate?.("record", {
      initialRunning: !isStopped,
      initialPlaying: isStopped,
      initialWorkType: workType,
    });
  };

  return (
    <main className="screen relative h-full overflow-hidden bg-white">
      <div className="flex h-full flex-col overflow-y-auto px-6 pb-[210px] pt-10">
        <header className="relative flex h-12 shrink-0 items-center justify-center">
          <button
            className="absolute right-0 grid h-11 w-11 place-items-center text-[var(--text)]"
            onClick={returnToRecord}
            type="button"
            aria-label="Minimize focus view"
          >
            <HugeiconsIcon icon={ArrowShrink02Icon} size={24} color="currentColor" strokeWidth={2} />
          </button>
        </header>

        <section className="mt-2 text-center">
          <p className="text-[82px] font-black leading-none tracking-normal text-[var(--text)]">{formatTime(workingSeconds)}</p>
          <p className="mt-3 text-[18px] font-black text-[var(--text-secondary)]">Working time</p>
        </section>

        <section className="mt-9 border-y border-[var(--divider)]">
          <FocusMetricRow label="Elapsed session time" value={formatTime(elapsedSeconds)} />
          <FocusMetricRow label="Connected devices" value="3 devices" compact />
          <FocusMetricRow label="Focus score" value="82" tone="text-[var(--blue)]" />
        </section>

        <section className="mt-10">
          <div className="between">
            <div>
              <h1 className="text-[22px] font-black leading-none text-[var(--text)]">Session Quality</h1>
              <p className="mt-2 text-[13px] font-semibold text-[var(--text-secondary)]">Signals from laptop, phone, and browser</p>
            </div>
            <p className="rounded-full bg-[var(--blue-soft)] px-4 py-2 text-[13px] font-black text-[var(--blue)]">Strong</p>
          </div>

          <div className="mt-6 grid h-[132px] grid-cols-4 items-end gap-3 border-b border-[var(--divider)] pb-3">
            {focusSegments.map((segment) => (
              <div className="grid h-full content-end gap-2" key={segment.label}>
                <p className="text-center text-[11px] font-black text-[var(--text-secondary)]">{segment.value}</p>
                <div className="flex h-[88px] items-end overflow-hidden rounded-t-xl bg-[var(--surface-muted)]">
                  <span
                    className="block w-full rounded-t-xl transition-[height] duration-300"
                    style={{ height: `${segment.value}%`, backgroundColor: segment.color }}
                  />
                </div>
                <p className="truncate text-center text-[11px] font-bold text-[var(--text-secondary)]">{segment.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-6 rounded-2xl border border-[var(--border)] bg-[var(--yellow-soft)] px-4 py-3">
          <div className="row items-start gap-3">
            <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[var(--yellow)] text-[var(--text)]">
              <HugeiconsIcon icon={PauseIcon} size={18} color="currentColor" strokeWidth={2} />
            </span>
            <div className="min-w-0">
              <p className="text-[12px] font-black text-[var(--text)]">{isStopped ? "AI suggestion" : "AI suggestion"}</p>
              <p className="mt-1 text-[11px] font-semibold leading-snug text-[var(--text-secondary)]">
                {isStopped ? "Cross-device focus dipped before pause. Resume with one work tab open and keep TikTok closed on your phone." : "Laptop output is strong, but phone switches are reducing focus depth. Keep TikTok closed and stay in one work app until the next break."}
              </p>
            </div>
          </div>
        </section>
      </div>

      <section className="absolute inset-x-0 bottom-0 min-h-[160px] rounded-t-[22px] bg-white px-7 pb-4 pt-4 shadow-[0_-18px_42px_rgba(15,23,42,0.16)]">
        <div className="mx-auto mb-7 h-1.5 w-16 rounded-full bg-black/20" />
        {isStopped ? (
          <div>
            <div className="grid grid-cols-2 gap-5 pb-2">
              <button className="row justify-center rounded-full bg-[var(--blue)] px-4 py-3 text-white shadow-[0_12px_24px_rgba(37,99,235,0.3)]" onClick={() => setPhase("running")} type="button">
                <HugeiconsIcon icon={PlayIcon} size={24} color="currentColor" strokeWidth={2} />
                <span className="text-base font-extrabold">Resume</span>
              </button>
              <button className="row justify-center rounded-full bg-black px-4 py-3 text-white shadow-[0_12px_24px_rgba(15,23,42,0.26)]" onClick={() => onNavigate?.("saveActivity")} type="button">
                <HugeiconsIcon icon={RacingFlagIcon} size={24} color="currentColor" strokeWidth={2} />
                <span className="text-base font-extrabold">Finish</span>
              </button>
            </div>
            <LiveSharingToggle enabled={liveSharing} onToggle={() => setLiveSharing((prev) => !prev)} />
          </div>
        ) : (
          <div>
            <div className="pb-2">
              <button className="row w-full justify-center rounded-full bg-[var(--blue)] px-4 py-3 text-white shadow-[0_12px_24px_rgba(37,99,235,0.3)]" onClick={() => setPhase("stopped")} type="button">
                <HugeiconsIcon icon={PauseIcon} size={24} color="currentColor" strokeWidth={2} />
                <span className="text-base font-extrabold">Pause</span>
              </button>
            </div>
            <LiveSharingToggle enabled={liveSharing} onToggle={() => setLiveSharing((prev) => !prev)} />
          </div>
        )}
      </section>
    </main>
  );
}

function LiveSharingToggle({ enabled, onToggle }) {
  return (
    <div className="between mt-4">
      <span className="text-sm font-semibold text-[var(--text-secondary)]">Live Sharing</span>
      <button
        className={`relative h-7 w-12 rounded-full transition-colors ${enabled ? "bg-[var(--blue)]" : "bg-[var(--border)]"}`}
        onClick={onToggle}
        type="button"
        aria-label="Toggle live sharing"
      >
        <span className={`absolute left-0.5 top-0.5 h-6 w-6 rounded-full bg-white shadow transition-transform ${enabled ? "translate-x-5" : "translate-x-0"}`} />
      </button>
    </div>
  );
}

function FocusMetricRow({ label, value, tone = "text-[var(--text)]", compact = false }) {
  return (
    <div className="flex min-h-12 items-center justify-between gap-4 border-b border-[var(--divider)] py-3 last:border-b-0">
      <div className="min-w-0">
        <p className="text-[13px] font-bold text-[var(--text)]">{label}</p>
      </div>
      <p className={`shrink-0 truncate font-black leading-none ${compact ? "text-[15px]" : "text-[24px]"} ${tone}`}>{value}</p>
    </div>
  );
}

function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60).toString().padStart(2, "0");
  const seconds = (totalSeconds % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
}
