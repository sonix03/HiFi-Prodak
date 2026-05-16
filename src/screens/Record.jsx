import { HugeiconsIcon } from "@hugeicons/react";
import { PlayIcon, RacingFlagIcon } from "@hugeicons/core-free-icons";
import Icon from "../components/Icon";
import mapPic from "../assets/map-pic.png";

export default function Record({ onNavigate, initialPlaying = false }) {
  const time = initialPlaying ? "00:13" : "00:00";

  return (
    <main className="screen relative overflow-hidden">
      <img
        className="absolute inset-0 h-full w-full scale-125 object-cover"
        src={mapPic}
        alt=""
        style={{ filter: "saturate(1.35) contrast(1.18) brightness(0.82)" }}
      />
      <div className="absolute inset-0 bg-black/10" />

      <button
        className="absolute left-6 top-10 z-20 grid h-12 w-12 place-items-center rounded-full border-2 border-black bg-white/35 text-black backdrop-blur-sm"
        onClick={() => onNavigate?.("feed")}
        aria-label="Back"
      >
        <Icon name="arrowLeft" size={26} stroke="strong" />
      </button>

      <div className="absolute inset-x-0 bottom-0 z-20">
        <div className="mb-4 mr-6 grid justify-end gap-4">
          <MapControl icon="list" label="Layers" />
          <button className="grid h-12 w-12 place-items-center rounded-full border-2 border-black bg-white text-base font-bold text-black shadow-[var(--shadow-card)]">
            3D
          </button>
          <MapControl icon="target" label="Locate" />
        </div>

        <section className="mx-5 mb-4 overflow-hidden rounded-[20px] border border-white/80 bg-white/92 text-center shadow-[var(--shadow-floating)] backdrop-blur">
          <div className={`relative border-b border-[var(--border)] px-5 py-4 text-center ${initialPlaying ? "bg-[var(--yellow)]" : ""}`}>
            <p className={`text-base font-extrabold ${initialPlaying ? "text-black" : "text-[var(--text-secondary)]"}`}>
              {initialPlaying ? "Stopped" : "Work"}
            </p>
            {initialPlaying ? (
              <Icon name="arrowRight" size={22} stroke="strong" className="absolute right-5 top-4 -rotate-45 text-black" />
            ) : null}
          </div>
          <div className="grid grid-cols-3 px-5 pb-6 pt-7">
            <Metric value={time} label="Time" />
            <Metric value="-:--" label="Focus Score" />
            <Metric value="0,00" label="Working Time" />
          </div>
        </section>

        <section className="rounded-t-[22px] border-t border-white/80 bg-white/95 px-7 pb-4 pt-4 shadow-[var(--shadow-floating)] backdrop-blur">
          <div className="mx-auto mb-7 h-1.5 w-16 rounded-full bg-black/20" />
          {initialPlaying ? (
            <div className="grid grid-cols-2 gap-5 pb-2">
              <ActionButton icon="play" label="Resume" tone="primary" />
              <ActionButton icon="finish" label="Finish" tone="dark" onClick={() => onNavigate?.("saveActivity")} />
            </div>
          ) : (
            <div className="grid grid-cols-3 items-center">
              <SmallAction icon="laptop" label="Work" tone="soft" />
              <SmallAction icon="play" label="Start" tone="primary" onClick={() => onNavigate?.("saveActivity")} />
              <span aria-hidden="true" />
            </div>
          )}
        </section>
      </div>
    </main>
  );
}

function MapControl({ icon, label }) {
  return (
    <button className="grid h-12 w-12 place-items-center rounded-full border-2 border-black bg-white text-black shadow-[var(--shadow-card)]" aria-label={label}>
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
        className={`grid place-items-center rounded-full border shadow-[0_4px_12px_rgba(15,23,42,0.12)] ${
          isPrimary
            ? "h-20 w-20 border-[var(--blue)] bg-[var(--blue)] text-white shadow-[0_10px_22px_rgba(37,99,235,0.28)]"
            : isSoft
              ? "h-14 w-14 border-[var(--primary-soft)] bg-[var(--primary-soft)] text-[var(--blue)]"
              : "h-14 w-14 border-black bg-white text-black"
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
    ? "border-black bg-black text-white shadow-[0_8px_18px_rgba(15,23,42,0.22)]"
    : "border-[var(--blue)] bg-[var(--blue)] text-white shadow-[0_8px_18px_rgba(37,99,235,0.24)]";

  return (
    <button className={`row justify-center rounded-full border-2 px-4 py-3 ${toneClass}`} onClick={onClick}>
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
