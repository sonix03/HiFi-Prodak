import Icon from "./Icon";

export default function ListItem({
  icon,
  image,
  title,
  meta,
  value,
  action,
  accent = "neutral",
  children,
  onClick,
  unread,
  hideDivider,
}) {
  const accentClass = accent === "blue" ? "text-[var(--blue)]" : accent === "yellow" ? "text-[var(--yellow)]" : "text-[var(--text)]";
  const Wrapper = onClick ? "button" : "div";

  return (
    <Wrapper
      className={`list-row ${onClick ? "list-row-button" : ""} ${unread ? "bg-[var(--blue)]/5" : ""} ${hideDivider ? "border-b-0" : ""}`}
      style={unread ? { marginLeft: -20, marginRight: -20, paddingLeft: 20, paddingRight: 20 } : undefined}
      onClick={onClick}
    >
      {image ? (
        <img className="h-10 w-10 shrink-0 rounded-full object-cover" src={image} alt="" />
      ) : icon ? (
        <Icon name={icon} size="md" className={`${accentClass} ${unread ? "text-[var(--blue)]" : ""}`} />
      ) : null}
      <div className="min-w-0 flex-1">
        <p className={`truncate text-[13px] font-semibold ${unread ? "text-[var(--text)]" : "text-[var(--text-secondary)]"}`}>{title}</p>
        {meta ? <p className="mt-1 truncate text-[11px] font-normal text-[var(--text-secondary)]">{meta}</p> : null}
        {children}
      </div>
      {value ? <span className="shrink-0 text-[13px] font-normal text-[var(--text-secondary)]">{value}</span> : null}
      {action}
    </Wrapper>
  );
}
