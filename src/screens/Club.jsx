import ActivityCard from "../components/ActivityCard";
import Button from "../components/Button";
import Icon from "../components/Icon";
import MetricCard from "../components/MetricCard";
import Pill from "../components/Pill";
import ScreenHeader from "../components/ScreenHeader";
import SectionHeader from "../components/SectionHeader";
import { activities, clubs } from "../constants/data";

export default function Club({ onNavigate }) {
  const club = clubs[0];

  return (
    <main className="screen screen-pad">
      <ScreenHeader title="Club detail" onBack={() => onNavigate?.("groups")} action={{ icon: "more", label: "Club actions" }} secondaryAction={{ icon: "share", label: "Share club" }} />
      <section className="card card-pad">
        <div className="between">
          <span className="text-[var(--text)]"><Icon name="users" size="xl" /></span>
          <Pill tone="success">Joined</Pill>
        </div>
        <h1 className="mt-5 title">{club.name}</h1>
        <p className="mt-2 body">A city club for people who treat focus like training and output like race proof.</p>
        <div className="mt-5 grid-3">
          <div><p className="metric-sm">{club.members}</p><p className="meta">Members</p></div>
          <div><p className="metric-sm">#2</p><p className="meta">City</p></div>
          <div><p className="metric-sm">74%</p><p className="meta">Goal</p></div>
        </div>
        <Button className="mt-5 w-full" icon="userCheck">Joined club</Button>
      </section>
      <div className="mt-5 grid-2">
        <MetricCard label="Weekly goal" value="240h" sub="Verified focus" tone="orange" progress={74} />
        <MetricCard label="Leaderboard" value="#4" sub="Your rank" tone="blue" />
      </div>
      <section className="mt-5 stack">
        <SectionHeader title="Club feed" />
        {activities.slice(0, 2).map((activity) => <ActivityCard key={activity.id} activity={activity} onOpen={() => onNavigate?.("activityDetail")} />)}
      </section>
    </main>
  );
}
