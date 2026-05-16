import Avatar from "../components/Avatar";
import Button from "../components/Button";
import ListItem from "../components/ListItem";
import MetricGrid from "../components/MetricGrid";
import ProfileHeader from "../components/ProfileHeader";
import SectionHeader from "../components/SectionHeader";
import { activities, users } from "../constants/data";

export default function Profile({ onNavigate }) {
  const user = users[0];

  return (
    <main className="screen screen-pad">
      <ProfileHeader user={user} />
      <section className="hero-panel text-center">
        <Avatar user={user} size="xl" />
        <h1 className="mt-4 title">{user.name}</h1>
        <p className="mt-1 body">{user.handle} • {user.role}</p>
        <div className="mt-5 text-left">
          <MetricGrid columns={3} items={[
            { label: "Streak", value: "18d", tone: "yellow" },
            { label: "Sessions", value: "142", tone: "blue" },
            { label: "Kudos", value: "8.7k" },
          ]} />
        </div>
        <div className="mt-5 grid-2">
          <Button variant="outline" icon="share" onClick={() => onNavigate?.("share")}>Share</Button>
          <Button onClick={() => onNavigate?.("progress")}>Progress</Button>
        </div>
      </section>
      <section className="section">
        <SectionHeader title="Personal records" />
        <div className="list mt-2">
          <ListItem icon="award" accent="yellow" title="Best focus score" meta="Design sprint" value="97" />
          <ListItem icon="timer" accent="blue" title="Longest session" meta="Research writing" value="4h 22m" />
        </div>
      </section>
      <section className="section">
        <SectionHeader title="Recent activity" />
        <div className="list mt-2">
          {activities.slice(0, 2).map((activity) => <ListItem key={activity.id} icon="activity" title={activity.title} meta={`${activity.duration} • Score ${activity.focusScore}`} />)}
        </div>
      </section>
    </main>
  );
}
