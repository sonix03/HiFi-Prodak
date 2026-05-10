import { Camera, Pause, Radio } from "lucide-react";
import ActivityMap from "../components/ActivityMap";
import Nav from "../components/Nav";
import Phone from "../components/Phone";
import Stat from "../components/Stat";
import Top from "../components/Top";

export default function Record() {
  return (
    <Phone title="Record">
      <div className="h-full bg-[#FFE8BE]/45 pb-[112px] text-left">
        <div className="bg-[#FFE8BE] pb-6">
          <Top title="Record" right={<Camera size={16} />} />
          <div className="px-6">
            <ActivityMap height="h-[300px]" />
            <div className="mt-4 rounded-[24px] border border-[#427AB5]/20 bg-white p-4 shadow-[0_18px_36px_rgba(64,106,175,0.12)]">
              <div className="grid grid-cols-3 divide-x divide-[#427AB5]/20">
                <div>
                  <Stat n="00:13" label="time" />
                </div>
                <div className="pl-4">
                  <Stat n="1.2" label="km" />
                </div>
                <div className="pl-4">
                  <Stat n="5:09" label="pace" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-6 pt-5">
          <div className="flex items-center gap-3 rounded-[24px] border border-[#427AB5]/20 bg-white p-4">
            <div className="grid h-11 w-11 place-items-center rounded-full bg-[#FFE8BE] text-[#406AAF]">
              <Radio size={18} />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[15px] font-black text-[#17324D]">Outdoor ride</p>
              <p className="mt-1 text-[11px] font-semibold text-[#5D6F8B]">
                GPS signal locked
              </p>
            </div>
            <button className="grid h-12 w-12 place-items-center rounded-full bg-[#427AB5] text-white">
              <Pause size={18} />
            </button>
          </div>
        </div>
        <Nav active="record" />
      </div>
    </Phone>
  );
}
