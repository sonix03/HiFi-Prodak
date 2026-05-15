import ActivityCard from "../components/ActivityCard";
import Button from "../components/Button";
import Pill from "../components/Pill";
import ScreenHeader from "../components/ScreenHeader";
import { activities, shareTargets } from "../constants/data";

export default function Share({ onNavigate }) {
  return (
    <main className="screen screen-pad">
      <ScreenHeader title="Share" onBack={() => onNavigate?.("activityDetail")} action={{ icon: "share", label: "Share" }} />
      <section className="stack pb-6">
        <ActivityCard activity={activities[0]} onOpen={() => onNavigate?.("activityDetail")} />
        <div className="card card-pad">
          <p className="section-title">Share destination</p>
          <div className="mt-4 tab-row">{shareTargets.map((item, index) => <Pill key={item} active={index === 0}>{item}</Pill>)}</div>
        </div>
        <div className="grid-2">
          <Button variant="outline" icon="copy">Copy link</Button>
          <Button variant="outline" icon="download">Save image</Button>
        </div>
        <Button className="w-full" size="lg" icon="share" onClick={() => onNavigate?.("feed")}>Share now</Button>
      </section>
    </main>
  );
}
