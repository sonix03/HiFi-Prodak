import {
  ArrowLeft,
  Building2,
  Globe2,
  ImagePlus,
  MoreHorizontal,
  UserRound,
  Users,
} from "lucide-react";
import Nav from "../components/Nav";
import Phone from "../components/Phone";

export default function Club() {
  return (
    <Phone title="Club Detail">
      <div className="relative h-full overflow-hidden bg-[#F6FAFD] pb-[96px] text-left">
        <section className="relative h-[210px] overflow-hidden border-b border-[#17324D]/20 bg-[#427AB5]">
          <div className="pointer-events-none absolute -right-16 top-6 h-44 w-44 rounded-full bg-[#F7DD7D]/25 blur-2xl" />
          <div className="pointer-events-none absolute -left-20 bottom-4 h-52 w-52 rounded-full bg-[#406AAF]/70 blur-2xl" />

          <div className="relative z-10 flex items-center justify-between px-8 pt-8">
            <button className="grid h-10 w-10 place-items-center rounded-full border border-white/55 bg-white/10 text-white backdrop-blur-md">
              <ArrowLeft size={18} strokeWidth={2.2} />
            </button>

            <div className="h-9 w-9 rounded-full bg-[#050505]" />
          </div>

          <div className="relative z-10 mt-16 flex justify-center">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#050505]" />
              <span className="h-2 w-2 rounded-full bg-[#050505]" />
              <span className="h-2 w-2 rounded-full bg-[#050505]" />
              <span className="h-2 w-2 rounded-full bg-[#050505]" />
              <span className="h-2 w-2 rounded-full bg-[#050505]" />
            </div>
          </div>
        </section>

        <section className="relative border-b border-[#17324D]/15 px-8 pb-7 pt-10">
          <div className="absolute -top-7 left-8 grid h-16 w-16 place-items-center rounded-full border border-[#050505] bg-[#F6FAFD] text-[#050505] shadow-[0_12px_26px_rgba(64,106,175,0.12)]">
            <Building2 size={30} strokeWidth={1.9} />
          </div>

          <h2 className="text-[14px] font-black text-[#050505]">
            Pejuang SCBD
          </h2>

          <div className="mt-4 flex items-center gap-5 text-[#050505]">
            <div className="flex items-center gap-1.5">
              <Users size={14} strokeWidth={2} />
              <span className="text-[10px] font-semibold">12,096 Members</span>
            </div>

            <div className="flex items-center gap-1.5">
              <Globe2 size={14} strokeWidth={2} />
              <span className="text-[10px] font-semibold">Public</span>
            </div>
          </div>

          <button className="mt-5 h-8 rounded-full border border-[#050505] bg-white px-6 text-[11px] font-black text-[#050505] shadow-[0_8px_18px_rgba(64,106,175,0.08)]">
            Join
          </button>
        </section>

        <section className="px-8 pt-7">
          <h3 className="text-[11px] font-semibold text-[#050505]/75">
            Recent Post
          </h3>

          <article className="mt-6">
            <div className="flex items-start gap-4">
              <div className="h-9 w-9 shrink-0 rounded-full bg-[#050505]" />

              <div className="min-w-0 flex-1 pt-1">
                <div className="h-1.5 w-20 rounded-full bg-[#050505]/40" />
                <div className="mt-3 h-1.5 w-32 rounded-full bg-[#406AAF]/35" />
              </div>

              <MoreHorizontal
                size={22}
                strokeWidth={2.3}
                className="text-[#050505]"
              />
            </div>

            <div className="mt-7 overflow-hidden rounded-[28px] border border-[#427AB5]/20 bg-[#427AB5]/10 shadow-[0_18px_36px_rgba(64,106,175,0.12)]">
              <div className="relative grid h-48 place-items-center bg-[#427AB5]/15">
                <div className="pointer-events-none absolute inset-0 opacity-70">
                  <div className="absolute left-5 top-8 h-[1px] w-64 rotate-[18deg] bg-white/55" />
                  <div className="absolute left-0 top-24 h-[1px] w-72 -rotate-[22deg] bg-white/45" />
                  <div className="absolute left-14 top-2 h-64 w-[1px] rotate-[28deg] bg-white/40" />
                  <div className="absolute right-14 top-0 h-64 w-[1px] -rotate-[16deg] bg-white/40" />
                  <div className="absolute bottom-10 left-2 h-[1px] w-72 rotate-[4deg] bg-white/35" />
                </div>

                <div className="relative z-10 grid h-20 w-20 place-items-center rounded-[24px] border-2 border-dashed border-white/90 bg-white/20 backdrop-blur-md">
                  <ImagePlus size={30} className="text-white" />
                </div>

                <span className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-white/85 px-4 py-1.5 text-[10px] font-bold text-[#427AB5]">
                  Post image placeholder
                </span>
              </div>
            </div>
          </article>
        </section>

        <Nav active="groups" />
      </div>
    </Phone>
  );
}