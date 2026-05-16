import Icon from "./Icon";

export default function VisibilityField({
  options,
  selectedIndex,
  onSelect,
  className = "",
}) {
  return (
    <div className={`form-field mt-2 ${className}`}>
      <label>Who can view</label>
      <div className="flex gap-2">
        {options.map((item, index) => (
          <button
            key={item.label}
            className={`flex flex-1 items-center justify-center gap-2 rounded-xl border px-3 py-2 text-xs font-medium transition ${
              selectedIndex === index
                ? "border-[var(--blue)] bg-[var(--blue-soft)] text-[var(--blue)]"
                : "border-[var(--border)] text-[var(--text-secondary)]"
            }`}
            onClick={() => onSelect(index)}
          >
            <Icon name={item.icon} size="sm" />
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}
