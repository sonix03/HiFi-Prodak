import Icon from "./Icon";

export default function Pill({ children, active = false, tone = "neutral", icon, onClick }) {
  const tones = {
    neutral: active ? "bg-[var(--primary-soft)] text-[var(--primary)] border-[var(--primary)]" : "bg-white text-[var(--text-secondary)] border-[var(--border)]",
    orange: active ? "bg-[var(--primary)] text-white border-[var(--primary)]" : "bg-[var(--primary-soft)] text-[var(--primary-dark)] border-transparent",
    blue: active ? "bg-[var(--blue)] text-white border-[var(--blue)]" : "bg-[var(--blue-soft)] text-[var(--blue)] border-transparent",
    yellow: "bg-[var(--yellow-soft)] text-[var(--text)] border-transparent",
    success: "bg-emerald-50 text-emerald-700 border-transparent",
  };

  const Wrapper = onClick ? "button" : "span";

  return (
    <Wrapper
      className={`inline-flex shrink-0 items-center gap-1 rounded-full border px-2.5 py-1 text-[11px] font-semibold whitespace-nowrap ${onClick ? "transition active:scale-[0.98]" : ""} ${tones[tone]}`}
      onClick={onClick}
      type={onClick ? "button" : undefined}
    >
      {icon ? <Icon name={icon} size={14} /> : null}
      {children}
    </Wrapper>
  );
}
