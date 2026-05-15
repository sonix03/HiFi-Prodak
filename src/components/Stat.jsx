export default function Stat({ value, label, align = "left", tone = "dark" }) {
  const textAlign = align === "center" ? "text-center" : "text-left";
  const valueTone = tone === "orange" || tone === "blue" ? "text-[var(--blue)]" : tone === "yellow" ? "text-[var(--text)]" : "text-[var(--text)]";

  return (
    <div className={textAlign}>
      <p className={`metric-sm ${valueTone}`}>{value}</p>
      <p className="mt-1 text-[10px] font-medium text-[var(--text-secondary)]">{label}</p>
    </div>
  );
}
