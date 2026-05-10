import { Users } from "lucide-react";
import ActivityMap from "../components/ActivityMap";
import Avatar from "../components/Avatar";
import Nav from "../components/Nav";
import Phone from "../components/Phone";
import Stat from "../components/Stat";
import Top from "../components/Top";

export default function Club() {
  return (
    <Phone title="Club Detail">
      <div className="h-full bg-[#FFE8BE]/45 pb-[112px] text-left">
        <div className="bg-[#427AB5] pb-11">
          <Top title="Club detail" light right={<Users size={16} />} />
          <div className="px-6">
            <ActivityMap height="h-32" dark />
          </div>
        </div>

        <div className="-mt-8 px-6">
          <section className="rounded-[28px] border border-[#427AB5]/20 bg-white p-5 shadow-[0_16px_34px_rgba(64,106,175,0.1)]">
            <div className="flex items-start gap-4">
              <Avatar initials="PS" size="lg" tone="cream" />
              <div className="min-w-0 flex-1">
                <h3 className="text-[1.2rem] font-black tracking-[-0.02em] text-[#17324D]">Pejuang SCBD</h3>
                <p className="mt-1 text-[11px] font-semibold text-[#5D6F8B]">
                  Jakarta · 2,345 members
                </p>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-2.5">
              <div className="rounded-[20px] bg-[#FFE8BE]/45 p-4">
                <Stat n="41" label="routes" />
              </div>
              <div className="rounded-[20px] bg-[#FFE8BE]/45 p-4">
                <Stat n="18k" label="km" />
              </div>
              <div className="rounded-[20px] bg-[#FFE8BE]/45 p-4">
                <Stat n="12" label="events" />
              </div>
            </div>

            <button className="mt-5 h-11 w-full rounded-full bg-[#427AB5] text-[11px] font-black uppercase tracking-[0.2em] text-white">
              Join club
            </button>
          </section>

          <section className="mt-5 rounded-[24px] border border-[#427AB5]/20 bg-white p-5">
            <p className="text-[15px] font-black text-[#17324D]">Newest post</p>
            <div className="mt-4 flex gap-3">
              <Avatar initials="AR" size="sm" tone="blue" />
              <div>
                <p className="text-[13px] font-black text-[#17324D]">Afternoon group ride</p>
                <p className="mt-1 text-[11px] leading-5 text-[#5D6F8B]">
                  24.3 km loop planned for Saturday morning.
                </p>
              </div>
            </div>
          </section>
        </div>
        <Nav active="groups" />
      </div>
    </Phone>
  );
}
