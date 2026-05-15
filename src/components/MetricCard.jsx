import Card from "./Card";
import Icon from "./Icon";

export default function MetricCard({ label, value, sub, icon, tone = "neutral", progress }) {
  const tones = {
    orange: "bg-[var(--surface-muted)] text-[var(--text)]",
    blue: "bg-[var(--blue-soft)] text-[var(--blue)]",
    yellow: "bg-[var(--yellow-soft)] text-[var(--text)]",
    neutral: "bg-[var(--surface-muted)] text-[var(--text)]",
  };

  return (
    <Card className="min-w-0">
      <div className="between">
        <p className="meta">{label}</p>
        {icon ? <span className={`grid h-9 w-9 place-items-center rounded-xl ${tones[tone]}`}><Icon name={icon} size="sm" /></span> : null}
      </div>
      <p className="mt-4 metric-sm">{value}</p>
      {sub ? <p className="mt-1 meta">{sub}</p> : null}
      {typeof progress === "number" ? (
        <div className="mt-4 h-2 rounded-full bg-[var(--surface-muted)]">
          <div className="h-full rounded-full bg-[var(--blue)]" style={{ width: `${progress}%` }} />
        </div>
      ) : null}
    </Card>
  );
}
