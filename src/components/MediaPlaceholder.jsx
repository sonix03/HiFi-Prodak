import { Image as ImageIcon } from "lucide-react";

const tones = {
  light: "border-[#427AB5]/20 bg-[#FFE8BE]/45 text-[#5D6F8B]",
  warm: "border-[#F7DD7D] bg-[#FFE8BE] text-[#406AAF]",
  dark: "border-transparent bg-[#406AAF] text-white",
};

export default function MediaPlaceholder({
  label = "Image slot",
  caption = "Drop visual here",
  square = false,
  tone = "light",
}) {
  return (
    <div
      className={`grid place-items-center rounded-[22px] border border-dashed p-3 text-center ${
        square ? "aspect-square" : "h-24"
      } ${tones[tone]}`}
    >
      <div>
        <div className="mx-auto grid h-10 w-10 place-items-center rounded-full bg-white/80 text-inherit">
          <ImageIcon size={18} />
        </div>
        <p className="mt-3 text-[11px] font-black uppercase tracking-[0.16em]">
          {label}
        </p>
        <p className="mt-1 text-[10px] font-semibold opacity-75">{caption}</p>
      </div>
    </div>
  );
}
