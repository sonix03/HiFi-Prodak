import { BarChart3, CircleDot, Home, Radio, User, Users } from "lucide-react";

const items = [
  { key: "feed", label: "Home", icon: Home },
  { key: "activities", label: "Explore", icon: CircleDot },
  { key: "record", label: "Record", icon: Radio, primary: true },
  { key: "groups", label: "Clubs", icon: Users },
  { key: "profile", label: "Profile", icon: User },
];

export default function BottomNav({ active, onNavigate }) {
  return (
    <nav className="absolute bottom-0 left-0 right-0 z-40 border-t border-[var(--border)] bg-white/96 px-3 pb-5 pt-2 backdrop-blur">
      <div className="grid grid-cols-5 items-end gap-1">
        {items.map((item) => {
          const Icon = item.key === "profile" && active === "progress" ? BarChart3 : item.icon;
          const isActive = active === item.key || (item.key === "profile" && active === "progress");

          return (
            <button key={item.key} className="grid justify-items-center gap-1 text-[11px] font-bold text-[var(--text-tertiary)]" onClick={() => onNavigate?.(item.key)}>
              <span className={`grid place-items-center rounded-full ${item.primary ? "h-14 w-14 -translate-y-3 bg-[var(--primary)] text-white shadow-[var(--shadow-button)]" : `h-9 w-9 ${isActive ? "bg-[var(--primary-soft)] text-[var(--primary)]" : "text-[var(--text-secondary)]"}`}`}>
                <Icon size={item.primary ? 23 : 19} strokeWidth={2.25} />
              </span>
              <span className={isActive ? "text-[var(--primary)]" : ""}>{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
