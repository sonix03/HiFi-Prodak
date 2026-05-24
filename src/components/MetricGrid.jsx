import Icon from "./Icon";

export function MetricItem({ label, value, sub, icon, tone = "neutral", tooltip }) {
  const toneClass = tone === "blue" ? "text-[var(--blue)]" : tone === "yellow" ? "text-[var(--yellow)]" : "text-[var(--text)]";
  const valueClass = tone === "blue" ? "text-[var(--blue)]" : "text-[var(--text)]";

  return (
    <div className="metric-item">
      <div className="row">
        {icon ? <Icon name={icon} size="xs" className={toneClass} /> : null}
        <p className="text-[11px] font-normal text-[var(--text-secondary)]">{label}</p>
        {tooltip ? (
          <span className="group relative inline-grid h-4 w-4 place-items-center rounded-full border border-[var(--border)] text-[10px] font-black text-[var(--text-tertiary)]" tabIndex={0}>
            ?
            <span className="pointer-events-none absolute left-1/2 top-6 z-30 w-44 -translate-x-1/2 rounded-xl bg-[var(--text)] px-3 py-2 text-left text-[10px] font-semibold leading-snug text-white opacity-0 shadow-[var(--shadow-floating)] transition-opacity group-hover:opacity-100 group-focus:opacity-100">
              {tooltip}
            </span>
          </span>
        ) : null}
      </div>
      <p className={`mt-1 text-[20px] font-semibold leading-none ${valueClass}`}>{value}</p>
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
