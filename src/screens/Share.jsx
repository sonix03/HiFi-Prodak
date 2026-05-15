import { Copy, Globe2, Lock, MessageCircle, Send, Share2 } from "lucide-react";
import Phone from "../components/Phone";

const shareTargets = [
  { name: "Feed", icon: Globe2, tone: "bg-[#427AB5]/12 text-[#427AB5]" },
  { name: "Club", icon: MessageCircle, tone: "bg-[#F7DD7D]/35 text-[#17324D]" },
  { name: "Direct", icon: Send, tone: "bg-[#D8E1EB] text-[#17324D]" },
];

export default function Share() {
  return (
    <Phone title="Share">
      <div className="relative h-full overflow-hidden bg-[#F6FAFD] px-6 pb-8 pt-8 text-left">
        <div className="rounded-[30px] border border-[#427AB5]/18 bg-white p-6 shadow-[0_20px_44px_rgba(64,106,175,0.1)]">
          <div className="flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-[16px] bg-[#427AB5] text-white shadow-[0_14px_30px_rgba(64,106,175,0.26)]">
              <Share2 size={22} strokeWidth={2.2} />
            </div>

            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#427AB5]">
                Quick Share
              </p>
              <h2 className="mt-1 text-[18px] font-black text-[#17324D]">
                Share your activity
              </h2>
            </div>
          </div>

          <div className="mt-6 rounded-[22px] border border-[#427AB5]/14 bg-[#F6FAFD] p-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#5D6F8B]">
              Caption
            </p>
            <div className="mt-3 h-24 rounded-[18px] border border-dashed border-[#427AB5]/28 bg-white" />
          </div>

          <div className="mt-5 grid grid-cols-3 gap-3">
            {shareTargets.map((item) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.name}
                  className="rounded-[20px] border border-[#427AB5]/14 bg-[#F6FAFD] p-3 text-left"
                >
                  <div
                    className={`grid h-10 w-10 place-items-center rounded-[14px] ${item.tone}`}
                  >
                    <Icon size={18} strokeWidth={2.1} />
                  </div>
                  <p className="mt-4 text-[11px] font-black text-[#17324D]">
                    {item.name}
                  </p>
                </button>
              );
            })}
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3">
            <div className="rounded-[20px] border border-[#427AB5]/14 bg-[#FFF8E8] p-4">
              <div className="flex items-center gap-2 text-[#17324D]">
                <Lock size={15} strokeWidth={2.2} />
                <p className="text-[11px] font-black">Visibility</p>
              </div>
              <p className="mt-3 text-[10px] font-medium text-[#5D6F8B]">
                Club members only
              </p>
            </div>

            <div className="rounded-[20px] border border-[#427AB5]/14 bg-[#D8E1EB]/55 p-4">
              <div className="flex items-center gap-2 text-[#17324D]">
                <Copy size={15} strokeWidth={2.2} />
                <p className="text-[11px] font-black">Copy Link</p>
              </div>
              <p className="mt-3 text-[10px] font-medium text-[#5D6F8B]">
                Generate shareable URL
              </p>
            </div>
          </div>

          <button className="mt-6 h-12 w-full rounded-full bg-[#17324D] text-[12px] font-black text-white shadow-[0_16px_28px_rgba(23,50,77,0.24)]">
            Share Now
          </button>
        </div>
      </div>
    </Phone>
  );
}
