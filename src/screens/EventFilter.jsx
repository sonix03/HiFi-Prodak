import Button from "../components/Button";
import Icon from "../components/Icon";

const dateOptions = ["Today", "7 Days", "30 Days", "Custom"];
const locationOptions = ["Near Me", "Virtual", "Pick a city"];
const formatOptions = ["Social", "Work", "Competition"];

function FilterChip({ children, active = false, icon }) {
  return (
    <button
      className={`inline-flex h-9 items-center gap-2 rounded-full border px-4 text-sm font-medium ${
        active
          ? "border-[var(--blue)] bg-white text-[var(--blue)]"
          : "border-[var(--border)] bg-white text-[var(--text)]"
      }`}
      type="button"
    >
      {icon ? <Icon name={icon} size="sm" /> : null}
      {children}
    </button>
  );
}

function FilterSection({ title, children }) {
  return (
    <section className="mt-7">
      <h2 className="text-[19px] font-extrabold text-[var(--text)]">{title}</h2>
      <div className="mt-5 flex flex-wrap gap-3">{children}</div>
    </section>
  );
}

export default function EventFilter({ onNavigate }) {
  return (
    <main className="screen flex h-full flex-col bg-white">
      <header className="relative flex h-[58px] shrink-0 items-center border-b border-[var(--border)] bg-white px-5 shadow-[var(--shadow-header)]">
        <button className="grid h-9 w-9 place-items-center text-[var(--text)]" onClick={() => onNavigate?.("browseEvents")} aria-label="Back to Browse Events">
          <Icon name="arrowLeft" size={24} />
        </button>
        <h1 className="absolute left-1/2 -translate-x-1/2 text-[18px] font-extrabold text-[var(--text)]">Filter</h1>
      </header>

      <section className="flex-1 overflow-y-auto px-5 pb-32">
        <FilterSection title="Date">
          {dateOptions.map((option) => (
            <FilterChip key={option}>{option}</FilterChip>
          ))}
        </FilterSection>

        <FilterSection title="Location">
          {locationOptions.map((option, index) => (
            <FilterChip key={option} active={index === 0} icon={option === "Pick a city" ? "search" : undefined}>
              {option}
            </FilterChip>
          ))}
        </FilterSection>

        <FilterSection title="Format">
          {formatOptions.map((option) => (
            <FilterChip key={option}>{option}</FilterChip>
          ))}
        </FilterSection>

        <section className="mt-16">
          <div className="between">
            <h2 className="text-[19px] font-extrabold text-[var(--text)]">Working hours</h2>
            <button className="text-sm font-semibold text-[var(--blue)]" type="button">Reset</button>
          </div>

          <div className="relative mt-12 h-7">
            <div className="absolute left-5 right-5 top-1/2 h-1 -translate-y-1/2 rounded-full bg-[var(--blue)]" />
            <span className="absolute left-0 top-1/2 h-7 w-7 -translate-y-1/2 rounded-full bg-white shadow-[0_4px_18px_rgba(15,23,42,0.16)]" />
            <span className="absolute right-0 top-1/2 h-7 w-7 -translate-y-1/2 rounded-full bg-white shadow-[0_4px_18px_rgba(15,23,42,0.16)]" />
          </div>
          <div className="between mt-2 text-xs font-medium text-[var(--text-secondary)]">
            <span>1 hour</span>
            <span>8 hours</span>
          </div>
        </section>
      </section>

      <footer className="absolute inset-x-0 bottom-0 z-30 grid grid-cols-2 gap-3 bg-white px-5 pb-7 pt-4 shadow-[0_-10px_28px_rgba(15,23,42,0.06)]">
        <Button className="!rounded-full !border-[var(--blue)] !bg-white !text-[var(--blue)]" size="lg" variant="outline">
          Reset
        </Button>
        <Button className="!rounded-full !bg-[var(--blue)] !text-white" size="lg" onClick={() => onNavigate?.("browseEvents")}>
          Apply
        </Button>
      </footer>
    </main>
  );
}
