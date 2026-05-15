import { Users } from "lucide-react";
import EmptyState from "../components/EmptyState";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import UserRow from "../components/UserRow";
import { people } from "../constants/data";

export default function SearchFriend({ onNavigate }) {
  return (
    <main className="screen screen-pad">
      <Header title="Find friends" onBack={() => onNavigate?.("feed")} right={Users} />
      <SearchBar placeholder="Search athletes, clubs, handles" />
      <section className="mt-6 stack">
        {people.map((person) => <div className="card card-pad" key={person.id}><UserRow user={person} meta={`${person.mutual} • ${person.metric}`} /></div>)}
      </section>
      <div className="mt-5"><EmptyState icon={Users} title="Invite teammates" body="Bring coworkers or study partners into a shared focus league." action="Copy invite" /></div>
    </main>
  );
}
