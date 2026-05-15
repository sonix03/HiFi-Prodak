import Button from "../components/Button";
import FormField from "../components/FormField";
import MediaPlaceholder from "../components/MediaPlaceholder";
import MetricGrid from "../components/MetricGrid";
import Pill from "../components/Pill";
import ScreenHeader from "../components/ScreenHeader";
import { activities, privacyStatuses } from "../constants/data";

export default function SaveActivity({ onNavigate }) {
  const activity = activities[0];

  return (
    <main className="screen screen-pad">
      <ScreenHeader title="Save activity" mode="form" onBack={() => onNavigate?.("record")} action={{ text: "Done", onClick: () => onNavigate?.("feed") }} />
      <MetricGrid columns={3} items={[
        { label: "Duration", value: activity.duration },
        { label: "Score", value: activity.focusScore, tone: "blue" },
        { label: "Output", value: "42", sub: "events", tone: "yellow" },
      ]} />

      <section className="section form-section">
        <FormField label="Activity title" defaultValue={activity.title} />
        <FormField label="Notes" textarea defaultValue={activity.caption} />
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
