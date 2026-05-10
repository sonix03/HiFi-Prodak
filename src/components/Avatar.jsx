const sizes = {
  sm: "h-8 w-8 text-[10px]",
  md: "h-10 w-10 text-xs",
  lg: "h-16 w-16 text-lg",
};

const tones = {
  blue: "bg-[#427AB5] text-white",
  navy: "bg-[#406AAF] text-white",
  cream: "bg-[#FFE8BE] text-[#406AAF]",
  yellow: "bg-[#F7DD7D] text-[#17324D]",
  orange: "bg-[#427AB5] text-white",
};

export default function Avatar({ initials = "MF", size = "md", tone = "blue" }) {
  return (
    <div
      className={`grid shrink-0 place-items-center rounded-full font-black ${sizes[size]} ${tones[tone]}`}
    >
      {initials}
    </div>
  );
}
