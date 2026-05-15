import ActivityCard from "../components/ActivityCard";
import AppHeader from "../components/AppHeader";
import MetricCard from "../components/MetricCard";
import Pill from "../components/Pill";
import SectionHeader from "../components/SectionHeader";
import { activities } from "../constants/data";

export default function Activities({ onNavigate }) {
  return (
    <main className="screen screen-pad">
      <AppHeader title="Activities" eyebrow="History" right="filter" secondaryAction={{ icon: "search", label: "Search activities" }} />
      <div className="grid-2">
        <MetricCard label="May focus" value="42h" sub="+14% vs Apr" icon="calendar" tone="neutral" />
        <MetricCard label="Output eq" value="118 km" sub="Productivity distance" icon="route" tone="blue" />
      </div>
      <div className="mt-5 tab-row">
        {["All", "Deep Work", "Study", "Club", "Proof"].map((tab, index) => <Pill key={tab} active={index === 0}>{tab}</Pill>)}
      </div>
      <section className="mt-6 stack">
        <SectionHeader title="Recent sessions" meta="Tap any activity to review proof and comments." />
        {activities.map((activity) => <ActivityCard key={activity.id} activity={activity} onOpen={() => onNavigate?.("activityDetail")} />)}
      </section>
    </main>
  );
}
