import {
  Building2,
  CalendarDays,
  MapPin,
  Search,
  Settings,
  Users,
} from "lucide-react";
import Nav from "../components/Nav";
import Phone from "../components/Phone";

export default function Clubs() {
  return (
    <Phone title="Clubs">
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
            <button className="pb-3 text-center text-[11px] font-black text-[#050505]/75">
              Challenges
            </button>

            <button className="border-b-2 border-[#050505] pb-3 text-center text-[11px] font-black text-[#050505]">
              Clubs
            </button>
          </div>
        </div>

        <div className="h-[calc(100%-150px)] overflow-y-auto px-6 pt-4">
          <section className="space-y-3">
            <div className="flex items-center justify-between rounded-[12px] border border-[#050505]/70 bg-white px-4 py-3">
              <p className="text-[10px] font-medium text-[#050505]">
                Create your own Prodak group
              </p>

              <button className="h-7 rounded-full border border-[#050505] bg-[#D8E1EB] px-3 text-[9px] font-black text-[#050505]">
                Create a Group
              </button>
            </div>

            <div className="flex items-center justify-between rounded-[12px] border border-[#050505]/70 bg-white px-4 py-3">
              <p className="text-[10px] font-medium text-[#050505]">
                Find events near you
              </p>

              <button className="h-7 rounded-full border border-[#050505] bg-[#D8E1EB] px-3 text-[9px] font-black text-[#050505]">
                Browse Events
              </button>
            </div>
          </section>

          <section className="mt-4 rounded-[12px] border border-[#050505]/70 bg-white px-5 py-6 shadow-[0_14px_30px_rgba(64,106,175,0.08)]">
            <div className="flex items-center gap-5">
              <div className="grid h-16 w-16 shrink-0 place-items-center text-[#050505]">
                <Building2 size={46} strokeWidth={1.7} />
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="text-[15px] font-black text-[#050505]">
                  Pejuang SCBD
                </h3>

                <div className="mt-3 flex items-center gap-1.5 text-[#050505]">
                  <Users size={13} strokeWidth={2.1} />

                  <p className="text-[10px] font-semibold">
                    12,096 Members
                  </p>
                </div>

                <div className="mt-2 flex items-center gap-1.5 text-[#050505]/70">
                  <MapPin size={12} strokeWidth={2.1} />

                  <p className="text-[9px] font-semibold">
                    Jakarta, Indonesia
                  </p>

                  <span className="text-[9px] font-semibold">•</span>

                  <p className="text-[9px] font-semibold">81 Posts</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-4 rounded-[12px] border border-[#427AB5]/25 bg-[#427AB5]/10 px-5 py-6 shadow-[0_14px_30px_rgba(64,106,175,0.08)]">
            <div className="flex items-center gap-5">
              <div className="grid h-16 w-16 shrink-0 place-items-center rounded-[18px] border border-[#427AB5]/25 bg-white text-[#427AB5]">
                <CalendarDays size={34} strokeWidth={1.8} />
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="text-[14px] font-black text-[#050505]">
                  Weekend Run Club
                </h3>

                <div className="mt-3 flex items-center gap-1.5 text-[#050505]">
                  <Users size={13} strokeWidth={2.1} />

                  <p className="text-[10px] font-semibold">
                    4,821 Members
                  </p>
                </div>

                <div className="mt-2 flex items-center gap-1.5 text-[#050505]/70">
                  <MapPin size={12} strokeWidth={2.1} />

                  <p className="text-[9px] font-semibold">
                    Bandung, Indonesia
                  </p>

                  <span className="text-[9px] font-semibold">•</span>

                  <p className="text-[9px] font-semibold">36 Posts</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <Nav active="groups" />
      </div>
    </Phone>
  );
}