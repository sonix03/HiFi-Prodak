import { ImagePlus } from "lucide-react";
import Phone from "../components/Phone";

export default function Preview() {
  return (
    <Phone title="Preview / Splash">
      <div className="relative isolate flex h-full items-center justify-center overflow-hidden bg-[#427AB5] px-8 py-10 text-white">
        <div className="pointer-events-none absolute -right-16 top-12 z-0 h-44 w-44 rounded-full bg-[#F7DD7D]/30 blur-2xl" />
        <div className="pointer-events-none absolute -left-20 bottom-12 z-0 h-56 w-56 rounded-full bg-[#406AAF]/55 blur-2xl" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-xl" />

        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="grid h-28 w-28 place-items-center rounded-[30px] border-2 border-dashed border-white/85 bg-white/15 shadow-[0_18px_45px_rgba(23,50,77,0.28)] backdrop-blur-md">
            <ImagePlus size={38} className="text-white/90" />
          </div>

          <h1 className="mt-10 text-[3rem] font-black leading-none tracking-[-0.05em]">
            PRODAK
          </h1>

          <div className="mt-5 h-1 w-16 rounded-full bg-[#F7DD7D]" />
        </div>
      </div>
    </Phone>
  );
}