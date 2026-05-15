export default function Button({ children, variant = "primary", size = "md", icon: Icon, className = "", ...props }) {
  const variants = {
    primary: "bg-[var(--primary)] text-white shadow-[var(--shadow-button)]",
    dark: "bg-[var(--text)] text-white",
    secondary: "bg-[var(--surface-muted)] text-[var(--text)]",
    outline: "bg-white text-[var(--text)] border border-[var(--border)]",
    ghost: "bg-transparent text-[var(--text-secondary)]",
  };
  const sizes = {
    sm: "h-9 px-3 text-xs",
    md: "h-11 px-5 text-sm",
    lg: "h-13 px-6 text-base",
  };

  return (
    <button className={`inline-flex items-center justify-center gap-2 rounded-full font-bold transition active:scale-[0.98] ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {Icon ? <Icon size={17} strokeWidth={2.2} /> : null}
      {children}
    </button>
  );
}
