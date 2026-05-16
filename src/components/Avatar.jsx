import defaultAvatar from "../assets/avatar.png";

export default function Avatar({ user, initials, size = "md", tone = "orange" }) {
  const sizes = {
    sm: "w-8 h-8 text-[11px]",
    md: "w-10 h-10 text-xs",
    lg: "w-20 h-20 text-lg",
    xl: "w-24 h-24 text-2xl",
  };
  const src = user?.avatar || defaultAvatar;

  return (
    <img
      alt={user?.name || initials || "Prodak user"}
      className={`shrink-0 rounded-full border border-[var(--border)] object-cover ${sizes[size]} ${tone === "blue" ? "ring-2 ring-[var(--blue)] ring-offset-2" : ""}`}
      src={src}
    />
  );
}
