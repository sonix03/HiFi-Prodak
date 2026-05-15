import Button from "../components/Button";
import MediaPlaceholder from "../components/MediaPlaceholder";
import MetricCard from "../components/MetricCard";
import Pill from "../components/Pill";
import ScreenHeader from "../components/ScreenHeader";
import { activities, privacyStatuses } from "../constants/data";

export default function SaveActivity({ onNavigate }) {
  const activity = activities[0];

  return (
    <main className="screen screen-pad">
      <ScreenHeader title="Save activity" mode="form" onBack={() => onNavigate?.("record")} action={{ text: "Done", onClick: () => onNavigate?.("feed") }} />
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
        <MediaPlaceholder icon="upload" title="Attach proof" body="Figma version, document history, screenshot, or output log." />
        <div className="tab-row">
          {privacyStatuses.map((status, index) => <Pill key={status} active={index === 0}>{status}</Pill>)}
        </div>
      </section>

      <div className="mt-6 grid-2">
        <Button variant="outline" onClick={() => onNavigate?.("preview")}>Preview</Button>
        <Button icon="share" onClick={() => onNavigate?.("feed")}>Publish</Button>
      </div>
    </main>
  );
}
