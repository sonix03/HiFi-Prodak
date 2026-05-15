import { CalendarRange, Filter, Route } from "lucide-react";
import ActivityCard from "../components/ActivityCard";
import Header from "../components/Header";
import MetricCard from "../components/MetricCard";
import Pill from "../components/Pill";
import SectionHeader from "../components/SectionHeader";
import { activities } from "../constants/data";

export default function Activities({ onNavigate }) {
  return (
    <main className="screen screen-pad">
      <Header title="Activities" eyebrow="History" right={Filter} />
      <div className="grid-2">
        <MetricCard label="May focus" value="42h" sub="+14% vs Apr" icon={CalendarRange} tone="orange" />
        <MetricCard label="Output eq" value="118 km" sub="Productivity distance" icon={Route} tone="blue" />
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
