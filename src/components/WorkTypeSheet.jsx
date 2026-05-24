import Icon from "./Icon";
import { workTypes } from "../constants/workTypes";

export default function WorkTypeSheet({ selected, onClose, onSelect }) {
  return (
    <div className="absolute inset-0 z-50 flex flex-col justify-end bg-black/45">
      <div className="max-h-[78%] overflow-hidden rounded-t-[18px] bg-white shadow-[0_-12px_34px_rgba(15,23,42,0.16)]">
        <div className="mx-auto mt-3 h-1.5 w-10 rounded-full bg-[var(--border)]" />
        <header className="between border-b border-[var(--border)] px-6 py-5">
          <h2 className="text-[18px] font-black tracking-normal text-[var(--text)]">Choose Work Type</h2>
          <button className="grid h-8 w-8 place-items-center text-[var(--text)]" onClick={onClose} type="button" aria-label="Close work type">
            <Icon name="cancel" size="lg" stroke={2} />
          </button>
        </header>

        <div className="overflow-y-auto px-6 pb-9 pt-4">
          <div className="flex h-10 items-center gap-2 rounded-full bg-[var(--surface-muted)] px-4 text-[15px] font-medium text-[var(--text-tertiary)]">
            <Icon name="search" size="md" />
            <span>Search</span>
          </div>

          <section className="mt-8">
            <h3 className="text-[17px] font-black tracking-normal text-[var(--text)]">Your Top Focus</h3>
            <button className="mt-5 grid justify-items-center gap-3 text-center text-[13px] font-semibold text-[var(--primary)]" onClick={() => onSelect("Work")} type="button">
              <span className="relative grid h-[66px] w-[66px] place-items-center rounded-full bg-[var(--primary-soft)] text-[var(--primary)]">
                <Icon name="laptop" size={34} stroke={2} />
                <span className="absolute -right-0.5 top-0 grid h-5 w-5 place-items-center rounded-full bg-[var(--primary)] text-white">
                  <Icon name="check" size="xs" stroke={2} />
                </span>
              </span>
              Work
            </button>
          </section>

          <section className="mt-8 border-t border-[var(--border)] pt-7">
            <h3 className="text-[17px] font-black tracking-normal text-[var(--text)]">Focus Types</h3>
            <div className="mt-5 grid gap-5">
              {workTypes.map((item) => {
                const isSelected = item.label === selected;

                return (
                  <button
                    className={`between text-left text-[16px] font-semibold ${isSelected ? "text-[var(--primary)]" : "text-[var(--text)]"}`}
                    key={item.label}
                    onClick={() => onSelect(item.label)}
                    type="button"
                  >
                    <span className="row gap-4">
                      <Icon name={item.icon} size="lg" stroke={isSelected ? 2 : "regular"} />
                      {item.label}
                    </span>
                    {isSelected ? <Icon name="check" size="lg" stroke={2} /> : null}
                  </button>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
