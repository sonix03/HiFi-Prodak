import AppHeader from "../components/AppHeader";
import MetricCard from "../components/MetricCard";
import ProgressChart from "../components/ProgressChart";
import SectionHeader from "../components/SectionHeader";
import { challenges, weeklyStats } from "../constants/data";

export default function Progress() {
  return (
    <main className="screen screen-pad">
      <AppHeader title="Progress" eyebrow="This week" right="calendar" secondaryAction={{ icon: "settings", label: "Progress settings" }} />
      <section className="card blue-gradient card-pad">
        <p className="text-sm font-semibold text-[var(--blue)]">Weekly focus time</p>
        <p className="mt-2 text-[30px] font-bold">17h 12m</p>
        <p className="mt-3 text-sm font-medium text-[var(--text-secondary)]">You are 4h 20m ahead of your four-week average.</p>
      </section>
      <div className="mt-4 grid-2">
        <MetricCard label="Streak" value="18d" sub="Personal best" icon="fire" tone="yellow" />
        <MetricCard label="Avg score" value="86" sub="+5 this week" icon="analytics" tone="neutral" />
        <MetricCard label="Sessions" value="24" sub="May total" icon="timer" tone="blue" />
        <MetricCard label="Goal" value="72%" sub="50K challenge" icon="target" tone="neutral" progress={72} />
      </div>
      <section className="mt-5 stack">
        <SectionHeader title="Focus volume" meta="Hours recorded by day." />
        <ProgressChart data={weeklyStats} />
      </section>
      <section className="mt-5 stack">
        <SectionHeader title="Insights" />
        {challenges.map((challenge) => <MetricCard key={challenge.title} label={challenge.title} value={`${challenge.progress}%`} sub={challenge.reward} icon={challenge.icon} tone="yellow" progress={challenge.progress} />)}
      </section>
    </main>
  );
}
