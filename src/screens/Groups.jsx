import Button from "../components/Button";
import GroupsHeader from "../components/GroupsHeader";
import ListItem from "../components/ListItem";
import Pill from "../components/Pill";
import SectionHeader from "../components/SectionHeader";
import { clubs } from "../constants/data";

export default function Groups({ onNavigate }) {
  return (
    <main className="screen screen-pad">
      <GroupsHeader active="clubs" onNavigate={onNavigate} />

      <section className="mt-4 stack">
        <div className="between rounded-xl border border-[var(--border)] bg-white px-3 py-2">
          <span className="text-xs font-medium text-[var(--text-secondary)]">Create your own Prodak club</span>
          <Button size="sm" variant="outline" onClick={() => onNavigate?.("createClub")}>Create a Club</Button>
        </div>
        <div className="between rounded-xl border border-[var(--border)] bg-white px-3 py-2">
          <span className="text-xs font-medium text-[var(--text-secondary)]">Find events near you</span>
          <Button size="sm" variant="outline" onClick={() => onNavigate?.("searchFriend")}>Browse Events</Button>
        </div>
      </section>

      <div className="mt-5 tab-row">{["Work", "Research", "Arts", "Laboratory"].map((item, index) => <Pill key={item} active={index === 0}>{item}</Pill>)}</div>

      <section className="section">
        <SectionHeader title="Featured clubs" action="Create" />
        <div className="list mt-2">
          {clubs.map((club) => (
            <ListItem
              accent={club.joined ? "blue" : "neutral"}
              icon="users"
              key={club.id}
              meta={`${club.goal} • ${club.rank}`}
              onClick={() => onNavigate?.("club")}
              title={club.name}
              value={`${club.members}`}
            />
          ))}
        </div>
      </section>
      <Button className="mt-6 w-full" size="lg" icon="plus" onClick={() => onNavigate?.("createClub")}>Create a club</Button>
    </main>
  );
}
