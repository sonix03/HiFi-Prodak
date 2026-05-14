import {
  ArrowLeft,
  ImagePlus,
  Map,
  Save,
  Tag,
} from "lucide-react";
import Phone from "../components/Phone";

const photos = ["Cover", "Detail", "Extra"];

export default function SaveActivity() {
  return (
    <Phone title="Save Activity">
      <div className="relative h-full overflow-hidden bg-[#F6FAFD] text-left">
        <div className="pointer-events-none absolute -right-20 top-20 h-48 w-48 rounded-full bg-[#F7DD7D]/35 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-20 h-56 w-56 rounded-full bg-[#427AB5]/20 blur-3xl" />

        <div className="relative z-10 px-7 pt-8">
          <div className="flex items-center justify-between">
            <button className="grid h-10 w-10 place-items-center rounded-full border border-[#050505]/70 bg-white/70 text-[#050505] shadow-[0_10px_24px_rgba(23,50,77,0.08)] backdrop-blur-md">
              <ArrowLeft size={18} strokeWidth={2.2} />
            </button>

            <h1 className="text-[15px] font-black text-[#050505]">
              Save Activity
            </h1>

            <div className="w-10" />
          </div>

          <section className="mt-7 space-y-4">
            <div className="rounded-[14px] border border-[#427AB5]/25 bg-white/85 px-4 py-4 text-[11px] font-bold text-[#050505]/55 shadow-[0_12px_28px_rgba(64,106,175,0.08)] backdrop-blur-md">
              Time to suffer!
            </div>

            <div className="min-h-[86px] rounded-[14px] border border-[#427AB5]/25 bg-white/85 px-4 py-4 text-[10px] font-semibold leading-5 text-[#050505]/45 shadow-[0_12px_28px_rgba(64,106,175,0.08)] backdrop-blur-md">
              How’d it go? Share more about your activity and use # to tag
              someone.
            </div>

            <div className="rounded-[14px] border border-[#427AB5]/25 bg-white/85 px-4 py-4 text-[11px] font-bold text-[#050505]/45 shadow-[0_12px_28px_rgba(64,106,175,0.08)] backdrop-blur-md">
              Add location or note
            </div>
          </section>

          <section className="mt-6">
            <div className="flex gap-3 overflow-hidden">
              {photos.map((photo, index) => (
                <div
                  key={photo}
                  className={`grid h-24 shrink-0 place-items-center rounded-[18px] border shadow-[0_16px_32px_rgba(64,106,175,0.12)] ${
                    index === 0
                      ? "w-[108px] border-[#427AB5]/30 bg-[#427AB5]/12"
                      : "w-[76px] border-[#406AAF]/25 bg-[#D8E1EB]"
                  }`}
                >
                  <div className="grid h-11 w-11 place-items-center rounded-[14px] border border-dashed border-[#427AB5]/60 bg-white/55">
                    <ImagePlus size={20} className="text-[#427AB5]" />
                  </div>
                </div>
              ))}
            </div>
          </section>

          <button className="mt-6 flex h-8 w-full items-center justify-center gap-2 rounded-full border border-[#050505]/70 bg-[#D8E1EB] text-[11px] font-black text-[#050505] shadow-[0_10px_22px_rgba(23,50,77,0.08)]">
            <Map size={13} />
            Change Map Type
          </button>

          <section className="mt-7">
            <h2 className="text-[12px] font-black text-[#050505]">
              Details
            </h2>

            <div className="mt-4 flex h-11 items-center gap-3 rounded-[14px] border border-[#427AB5]/25 bg-white/85 px-4 shadow-[0_12px_28px_rgba(64,106,175,0.08)] backdrop-blur-md">
              <Tag size={14} className="text-[#427AB5]" />

              <span className="text-[11px] font-semibold text-[#050505]/55">
                Activity Tag
              </span>
            </div>
          </section>

          <button className="mt-6 flex h-10 w-full items-center justify-center gap-2 rounded-full bg-[#427AB5] text-[11px] font-black text-white shadow-[0_16px_32px_rgba(66,122,181,0.32)]">
            <Save size={14} />
            Save Activity
          </button>
        </div>
      </div>
    </Phone>
  );
}