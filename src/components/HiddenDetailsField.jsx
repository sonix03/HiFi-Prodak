import { SelectField } from "./FormField";
import OptionBottomSheet from "./OptionBottomSheet";

const hiddenDetails = [
  { key: "time", label: "Time" },
  { key: "steps", label: "Steps" },
  { key: "focusScore", label: "Focus score" },
];

function getHiddenDetailsLabel(value) {
  const selected = hiddenDetails.filter((detail) => value?.[detail.key]);

  if (selected.length === 0) {
    return "Show all details";
  }

  if (selected.length === hiddenDetails.length) {
    return "Hide all";
  }

  return `Hide ${selected.map((detail) => detail.label.toLowerCase()).join(", ")}`;
}

export default function HiddenDetailsField({ value, onOpen }) {
  return (
    <SelectField
      label="Hidden details"
      onOpen={onOpen}
      value={getHiddenDetailsLabel(value)}
    />
  );
}

export function HiddenDetailsBottomSheet({ value, onToggle, onClose }) {
  return (
    <OptionBottomSheet title="Hidden details" closeLabel="Done" onClose={onClose}>
      <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-white">
        {hiddenDetails.map((detail, index) => {
          const isHidden = Boolean(value?.[detail.key]);

          return (
            <button
              key={detail.key}
              className={`flex w-full items-center justify-between px-4 py-3 text-left ${
                index === 0 ? "" : "border-t border-[var(--divider)]"
              }`}
              onClick={() => onToggle?.(detail.key)}
              type="button"
            >
              <span className="text-sm font-semibold text-[var(--text)]">{detail.label}</span>
              <span
                className={`flex h-7 w-12 items-center rounded-full p-1 transition-colors ${
                  isHidden ? "justify-end bg-[var(--blue)]" : "justify-start bg-[var(--border)]"
                }`}
              >
                <span className="h-5 w-5 rounded-full bg-white shadow-[0_1px_4px_rgba(15,23,42,0.18)]" />
              </span>
            </button>
          );
        })}
      </div>
    </OptionBottomSheet>
  );
}
