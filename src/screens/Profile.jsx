import { Settings, Share2 } from "lucide-react";
import Avatar from "../components/Avatar";
import Button from "../components/Button";
import Header from "../components/Header";
import MetricCard from "../components/MetricCard";
import SectionHeader from "../components/SectionHeader";
import { activities, users } from "../constants/data";

export default function Profile({ onNavigate }) {
  const user = users[0];

  return (
    <main className="screen screen-pad">
      <Header title="Profile" eyebrow="Identity" right={Settings} />
      <section className="card card-pad text-center">
        <Avatar user={user} size="xl" />
        <h1 className="mt-4 title">{user.name}</h1>
        <p className="mt-1 body">{user.handle} • {user.role}</p>
        <div className="mt-5 grid-3">
          <div><p className="metric-sm">18d</p><p className="meta">Streak</p></div>
          <div><p className="metric-sm">142</p><p className="meta">Sessions</p></div>
          <div><p className="metric-sm">8.7k</p><p className="meta">Kudos</p></div>
        </div>
        <div className="mt-5 grid-2">
          <Button variant="outline" icon={Share2} onClick={() => onNavigate?.("share")}>Share</Button>
          <Button onClick={() => onNavigate?.("progress")}>Progress</Button>
        </div>
      </section>
      <section className="mt-5 stack">
        <SectionHeader title="Personal records" />
        <MetricCard label="Best focus score" value="97" sub="Design sprint" tone="orange" />
        <MetricCard label="Longest session" value="4h 22m" sub="Research writing" tone="blue" />
      </section>
      <section className="mt-5 stack">
        <SectionHeader title="Recent activity" />
        {activities.slice(0, 2).map((activity) => <div className="card card-pad" key={activity.id}><p className="font-extrabold">{activity.title}</p><p className="meta mt-1">{activity.duration} • Score {activity.focusScore}</p></div>)}
      </section>
    </main>
  );
}
