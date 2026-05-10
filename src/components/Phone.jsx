export default function Phone({ title, children }) {
  return (
    <section className="w-full">
      <div className="mx-auto w-full max-w-[390px]">
        <div className="mb-3 flex items-center justify-between gap-3 px-1">
          <div className="min-w-0">
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#5D6F8B]">
              Mobile artboard
            </p>
            <p className="mt-1 truncate text-sm font-black text-[#17324D]">
              {title}
            </p>
          </div>
          <span className="shrink-0 rounded-full border border-[#427AB5]/20 bg-white/85 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#406AAF]">
            390 x 844
          </span>
        </div>

        <div className="relative isolate overflow-hidden rounded-[34px] border border-[#427AB5]/20 bg-white shadow-[0_26px_70px_rgba(64,106,175,0.14)]">
          <div
            className="pointer-events-none absolute inset-0 z-0 opacity-35"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(66,122,181,0.08) 1px, transparent 1px), linear-gradient(0deg, rgba(66,122,181,0.08) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
          <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-20 bg-gradient-to-b from-white/90 to-transparent" />
          <div className="phone-screen relative z-10 h-[844px] overflow-y-auto bg-[#FFE8BE]/45 text-left">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
