import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { PlayIcon, PauseIcon, RacingFlagIcon } from "@hugeicons/core-free-icons";
import Icon from "../components/Icon";
import WorkTypeSheet from "../components/WorkTypeSheet";
import { workTypes as workTypeOptions } from "../constants/workTypes";
import mapPic from "../assets/map-pic.png";

export default function Record({ onNavigate, initialPlaying = false, initialRunning = false }) {
  const [phase, setPhase] = useState(
    initialPlaying ? "stopped" : initialRunning ? "running" : "idle"
  );
  const [workType, setWorkType] = useState("Work");
  const [showWorkSheet, setShowWorkSheet] = useState(false);
  const [liveSharing, setLiveSharing] = useState(false);

  const isRunning = phase === "running";
  const isStopped = phase === "stopped";

  return (
    <main className="screen relative" style={{ overflow: "hidden" }}>
      <img
        className="absolute inset-0 h-full w-full scale-125 object-cover"
        src={mapPic}
        alt=""
        style={{ filter: "saturate(1.35) contrast(1.18) brightness(0.82)" }}
      />
      <div className="absolute inset-0 bg-black/10" />

      <button
        className="absolute left-6 top-10 z-20 grid h-12 w-12 place-items-center rounded-full bg-white text-black shadow-[0_10px_24px_rgba(15,23,42,0.18)]"
        onClick={() => onNavigate?.("feed")}
        aria-label="Back"
      >
        <Icon name="arrowLeft" size={26} stroke="strong" />
      </button>

      <div className="absolute inset-x-0 bottom-0 z-20">
        <div className="mb-4 mr-6 grid justify-end gap-4">
          <MapControl icon="list" label="Layers" />
          <button className="grid h-12 w-12 place-items-center rounded-full bg-white text-base font-bold text-black shadow-[0_10px_24px_rgba(15,23,42,0.16)]">
            3D
          </button>
          <MapControl icon="target" label="Locate" />
        </div>

        <section className="mx-5 mb-4 overflow-hidden rounded-[20px] bg-white text-center shadow-[0_18px_42px_rgba(15,23,42,0.18)]">
          <div className={`relative px-5 py-4 text-center shadow-[0_1px_0_rgba(15,23,42,0.05)] ${isStopped ? "bg-[var(--yellow)]" : isRunning ? "bg-[var(--blue)]" : "bg-white"}`}>
            <p className={`text-base font-extrabold ${isStopped ? "text-black" : isRunning ? "text-white" : "text-[var(--text-secondary)]"}`}>
              {isStopped ? "Stopped" : isRunning ? `Working — ${workType}` : "Work"}
            </p>
          </div>
          <div className="grid grid-cols-3 px-5 pb-6 pt-7">
            <Metric value={isRunning || isStopped ? "00:13" : "00:00"} label="Time" />
            <Metric value="-:--" label="Focus Score" />
            <Metric value="0,00" label="Working Time" />
          </div>
        </section>

        <section className="rounded-t-[22px] bg-white px-7 pb-4 pt-4 shadow-[0_-18px_42px_rgba(15,23,42,0.16)]">
          <div className="mx-auto mb-7 h-1.5 w-16 rounded-full bg-black/20" />
          {isStopped ? (
            <div>
              <div className="grid grid-cols-2 gap-5 pb-2">
                <ActionButton icon="play" label="Resume" tone="primary" onClick={() => setPhase("running")} />
                <ActionButton icon="finish" label="Finish" tone="dark" onClick={() => onNavigate?.("saveActivity")} />
              </div>
              <div className="between mt-4">
                <span className="text-sm font-semibold text-[var(--text-secondary)]">Live Sharing</span>
                <button
                  className={`relative h-7 w-12 rounded-full transition-colors ${liveSharing ? "bg-[var(--blue)]" : "bg-[var(--border)]"}`}
                  onClick={() => setLiveSharing((prev) => !prev)}
                  type="button"
                  aria-label="Toggle live sharing"
                >
                  <span className={`absolute left-0.5 top-0.5 h-6 w-6 rounded-full bg-white shadow transition-transform ${liveSharing ? "translate-x-5" : "translate-x-0"}`} />
                </button>
              </div>
            </div>
          ) : isRunning ? (
            <div>
              <button className="row w-full justify-center rounded-full bg-[var(--blue)] px-4 py-3 text-white shadow-[0_12px_24px_rgba(37,99,235,0.3)]" onClick={() => setPhase("stopped")}>
                <ActionIcon icon="pause" size={24} strokeWidth={2} />
                <span className="text-base font-extrabold">Pause</span>
              </button>
              <div className="between mt-4">
                <span className="text-sm font-semibold text-[var(--text-secondary)]">Live Sharing</span>
                <button
                  className={`relative h-7 w-12 rounded-full transition-colors ${liveSharing ? "bg-[var(--blue)]" : "bg-[var(--border)]"}`}
                  onClick={() => setLiveSharing((prev) => !prev)}
                  type="button"
                  aria-label="Toggle live sharing"
                >
                  <span className={`absolute left-0.5 top-0.5 h-6 w-6 rounded-full bg-white shadow transition-transform ${liveSharing ? "translate-x-5" : "translate-x-0"}`} />
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div className="grid grid-cols-3 items-center">
                <SmallAction icon={workTypeOptions.find((w) => w.label === workType)?.icon || "laptop"} label={workType} tone="soft" onClick={() => setShowWorkSheet(true)} />
                <SmallAction icon="play" label="Start" tone="primary" onClick={() => setPhase("running")} />
                <span aria-hidden="true" />
              </div>
              <div className="between mt-4">
                <span className="text-sm font-semibold text-[var(--text-secondary)]">Live Sharing</span>
                <button
                  className={`relative h-7 w-12 rounded-full transition-colors ${liveSharing ? "bg-[var(--blue)]" : "bg-[var(--border)]"}`}
                  onClick={() => setLiveSharing((prev) => !prev)}
                  type="button"
                  aria-label="Toggle live sharing"
                >
                  <span className={`absolute left-0.5 top-0.5 h-6 w-6 rounded-full bg-white shadow transition-transform ${liveSharing ? "translate-x-5" : "translate-x-0"}`} />
                </button>
              </div>
            </div>
          )}
        </section>
      </div>

      {showWorkSheet ? (
        <WorkTypeSheet
          selected={workType}
          onClose={() => setShowWorkSheet(false)}
          onSelect={(label) => {
            setWorkType(label);
            setShowWorkSheet(false);
          }}
        />
      ) : null}
    </main>
  );
}

function MapControl({ icon, label }) {
  return (
    <button className="grid h-12 w-12 place-items-center rounded-full bg-white text-black shadow-[0_10px_24px_rgba(15,23,42,0.16)]" aria-label={label}>
      <Icon name={icon} size={24} stroke="strong" />
    </button>
  );
}

function Metric({ value, label }) {
  return (
    <div>
      <p className="text-[30px] font-black leading-none text-black">{value}</p>
      <p className="mt-2 text-sm font-semibold text-black">{label}</p>
    </div>
  );
}

function SmallAction({ icon, label, onClick, tone = "default" }) {
  const isPrimary = tone === "primary";
  const isSoft = tone === "soft";

  return (
    <button className="grid justify-items-center gap-2 text-black" onClick={onClick}>
      <span
        className={`grid place-items-center rounded-full ${
          isPrimary
            ? "h-20 w-20 bg-[var(--blue)] text-white shadow-[0_14px_28px_rgba(37,99,235,0.32)]"
            : isSoft
              ? "h-14 w-14 bg-white text-[var(--blue)] shadow-[0_10px_22px_rgba(15,23,42,0.14)]"
              : "h-14 w-14 bg-white text-black shadow-[0_10px_22px_rgba(15,23,42,0.14)]"
        }`}
      >
        <ActionIcon icon={icon} size={isPrimary ? 38 : 28} strokeWidth={2} />
      </span>
      <span className={`${isPrimary ? "text-[17px]" : "text-sm"} font-semibold`}>{label}</span>
    </button>
  );
}

function ActionButton({ icon, label, onClick, tone = "primary" }) {
  const toneClass = tone === "dark"
    ? "bg-black text-white shadow-[0_12px_24px_rgba(15,23,42,0.26)]"
    : "bg-[var(--blue)] text-white shadow-[0_12px_24px_rgba(37,99,235,0.3)]";

  return (
    <button className={`row justify-center rounded-full px-4 py-3 ${toneClass}`} onClick={onClick}>
      <ActionIcon icon={icon} size={24} strokeWidth={2} />
      <span className="text-base font-extrabold">{label}</span>
    </button>
  );
}

function ActionIcon({ icon, size, strokeWidth }) {
  if (icon === "play") {
    return (
      <HugeiconsIcon
        icon={PlayIcon}
        size={size}
        color="currentColor"
        strokeWidth={strokeWidth}
      />
    );
  }

  if (icon === "pause") {
    return (
      <HugeiconsIcon
        icon={PauseIcon}
        size={size}
        color="currentColor"
        strokeWidth={strokeWidth}
      />
    );
  }

  if (icon === "finish") {
    return (
      <HugeiconsIcon
        icon={RacingFlagIcon}
        size={size}
        color="currentColor"
        strokeWidth={strokeWidth}
      />
    );
  }

  return <Icon name={icon} size={size} stroke={strokeWidth} />;
}
