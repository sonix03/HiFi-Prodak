import Icon from "./Icon";

const items = [
  { key: "feed", label: "Home", icon: "feed" },
  { key: "record", label: "Record", icon: "target" },
  { key: "groups", label: "Groups", icon: "users" },
  { key: "progress", label: "Progress", icon: "chart" },
];

export default function BottomNavigation({ active, onNavigate }) {
  return (
    <nav className="bottom-navigation" aria-label="Primary navigation">
      <div className="grid grid-cols-4 items-end gap-1">
        {items.map((item) => {
          const isActive = active === item.key;

          return (
            <button
              key={item.key}
              className={`grid justify-items-center gap-1 text-[11px] font-black ${isActive ? "text-[var(--blue)]" : "text-[var(--text-tertiary)]"}`}
              onClick={() => onNavigate?.(item.key)}
            >
              <span
                className={`grid h-9 w-9 place-items-center rounded-full ${isActive ? "bg-[var(--primary-soft)] text-[var(--blue)]" : "text-[var(--text-tertiary)]"}`}
              >
                <Icon name={item.icon} size="lg" stroke={isActive ? "strong" : "regular"} />
              </span>
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
