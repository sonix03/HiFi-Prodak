import Icon from "./Icon";

export default function SearchBar({ placeholder = "Search", filters = true }) {
  return (
    <div className="row rounded-2xl border border-[var(--border)] bg-white px-4 py-3 shadow-[var(--shadow-card)]">
      <Icon name="search" size="sm" className="text-[var(--text-secondary)]" />
      <input className="min-w-0 flex-1 bg-transparent text-sm font-semibold outline-none placeholder:text-[var(--text-tertiary)]" placeholder={placeholder} />
      {filters ? <Icon name="filter" size="sm" className="text-[var(--text-secondary)]" /> : null}
    </div>
  );
}
