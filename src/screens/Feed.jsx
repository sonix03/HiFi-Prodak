import {
  Bell,
  Bike,
  Heart,
  MessageCircle,
  MoreHorizontal,
  Search,
  Share2,
} from "lucide-react";
import ActivityMap from "../components/ActivityMap";
import Avatar from "../components/Avatar";
import Nav from "../components/Nav";
import Phone from "../components/Phone";
import Pill from "../components/Pill";
import Stat from "../components/Stat";

const stats = [
  ["7.42", "km"],
  ["38:24", "time"],
  ["5:10", "pace"],
];

export default function Feed() {
  return (
    <Phone title="Feed">
      <div className="h-full bg-[#FFE8BE]/45 pb-[112px] text-left">
        <div className="px-6 pt-10">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#5D6F8B]">
                Today
              </p>
              <h2 className="mt-2 text-[2rem] font-black leading-none tracking-[-0.03em] text-[#17324D]">
                Activity feed
              </h2>
              <p className="mt-2 text-[13px] leading-6 text-[#5D6F8B]">
                Fresh rides, kudos, and route updates from your circle.
              </p>
            </div>
            <div className="flex gap-2">
              <button className="grid h-11 w-11 place-items-center rounded-full border border-[#427AB5]/20 bg-white text-[#427AB5]">
                <Search size={17} />
              </button>
              <button className="grid h-11 w-11 place-items-center rounded-full border border-[#427AB5]/20 bg-white text-[#427AB5]">
                <Bell size={17} />
              </button>
            </div>
          </div>

          <div className="mt-5 flex gap-2">
            <Pill active>Following</Pill>
            <Pill>Clubs</Pill>
            <Pill>Local</Pill>
          </div>

          <article className="mt-5 rounded-[28px] border border-[#427AB5]/20 bg-white p-5 shadow-[0_16px_34px_rgba(64,106,175,0.08)]">
            <div className="flex items-center gap-3">
              <Avatar initials="MF" />
              <div className="min-w-0 flex-1">
                <p className="truncate text-[15px] font-black text-[#17324D]">
                  Muhammad Fathir Rizky
                </p>
                <p className="mt-1 text-[11px] font-semibold tracking-[0.01em] text-[#5D6F8B]">
                  Yogyakarta · 6:42 AM
                </p>
              </div>
              <MoreHorizontal size={18} className="text-[#5D6F8B]" />
            </div>

            <div className="mt-5 flex items-center gap-2 text-[#427AB5]">
              <Bike size={17} />
              <h3 className="text-[1.35rem] font-black tracking-[-0.02em] text-[#17324D]">
                Morning tempo ride
              </h3>
            </div>
            <p className="mt-2 text-[13px] leading-6 text-[#5D6F8B]">
              Clean cadence on the north loop before class. Legs felt sharp and
              the pace stayed consistent across the final segment.
            </p>

            <div className="mt-5">
              <ActivityMap height="h-40" />
            </div>

            <div className="mt-5 grid grid-cols-3 divide-x divide-[#427AB5]/20 rounded-[22px] border border-[#427AB5]/20 px-4 py-4">
              {stats.map(([number, label], index) => (
                <div key={label} className={index === 0 ? "" : "pl-4"}>
                  <Stat n={number} label={label} />
                </div>
              ))}
            </div>

            <div className="mt-5 flex items-center gap-4 text-[#5D6F8B]">
              <Heart size={18} />
              <MessageCircle size={18} />
              <Share2 size={18} />
              <span className="ml-auto text-[11px] font-bold uppercase tracking-[0.16em] text-[#427AB5]">
                18 kudos
              </span>
            </div>
          </article>
        </div>
        <Nav active="home" />
      </div>
    </Phone>
  );
}
