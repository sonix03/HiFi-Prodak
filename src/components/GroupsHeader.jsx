import Icon from "./Icon";

export default function GroupsHeader({ active = "clubs", onNavigate }) {
  const tabs = [
    { key: "challenges", label: "Challenges", screen: "groupClub" },
    { key: "clubs", label: "Clubs", screen: "groups" },
  ];

  return (
    <>
      <header className="app-header app-header-main groups-page-header">
        <button className="header-action" aria-label="Search" onClick={() => onNavigate?.("searchClub")}>
          <Icon name="search" size={24} />
        </button>
        <h1 className="title">Groups</h1>
        <span className="h-9 w-9" aria-hidden="true" />
      </header>

      <div className="grid grid-cols-2 border-b border-[var(--divider)] text-center text-sm font-semibold">
        {tabs.map((tab) => {
          const isActive = active === tab.key;

          return (
            <button
              className={`relative py-3 ${isActive ? "text-[var(--blue)]" : "text-[var(--text-secondary)]"}`}
              key={tab.key}
              onClick={() => onNavigate?.(tab.screen)}
            >
              {tab.label}
              {isActive ? (
                <span className="absolute inset-x-6 bottom-[-1px] h-0.5 rounded-full bg-[var(--blue)]" />
              ) : null}
            </button>
          );
        })}
      </div>
    </>
  );
}
