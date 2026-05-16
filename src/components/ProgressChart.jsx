export default function ProgressChart({ data = [], flushX = false }) {
  const max = Math.max(...data.map((d) => d.hours), 1);

  return (
    <div className={`rounded-2xl bg-white ${flushX ? "py-4" : "p-4"}`}>
      <div className="flex h-36 items-end gap-3">
        {data.map((item, index) => (
          <div key={`${item.day}-${index}`} className="flex flex-1 flex-col items-center gap-2">
            <div className="flex h-28 w-full items-end rounded-full bg-[var(--surface-muted)]">
              <div className="w-full rounded-full bg-[var(--primary)]" style={{ height: `${Math.max((item.hours / max) * 100, 12)}%` }} />
            </div>
            <span className="text-[11px] font-medium text-[var(--text-secondary)]">{item.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
