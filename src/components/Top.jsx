import { ArrowLeft, MoreHorizontal } from "lucide-react";

export default function Top({ title, right, light = false }) {
  return (
    <div
      className={`relative z-20 flex items-center gap-3 px-6 pb-5 pt-10 ${
        light ? "text-white" : "text-[#17324D]"
      }`}
    >
      <button
        className={`grid h-11 w-11 shrink-0 place-items-center rounded-full border transition-colors ${
          light
            ? "border-white/10 bg-white/10"
            : "border-[#427AB5]/20 bg-white text-[#17324D]"
        }`}
      >
        <ArrowLeft size={16} />
      </button>
      <div className="min-w-0 flex-1 truncate text-[15px] font-black tracking-[-0.01em]">
        {title}
      </div>
      <div
        className={`grid h-11 w-11 shrink-0 place-items-center rounded-full border ${
          light
            ? "border-white/10 bg-white/10"
            : "border-[#427AB5]/20 bg-white text-[#427AB5]"
        }`}
      >
        {right ?? <MoreHorizontal size={17} />}
      </div>
    </div>
  );
}
