import AppHeader from "../components/AppHeader";
import Button from "../components/Button";
import ListItem from "../components/ListItem";
import Pill from "../components/Pill";
import SearchBar from "../components/SearchBar";
import SectionHeader from "../components/SectionHeader";
import { clubs } from "../constants/data";

export default function Groups({ onNavigate }) {
  return (
    <main className="screen screen-pad">
      <AppHeader right="search" secondaryAction={{ icon: "plus", label: "Create club" }} />
      <SearchBar placeholder="Search clubs and leagues" />
      <div className="mt-5 tab-row">{["My clubs", "Nearby", "Trending", "Work"].map((item, index) => <Pill key={item} active={index === 0}>{item}</Pill>)}</div>
      <section className="section">
        <SectionHeader title="Featured clubs" action="Create" />
        <div className="list mt-2">
          {clubs.map((club) => (
            <ListItem
              accent={club.joined ? "blue" : "neutral"}
              icon="users"
              key={club.id}
              meta={`${club.goal} • ${club.rank}`}
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
