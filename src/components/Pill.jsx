export default function Pill({ children, active = false }) {
  return (
    <span
      className={`rounded-full border px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.18em] ${
        active
          ? "border-[#406AAF] bg-[#406AAF] text-white shadow-[0_10px_20px_rgba(64,106,175,0.18)]"
          : "border-[#427AB5]/20 bg-white text-[#5D6F8B]"
      }`}
    >
      {children}
    </span>
  );
}
