import { Search, Settings, Trophy, Users } from "lucide-react";
import Avatar from "../components/Avatar";
import Nav from "../components/Nav";
import Phone from "../components/Phone";
import Pill from "../components/Pill";

const challenges = [
  ["Fun Run 10K", "124 runners", "64%"],
  ["Weekend Cycling", "86 riders", "42%"],
  ["Gym Consistency", "52 athletes", "78%"],
];

export default function Groups() {
  return (
    <Phone title="Groups">
      <div className="h-full bg-[#FFE8BE]/45 pb-[112px] text-left">
        <div className="px-6 pt-10">
          <div className="flex items-center justify-between">
            <button className="grid h-11 w-11 place-items-center rounded-full border border-[#427AB5]/20 bg-white text-[#427AB5]">
              <Search size={17} />
            </button>
            <h2 className="text-[1.5rem] font-black tracking-[-0.02em] text-[#17324D]">Clubs</h2>
            <button className="grid h-11 w-11 place-items-center rounded-full border border-[#427AB5]/20 bg-white text-[#427AB5]">
              <Settings size={17} />
            </button>
          </div>

          <div className="mt-5 flex gap-2">
            <Pill active>Challenge</Pill>
            <Pill>Jogging</Pill>
            <Pill>Cycling</Pill>
          </div>

          <section className="mt-5 rounded-[28px] border border-[#427AB5]/20 bg-white p-5 shadow-[0_16px_34px_rgba(64,106,175,0.08)]">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#5D6F8B]">
                  Active challenge
                </p>
                <h3 className="mt-2 text-[1.35rem] font-black tracking-[-0.02em] text-[#17324D]">
                  Compete with friends
                </h3>
              </div>
              <div className="grid h-11 w-11 place-items-center rounded-full bg-[#FFE8BE] text-[#406AAF]">
                <Trophy size={19} />
              </div>
            </div>

            <div className="mt-5 space-y-4">
              {challenges.map(([challenge, members, progress]) => (
                <div key={challenge} className="border-t border-[#427AB5]/20 pt-4 first:border-t-0 first:pt-0">
                  <div className="flex items-center gap-3">
                    <Avatar initials={challenge.slice(0, 2).toUpperCase()} size="sm" tone="cream" />
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-[13px] font-black text-[#17324D]">
                        {challenge}
                      </p>
                      <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#5D6F8B]">
                        {members}
                      </p>
                    </div>
                    <button className="rounded-full bg-[#427AB5] px-3.5 py-2 text-[10px] font-black uppercase tracking-[0.14em] text-white">
                      Join
                    </button>
                  </div>
                  <div className="mt-3 h-1.5 rounded-full bg-[#FFE8BE]">
                    <div
                      className="h-1.5 rounded-full bg-[#F7DD7D]"
                      style={{ width: progress }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-5 rounded-[24px] bg-[#406AAF] p-5 text-white">
            <Users size={18} className="text-[#F7DD7D]" />
            <p className="mt-3 text-[1.05rem] font-black tracking-[-0.01em]">Create your own club</p>
            <p className="mt-2 text-[13px] leading-6 text-white/70">
              Build a route board and keep everyone moving together.
            </p>
          </section>
        </div>
        <Nav active="groups" />
      </div>
    </Phone>
  );
}
