import { Heart, MessageCircle, MoreHorizontal, Share2 } from "lucide-react";
import ActivityMap from "../components/ActivityMap";
import Avatar from "../components/Avatar";
import Nav from "../components/Nav";
import Phone from "../components/Phone";
import Stat from "../components/Stat";
import Top from "../components/Top";

export default function ActivityDetail() {
  return (
    <Phone title="Activity Detail">
      <div className="h-full bg-[#FFE8BE]/45 pb-[112px] text-left">
        <Top title="Activity detail" right={<Share2 size={16} />} />
        <div className="px-6">
          <article className="rounded-[28px] border border-[#427AB5]/20 bg-white p-5 shadow-[0_16px_34px_rgba(64,106,175,0.08)]">
            <div className="flex items-center gap-3">
              <Avatar initials="MF" />
              <div className="min-w-0 flex-1">
                <p className="truncate text-[15px] font-black text-[#17324D]">
                  Muhammad Fathir Rizky
                </p>
                <p className="mt-1 text-[11px] font-semibold text-[#5D6F8B]">
                  Today · 10:25
                </p>
              </div>
              <MoreHorizontal size={18} className="text-[#5D6F8B]" />
            </div>

            <h2 className="mt-5 text-[1.8rem] font-black leading-[1.05] tracking-[-0.03em] text-[#17324D]">
              This is not slow
            </h2>
            <p className="mt-2 text-[13px] leading-6 text-[#5D6F8B]">
              Strong finish on the final climb.
            </p>

            <div className="mt-5">
              <ActivityMap height="h-40" />
            </div>

            <div className="mt-5 grid grid-cols-3 divide-x divide-[#427AB5]/20 rounded-[22px] border border-[#427AB5]/20 px-4 py-4">
              <div>
                <Stat n="2.4" label="km" />
              </div>
              <div className="pl-4">
                <Stat n="09:11" label="pace" />
              </div>
              <div className="pl-4">
                <Stat n="18" label="kudos" />
              </div>
            </div>

            <div className="mt-5 flex items-center gap-4 text-[#5D6F8B]">
              <Heart size={18} />
              <MessageCircle size={18} />
              <Share2 size={18} />
              <span className="ml-auto text-[11px] font-bold uppercase tracking-[0.16em] text-[#427AB5]">
                View splits
              </span>
            </div>
          </article>
        </div>
        <Nav active="home" />
      </div>
    </Phone>
  );
}
