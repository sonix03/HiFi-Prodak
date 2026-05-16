import Icon from "./Icon";

export default function GradientBorderButton({
  children,
  icon,
  size = "md",
  className = "",
  ...props
}) {
  const sizes = {
    sm: "h-8 px-3 text-[11px]",
    md: "h-10 px-4 text-[13px]",
    lg: "h-11 px-5 text-[13px]",
  };

  return (
    <button
      className={`rounded-full bg-gradient-to-r from-[var(--blue)] via-[var(--blue)] to-[var(--yellow)] p-[1.5px] shadow-[0_6px_16px_rgba(37,99,235,0.14)] transition active:scale-[0.98] ${className}`}
      {...props}
    >
      <span
        className={`inline-flex w-full items-center justify-center gap-2 rounded-full bg-white font-semibold text-[var(--text)] ${sizes[size]}`}
      >
        {icon ? <Icon name={icon} size="sm" stroke="strong" /> : null}
        {children}
      </span>
    </button>
  );
}
