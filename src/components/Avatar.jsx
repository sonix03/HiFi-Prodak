export default function Avatar({ user, initials, size = "md", tone = "orange" }) {
  const sizes = {
    sm: "w-8 h-8 text-[11px]",
    md: "w-10 h-10 text-xs",
    lg: "w-16 h-16 text-lg",
    xl: "w-24 h-24 text-2xl",
  };
  const tones = {
    orange: "bg-[var(--primary)] text-white",
    blue: "bg-[var(--blue)] text-white",
    yellow: "bg-[var(--yellow-soft)] text-[var(--text)]",
    neutral: "bg-[var(--surface-muted)] text-[var(--text)]",
  };

  return (
    <div className={`grid shrink-0 place-items-center rounded-full font-extrabold ${sizes[size]} ${tones[tone]}`}>
      {initials || user?.initials || "PD"}
    </div>
  );
}
