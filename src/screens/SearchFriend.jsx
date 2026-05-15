import EmptyState from "../components/EmptyState";
import SearchHeader from "../components/SearchHeader";
import UserRow from "../components/UserRow";
import { people } from "../constants/data";

export default function SearchFriend({ onNavigate }) {
  return (
    <main className="screen screen-pad">
      <SearchHeader title="Find friends" placeholder="Search athletes, clubs, handles" onBack={() => onNavigate?.("feed")} />
      <section className="mt-3 list">
        {people.map((person) => <UserRow key={person.id} user={person} meta={`${person.mutual} • ${person.metric}`} />)}
      </section>
      <div className="mt-4"><EmptyState icon="users" title="Invite teammates" body="Bring coworkers or study partners into a shared focus league." action="Copy invite" /></div>
    </main>
  );
}
