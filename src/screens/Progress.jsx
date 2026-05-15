import AppHeader from "../components/AppHeader";
import ListItem from "../components/ListItem";
import MetricGrid from "../components/MetricGrid";
import ProgressChart from "../components/ProgressChart";
import SectionHeader from "../components/SectionHeader";
import { challenges, weeklyStats } from "../constants/data";

export default function Progress() {
  return (
    <main className="screen screen-pad">
      <AppHeader right="calendar" secondaryAction={{ icon: "settings", label: "Progress settings" }} />
      <section className="hero-panel">
        <p className="text-sm font-semibold text-[var(--blue)]">Weekly focus time</p>
        <p className="mt-2 text-[30px] font-bold">17h 12m</p>
        <p className="mt-3 text-sm font-medium text-[var(--text-secondary)]">You are 4h 20m ahead of your four-week average.</p>
      </section>
      <div className="mt-4">
        <MetricGrid columns={2} items={[
          { label: "Streak", value: "18d", sub: "Personal best", icon: "fire", tone: "yellow" },
          { label: "Avg score", value: "86", sub: "+5 this week", icon: "analytics", tone: "blue" },
          { label: "Sessions", value: "24", sub: "May total", icon: "timer" },
          { label: "Goal", value: "72%", sub: "50K challenge", icon: "target", tone: "blue" },
        ]} />
      </div>
      <section className="section">
        <SectionHeader title="Focus volume" meta="Hours recorded by day." />
        <ProgressChart data={weeklyStats} />
      </section>
      <section className="section">
        <SectionHeader title="Insights" />
        <div className="list mt-2">
          {challenges.map((challenge) => <ListItem key={challenge.title} icon={challenge.icon} accent="yellow" title={challenge.title} meta={challenge.reward} value={`${challenge.progress}%`} />)}
        </div>
      </section>
    </main>
  );
}
