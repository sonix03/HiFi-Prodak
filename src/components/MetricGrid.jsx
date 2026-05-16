import Icon from "./Icon";

export function MetricItem({ label, value, sub, icon, tone = "neutral" }) {
  const toneClass = tone === "blue" ? "text-[var(--blue)]" : tone === "yellow" ? "text-[var(--yellow)]" : "text-[var(--text)]";

  return (
    <div className="metric-item">
      <div className="row gap-1.5">
        {icon ? <Icon name={icon} size="xs" className={toneClass} /> : null}
        <p className="text-[11px] font-normal text-[var(--text-secondary)]">{label}</p>
      </div>
      <p className={`mt-1 text-[20px] font-semibold leading-none ${toneClass}`}>{value}</p>
      {sub ? <p className="mt-1 text-[10px] font-normal text-[var(--text-tertiary)]">{sub}</p> : null}
    </div>
  );
}

export default function MetricGrid({ items, columns = 3 }) {
  return (
    <div className={`metric-grid ${columns === 3 ? "metric-grid-3" : ""}`}>
      {items.map((item) => <MetricItem key={item.label} {...item} />)}
    </div>
  );
}
