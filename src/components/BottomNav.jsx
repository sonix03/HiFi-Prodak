import Icon from "./Icon";

const items = [
  { key: "feed", label: "Home", icon: "feed" },
  { key: "activities", label: "Explore", icon: "activity" },
  { key: "record", label: "Record", icon: "record", primary: true },
  { key: "groups", label: "Clubs", icon: "users" },
  { key: "profile", label: "Profile", icon: "profile" },
];

export default function BottomNav({ active, onNavigate }) {
  return (
    <nav className="absolute bottom-0 left-0 right-0 z-40 border-t border-[var(--border)] bg-white/96 px-3 pb-5 pt-2 backdrop-blur">
      <div className="grid grid-cols-5 items-end gap-1">
        {items.map((item) => {
          const icon = item.key === "profile" && active === "progress" ? "chart" : item.icon;
          const isActive = active === item.key || (item.key === "profile" && active === "progress");

          return (
            <button key={item.key} className="grid justify-items-center gap-1 text-[10px] font-semibold text-[var(--text-tertiary)]" onClick={() => onNavigate?.(item.key)}>
              <span className={`grid place-items-center rounded-full ${item.primary ? "h-10 w-10 text-[var(--text)]" : `h-9 w-9 ${isActive ? "text-[var(--blue)]" : "text-[var(--text-tertiary)]"}`}`}>
                <Icon name={icon} size="lg" stroke={isActive || item.primary ? "strong" : "regular"} />
              </span>
              <span className={isActive || item.primary ? "text-[var(--blue)]" : ""}>{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
