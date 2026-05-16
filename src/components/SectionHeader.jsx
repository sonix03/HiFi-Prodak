export default function SectionHeader({ title, action, meta }) {
  return (
    <div className="between">
      <div>
        <h2 className="section-title">{title}</h2>
        {meta ? <p className="meta mt-1">{meta}</p> : null}
      </div>
      {action ? <button className="text-xs font-semibold text-[var(--primary)]">{action}</button> : null}
    </div>
  );
}
