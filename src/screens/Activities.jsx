import ActivityRow from "../components/ActivityRow";
import AppHeader from "../components/AppHeader";
import MetricGrid from "../components/MetricGrid";
import Pill from "../components/Pill";
import SectionHeader from "../components/SectionHeader";
import { activities } from "../constants/data";

export default function Activities({ onNavigate }) {
  return (
    <main className="screen screen-pad">
      <AppHeader right="filter" secondaryAction={{ icon: "search", label: "Search activities" }} />
      <MetricGrid columns={2} items={[
        { label: "May focus", value: "42h", sub: "+14% vs Apr", icon: "calendar", tone: "blue" },
        { label: "Output eq", value: "118 km", sub: "Productivity distance", icon: "route", tone: "neutral" },
      ]} />
      <div className="mt-5 tab-row">
        {["All", "Deep Work", "Study", "Club", "Proof"].map((tab, index) => <Pill key={tab} active={index === 0}>{tab}</Pill>)}
      </div>
      <section className="section">
        <SectionHeader title="Recent sessions" meta="Tap any activity to review proof and comments." />
        <div className="list mt-2">
          {activities.map((activity) => <ActivityRow key={activity.id} activity={activity} onOpen={() => onNavigate?.("activityDetail")} />)}
        </div>
      </section>
    </main>
  );
}
