import { useState } from "react";
import ActivityHeader from "../components/ActivityHeader";
import ActivityMap from "../components/ActivityMap";
import Avatar from "../components/Avatar";
import Button from "../components/Button";
import CommentItem from "../components/CommentItem";
import Icon from "../components/Icon";
import MetricGrid from "../components/MetricGrid";
import Pill from "../components/Pill";
import SectionHeader from "../components/SectionHeader";
import Share from "./Share";
import mapPic from "../assets/map-pic.png";
import { activities, comments, deviceProofs } from "../constants/data";

export default function ActivityDetail({ onNavigate }) {
  const activity = activities[0];
  const [showShare, setShowShare] = useState(false);

  return (
    <main className="screen screen-pad relative">
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
        <p className="body">Tracked across laptop, phone, and browser activity to show how focused this work block really was.</p>
      </section>

      <div>
        <ActivityMap height={220} proof={activity.proof} label="Proof map" imageSrc={mapPic} />
      </div>

      <div className="mt-4">
        <MetricGrid columns={2} items={[
          {
            label: "Synced time",
            value: activity.duration,
            sub: "Laptop + browser",
            tooltip: "Time counted only while your connected work devices showed active, productive work.",
          },
          {
            label: "Focus score",
            value: activity.focusScore,
            sub: "Top 8% today",
            tone: "blue",
            tooltip: "A score from productive app usage, low context switching, and consistent device signals.",
          },
          {
            label: "Output events",
            value: activity.output,
            sub: "Edits, commits, docs",
            tone: "blue",
            tooltip: "Tracked work actions from connected tools, such as document edits, design updates, or code activity.",
          },
          {
            label: "Device streak",
            value: activity.streak,
            sub: "Multi-device consistency",
            tone: "yellow",
            tooltip: "How long you have kept verified productivity sessions across your connected devices.",
          },
        ]} />
      </div>

      <section className="section">
        <SectionHeader title="Device signals" />
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
        <Button icon="lock" onClick={() => setShowShare(true)}>Share</Button>
      </div>

      {showShare ? <Share onNavigate={() => setShowShare(false)} /> : null}
    </main>
  );
}
