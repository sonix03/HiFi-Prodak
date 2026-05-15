export default function Stat({ value, label, align = "left", tone = "dark" }) {
  const textAlign = align === "center" ? "text-center" : "text-left";
  const valueTone = tone === "orange" ? "text-[var(--primary)]" : tone === "blue" ? "text-[var(--blue)]" : "text-[var(--text)]";

  return (
    <div className={textAlign}>
      <p className={`metric-sm ${valueTone}`}>{value}</p>
      <p className="mt-1 text-[11px] font-bold text-[var(--text-secondary)]">{label}</p>
    </div>
  );
}
