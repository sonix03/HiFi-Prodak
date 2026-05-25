import Button from "./Button";
import Icon from "./Icon";

export default function OptionBottomSheet({
  title,
  children,
  options,
  selectedIndex,
  onSelect,
  onClose,
  variant = "list",
  closeLabel,
}) {
  return (
    <div className="absolute inset-0 z-50">
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-x-0 bottom-0 flex items-end">
        <div className="w-full rounded-t-3xl bg-white p-6">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-lg font-semibold">{title}</h3>
            <button className={closeLabel ? "text-sm font-semibold text-[var(--blue)]" : ""} onClick={onClose}>
              {closeLabel || <Icon name="cancel" size={24} stroke={2} />}
            </button>
          </div>

          {children || (
            <div className={variant === "pills" ? "flex flex-wrap gap-2" : "stack gap-2"}>
              {options.map((item, index) => {
                const label = typeof item === "string" ? item : item.label;
                const icon = typeof item === "string" ? null : item.icon;
                const selected = selectedIndex === index;

                if (variant === "pills") {
                  return (
                    <button
                      key={label}
                      className={`rounded-full border px-4 py-2 text-sm font-semibold ${
                        selected
                          ? "border-[var(--blue)] bg-[var(--blue-soft)] text-[var(--blue)]"
                          : "border-[var(--border)] bg-white text-[var(--text-secondary)]"
                      }`}
                      onClick={() => onSelect(index)}
                    >
                      {label}
                    </button>
                  );
                }

                return (
                  <button
                    key={label}
                    className={`w-full flex items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm font-medium ${
                      selected
                        ? "border-[var(--blue)] bg-[var(--blue-soft)] text-[var(--blue)]"
                        : "border-[var(--border)] text-[var(--text)]"
                    }`}
                    onClick={() => onSelect(index)}
                  >
                    {icon ? <Icon name={icon} size="md" /> : null}
                    {label}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function FeelingBottomSheet({
  levels,
  selectedIndex,
  onSelect,
  onClose,
}) {
  return (
    <OptionBottomSheet title="How did that activity feel" onClose={onClose}>
      <div className="mb-6">
        <div className="mb-4 grid grid-cols-3 text-[11px] font-black text-[var(--text-secondary)]">
          <span>Easy (1)</span>
          <span className="text-center">Moderate (5)</span>
          <span className="text-right">Max Effort (10)</span>
        </div>
        <input
          type="range"
          min="0"
          max={levels.length - 1}
          value={selectedIndex}
          onChange={(event) => onSelect(parseInt(event.target.value))}
          className="h-2 w-full appearance-none rounded-full bg-[var(--divider)] accent-[var(--blue)]"
        />
        <div className="between mt-2 text-[11px] font-semibold text-[var(--text-secondary)]">
          <span>1</span>
          <span>{levels[selectedIndex]}/10</span>
          <span>10</span>
        </div>
      </div>
      <Button className="w-full" onClick={onClose}>
        Confirm
      </Button>
    </OptionBottomSheet>
  );
}
