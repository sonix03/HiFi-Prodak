import { Copy, Download, Send, Share2 } from "lucide-react";
import ActivityCard from "../components/ActivityCard";
import Button from "../components/Button";
import Header from "../components/Header";
import Pill from "../components/Pill";
import { activities, shareTargets } from "../constants/data";

export default function Share({ onNavigate }) {
  return (
    <main className="screen screen-pad">
      <Header title="Share" onBack={() => onNavigate?.("activityDetail")} right={Share2} />
      <section className="stack">
        <ActivityCard activity={activities[0]} onOpen={() => onNavigate?.("activityDetail")} />
        <div className="card card-pad">
          <p className="section-title">Share destination</p>
          <div className="mt-4 tab-row">{shareTargets.map((item, index) => <Pill key={item} active={index === 0}>{item}</Pill>)}</div>
        </div>
        <div className="grid-2">
          <Button variant="outline" icon={Copy}>Copy link</Button>
          <Button variant="outline" icon={Download}>Save image</Button>
        </div>
        <Button size="lg" icon={Send} onClick={() => onNavigate?.("feed")}>Share now</Button>
      </section>
    </main>
  );
}
