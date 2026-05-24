import Icon from "./Icon";

export default function ProgressChart({ data = [], flushX = false, highlightHigh = false }) {
  const max = Math.max(...data.map((d) => d.hours), 1);
  const average = data.length ? data.reduce((total, item) => total + item.hours, 0) / data.length : 0;
  const highThreshold = Math.max(average, max * 0.75);

  return (
    <div className={`rounded-2xl bg-white ${flushX ? "py-4" : "p-4"}`}>
      <div className="flex h-36 items-end gap-3">
        {data.map((item, index) => {
          const isHigh = highlightHigh && item.hours >= highThreshold;

          return (
            <div key={`${item.day}-${index}`} className="flex flex-1 flex-col items-center gap-2">
              <div className="flex h-28 w-full items-end rounded-full bg-[var(--surface-muted)]">
                <div
                  className={`relative flex w-full items-start justify-center rounded-full ${isHigh ? "bg-[var(--yellow)] text-[var(--text)]" : "bg-[var(--primary)] text-white"}`}
                  style={{ height: `${Math.max((item.hours / max) * 100, 12)}%` }}
                >
                  {isHigh ? (
                    <span className="mt-1.5 grid h-5 w-5 place-items-center">
                      <Icon name="fire" size="xs" stroke={2} />
                    </span>
                  ) : null}
                </div>
              </div>
              <span className="text-[11px] font-medium text-[var(--text-secondary)]">{item.day}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
