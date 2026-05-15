import { Plus } from "lucide-react";
import ActivityCard from "../components/ActivityCard";
import Button from "../components/Button";
import Header from "../components/Header";
import MetricCard from "../components/MetricCard";
import Pill from "../components/Pill";
import SectionHeader from "../components/SectionHeader";
import { activities, challenges } from "../constants/data";

export default function Feed({ onNavigate }) {
  return (
    <main className="screen screen-pad">
      <Header title="Prodak" eyebrow="Home feed" right="bell" />
      <section className="card primary-gradient card-pad text-white">
        <div className="between">
          <div>
            <p className="text-sm font-bold opacity-85">Today’s training load</p>
            <p className="mt-2 text-4xl font-black">3h 10m</p>
          </div>
          <Button variant="secondary" size="sm" icon={Plus} onClick={() => onNavigate?.("record")}>Record</Button>
        </div>
        <div className="mt-5 grid-3">
          <div><p className="text-xl font-black">91</p><p className="text-xs font-bold opacity-75">Avg score</p></div>
          <div><p className="text-xl font-black">18d</p><p className="text-xs font-bold opacity-75">Streak</p></div>
          <div><p className="text-xl font-black">#4</p><p className="text-xs font-bold opacity-75">Club rank</p></div>
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
