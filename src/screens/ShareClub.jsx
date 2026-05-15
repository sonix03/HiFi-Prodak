import { MessageSquareShare, Send, ShieldCheck, Users } from "lucide-react";
import Phone from "../components/Phone";

const clubs = [
  { name: "Pejuang SCBD", members: "12,096 members", active: true },
  { name: "Weekend Run Club", members: "4,821 members", active: false },
  { name: "Design Circle", members: "1,204 members", active: false },
];

export default function ShareClub() {
  return (
    <Phone title="Share Club">
      <div className="relative h-full overflow-hidden bg-[#F6FAFD] px-6 pb-8 pt-8 text-left">
        <div className="rounded-[30px] border border-[#427AB5]/18 bg-white p-6 shadow-[0_20px_44px_rgba(64,106,175,0.1)]">
          <div className="flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-[16px] bg-[#427AB5] text-white shadow-[0_14px_30px_rgba(64,106,175,0.24)]">
              <MessageSquareShare size={21} strokeWidth={2.1} />
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#427AB5]">
                Club Broadcast
              </p>
              <h2 className="mt-1 text-[18px] font-black text-[#17324D]">
                Share to club
              </h2>
            </div>
          </div>

          <div className="mt-6 rounded-[22px] border border-[#427AB5]/14 bg-[#FFF8E8] p-4">
            <div className="flex items-center gap-2 text-[#17324D]">
              <ShieldCheck size={16} strokeWidth={2.1} />
              <p className="text-[11px] font-black">Posting Scope</p>
            </div>
            <p className="mt-2 text-[10px] font-medium text-[#5D6F8B]">
              Only members in the selected club can view and interact
            </p>
          </div>

          <div className="mt-5 rounded-[20px] border border-[#427AB5]/14 bg-[#F6FAFD] p-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#5D6F8B]">
              Club Message
            </p>
            <div className="mt-3 h-24 rounded-[18px] border border-dashed border-[#427AB5]/24 bg-white" />
          </div>

          <div className="mt-5 space-y-3">
            {clubs.map((club) => (
              <article
                key={club.name}
                className={`flex items-center gap-4 rounded-[22px] border p-4 ${
                  club.active
                    ? "border-[#427AB5]/24 bg-[#427AB5]/10"
                    : "border-[#427AB5]/14 bg-white"
                }`}
              >
                <div className="grid h-12 w-12 place-items-center rounded-[16px] bg-[#D8E1EB]/75 text-[#17324D]">
                  <Users size={19} strokeWidth={2.1} />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-[12px] font-black text-[#17324D]">
                    {club.name}
                  </h3>
                  <p className="mt-1 text-[10px] font-medium text-[#5D6F8B]">
                    {club.members}
                  </p>
                </div>
                <button className="grid h-10 w-10 place-items-center rounded-full bg-[#17324D] text-white">
                  <Send size={16} strokeWidth={2.2} />
                </button>
              </article>
            ))}
          </div>

          <button className="mt-6 h-12 w-full rounded-full bg-[#17324D] text-[12px] font-black text-white shadow-[0_16px_28px_rgba(23,50,77,0.24)]">
            Share to Selected Club
          </button>
        </div>
      </div>
    </Phone>
  );
}
