import { Save } from "lucide-react";
import Button from "../components/Button";
import Header from "../components/Header";
import MediaPlaceholder from "../components/MediaPlaceholder";
import Pill from "../components/Pill";
import { activities, privacyStatuses, sessions } from "../constants/data";

export default function EditActivity({ onNavigate }) {
  const activity = activities[0];

  return (
    <main className="screen screen-pad">
      <Header title="Edit activity" onBack={() => onNavigate?.("activityDetail")} right={Save} />
      <section className="stack">
        <div className="form-field">
          <label>Title</label>
          <input className="input" defaultValue={activity.title} />
        </div>
        <div className="form-field">
          <label>Category</label>
          <div className="tab-row">{sessions.map((item, index) => <Pill key={item.label} active={index === 0}>{item.label}</Pill>)}</div>
        </div>
        <div className="form-field">
          <label>Description</label>
          <textarea className="textarea" defaultValue={activity.caption} />
        </div>
        <div className="form-field">
          <label>Visibility</label>
          <div className="tab-row">{privacyStatuses.map((item, index) => <Pill key={item} active={index === 0}>{item}</Pill>)}</div>
        </div>
        <MediaPlaceholder title="Proof settings" body="Keep proof visible as verified metadata, not the raw private file." />
      </section>
      <Button className="mt-6 w-full" size="lg" icon={Save} onClick={() => onNavigate?.("activityDetail")}>Save changes</Button>
    </main>
  );
}
