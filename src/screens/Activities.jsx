import { CalendarRange, Clock3, Filter, Route, SlidersHorizontal } from "lucide-react";
import Phone from "../components/Phone";

const activities = [
  { title: "Morning Ride", meta: "Cycling • 24 Apr 2026", stat: "18.2 km", icon: Route },
  { title: "Deep Work Sprint", meta: "Focus • 23 Apr 2026", stat: "3h 10m", icon: Clock3 },
  { title: "Club Meetup", meta: "Event • 21 Apr 2026", stat: "12 people", icon: CalendarRange },
];

export default function Activities() {
  return (
    <Phone title="Activities">
      <div className="relative h-full overflow-hidden bg-[#F6FAFD] px-6 pb-8 pt-8 text-left">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#427AB5]">
              Archive
            </p>
            <h2 className="mt-1 text-[20px] font-black text-[#17324D]">
              Activities
            </h2>
          </div>

          <button className="grid h-11 w-11 place-items-center rounded-full border border-[#427AB5]/16 bg-white text-[#17324D]">
            <SlidersHorizontal size={18} strokeWidth={2.1} />
          </button>
        </div>

        <div className="mt-5 flex gap-2">
          <button className="flex items-center gap-2 rounded-full border border-[#427AB5]/16 bg-white px-4 py-2 text-[10px] font-bold text-[#17324D]">
            <Filter size={14} strokeWidth={2.2} />
            This Month
          </button>
          <button className="rounded-full border border-[#427AB5]/16 bg-[#FFF8E8] px-4 py-2 text-[10px] font-bold text-[#17324D]">
            Clubs
          </button>
          <button className="rounded-full border border-[#427AB5]/16 bg-white px-4 py-2 text-[10px] font-bold text-[#17324D]">
            Personal
          </button>
        </div>

        <div className="mt-6 space-y-4">
          {activities.map((activity) => {
            const Icon = activity.icon;

            return (
              <article
                key={activity.title}
                className="rounded-[26px] border border-[#427AB5]/18 bg-white p-5 shadow-[0_16px_34px_rgba(64,106,175,0.08)]"
              >
                <div className="flex items-start gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-[16px] bg-[#427AB5]/10 text-[#427AB5]">
                    <Icon size={20} strokeWidth={2.1} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-[13px] font-black text-[#17324D]">
                          {activity.title}
                        </h3>
                        <p className="mt-1 text-[10px] font-medium text-[#5D6F8B]">
                          {activity.meta}
                        </p>
                      </div>

                      <span className="rounded-full bg-[#D8E1EB]/75 px-3 py-1 text-[10px] font-bold text-[#17324D]">
                        {activity.stat}
                      </span>
                    </div>

                    <div className="mt-4 h-2 rounded-full bg-[#427AB5]/10">
                      <div className="h-full w-2/3 rounded-full bg-[#427AB5]" />
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </Phone>
  );
}
