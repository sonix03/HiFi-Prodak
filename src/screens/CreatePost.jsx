import { useState } from "react";
import ActivityCard from "../components/ActivityCard";
import Button from "../components/Button";
import Icon from "../components/Icon";
import MediaPlaceholder from "../components/MediaPlaceholder";
import Pill from "../components/Pill";
import ScreenHeader from "../components/ScreenHeader";
import { activities, shareTargets } from "../constants/data";

export default function CreatePost({ onNavigate }) {
  const [step, setStep] = useState(0);
  const isCompose = step === 0;

  function goBack() {
    if (isCompose) {
      onNavigate?.("feed");
      return;
    }
    setStep(0);
  }

  return (
    <main className="screen screen-pad">
      <ScreenHeader
        action={{ text: isCompose ? "Next" : "Post", onClick: isCompose ? () => setStep(1) : () => onNavigate?.("feed") }}
        mode="form"
        onBack={goBack}
        title="Create post"
      />

      <section className="stack">
        <div className="between">
          <p className="meta">Step {step + 1} of 2</p>
          <div className="row gap-1">
            <span className="h-1.5 w-8 rounded-full bg-[var(--blue)]" />
            <span className={`h-1.5 w-8 rounded-full ${step === 1 ? "bg-[var(--blue)]" : "bg-[var(--divider)]"}`} />
          </div>
        </div>

        {isCompose ? (
          <>
            <textarea
              className="min-h-[300px] w-full resize-none border-0 bg-transparent text-sm font-medium outline-none placeholder:text-[var(--text-tertiary)]"
              defaultValue="What’s going on?"
            />
            <div className="between border-t border-[var(--border)] pt-3">
              <button className="row text-xs font-medium text-[var(--text-secondary)]"><Icon name="media" size="sm" /> Add camera</button>
              <div className="row text-[var(--text-secondary)]">
                <Icon name="list" size="md" />
                <Icon name="media" size="md" />
              </div>
            </div>
            <Button className="w-full" icon="arrowRight" onClick={() => setStep(1)}>Continue</Button>
          </>
        ) : (
          <>
            <div className="form-field">
              <label>Add a title (optional)</label>
              <input className="input" defaultValue="Morning product sprint" />
            </div>
            <div className="form-field">
              <label>Caption</label>
              <textarea className="textarea" defaultValue="What’s going on?" />
            </div>
            <MediaPlaceholder />
            <div className="tab-row">{shareTargets.slice(0, 3).map((item, index) => <Pill key={item} active={index === 0}>{item}</Pill>)}</div>
            <ActivityCard activity={activities[0]} onOpen={() => onNavigate?.("preview")} />
            <Button className="w-full" icon="share" onClick={() => onNavigate?.("feed")}>Publish post</Button>
          </>
        )}
      </section>
    </main>
  );
}
