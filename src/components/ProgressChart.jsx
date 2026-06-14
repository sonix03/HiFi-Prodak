import { useEffect, useRef, useState } from "react";
import Icon from "./Icon";

export default function ProgressChart({
  data = [],
  flushX = false,
  getTooltipContent,
  highlightHigh = false,
  onTooltipClick,
}) {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const chartRef = useRef(null);
  const max = Math.max(...data.map((d) => d.hours), 1);
  const average = data.length ? data.reduce((total, item) => total + item.hours, 0) / data.length : 0;
  const highThreshold = Math.max(average, max * 0.75);
  const isInteractive = Boolean(getTooltipContent);

  useEffect(() => {
    if (!isInteractive) return undefined;

    function clearTooltip(event) {
      if (!chartRef.current?.contains(event.target)) {
        setSelectedIndex(null);
      }
    }

    document.addEventListener("pointerdown", clearTooltip);
    return () => document.removeEventListener("pointerdown", clearTooltip);
  }, [isInteractive]);

  return (
    <div ref={chartRef} className={`rounded-2xl bg-white ${flushX ? "py-4" : "p-4"}`}>
      <div className="flex h-36 items-end gap-3">
        {data.map((item, index) => {
          const isHigh = highlightHigh && item.hours >= highThreshold;
          const selected = selectedIndex === index;
          const tooltipAlign = index >= data.length - 2 ? "right-0" : "left-6";

          return (
            <div key={`${item.day}-${index}`} className="relative flex flex-1 flex-col items-center gap-2">
              <button
                className="flex h-28 w-full items-end rounded-full bg-[var(--surface-muted)]"
                disabled={!isInteractive}
                onClick={() => setSelectedIndex((prev) => (prev === index ? null : index))}
                type="button"
              >
                <span
                  className={`relative flex w-full items-start justify-center rounded-full ${isHigh ? "bg-[var(--yellow)] text-[var(--text)]" : "bg-[var(--primary)] text-white"}`}
                  style={{ height: `${Math.max((item.hours / max) * 100, 12)}%` }}
                >
                  {isHigh ? (
                    <span className="mt-1.5 grid h-5 w-5 place-items-center">
                      <Icon name="fire" size="xs" stroke={2} />
                    </span>
                  ) : null}
                </span>
              </button>
              <span className="text-[11px] font-medium text-[var(--text-secondary)]">{item.day}</span>
              {selected ? (
                <button
                  className={`absolute bottom-12 z-20 w-[190px] rounded-[8px] border border-[var(--border)] bg-white px-3 py-2 text-left text-[var(--text)] shadow-[var(--shadow-card)] active:scale-[0.99] ${tooltipAlign}`}
                  onClick={() => onTooltipClick?.(item)}
                  type="button"
                >
                  {getTooltipContent(item)}
                </button>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
