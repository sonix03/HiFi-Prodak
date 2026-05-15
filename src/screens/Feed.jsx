import ActivityCard from "../components/ActivityCard";
import AppHeader from "../components/AppHeader";
import Button from "../components/Button";
import MetricCard from "../components/MetricCard";
import Pill from "../components/Pill";
import SectionHeader from "../components/SectionHeader";
import { activities, challenges } from "../constants/data";

export default function Feed({ onNavigate }) {
  return (
    <main className="screen screen-pad">
      <AppHeader title="Home feed" eyebrow="Today" right="notification" secondaryAction={{ icon: "search", label: "Search" }} />
      <section className="card primary-gradient card-pad">
        <div className="between">
          <div>
            <p className="text-sm font-semibold text-[var(--blue)]">Today’s training load</p>
            <p className="mt-2 text-[26px] font-bold">3h 10m</p>
          </div>
          <Button variant="secondary" size="sm" icon="record" onClick={() => onNavigate?.("record")}>Record</Button>
        </div>
        <div className="mt-5 grid-3">
          <div><p className="text-lg font-semibold text-[var(--blue)]">91</p><p className="text-[11px] font-medium text-[var(--text-secondary)]">Avg score</p></div>
          <div><p className="text-lg font-semibold">18d</p><p className="text-[11px] font-medium text-[var(--text-secondary)]">Streak</p></div>
          <div><p className="text-lg font-semibold">#4</p><p className="text-[11px] font-medium text-[var(--text-secondary)]">Club rank</p></div>
        </div>
      </section>

      <div className="mt-5 tab-row">
        {["Following", "Clubs", "Challenges", "Verified"].map((tab, index) => <Pill key={tab} active={index === 0} tone={index === 0 ? "orange" : "neutral"}>{tab}</Pill>)}
      </div>

      <section className="mt-6 stack">
        <SectionHeader title="Activity feed" action="See all" />
        {activities.map((activity) => <ActivityCard key={activity.id} activity={activity} onOpen={() => onNavigate?.("activityDetail")} />)}
      </section>

      <section className="mt-6 stack">
        <SectionHeader title="Live challenges" />
        {challenges.slice(0, 2).map((challenge) => <MetricCard key={challenge.title} {...challenge} label={challenge.title} value={`${challenge.progress}%`} sub={challenge.reward} tone="yellow" progress={challenge.progress} />)}
      </section>
    </main>
  );
}
