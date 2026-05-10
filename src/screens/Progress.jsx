import { CalendarDays, TrendingUp } from "lucide-react";
import Nav from "../components/Nav";
import Phone from "../components/Phone";
import Pill from "../components/Pill";
import Stat from "../components/Stat";
import Top from "../components/Top";

const weeklyProgress = [44, 68, 42, 76, 58, 92, 64];
const days = ["M", "T", "W", "T", "F", "S", "S"];
const highlightedDates = [4, 12, 13, 20, 26];

export default function Progress() {
  return (
    <Phone title="Progress">
      <div className="h-full bg-[#FFE8BE]/45 pb-[112px] text-left">
        <Top title="Training log" right={<CalendarDays size={16} />} />
        <div className="px-6">
          <div className="flex gap-2">
            <Pill active>Week</Pill>
            <Pill>Month</Pill>
            <Pill>Year</Pill>
          </div>

          <section className="mt-5 rounded-[28px] border border-[#427AB5]/20 bg-white p-5 shadow-[0_16px_34px_rgba(64,106,175,0.08)]">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#5D6F8B]">
                  Weekly effort
                </p>
                <h3 className="mt-2 text-[1.5rem] font-black leading-none tracking-[-0.02em] text-[#17324D]">
                  5 activities
                </h3>
                <p className="mt-2 text-[13px] leading-6 text-[#5D6F8B]">
                  Strong consistency with one standout weekend push.
                </p>
              </div>
              <div className="grid h-11 w-11 place-items-center rounded-full bg-[#FFE8BE] text-[#406AAF]">
                <TrendingUp size={19} />
              </div>
            </div>

            <div className="mt-6 flex h-36 items-end gap-2 border-b border-[#427AB5]/20 pb-3">
              {weeklyProgress.map((height, index) => (
                <div
                  key={`${height}-${days[index]}`}
                  className="flex flex-1 flex-col items-center gap-2"
                >
                  <div
                    className={`w-full rounded-full ${
                      index === 5 ? "bg-[#427AB5]" : "bg-[#406AAF]/12"
                    }`}
                    style={{ height: `${height}%` }}
                  />
                  <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#5D6F8B]">
                    {days[index]}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-5 grid grid-cols-3 divide-x divide-[#427AB5]/20 rounded-[22px] bg-[#FFE8BE]/45 px-4 py-4">
              <div>
                <Stat n="32.8" label="km" />
              </div>
              <div className="pl-4">
                <Stat n="3h 12m" label="time" />
              </div>
              <div className="pl-4">
                <Stat n="421" label="gain" />
              </div>
            </div>
          </section>

          <section className="mt-5 rounded-[28px] border border-[#427AB5]/20 bg-white p-5 shadow-[0_12px_30px_rgba(64,106,175,0.07)]">
            <div className="flex items-end justify-between gap-3">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#5D6F8B]">
                  Calendar
                </p>
                <p className="mt-2 text-lg font-black tracking-[-0.01em] text-[#17324D]">
                  March 2026
                </p>
              </div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#427AB5]">
                5 sessions
              </p>
            </div>
            <div className="mt-4 grid grid-cols-7 gap-1.5">
              {Array.from({ length: 31 }).map((_, index) => (
                <div
                  key={index}
                  className={`grid h-8 place-items-center rounded-xl text-[10px] font-bold ${
                    highlightedDates.includes(index)
                      ? "bg-[#F7DD7D] text-[#17324D]"
                      : "bg-[#FFE8BE]/45 text-[#5D6F8B]"
                  }`}
                >
                  {index + 1}
                </div>
              ))}
            </div>
          </section>
        </div>
        <Nav active="progress" />
      </div>
    </Phone>
  );
}
