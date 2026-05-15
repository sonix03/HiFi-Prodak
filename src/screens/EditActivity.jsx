import { Clock3, FileText, PencilLine, Route, Save, TimerReset } from "lucide-react";
import Phone from "../components/Phone";

const metrics = [
  { label: "Distance", value: "2.4 km", icon: Route },
  { label: "Duration", value: "00:26", icon: Clock3 },
  { label: "Notes", value: "Add summary", icon: FileText },
];

export default function EditActivity() {
  return (
    <Phone title="Edit Activity">
      <div className="relative h-full overflow-hidden bg-[#F6FAFD] px-6 pb-8 pt-8 text-left">
        <div className="rounded-[30px] border border-[#427AB5]/18 bg-white p-6 shadow-[0_20px_44px_rgba(64,106,175,0.1)]">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#427AB5]">
                Activity Editor
              </p>
              <h2 className="mt-1 text-[18px] font-black text-[#17324D]">
                Edit activity
              </h2>
            </div>

            <div className="grid h-14 w-14 place-items-center rounded-[18px] bg-[#427AB5] text-white shadow-[0_14px_30px_rgba(64,106,175,0.24)]">
              <PencilLine size={24} strokeWidth={2.1} />
            </div>
          </div>

          <div className="mt-6 rounded-[22px] border border-[#427AB5]/14 bg-[#D8E1EB]/45 p-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#5D6F8B]">
              Activity Title
            </p>
            <div className="mt-3 h-4 w-40 rounded-full bg-white" />
          </div>

          <div className="mt-5 grid grid-cols-1 gap-3">
            {metrics.map((metric) => {
              const Icon = metric.icon;

              return (
                <div
                  key={metric.label}
                  className="flex items-center gap-4 rounded-[20px] border border-[#427AB5]/14 bg-[#F6FAFD] p-4"
                >
                  <div className="grid h-11 w-11 place-items-center rounded-[14px] bg-white text-[#427AB5]">
                    <Icon size={18} strokeWidth={2.1} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#5D6F8B]">
                      {metric.label}
                    </p>
                    <p className="mt-1 text-[12px] font-black text-[#17324D]">
                      {metric.value}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3">
            <div className="rounded-[20px] border border-[#427AB5]/14 bg-[#FFF8E8] p-4">
              <TimerReset size={17} className="text-[#17324D]" />
              <p className="mt-4 text-[11px] font-black text-[#17324D]">
                Adjust Timer
              </p>
              <p className="mt-1 text-[10px] font-medium text-[#5D6F8B]">
                Fix start and finish time
              </p>
            </div>

            <div className="rounded-[20px] border border-[#427AB5]/14 bg-white p-4">
              <Save size={17} className="text-[#17324D]" />
              <p className="mt-4 text-[11px] font-black text-[#17324D]">
                Save Draft
              </p>
              <p className="mt-1 text-[10px] font-medium text-[#5D6F8B]">
                Keep changes before publishing
              </p>
            </div>
          </div>

          <button className="mt-6 h-12 w-full rounded-full bg-[#17324D] text-[12px] font-black text-white shadow-[0_16px_28px_rgba(23,50,77,0.24)]">
            Save Activity
          </button>
        </div>
      </div>
    </Phone>
  );
}
