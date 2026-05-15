import { BadgeCheck, Send, Upload } from "lucide-react";
import Button from "../components/Button";
import Header from "../components/Header";
import MediaPlaceholder from "../components/MediaPlaceholder";
import MetricCard from "../components/MetricCard";
import Pill from "../components/Pill";
import { activities, privacyStatuses } from "../constants/data";

export default function SaveActivity({ onNavigate }) {
  const activity = activities[0];

  return (
    <main className="screen screen-pad">
      <Header title="Save activity" onBack={() => onNavigate?.("record")} right={BadgeCheck} />
      <div className="grid-3">
        <MetricCard label="Duration" value={activity.duration} tone="orange" />
        <MetricCard label="Score" value={activity.focusScore} tone="blue" />
        <MetricCard label="Output" value="42" sub="events" tone="yellow" />
      </div>

      <section className="mt-5 stack">
        <div className="form-field">
          <label>Activity title</label>
          <input className="input" defaultValue={activity.title} />
        </div>
        <div className="form-field">
          <label>Notes</label>
          <textarea className="textarea" defaultValue={activity.caption} />
        </div>
        <MediaPlaceholder icon={Upload} title="Attach proof" body="Figma version, document history, screenshot, or output log." />
        <div className="tab-row">
          {privacyStatuses.map((status, index) => <Pill key={status} active={index === 0}>{status}</Pill>)}
        </div>
      </section>

      <div className="mt-6 grid-2">
        <Button variant="outline" onClick={() => onNavigate?.("preview")}>Preview</Button>
        <Button icon={Send} onClick={() => onNavigate?.("feed")}>Publish</Button>
      </div>
    </main>
  );
}
