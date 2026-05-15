import EmptyState from "../components/EmptyState";
import SearchHeader from "../components/SearchHeader";
import UserRow from "../components/UserRow";
import { people } from "../constants/data";

export default function SearchFriend({ onNavigate }) {
  return (
    <main className="screen screen-pad">
      <SearchHeader title="Find friends" placeholder="Search athletes, clubs, handles" onBack={() => onNavigate?.("feed")} />
      <section className="mt-3 stack">
        {people.map((person) => <div className="card card-pad" key={person.id}><UserRow user={person} meta={`${person.mutual} • ${person.metric}`} /></div>)}
      </section>
      <div className="mt-4"><EmptyState icon="users" title="Invite teammates" body="Bring coworkers or study partners into a shared focus league." action="Copy invite" /></div>
    </main>
  );
}
