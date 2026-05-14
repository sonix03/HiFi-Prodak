import {
  ArrowLeft,
  Heart,
  ImagePlus,
  MessageCircle,
  MoreHorizontal,
  Share2,
} from "lucide-react";
import Phone from "../components/Phone";

const stats = [
  { value: "00:26", label: "Time" },
  { value: "2.4 km", label: "Distance" },
  { value: "6:42", label: "Pace" },
  { value: "128", label: "Focus Score" },
];

export default function ActivityDetail() {
  return (
    <Phone title="Activity Detail">
      <div className="relative h-full overflow-hidden bg-[#F6FAFD] text-left">
        <div className="relative h-[42%] overflow-hidden border-b border-[#17324D]/15 bg-[#D8E1EB]">
          <div className="absolute inset-0 grid place-items-center">
            <div className="grid h-24 w-24 place-items-center rounded-[28px] border-2 border-dashed border-white/90 bg-white/20 shadow-[0_18px_38px_rgba(23,50,77,0.16)] backdrop-blur-md">
              <ImagePlus size={34} className="text-white" />
            </div>

            <span className="absolute bottom-8 rounded-full bg-white/85 px-4 py-1.5 text-[10px] font-bold text-[#427AB5]">
              Map image placeholder
            </span>
          </div>

          <div className="absolute left-6 right-6 top-8 z-10 flex items-center justify-between">
            <button className="grid h-11 w-11 place-items-center rounded-full border border-[#050505]/70 bg-[#F6FAFD]/70 text-[#050505] backdrop-blur-md">
              <ArrowLeft size={20} strokeWidth={2.2} />
            </button>

            <button className="grid h-11 w-11 place-items-center rounded-full border border-[#050505]/70 bg-[#F6FAFD]/70 text-[#050505] backdrop-blur-md">
              <MoreHorizontal size={20} strokeWidth={2.2} />
            </button>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-[58%] rounded-t-[34px] border-t border-[#17324D]/15 bg-[#F6FAFD] px-6 pt-5 shadow-[0_-16px_34px_rgba(23,50,77,0.1)]">
          <div className="mx-auto h-1.5 w-12 rounded-full bg-[#050505]" />

          <div className="mt-7 flex items-center gap-3">
            <div className="h-8 w-8 shrink-0 rounded-full bg-[#050505]" />

            <div className="min-w-0 flex-1">
              <p className="truncate text-[12px] font-black text-[#050505]">
                Muhammad Fathur Rizky
              </p>

              <p className="mt-1 text-[10px] font-medium text-[#050505]/70">
                Today at 5:26 AM • Detroit
              </p>
            </div>
          </div>

          <h2 className="mt-8 max-w-[290px] text-[14px] font-black leading-7 text-[#050505]">
            I&apos;m not saying I&apos;m amazing, but sometimes I&apos;m
            distinctly above average.
          </h2>

          <div className="mt-7 h-1.5 w-32 rounded-full bg-[#406AAF]/35" />

          <div className="mt-10 grid grid-cols-2 gap-x-12 gap-y-8">
            {stats.map((item) => (
              <div key={item.label}>
                <div className="h-1.5 w-10 rounded-full bg-[#050505]/35" />

                <p className="mt-4 text-[18px] font-black tracking-[-0.02em] text-[#050505]">
                  {item.value}
                </p>

                <p className="mt-1 text-[11px] font-medium text-[#050505]/65">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex items-center gap-6 text-[#050505]">
            <button className="grid h-10 w-10 place-items-center rounded-full border border-[#17324D]/15 bg-white">
              <Heart size={18} strokeWidth={2.1} />
            </button>

            <button className="grid h-10 w-10 place-items-center rounded-full border border-[#17324D]/15 bg-white">
              <MessageCircle size={18} strokeWidth={2.1} />
            </button>

            <button className="grid h-10 w-10 place-items-center rounded-full border border-[#17324D]/15 bg-white">
              <Share2 size={18} strokeWidth={2.1} />
            </button>

            <span className="ml-auto text-[10px] font-black uppercase tracking-[0.14em] text-[#427AB5]">
              View stats
            </span>
          </div>
        </div>
      </div>
    </Phone>
  );
}