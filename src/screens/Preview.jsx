import { Navigation, Radio, Trophy } from "lucide-react";
import ActivityMap from "../components/ActivityMap";
import Phone from "../components/Phone";

export default function Preview() {
  return (
    <Phone title="Preview / Splash">
      <div className="relative isolate h-full overflow-hidden bg-[#427AB5] p-6 text-white">
        <div className="pointer-events-none absolute -right-16 top-12 z-0 h-44 w-44 rounded-full bg-[#F7DD7D]/30 blur-2xl" />
        <div className="pointer-events-none absolute -left-20 bottom-12 z-0 h-56 w-56 rounded-full bg-[#406AAF]/55 blur-2xl" />
        <div className="relative z-10 pt-16">
          <div className="grid h-20 w-20 place-items-center rounded-[24px] bg-white shadow-[0_18px_40px_rgba(23,50,77,0.24)]">
            <Navigation className="text-[#427AB5]" size={36} />
          </div>
          <h1 className="mt-8 text-[3rem] font-black leading-none tracking-[-0.05em]">PRODAK</h1>
          <p className="mt-3 max-w-[220px] text-[13px] leading-6 text-white/80">
            Track every route, compare the effort, and keep the crew moving.
          </p>
        </div>
        <div className="absolute bottom-6 left-6 right-6 z-10">
          <ActivityMap height="h-36" dark />
          <div className="mt-3 grid grid-cols-2 gap-2.5">
            <div className="rounded-[22px] bg-white/14 p-4">
              <Radio size={16} className="text-[#F7DD7D]" />
              <p className="mt-3 text-xl font-black tracking-[-0.02em]">12.4 km</p>
              <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white/70">latest ride</p>
            </div>
            <div className="rounded-[22px] bg-white/14 p-4">
              <Trophy size={16} className="text-[#F7DD7D]" />
              <p className="mt-3 text-xl font-black tracking-[-0.02em]">4 clubs</p>
              <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white/70">active now</p>
            </div>
          </div>
        </div>
      </div>
    </Phone>
  );
}
