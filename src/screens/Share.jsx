import ShareTargets from "../components/ShareTargets";
import landscapeItb from "../assets/landscape-itb.png";
import mapPic from "../assets/map-pic.png";
import { activities } from "../constants/data";

function CustomShareCard({ activity }) {
  return (
    <div className="relative h-[280px] w-[168px] shrink-0 overflow-hidden rounded-[28px] bg-[var(--text)] text-white shadow-[var(--shadow-card)]">
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(45deg,rgba(255,255,255,.18)_25%,transparent_25%),linear-gradient(-45deg,rgba(255,255,255,.18)_25%,transparent_25%),linear-gradient(45deg,transparent_75%,rgba(255,255,255,.18)_75%),linear-gradient(-45deg,transparent_75%,rgba(255,255,255,.18)_75%)] [background-position:0_0,0_12px,12px_-12px,-12px_0] [background-size:24px_24px]" />
      <div className="relative flex h-full flex-col items-center px-5 py-5 text-center">
        <span className="self-start rounded-md border border-white/70 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-white/90">
          Prodak
        </span>

        <div className="mt-4">
          <p className="text-[10px] font-bold text-white/80">Duration</p>
          <p className="text-[23px] font-black leading-tight">{activity.duration}</p>
        </div>
        <div className="mt-2.5">
          <p className="text-[10px] font-bold text-white/80">Score</p>
          <p className="text-[23px] font-black leading-tight">{activity.focusScore}</p>
        </div>
        <div className="mt-2.5">
          <p className="text-[10px] font-bold text-white/80">Steps</p>
          <p className="text-[23px] font-black leading-tight">{activity.output}</p>
        </div>

        <svg className="mt-3 h-[72px] w-14 text-[var(--yellow)]" viewBox="0 0 64 96" fill="none" aria-hidden="true">
          <path
            d="M23 4C27 11 39 10 37 21C35 30 22 28 24 39C26 51 45 47 44 61C43 72 29 72 31 84C33 92 47 88 57 91"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="6"
          />
        </svg>

        <div className="prodak-mark mt-auto text-white" aria-label="Prodak">
          <span className="!h-6 !w-6 !border-white !border-r-[var(--blue)]" />
          <strong className="!text-[15px] !font-extrabold text-white">Prodak</strong>
        </div>
      </div>
    </div>
  );
}

function ImageShareCard({ src, alt }) {
  return (
    <div className="h-[280px] w-[168px] shrink-0 overflow-hidden rounded-[28px] bg-[var(--surface-muted)] shadow-[var(--shadow-card)]">
      <img className="h-full w-full object-cover" src={src} alt={alt} />
    </div>
  );
}

export default function Share({ onNavigate }) {
  const activity = activities[0];

  return (
    <main className="screen flex h-full flex-col bg-white">
      <header className="relative border-b border-[var(--divider)] bg-white px-6 py-5 shadow-[var(--shadow-header)]">
        <button className="absolute left-6 top-1/2 -translate-y-1/2 text-sm font-medium" onClick={() => onNavigate?.("activityDetail")}>
          Close
        </button>
        <h1 className="text-center text-[20px] font-black tracking-normal">Share Activity</h1>
      </header>

      <section className="flex-1 overflow-y-auto px-6 py-6">
        <div className="-mx-6 flex snap-x gap-5 overflow-x-auto px-[calc(50%-84px)] pb-3">
          <CustomShareCard activity={activity} />
          <ImageShareCard src={mapPic} alt="Map share preview" />
          <ImageShareCard src={landscapeItb} alt="Photo share preview" />
        </div>
        <div className="row justify-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--text-tertiary)]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--text)]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--divider)]" />
        </div>

        <ShareTargets className="mt-8" />
      </section>
    </main>
  );
}
