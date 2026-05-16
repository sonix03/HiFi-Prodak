import Icon from "./Icon";

export default function Button({ children, variant = "primary", size = "md", icon, className = "", ...props }) {
  const variants = {
    primary: "bg-[var(--primary)] text-white shadow-[var(--shadow-button)]",
    dark: "bg-[var(--primary)] text-white",
    secondary: "bg-[var(--surface-muted)] text-[var(--text)]",
    outline: "bg-white text-[var(--text)] border border-[var(--border)]",
    ghost: "bg-transparent text-[var(--text-secondary)]",
  };
  const sizes = {
    sm: "h-8 px-3 text-[11px]",
    md: "h-10 px-4 text-[13px]",
    lg: "h-11 px-5 text-[13px]",
  };

  return (
    <button className={`inline-flex items-center justify-center gap-2 rounded-full font-semibold transition active:scale-[0.98] ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {icon ? <Icon name={icon} size="sm" stroke="strong" /> : null}
      {children}
    </button>
  );
}
