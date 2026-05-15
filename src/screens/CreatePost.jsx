import { Send } from "lucide-react";
import ActivityCard from "../components/ActivityCard";
import Button from "../components/Button";
import Header from "../components/Header";
import MediaPlaceholder from "../components/MediaPlaceholder";
import Pill from "../components/Pill";
import { activities, shareTargets } from "../constants/data";

export default function CreatePost({ onNavigate }) {
  return (
    <main className="screen screen-pad">
      <Header title="Create post" onBack={() => onNavigate?.("feed")} right={Send} />
      <div className="form-field"><label>Caption</label><textarea className="textarea" defaultValue="Today’s proof-first focus sprint. Clean output, clean score." /></div>
      <div className="mt-4"><MediaPlaceholder /></div>
      <div className="mt-4 tab-row">{shareTargets.slice(0, 3).map((item, index) => <Pill key={item} active={index === 0}>{item}</Pill>)}</div>
      <section className="mt-5 stack">
        <p className="section-title">Preview</p>
        <ActivityCard activity={activities[0]} onOpen={() => onNavigate?.("preview")} />
      </section>
      <Button className="mt-5 w-full" size="lg" icon={Send} onClick={() => onNavigate?.("feed")}>Publish post</Button>
    </main>
  );
}
