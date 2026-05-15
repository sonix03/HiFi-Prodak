import ActivityRow from "../components/ActivityRow";
import Button from "../components/Button";
import Icon from "../components/Icon";
import MetricGrid from "../components/MetricGrid";
import Pill from "../components/Pill";
import ScreenHeader from "../components/ScreenHeader";
import SectionHeader from "../components/SectionHeader";
import { activities, clubs } from "../constants/data";

export default function Club({ onNavigate }) {
  const club = clubs[0];

  return (
    <main className="screen screen-pad">
      <ScreenHeader title="Club detail" onBack={() => onNavigate?.("groups")} action={{ icon: "more", label: "Club actions" }} secondaryAction={{ icon: "share", label: "Share club" }} />
      <section className="hero-panel">
        <div className="between">
          <span className="text-[var(--text)]"><Icon name="users" size="xl" /></span>
          <Pill tone="success">Joined</Pill>
        </div>
        <h1 className="mt-5 title">{club.name}</h1>
        <p className="mt-2 body">A city club for people who treat focus like training and output like race proof.</p>
        <div className="mt-5">
          <MetricGrid columns={3} items={[
            { label: "Members", value: club.members },
            { label: "City", value: "#2", tone: "blue" },
            { label: "Goal", value: "74%", tone: "yellow" },
          ]} />
        </div>
        <Button className="mt-5 w-full" icon="userCheck">Joined club</Button>
      </section>
      <section className="section">
        <SectionHeader title="Club feed" />
        <div className="list mt-2">
          {activities.slice(0, 2).map((activity) => <ActivityRow key={activity.id} activity={activity} onOpen={() => onNavigate?.("activityDetail")} />)}
        </div>
      </section>
    </main>
  );
}
