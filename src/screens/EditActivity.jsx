import { useState } from "react";
import ActivityMap from "../components/ActivityMap";
import Button from "../components/Button";
import MediaPlaceholder from "../components/MediaPlaceholder";
import Pill from "../components/Pill";
import ScreenHeader from "../components/ScreenHeader";
import { activities, privacyStatuses, sessions } from "../constants/data";

export default function EditActivity({ onNavigate }) {
  const [step, setStep] = useState(0);
  const activity = activities[0];
  const isForm = step === 0;

  function goBack() {
    if (isForm) {
      onNavigate?.("activityDetail");
      return;
    }
    setStep(0);
  }

  return (
    <main className="screen screen-pad">
      <ScreenHeader
        action={{ text: isForm ? "Preview" : "Done", onClick: isForm ? () => setStep(1) : () => onNavigate?.("activityDetail") }}
        mode="form"
        onBack={goBack}
        title="Edit activity"
      />

      {isForm ? (
        <section className="stack">
          <div className="form-field">
            <label>Title</label>
            <input className="input" defaultValue={activity.title} />
          </div>
          <div className="form-field">
            <label>Description</label>
            <textarea className="textarea" defaultValue={activity.caption} />
          </div>
          <div className="form-field">
            <label>Activity type</label>
            <div className="tab-row">{sessions.map((item, index) => <Pill key={item.label} active={index === 0}>{item.label}</Pill>)}</div>
          </div>
          <MediaPlaceholder title="Map type" body="Choose how proof and context will be shown on the feed." />
          <div className="form-field">
            <label>Visibility</label>
            <div className="tab-row">{privacyStatuses.map((item, index) => <Pill key={item} active={index === 0}>{item}</Pill>)}</div>
          </div>
          <Button className="w-full" icon="eye" onClick={() => setStep(1)}>Preview changes</Button>
        </section>
      ) : (
        <section className="stack">
          <ActivityMap height={300} label="Edited proof map" proof="Updated activity context" />
          <div className="card card-pad">
            <p className="meta">{activity.user.name}</p>
            <h1 className="mt-1 card-title">{activity.title}</h1>
            <p className="body mt-2">{activity.caption}</p>
          </div>
          <Button icon="save" onClick={() => onNavigate?.("activityDetail")}>Update activity</Button>
          <Button variant="outline" onClick={() => onNavigate?.("activityDetail")}>Cancel</Button>
        </section>
      )}
    </main>
  );
}
