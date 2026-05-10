import { Bike, Clock, Dumbbell, Flag, Navigation, Plus } from "lucide-react";
import Phone from "../components/Phone";
import Top from "../components/Top";

const activities = [
  [Bike, "Cycling", "10 km"],
  [Navigation, "Running", "5 km"],
  [Dumbbell, "Gym", "4 days"],
  [Clock, "Daily", "30 min"],
];

export default function CreateChallenge() {
  return (
    <Phone title="Create Challenge">
      <div className="h-full bg-[#FFE8BE]/45 text-left">
        <Top title="Create challenge" right={<Plus size={16} />} />
        <div className="px-6">
          <section className="rounded-[28px] bg-[#406AAF] p-5 text-white">
            <Flag size={20} className="text-[#F7DD7D]" />
            <h2 className="mt-4 text-[1.8rem] font-black leading-[1.05] tracking-[-0.03em]">
              Set the next club target
            </h2>
            <p className="mt-3 text-[13px] leading-6 text-white/70">
              Pick one effort type and keep the target clear.
            </p>
          </section>

          <div className="mt-5 grid grid-cols-2 gap-3">
            {activities.map(([Icon, label, target], index) => (
              <button
                key={label}
                className={`rounded-[22px] border p-4 text-left ${
                  index === 0
                    ? "border-[#427AB5] bg-white shadow-[0_12px_24px_rgba(66,122,181,0.14)]"
                    : "border-[#427AB5]/20 bg-white"
                }`}
              >
                <Icon className="text-[#427AB5]" size={22} />
                <p className="mt-4 text-[15px] font-black text-[#17324D]">{label}</p>
                <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.12em] text-[#5D6F8B]">
                  {target}
                </p>
              </button>
            ))}
          </div>

          <section className="mt-5 rounded-[24px] border border-[#427AB5]/20 bg-white p-4">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#5D6F8B]">
              Distance target
            </p>
            <div className="mt-3 flex h-13 items-center justify-between rounded-[18px] bg-[#FFE8BE]/45 px-4">
              <span className="text-[1.4rem] font-black tracking-[-0.02em] text-[#17324D]">10 km</span>
              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#427AB5]">Cycling</span>
            </div>
          </section>

          <button className="mt-5 h-12 w-full rounded-full bg-[#427AB5] text-[11px] font-black uppercase tracking-[0.2em] text-white shadow-[0_14px_28px_rgba(66,122,181,0.25)]">
            Continue
          </button>
        </div>
      </div>
    </Phone>
  );
}
