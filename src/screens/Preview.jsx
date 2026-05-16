import ActivityCard from "../components/ActivityCard";
import Button from "../components/Button";
import Pill from "../components/Pill";
import ScreenHeader from "../components/ScreenHeader";
import { activities } from "../constants/data";

export default function Preview({ onNavigate }) {
  return (
    <main className="screen screen-pad">
      <ScreenHeader title="Preview" onBack={() => onNavigate?.("saveActivity")} action={{ icon: "eye", label: "Preview visibility" }} />
      <section className="card card-pad">
        <p className="meta text-[var(--primary)]">Before publishing</p>
        <h1 className="mt-2 title">This is how your activity appears in the feed.</h1>
        <div className="mt-4 tab-row"><Pill>Comments on</Pill></div>
      </section>
      <div className="mt-5"><ActivityCard activity={activities[0]} onOpen={() => onNavigate?.("activityDetail")} /></div>
      <Button className="mt-6 w-full" size="lg" icon="check" onClick={() => onNavigate?.("feed")}>Publish activity</Button>
    </main>
  );
}
