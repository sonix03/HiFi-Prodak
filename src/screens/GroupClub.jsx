import { Trophy, Users } from "lucide-react";
import Button from "../components/Button";
import Header from "../components/Header";
import MetricCard from "../components/MetricCard";
import SectionHeader from "../components/SectionHeader";
import { leaderboard } from "../constants/data";

export default function GroupClub({ onNavigate }) {
  return (
    <main className="screen screen-pad">
      <Header title="League" onBack={() => onNavigate?.("groups")} right={Trophy} />
      <section className="card primary-gradient card-pad text-white">
        <p className="text-sm font-bold opacity-80">May Focus League</p>
        <h1 className="mt-2 text-3xl font-black">Deep Work Jakarta</h1>
        <p className="mt-3 text-sm font-semibold opacity-80">Compete on verified hours, streak consistency, and output proof.</p>
        <Button className="mt-5" variant="secondary" icon={Users}>Active roster</Button>
      </section>
      <section className="mt-5 stack">
        <SectionHeader title="Leaderboard" />
        {leaderboard.map((row) => <div className="between card card-pad" key={row.name}><div className="row"><span className="grid h-9 w-9 place-items-center rounded-full bg-[var(--primary-soft)] text-sm font-black text-[var(--primary)]">{row.rank}</span><p className="font-extrabold">{row.name}</p></div><p className="font-black">{row.metric}</p></div>)}
      </section>
      <div className="mt-5 grid-2">
        <MetricCard label="Weekly goal" value="240h" sub="Club target" tone="orange" progress={74} />
        <MetricCard label="Members active" value="812" sub="This week" tone="blue" />
      </div>
    </main>
  );
}
