import Icon from "./Icon";

export default function ActivityMap({ label = "Focus route", height = 180, imageSrc }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--blue-soft)]" style={{ height }}>
      {imageSrc ? (
        <img className="absolute inset-0 h-full w-full object-cover" src={imageSrc} alt="" />
      ) : (
        <>
          <div className="absolute inset-0 opacity-80" style={{ backgroundImage: "linear-gradient(90deg, rgba(37,99,235,.12) 1px, transparent 1px), linear-gradient(0deg, rgba(37,99,235,.12) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 340 180" preserveAspectRatio="none">
            <path d="M22 132 C82 72 118 118 158 62 C194 10 246 36 266 88 C284 132 316 106 328 42" fill="none" stroke="rgba(255,255,255,.86)" strokeWidth="18" strokeLinecap="round" />
            <path d="M22 132 C82 72 118 118 158 62 C194 10 246 36 266 88 C284 132 316 106 328 42" fill="none" stroke="#2563EB" strokeWidth="6" strokeLinecap="round" />
          </svg>
        </>
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/45" />
      <Icon name="route" size={22} className="absolute left-4 top-4 text-[var(--blue)]" />
    </div>
  );
}
