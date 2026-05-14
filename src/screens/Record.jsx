import {
  ArrowLeft,
  Expand,
  Flag,
  ImagePlus,
  Layers,
  Play,
  Target,
} from "lucide-react";
import Nav from "../components/Nav";
import Phone from "../components/Phone";

export default function Record() {
  return (
    <Phone title="Record">
      <div className="relative h-full overflow-hidden bg-[#F6FAFD] pb-[96px] text-left">
        <div className="absolute inset-0 grid place-items-center bg-[#D8E1EB]">
          <div className="grid h-28 w-28 place-items-center rounded-[30px] border-2 border-dashed border-white/90 bg-white/20 shadow-[0_18px_38px_rgba(23,50,77,0.16)] backdrop-blur-md">
            <ImagePlus size={38} className="text-white" />
          </div>

          <span className="absolute bottom-[260px] rounded-full bg-white/85 px-4 py-1.5 text-[10px] font-bold text-[#427AB5]">
            Map image placeholder
          </span>
        </div>

        <div className="relative z-10 flex items-center justify-between px-8 pt-8">
          <button className="grid h-11 w-11 place-items-center rounded-full border border-[#050505]/70 bg-[#F6FAFD]/65 text-[#050505] backdrop-blur-md">
            <ArrowLeft size={20} strokeWidth={2.2} />
          </button>
        </div>

        <div className="absolute right-7 top-[240px] z-10 flex flex-col gap-3">
          <button className="grid h-10 w-10 place-items-center rounded-full border border-[#050505]/60 bg-[#F6FAFD]/85 text-[#050505] shadow-[0_10px_24px_rgba(64,106,175,0.14)] backdrop-blur-md">
            <Layers size={17} />
          </button>

          <button className="grid h-10 w-10 place-items-center rounded-full border border-[#050505]/60 bg-[#F6FAFD]/85 text-[#050505] shadow-[0_10px_24px_rgba(64,106,175,0.14)] backdrop-blur-md">
            <span className="text-[11px] font-black">3D</span>
          </button>

          <button className="grid h-10 w-10 place-items-center rounded-full border border-[#050505]/60 bg-[#F6FAFD]/85 text-[#050505] shadow-[0_10px_24px_rgba(64,106,175,0.14)] backdrop-blur-md">
            <Target size={17} />
          </button>
        </div>

        <div className="absolute bottom-[166px] left-5 right-5 z-20 overflow-hidden rounded-[24px] border border-[#427AB5]/20 bg-[#F6FAFD] shadow-[0_18px_38px_rgba(23,50,77,0.18)]">
          <div className="relative border-b border-[#17324D]/10 px-5 py-4 text-center">
            <p className="text-[12px] font-black text-[#050505]">
              Stopped
            </p>

            <Expand
              size={15}
              className="absolute right-5 top-4 text-[#050505]"
              strokeWidth={2.2}
            />
          </div>

          <div className="grid grid-cols-3 px-5 py-5">
            <div className="text-center">
              <p className="text-[20px] font-black tracking-[-0.03em] text-[#050505]">
                00:13
              </p>

              <p className="mt-1 text-[10px] font-medium text-[#050505]/75">
                Time
              </p>
            </div>

            <div className="text-center">
              <p className="text-[20px] font-black tracking-[-0.03em] text-[#050505]">
                -:--
              </p>

              <p className="mt-1 text-[10px] font-medium text-[#050505]/75">
                Focus Score
              </p>
            </div>

            <div className="text-center">
              <p className="text-[20px] font-black tracking-[-0.03em] text-[#050505]">
                0.00
              </p>

              <p className="mt-1 text-[10px] font-medium text-[#050505]/75">
                Working Time
              </p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-[104px] left-5 right-5 z-20 rounded-[24px] border border-[#427AB5]/20 bg-[#F6FAFD]/95 px-6 py-5 shadow-[0_18px_38px_rgba(23,50,77,0.16)] backdrop-blur-md">
          <div className="flex items-center justify-center gap-7">
            <button className="flex h-10 min-w-[116px] items-center justify-center gap-2 rounded-full border border-[#050505] bg-[#D8E1EB] px-5 text-[12px] font-black text-[#050505]">
              <Play size={15} fill="#050505" />
              Resume
            </button>

            <button className="flex h-10 min-w-[116px] items-center justify-center gap-2 rounded-full border border-[#050505] bg-[#D8E1EB] px-5 text-[12px] font-black text-[#050505]">
              <Flag size={15} />
              Finish
            </button>
          </div>
        </div>

        <button className="absolute bottom-[142px] right-[-6px] z-20 grid h-12 w-12 place-items-center rounded-full border border-[#050505] bg-[#F6FAFD] text-[#050505] shadow-[0_12px_26px_rgba(23,50,77,0.18)]">
          <Play size={18} fill="#050505" />
        </button>

        <Nav active="record" />
      </div>
    </Phone>
  );
}