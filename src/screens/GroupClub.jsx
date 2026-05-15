import Button from "../components/Button";
import ListItem from "../components/ListItem";
import MetricGrid from "../components/MetricGrid";
import ScreenHeader from "../components/ScreenHeader";
import SectionHeader from "../components/SectionHeader";
import { leaderboard } from "../constants/data";

export default function GroupClub({ onNavigate }) {
  return (
    <main className="screen screen-pad">
      <ScreenHeader title="League" onBack={() => onNavigate?.("groups")} action={{ icon: "trophy", label: "League rewards" }} />
      <section className="hero-panel">
        <p className="text-sm font-semibold text-[var(--blue)]">May Focus League</p>
        <h1 className="mt-2 text-2xl font-bold">Deep Work Jakarta</h1>
        <p className="mt-3 text-sm font-medium text-[var(--text-secondary)]">Compete on verified hours, streak consistency, and output proof.</p>
        <Button className="mt-5" variant="secondary" icon="users">Active roster</Button>
      </section>
      <section className="section">
        <SectionHeader title="Leaderboard" />
        <div className="list mt-2">
          {leaderboard.map((row) => <ListItem key={row.name} icon="profile" title={`${row.rank}. ${row.name}`} value={row.metric} />)}
        </div>
      </section>
      <div className="section">
        <MetricGrid columns={2} items={[
          { label: "Weekly goal", value: "240h", sub: "Club target", tone: "blue" },
          { label: "Members active", value: "812", sub: "This week" },
        ]} />
      </div>
    </main>
  );
}
