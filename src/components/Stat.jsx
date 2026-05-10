export default function Stat({ n, label }) {
  return (
    <div className="min-w-0 text-left">
      <div className="truncate text-[1.05rem] font-black leading-none tracking-[-0.02em] text-[#17324D]">
        {n}
      </div>
      <div className="mt-1.5 truncate text-[10px] font-bold uppercase tracking-[0.16em] text-[#5D6F8B]">
        {label}
      </div>
    </div>
  );
}
