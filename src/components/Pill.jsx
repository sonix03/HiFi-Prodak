export default function Pill({ children, active = false, tone = "neutral", icon: Icon }) {
  const tones = {
    neutral: active ? "bg-[var(--text)] text-white border-[var(--text)]" : "bg-white text-[var(--text-secondary)] border-[var(--border)]",
    orange: active ? "bg-[var(--primary)] text-white border-[var(--primary)]" : "bg-[var(--primary-soft)] text-[var(--primary-dark)] border-transparent",
    blue: active ? "bg-[var(--blue)] text-white border-[var(--blue)]" : "bg-[var(--blue-soft)] text-[var(--blue)] border-transparent",
    yellow: "bg-[var(--yellow-soft)] text-[var(--text)] border-transparent",
    success: "bg-emerald-50 text-emerald-700 border-transparent",
  };

  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[11px] font-bold ${tones[tone]}`}>
      {Icon ? <Icon size={13} strokeWidth={2.2} /> : null}
      {children}
    </span>
  );
}
