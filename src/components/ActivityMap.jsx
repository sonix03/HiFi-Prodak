import { MapPin, Navigation } from "lucide-react";

export default function ActivityMap({ height = "h-40", dark = false }) {
  const shell = dark
    ? "border-white/10 bg-[#406AAF] text-white"
    : "border-[#427AB5]/20 bg-white text-[#17324D]";
  const chip = dark
    ? "bg-white/10 text-white"
    : "bg-[#FFE8BE] text-[#406AAF]";
  const gridColor = dark ? "rgba(255,255,255,0.1)" : "rgba(66,122,181,0.1)";

  return (
    <div
      className={`relative isolate ${height} overflow-hidden rounded-[26px] border ${shell}`}
    >
      <div
        className="absolute inset-0 z-0 opacity-90"
        style={{
          backgroundImage:
            `linear-gradient(90deg, ${gridColor} 1px, transparent 1px), linear-gradient(0deg, ${gridColor} 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_left,rgba(247,221,125,0.28),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(66,122,181,0.14),transparent_28%)]" />
      <svg className="absolute inset-0 z-10 h-full w-full" viewBox="0 0 220 150">
        <path
          d="M26 120 C54 82 76 98 91 62 C108 21 145 36 154 70 C163 105 194 91 205 34"
          fill="none"
          stroke={dark ? "rgba(255,255,255,0.18)" : "#FFE8BE"}
          strokeLinecap="round"
          strokeWidth="12"
        />
        <path
          d="M26 120 C54 82 76 98 91 62 C108 21 145 36 154 70 C163 105 194 91 205 34"
          fill="none"
          stroke="#427AB5"
          strokeLinecap="round"
          strokeWidth="5"
        />
        <path
          d="M26 120 C43 98 58 91 74 90"
          fill="none"
          stroke={dark ? "#FFFFFF" : "#406AAF"}
          strokeLinecap="round"
          strokeWidth="4"
        />
      </svg>
      <div className={`absolute left-4 top-4 z-20 flex items-center gap-2 rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] ${chip}`}>
        <Navigation size={14} />
        Route map
      </div>
      <div className={`absolute right-4 top-4 z-20 rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] ${dark ? "bg-white/10 text-white/70" : "bg-[#406AAF] text-white"}`}>
        Live
      </div>
      <div
        className={`absolute inset-x-4 bottom-4 z-20 flex items-end justify-between gap-3 rounded-[20px] p-3 backdrop-blur-sm ${
          dark ? "bg-white/10" : "bg-white/80"
        }`}
      >
        <div>
          <p className={`text-sm font-black ${dark ? "text-white" : "text-[#17324D]"}`}>
            North loop preview
          </p>
          <p className={`mt-1 text-[11px] font-semibold ${dark ? "text-white/70" : "text-[#5D6F8B]"}`}>
            Clean placeholder for route or map screenshot
          </p>
        </div>
        <div className={`grid h-10 w-10 shrink-0 place-items-center rounded-full ${dark ? "bg-white text-[#406AAF]" : "bg-[#406AAF] text-white"}`}>
          <MapPin size={15} />
        </div>
      </div>
    </div>
  );
}
