import AppHeader from "../components/AppHeader";
import ListItem from "../components/ListItem";
import MetricGrid from "../components/MetricGrid";
import ProgressChart from "../components/ProgressChart";
import SectionHeader from "../components/SectionHeader";
import { challenges, monthlyProductivity, weeklyStats } from "../constants/data";

function HeatmapCell({ item }) {
  const level =
    item.hours >= 4 ? "bg-[var(--primary)] text-white" :
    item.hours >= 2.5 ? "bg-[var(--blue)]/80 text-white" :
    item.hours >= 1 ? "bg-[var(--primary-soft)] text-[var(--blue)]" :
    item.hours > 0 ? "bg-[var(--surface-muted)] text-[var(--text-secondary)]" :
    "bg-white text-[var(--text-tertiary)]";

  return (
    <div className={`grid aspect-square place-items-center rounded-xl border border-[var(--border)] ${level}`}>
      <span className="text-[11px] font-semibold">{item.day}</span>
    </div>
  );
}

function MonthlyHeatmap({ data }) {
  const productiveDays = data.filter((item) => item.hours >= 1).length;
  const bestDay = data.reduce((best, item) => item.hours > best.hours ? item : best, data[0]);

  return (
    <div className="rounded-2xl bg-white p-4 shadow-[var(--shadow-card)]">
      <div className="between">
        <div>
          <p className="text-sm font-semibold">May 2026</p>
          <p className="meta mt-1">{productiveDays} productive days • best day {bestDay.day}</p>
        </div>
        <span className="rounded-full bg-[var(--primary-soft)] px-3 py-1 text-[11px] font-semibold text-[var(--blue)]">4 weeks</span>
      </div>

      <div className="mt-4 grid grid-cols-7 gap-2">
        {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => (
          <span className="text-center text-[10px] font-semibold text-[var(--text-tertiary)]" key={`${day}-${index}`}>{day}</span>
        ))}
        {data.map((item) => <HeatmapCell item={item} key={item.day} />)}
      </div>

      <div className="between mt-4">
        <p className="meta">Less</p>
        <div className="row gap-1">
          <span className="h-3 w-3 rounded bg-white ring-1 ring-[var(--border)]" />
          <span className="h-3 w-3 rounded bg-[var(--surface-muted)]" />
          <span className="h-3 w-3 rounded bg-[var(--primary-soft)]" />
          <span className="h-3 w-3 rounded bg-[var(--blue)]/80" />
          <span className="h-3 w-3 rounded bg-[var(--primary)]" />
        </div>
        <p className="meta">More</p>
      </div>
    </div>
  );
}

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
        <SectionHeader title="Monthly productivity" meta="Heatmap of Mika's productive days across four weeks." />
        <MonthlyHeatmap data={monthlyProductivity} />
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
