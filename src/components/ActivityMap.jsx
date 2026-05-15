import { BadgeCheck, MapPin } from "lucide-react";

export default function ActivityMap({ label = "Focus route", proof = "Proof verified", height = 180 }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--blue-soft)]" style={{ height }}>
      <div className="absolute inset-0 opacity-80" style={{ backgroundImage: "linear-gradient(90deg, rgba(37,99,235,.12) 1px, transparent 1px), linear-gradient(0deg, rgba(37,99,235,.12) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 340 180" preserveAspectRatio="none">
        <path d="M22 132 C82 72 118 118 158 62 C194 10 246 36 266 88 C284 132 316 106 328 42" fill="none" stroke="rgba(255,255,255,.86)" strokeWidth="18" strokeLinecap="round" />
        <path d="M22 132 C82 72 118 118 158 62 C194 10 246 36 266 88 C284 132 316 106 328 42" fill="none" stroke="#2563EB" strokeWidth="6" strokeLinecap="round" />
      </svg>
      <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[11px] font-extrabold text-[var(--blue)]">{label}</div>
      <div className="absolute bottom-4 left-4 right-4 between rounded-2xl bg-white/90 p-3 backdrop-blur">
        <div>
          <p className="text-sm font-extrabold">Productivity context</p>
          <p className="meta">{proof}</p>
        </div>
        <span className="grid h-10 w-10 place-items-center rounded-full bg-[var(--blue)] text-white"><MapPin size={17} /></span>
      </div>
      <BadgeCheck className="absolute right-4 top-4 text-[var(--blue)]" size={22} />
    </div>
  );
}
