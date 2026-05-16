import { BarChart3, Home, Radio, Users } from "lucide-react";

const items = [
  ["home", Home, "Feed"],
  ["record", Radio, "Record"],
  ["groups", Users, "Clubs"],
  ["progress", BarChart3, "Progress"],
];

export default function Nav({ active = "home" }) {
  return (
    <div className="absolute bottom-0 left-0 right-0 z-30 h-[92px] border-t border-[#427AB5]/20 bg-white/96 px-5 pb-4 pt-3 backdrop-blur">
      <div className="grid grid-cols-4 gap-1">
        {items.map(([key, Icon, label]) => (
          <div key={key} className="flex flex-col items-center gap-1.5">
            <div
              className={`grid h-11 w-11 place-items-center rounded-full ${
                active === key
                  ? "bg-[#427AB5] text-white shadow-[0_12px_24px_rgba(66,122,181,0.24)]"
                  : "text-[#5D6F8B]"
              }`}
            >
              <Icon size={17} />
            </div>
            <span
              className={`text-[10px] uppercase tracking-[0.16em] ${
                active === key
                  ? "font-bold text-[#17324D]"
                  : "text-[#5D6F8B]"
              }`}
            >
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
