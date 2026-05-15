import { Plus, Search } from "lucide-react";
import Button from "../components/Button";
import Header from "../components/Header";
import MetricCard from "../components/MetricCard";
import Pill from "../components/Pill";
import SearchBar from "../components/SearchBar";
import SectionHeader from "../components/SectionHeader";
import { clubs } from "../constants/data";

export default function Groups({ onNavigate }) {
  return (
    <main className="screen screen-pad">
      <Header title="Clubs" eyebrow="Community" right={Search} />
      <SearchBar placeholder="Search clubs and leagues" />
      <div className="mt-5 tab-row">{["My clubs", "Nearby", "Trending", "Work"].map((item, index) => <Pill key={item} active={index === 0}>{item}</Pill>)}</div>
      <section className="mt-6 stack">
        <SectionHeader title="Featured clubs" action="Create" />
        {clubs.map((club) => <MetricCard key={club.id} label={club.name} value={club.members} sub={`${club.goal} • ${club.rank}`} tone={club.joined ? "orange" : "blue"} progress={club.joined ? 68 : 42} />)}
      </section>
      <Button className="mt-6 w-full" size="lg" icon={Plus} onClick={() => onNavigate?.("createClub")}>Create a club</Button>
    </main>
  );
}
