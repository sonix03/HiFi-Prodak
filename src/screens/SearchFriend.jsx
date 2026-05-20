import { useState } from "react";
import EmptyState from "../components/EmptyState";
import ScreenHeader from "../components/ScreenHeader";
import SearchBar from "../components/SearchBar";
import UserRow from "../components/UserRow";
import { people } from "../constants/data";

function SearchTabs({ active, onNavigate }) {
  return (
    <div className="grid grid-cols-2 border-b border-[var(--divider)] text-center text-sm font-semibold">
      <button className={active === "friends" ? "relative py-3 text-[var(--blue)]" : "py-3 text-[var(--text-secondary)]"}>
        Friends
        {active === "friends" ? <span className="absolute inset-x-8 bottom-[-1px] h-0.5 rounded-full bg-[var(--blue)]" /> : null}
      </button>
      <button className={active === "clubs" ? "relative py-3 text-[var(--blue)]" : "py-3 text-[var(--text-secondary)]"} onClick={() => onNavigate?.("searchClub")}>
        Clubs
        {active === "clubs" ? <span className="absolute inset-x-8 bottom-[-1px] h-0.5 rounded-full bg-[var(--blue)]" /> : null}
      </button>
    </div>
  );
}

export default function SearchFriend({ onNavigate }) {
  const [addedPeople, setAddedPeople] = useState(() => new Set());
  const toggleAdded = (id) => {
    setAddedPeople((current) => {
      const next = new Set(current);

      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }

      return next;
    });
  };

  return (
    <main className="screen screen-pad">
      <ScreenHeader title="Search" onBack={() => onNavigate?.("groups")} right={null} />
      <SearchTabs active="friends" onNavigate={onNavigate} />
      <div className="mt-4">
        <SearchBar placeholder="Search friends to add" />
      </div>

      <section className="mt-5 list gap-3">
        {people.map((person) => {
          const isAdded = addedPeople.has(person.id);

          return (
            <UserRow
              action={isAdded ? "Added" : "Add"}
              actionIcon={isAdded ? "userCheck" : "userAdd"}
              actionVariant={isAdded ? "outline" : "primary"}
              key={person.id}
              meta={`${person.mutual} • ${person.metric}`}
              onAction={() => toggleAdded(person.id)}
              onClick={() => onNavigate?.("otherProfile")}
              user={person}
            />
          );
        })}
      </section>
      <div className="mt-4"><EmptyState icon="users" title="Invite teammates" body="Bring coworkers or study partners into a shared focus league." action="Copy invite" /></div>
    </main>
  );
}
