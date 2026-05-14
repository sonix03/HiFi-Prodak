import {
  ArrowLeft,
  CalendarDays,
  ChevronDown,
  Download,
  ImagePlus,
} from "lucide-react";
import Nav from "../components/Nav";
import Phone from "../components/Phone";

const dates = Array.from({ length: 30 }, (_, index) => index + 1);
const activeDates = [4, 12, 18, 20, 26];

export default function Progress() {
  return (
    <Phone title="Progress">
      <div className="relative h-full overflow-hidden bg-[#F6FAFD] pb-[96px] text-left">
        <div className="px-8 pt-8">
          <button className="grid h-10 w-10 place-items-center rounded-full border border-[#17324D]/20 text-[#17324D]">
            <ArrowLeft size={18} strokeWidth={2.2} />
          </button>

          <section className="mt-8">
            <div className="flex items-center gap-3">
              <h3 className="text-[14px] font-black text-[#050505]">
                This week
              </h3>

              <CalendarDays size={17} className="text-[#17324D]" />
            </div>

            <div className="mt-5 h-44 rounded-[24px] border border-[#427AB5]/20 bg-white px-4 py-4 shadow-[0_14px_30px_rgba(64,106,175,0.08)]">
              <div className="mb-4 flex gap-4">
                <div className="h-1.5 w-10 rounded-full bg-[#406AAF]/45" />
                <div className="h-1.5 w-7 rounded-full bg-[#406AAF]/35" />
                <div className="h-1.5 w-8 rounded-full bg-[#406AAF]/35" />
              </div>

              <svg viewBox="0 0 260 105" className="h-[105px] w-full">
                <line x1="0" y1="18" x2="260" y2="18" stroke="#D4DEE8" />
                <line x1="0" y1="52" x2="260" y2="52" stroke="#D4DEE8" />
                <line x1="0" y1="86" x2="260" y2="86" stroke="#D4DEE8" />

                <polyline
                  points="15,72 58,55 101,78 144,38 187,60 230,20 255,56"
                  fill="none"
                  stroke="#406AAF"
                  strokeWidth="2"
                />

                {[
                  [15, 72],
                  [58, 55],
                  [101, 78],
                  [144, 38],
                  [187, 60],
                  [230, 20],
                  [255, 56],
                ].map(([x, y], index) => (
                  <circle
                    key={index}
                    cx={x}
                    cy={y}
                    r="4"
                    fill="#F6FAFD"
                    stroke="#050505"
                    strokeWidth="1.5"
                  />
                ))}
              </svg>

              <div className="ml-auto mt-1 h-6 w-14 rounded-full border border-[#050505] bg-[#427AB5]/15" />
            </div>
          </section>

          <section className="mt-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h3 className="text-[14px] font-black text-[#050505]">
                  March 2026
                </h3>

                <ChevronDown size={16} className="text-[#17324D]" />
              </div>

              <button className="grid h-8 w-8 place-items-center rounded-full text-[#17324D]">
                <Download size={16} />
              </button>
            </div>

            <div className="mt-5 mb-4 flex gap-4">
              <div className="h-1.5 w-10 rounded-full bg-[#406AAF]/45" />
              <div className="h-1.5 w-7 rounded-full bg-[#406AAF]/35" />
              <div className="h-1.5 w-8 rounded-full bg-[#406AAF]/35" />
            </div>

            <div className="grid grid-cols-7 gap-2">
              {dates.map((date) => (
                <button
                  key={date}
                  className={`grid h-8 place-items-center rounded-[10px] border text-[10px] font-black ${
                    activeDates.includes(date)
                      ? "border-[#050505] bg-[#050505] text-white"
                      : "border-[#050505] bg-white text-[#050505]"
                  }`}
                >
                  {date}
                </button>
              ))}
            </div>
          </section>

          <section className="mt-8">
            <h3 className="text-[14px] font-black text-[#050505]">18 th</h3>

            <div className="mt-5 space-y-3">
              <div className="h-1.5 w-28 rounded-full bg-[#050505]/45" />
              <div className="h-1.5 w-full rounded-full bg-[#406AAF]/30" />
            </div>
          </section>
        </div>

        <Nav active="progress" />
      </div>
    </Phone>
  );
}