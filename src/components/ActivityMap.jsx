import Icon from "./Icon";

const focusBars = [
  { label: "Focus", value: 52, color: "var(--blue)" },
  { label: "Device", value: 58, color: "var(--blue)" },
  { label: "Output", value: 88, color: "var(--yellow)" },
  { label: "Context", value: 76, color: "var(--yellow)" },
];

export default function ActivityMap({ height = 180, imageSrc, visualType = "map" }) {
  if (visualType === "bars") {
    return (
      <div className="relative overflow-hidden rounded-2xl border border-[var(--border)] bg-white px-4 py-3" style={{ height }}>
        <div className="between">
          <p className="text-[11px] font-black text-[var(--text)]">Focus bars</p>
          <p className="text-[11px] font-black text-[var(--blue)]">82</p>
        </div>
        <div className="mt-3 grid grid-cols-4 items-end gap-2">
          {focusBars.map((bar) => (
            <div className="grid h-[76px] content-end gap-1" key={bar.label}>
              <div className="flex h-[58px] items-end overflow-hidden rounded-t-lg bg-[var(--surface-muted)]">
                <span
                  className="block w-full rounded-t-lg"
                  style={{ height: `${bar.value}%`, backgroundColor: bar.color }}
                />
              </div>
              <p className="truncate text-center text-[8px] font-bold text-[var(--text-secondary)]">{bar.label}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (visualType === "timeline") {
    return (
      <div className="relative overflow-hidden rounded-2xl border border-[var(--border)] bg-white px-4 py-3" style={{ height }}>
        <p className="text-[11px] font-black text-[var(--text)]">Device timeline</p>
        <div className="mt-4 grid gap-3">
          {[
            ["Laptop", "82%", "var(--blue)"],
            ["Browser", "68%", "var(--yellow)"],
            ["Phone", "24%", "var(--blue)"],
          ].map(([label, width, color]) => (
            <div className="grid gap-1" key={label}>
              <div className="between text-[10px] font-bold text-[var(--text-secondary)]">
                <span>{label}</span>
                <span>{width}</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-[var(--surface-muted)]">
                <span className="block h-full rounded-full" style={{ width, backgroundColor: color }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (visualType === "score") {
    return (
      <div className="grid place-items-center overflow-hidden rounded-2xl border border-[var(--border)] bg-white" style={{ height }}>
        <div className="relative grid h-20 w-20 place-items-center rounded-full bg-[conic-gradient(var(--blue)_0_82%,var(--divider)_82%_100%)]">
          <div className="grid h-14 w-14 place-items-center rounded-full bg-white">
            <p className="text-[22px] font-black text-[var(--blue)]">82</p>
          </div>
        </div>
        <p className="mt-[-8px] text-[11px] font-black text-[var(--text-secondary)]">Focus score</p>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--blue-soft)]" style={{ height }}>
      {imageSrc ? (
        <img className="absolute inset-0 h-full w-full object-cover" src={imageSrc} alt="" />
      ) : (
        <>
          <div className="absolute inset-0 opacity-80" style={{ backgroundImage: "linear-gradient(90deg, rgba(37,99,235,.12) 1px, transparent 1px), linear-gradient(0deg, rgba(37,99,235,.12) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 340 180" preserveAspectRatio="none">
            <path d="M22 132 C82 72 118 118 158 62 C194 10 246 36 266 88 C284 132 316 106 328 42" fill="none" stroke="rgba(255,255,255,.86)" strokeWidth="18" strokeLinecap="round" />
            <path d="M22 132 C82 72 118 118 158 62 C194 10 246 36 266 88 C284 132 316 106 328 42" fill="none" stroke="#2563EB" strokeWidth="6" strokeLinecap="round" />
          </svg>
        </>
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/45" />
      <Icon name="route" size={22} className="absolute left-4 top-4 text-[var(--blue)]" />
    </div>
  );
}
