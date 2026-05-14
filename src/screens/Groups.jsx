import {
  BriefcaseBusiness,
  FlaskConical,
  Palette,
  Search,
  Settings,
  Trophy,
  Watch,
} from "lucide-react";
import Nav from "../components/Nav";
import Phone from "../components/Phone";

const categories = [
  { name: "Work", icon: BriefcaseBusiness },
  { name: "Research", icon: FlaskConical },
  { name: "Arts", icon: Palette },
  { name: "Laboratory", icon: FlaskConical },
];

const challenges = [
  {
    title: "Overtime Challenge",
    desc: "Complete 5 hours of overtime",
    date: "Apr 17 to Apr 30, 2026",
  },
  {
    title: "Overtime Challenge",
    desc: "Complete 5 hours of overtime",
    date: "Apr 17 to Apr 30, 2026",
  },
  {
    title: "Overtime Challenge",
    desc: "Complete 5 hours of overtime",
    date: "Apr 17 to Apr 30, 2026",
  },
  {
    title: "Overtime Challenge",
    desc: "Complete 5 hours of overtime",
    date: "Apr 17 to Apr 30, 2026",
  },
];

export default function Groups() {
  return (
    <Phone title="Challenge">
      <div className="relative h-full overflow-hidden bg-[#F6FAFD] pb-[96px] text-left">
        <div className="px-7 pt-8">
          <div className="flex items-center justify-between">
            <button className="grid h-10 w-10 place-items-center rounded-full text-[#050505]">
              <Search size={19} strokeWidth={2.2} />
            </button>

            <h2 className="text-[17px] font-black text-[#050505]">
              Groups
            </h2>

            <button className="grid h-10 w-10 place-items-center rounded-full text-[#050505]">
              <Settings size={18} strokeWidth={2.2} />
            </button>
          </div>
        </div>

        <div className="mt-8 border-b border-[#17324D]/15">
          <div className="grid grid-cols-2 px-7">
            <button className="border-b-2 border-[#050505] pb-3 text-center text-[11px] font-black text-[#050505]">
              Challenges
            </button>

            <button className="pb-3 text-center text-[11px] font-black text-[#050505]/75">
              Groups
            </button>
          </div>
        </div>

        <div className="border-b border-[#17324D]/15 px-7 py-3">
          <div className="flex gap-2 overflow-hidden">
            {categories.map((category) => {
              const Icon = category.icon;

              return (
                <button
                  key={category.name}
                  className="flex shrink-0 items-center gap-1.5 rounded-full border border-[#050505] bg-white px-3 py-1.5 text-[9px] font-bold text-[#050505]"
                >
                  <Icon size={11} strokeWidth={2.1} />
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>

        <div className="h-[calc(100%-182px)] overflow-y-auto">
          <section className="border-b border-[#17324D]/15 px-7 py-6">
            <div className="flex items-start gap-4">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-[#050505] bg-[#427AB5]/10 text-[#050505]">
                <Watch size={25} strokeWidth={1.8} />
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="text-[14px] font-black leading-tight text-[#050505]">
                  Now It&apos;s Your Time
                </h3>

                <div className="mt-1 flex items-center gap-1.5">
                  <Trophy size={12} className="text-[#050505]" />

                  <p className="text-[10px] font-semibold text-[#050505]/80">
                    Complete 5 hours of overtime
                  </p>
                </div>

                <p className="mt-1 text-[9px] font-semibold text-[#050505]/65">
                  Apr 17 to Apr 30, 2026
                </p>
              </div>
            </div>

            <button className="mt-5 h-8 w-full rounded-full border border-[#050505] bg-[#D8E1EB] text-[11px] font-black text-[#050505]">
              Join
            </button>
          </section>

          <section className="border-b border-[#17324D]/15 px-7 py-6">
            <h3 className="text-[12px] font-black text-[#050505]">
              Active Challenge
            </h3>

            <div className="mt-5 flex items-start gap-4">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-[#050505] bg-[#427AB5]/10 text-[#050505]">
                <Watch size={25} strokeWidth={1.8} />
              </div>

              <div>
                <p className="text-[11px] font-black text-[#050505]">
                  Overtime
                </p>

                <p className="mt-1 text-[10px] font-semibold text-[#050505]/75">
                  Challenge
                </p>
              </div>
            </div>
          </section>

          <section className="px-7 py-6">
            <h3 className="text-[12px] font-black text-[#050505]">
              Recommended For You
            </h3>

            <div className="mt-5 grid grid-cols-2 gap-5">
              {challenges.map((challenge, index) => (
                <article
                  key={index}
                  className="rounded-[28px] border border-[#427AB5]/20 bg-[#D8E1EB] p-4 shadow-[0_14px_30px_rgba(64,106,175,0.1)]"
                >
                  <div className="grid h-10 w-10 place-items-center rounded-full border border-[#050505] bg-[#F6FAFD] text-[#050505]">
                    <Watch size={20} strokeWidth={1.9} />
                  </div>

                  <h4 className="mt-5 text-[12px] font-black leading-tight text-[#050505]">
                    {challenge.title}
                  </h4>

                  <Trophy
                    size={14}
                    strokeWidth={2.1}
                    className="mt-2 text-[#050505]"
                  />

                  <p className="mt-5 text-[9px] font-semibold leading-4 text-[#050505]/80">
                    {challenge.desc}
                  </p>

                  <p className="mt-1 text-[8.5px] font-semibold leading-4 text-[#050505]/65">
                    {challenge.date}
                  </p>

                  <button className="mt-5 h-7 w-full rounded-full border border-[#050505] bg-[#F6FAFD] text-[10px] font-black text-[#050505]">
                    Join
                  </button>
                </article>
              ))}
            </div>
          </section>
        </div>

        <Nav active="groups" />
      </div>
    </Phone>
  );
}