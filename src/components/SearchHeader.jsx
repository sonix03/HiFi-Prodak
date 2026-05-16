import Icon from "./Icon";

export default function SearchHeader({ title = "Search", placeholder = "Search", onBack }) {
  return (
    <header className="app-header search-header">
      <button className="header-action" onClick={onBack} aria-label="Back">
        <Icon name="arrowLeft" size={22} />
      </button>
      <div className="search-header-input">
        <Icon name="search" size={20} />
        <input aria-label={title} placeholder={placeholder} />
      </div>
    </header>
  );
}
