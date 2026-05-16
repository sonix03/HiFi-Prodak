import {
  ArrowLeft,
  ChevronRight,
  ImagePlus,
  Medal,
  MoreHorizontal,
  Trophy,
  WalletCards,
} from "lucide-react";
import Nav from "../components/Nav";
import Phone from "../components/Phone";

const stats = [
  { label: "Post", value: "3" },
  { label: "Following", value: "45" },
  { label: "Followers", value: "48" },
];

const achievements = [
  { icon: Trophy, value: "82%" },
  { icon: Medal, value: "68%" },
  { icon: Trophy, value: "55%" },
];

export default function Profile() {
  return (
    <Phone title="Profile">
      <div className="relative h-full overflow-hidden bg-[#F6FAFD] pb-[96px] text-left">
        <div className="px-8 pt-8">
          <div className="flex items-center justify-between">
            <button className="grid h-10 w-10 place-items-center rounded-full border border-[#17324D]/20 text-[#17324D]">
              <ArrowLeft size={18} strokeWidth={2.2} />
            </button>

            <button className="grid h-10 w-10 place-items-center rounded-full border border-[#17324D]/20 text-[#17324D]">
              <MoreHorizontal size={18} strokeWidth={2.2} />
            </button>
          </div>

          <section className="mt-8">
            <div className="flex items-center gap-5">
              <div className="h-16 w-16 shrink-0 rounded-full bg-[#050505]" />

              <div className="min-w-0">
                <h2 className="text-[15px] font-black leading-tight text-[#050505]">
                  Muhammad Fathur Rizky
                </h2>

                <p className="mt-1 text-[10px] font-semibold text-[#17324D]/70">
                  Silicon Valley, United States
                </p>
              </div>
            </div>

            <div className="mt-7 grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-[10px] font-semibold text-[#050505]/75">
                    {stat.label}
                  </p>

                  <p className="mt-2 text-[15px] font-black text-[#050505]">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-7">
            <div className="flex gap-4 overflow-hidden">
              <div className="grid h-24 min-w-[140px] place-items-center rounded-[20px] border border-[#427AB5]/25 bg-[#427AB5]/10">
                <ImagePlus size={26} className="text-[#427AB5]" />
              </div>

              <div className="grid h-24 min-w-[78px] place-items-center rounded-[20px] border border-[#427AB5]/25 bg-[#427AB5]/10">
                <ImagePlus size={22} className="text-[#427AB5]" />
              </div>

              <div className="grid h-24 min-w-[78px] place-items-center rounded-[20px] border border-[#427AB5]/25 bg-[#427AB5]/10">
                <ImagePlus size={22} className="text-[#427AB5]" />
              </div>
            </div>
          </section>
        </div>

        <section className="mt-8 border-y border-[#17324D]/12 px-8 py-7">
          <div className="flex items-center gap-3">
            <h3 className="text-[14px] font-black text-[#050505]">
              Achievement
            </h3>

            <Trophy size={18} className="text-[#17324D]" />
          </div>

          <div className="mt-6 space-y-5">
            {achievements.map((item, index) => {
              const Icon = item.icon;

              return (
                <div key={index} className="flex items-center gap-4">
                  <Icon size={18} className="text-[#17324D]" />

                  <div className="flex-1">
                    <div className="h-1.5 rounded-full bg-[#406AAF]/25">
                      <div
                        className="h-1.5 rounded-full bg-[#17324D]/55"
                        style={{ width: item.value }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <button className="mt-6 text-[10px] font-semibold text-[#050505]/70">
            See more..
          </button>
        </section>

        <section className="border-b border-[#17324D]/12 px-8 py-7">
          <div className="flex items-center gap-3">
            <h3 className="text-[14px] font-black text-[#050505]">
              This week
            </h3>

            <WalletCards size={17} className="text-[#17324D]" />
          </div>

          <div className="mt-7 flex items-center justify-between rounded-[22px] border border-[#427AB5]/20 bg-white px-4 py-4 shadow-[0_14px_30px_rgba(64,106,175,0.08)]">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-[#427AB5]/10 text-[#427AB5]">
                <Trophy size={17} />
              </div>

              <div>
                <p className="text-[12px] font-black text-[#050505]">
                  Activities
                </p>

                <p className="mt-1 text-[10px] font-semibold text-[#050505]/65">
                  April 10, 2026
                </p>
              </div>
            </div>

            <ChevronRight size={18} className="text-[#050505]" />
          </div>
        </section>

        <Nav active="progress" />
      </div>
    </Phone>
  );
}