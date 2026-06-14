import OptionBottomSheet from "./OptionBottomSheet";

const visualTypeOptions = [
  { label: "Route map", icon: "route", value: "map" },
  { label: "Focus bars", icon: "analytics", value: "bars" },
  { label: "Device timeline", icon: "laptop", value: "timeline" },
  { label: "Score ring", icon: "target", value: "score" },
];

export default function ChangeMapType({ selected = "map", onChange, open, onOpen, onClose }) {
  const selectedIndex = Math.max(visualTypeOptions.findIndex((item) => item.value === selected), 0);
  return (
    <>
      <button
        className="w-full rounded-[20px] border border-[var(--blue)] px-4 py-2 text-center text-sm font-semibold text-[var(--blue)]"
        onClick={onOpen}
        type="button"
      >
        <span>Change visualization</span>
      </button>
      {open ? (
        <OptionBottomSheet
          title="Visualization type"
          options={visualTypeOptions}
          selectedIndex={selectedIndex}
          onClose={onClose}
          onSelect={(index) => {
            onChange?.(visualTypeOptions[index].value);
            onClose?.();
          }}
        />
      ) : null}
    </>
  );
}
