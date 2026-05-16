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
              className={`grid justify-items-center text-[10px] leading-none ${isActive ? "text-[var(--blue)]" : "text-[var(--text-secondary)]"}`}
              onClick={() => onNavigate?.(item.key)}
            >
              <span
                className={`grid h-9 w-9 place-items-center ${isActive ? "text-[var(--blue)]" : "text-[var(--text-secondary)]"}`}
              >
                <Icon name={item.icon} size="lg" stroke={isActive ? "strong" : "regular"} />
              </span>
              <p className="font-bold">{item.label}</p>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
