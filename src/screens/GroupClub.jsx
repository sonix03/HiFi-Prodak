import Button from "../components/Button";
import MetricCard from "../components/MetricCard";
import ScreenHeader from "../components/ScreenHeader";
import SectionHeader from "../components/SectionHeader";
import { leaderboard } from "../constants/data";

export default function GroupClub({ onNavigate }) {
  return (
    <main className="screen screen-pad">
      <ScreenHeader title="League" onBack={() => onNavigate?.("groups")} action={{ icon: "trophy", label: "League rewards" }} />
      <section className="card primary-gradient card-pad">
        <p className="text-sm font-semibold text-[var(--blue)]">May Focus League</p>
        <h1 className="mt-2 text-2xl font-bold">Deep Work Jakarta</h1>
        <p className="mt-3 text-sm font-medium text-[var(--text-secondary)]">Compete on verified hours, streak consistency, and output proof.</p>
        <Button className="mt-5" variant="secondary" icon="users">Active roster</Button>
      </section>
      <section className="mt-5 stack">
        <SectionHeader title="Leaderboard" />
        {leaderboard.map((row) => <div className="between card card-pad" key={row.name}><div className="row"><span className="grid h-9 w-9 place-items-center rounded-full bg-[var(--primary-soft)] text-sm font-semibold text-[var(--primary)]">{row.rank}</span><p className="font-semibold">{row.name}</p></div><p className="font-semibold">{row.metric}</p></div>)}
      </section>
      <div className="mt-5 grid-2">
        <MetricCard label="Weekly goal" value="240h" sub="Club target" tone="orange" progress={74} />
        <MetricCard label="Members active" value="812" sub="This week" tone="blue" />
      </div>
    </main>
  );
}
