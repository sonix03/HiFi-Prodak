import ActivityRow from "../components/ActivityRow";
import AppHeader from "../components/AppHeader";
import Button from "../components/Button";
import ListItem from "../components/ListItem";
import Pill from "../components/Pill";
import SectionHeader from "../components/SectionHeader";
import { activities, challenges } from "../constants/data";

export default function Feed({ onNavigate }) {
  return (
    <main className="screen screen-pad">
      <AppHeader right="notification" secondaryAction={{ icon: "search", label: "Search" }} />
      <section className="hero-panel">
        <div className="between">
          <div>
            <p className="text-[12px] font-semibold text-[var(--blue)]">Today’s training load</p>
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

      <section className="section">
        <SectionHeader title="Activity feed" action="See all" />
        <div className="list mt-2">
          {activities.map((activity, index) => <ActivityRow key={activity.id} activity={activity} expanded={index === 0} onOpen={() => onNavigate?.("activityDetail")} />)}
        </div>
      </section>

      <section className="section">
        <SectionHeader title="Live challenges" />
        <div className="list mt-2">
          {challenges.slice(0, 2).map((challenge) => (
            <ListItem
              accent="yellow"
              icon={challenge.icon}
              key={challenge.title}
              meta={challenge.reward}
              title={challenge.title}
              value={`${challenge.progress}%`}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
