import ActivityHeader from "../components/ActivityHeader";
import ActivityMap from "../components/ActivityMap";
import Avatar from "../components/Avatar";
import Button from "../components/Button";
import CommentItem from "../components/CommentItem";
import Icon from "../components/Icon";
import MetricGrid from "../components/MetricGrid";
import Pill from "../components/Pill";
import SectionHeader from "../components/SectionHeader";
import mapPic from "../assets/map-pic.png";
import { activities, comments, deviceProofs } from "../constants/data";

export default function ActivityDetail({ onNavigate }) {
  const activity = activities[0];

  return (
    <main className="screen screen-pad">
      <ActivityHeader title="Activity" onBack={() => onNavigate?.("feed")} />
      <section className="hero-panel stack gap-3" style={{ borderBottom: 'none' }}>
        <div className="row">
          <Avatar user={activity.user} />
          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold">{activity.user.name}</p>
            <p className="meta">{activity.time} • {activity.category}</p>
          </div>
          <Pill tone="success">{activity.privacy}</Pill>
        </div>
        <h1 className="text-[22px] font-bold leading-tight">{activity.title}</h1>
        <p className="body">{activity.caption}</p>
      </section>

      <div>
        <ActivityMap height={220} proof={activity.proof} label="Proof map" imageSrc={mapPic} />
      </div>

      <div className="mt-4">
        <MetricGrid columns={2} items={[
          { label: "Duration", value: activity.duration, sub: "Focused time" },
          { label: "Focus score", value: activity.focusScore, sub: "Top 8% today", tone: "blue" },
          { label: "Steps", value: activity.output, sub: "Total movement", tone: "blue" },
          { label: "Streak", value: activity.streak, sub: "Active identity", tone: "yellow" },
        ]} />
      </div>

      <section className="section">
        <SectionHeader title="Proof signals" />
        <div className="list mt-2">
          {deviceProofs.map((proof) => <div className="list-row" key={proof.label}><Icon name={proof.icon} size="sm" className="text-[var(--blue)]" /><span className="flex-1 text-sm font-medium">{proof.label}</span><span className="text-sm font-semibold">{proof.value}</span></div>)}
        </div>
      </section>

      <section className="mt-4 stack">
        <SectionHeader title="Comments" action="Open" />
        {comments.slice(0, 2).map((comment) => <CommentItem key={comment.id} comment={comment} />)}
      </section>

      <div className="mt-5 grid-2">
        <Button variant="outline" icon="edit" onClick={() => onNavigate?.("editActivity")}>Edit</Button>
        <Button icon="lock" onClick={() => onNavigate?.("share")}>Share</Button>
      </div>
    </main>
  );
}
