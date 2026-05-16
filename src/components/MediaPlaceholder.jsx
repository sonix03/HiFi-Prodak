import Icon from "./Icon";

export default function MediaPlaceholder({ title = "Proof attachment", body = "Screenshot, document trail, or workspace capture", icon = "media" }) {
  return (
    <div className="rounded-2xl border border-dashed border-[var(--border)] bg-[var(--surface-muted)] p-5">
      <div className="between">
        <span className="text-[var(--blue)]"><Icon name={icon} size="lg" /></span>
        <Icon name="proof" size="sm" className="text-[var(--text-tertiary)]" />
      </div>
      <p className="mt-5 text-sm font-semibold">{title}</p>
      <p className="mt-1 meta">{body}</p>
    </div>
  );
}
