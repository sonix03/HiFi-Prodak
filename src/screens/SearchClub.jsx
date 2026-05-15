import Button from "../components/Button";
import Icon from "../components/Icon";
import ScreenHeader from "../components/ScreenHeader";
import SearchBar from "../components/SearchBar";
import { clubs } from "../constants/data";

function SearchTabs({ active, onNavigate }) {
  return (
    <div className="grid grid-cols-2 border-b border-[var(--divider)] text-center text-sm font-semibold">
      <button className={active === "friends" ? "relative py-3 text-[var(--blue)]" : "py-3 text-[var(--text-secondary)]"} onClick={() => onNavigate?.("searchFriend")}>
        Friends
        {active === "friends" ? <span className="absolute inset-x-8 bottom-[-1px] h-0.5 rounded-full bg-[var(--blue)]" /> : null}
      </button>
      <button className={active === "clubs" ? "relative py-3 text-[var(--blue)]" : "py-3 text-[var(--text-secondary)]"}>
        Clubs
        {active === "clubs" ? <span className="absolute inset-x-8 bottom-[-1px] h-0.5 rounded-full bg-[var(--blue)]" /> : null}
      </button>
    </div>
  );
}

export default function SearchClub({ onNavigate }) {
  return (
    <main className="screen screen-pad">
      <ScreenHeader title="Search" onBack={() => onNavigate?.("groups")} action={{ icon: "settings", label: "Search settings" }} />
      <SearchTabs active="clubs" onNavigate={onNavigate} />
      <div className="mt-4">
        <SearchBar placeholder="Search clubs to join" />
      </div>

      <section className="mt-5 stack">
        <p className="meta">Recommended clubs</p>
        {clubs.map((club) => (
          <article className="between rounded-2xl border border-[var(--border)] bg-white p-3 shadow-[var(--shadow-card)]" key={club.id}>
            <div className="row min-w-0">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[var(--primary-soft)] text-[var(--blue)]">
                <Icon name="users" size="md" />
              </span>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold">{club.name}</p>
                <p className="meta truncate">{club.members} members • {club.goal}</p>
                <p className="meta truncate">Active May 16, 2026</p>
              </div>
            </div>
            <Button className="w-[74px] shrink-0 px-2" size="sm" variant={club.joined ? "outline" : "primary"} onClick={() => onNavigate?.("club")}>
              {club.joined ? "View" : "Join"}
            </Button>
          </article>
        ))}
      </section>
    </main>
  );
}
