import Button from "../components/Button";
import Icon from "../components/Icon";
import ScreenHeader from "../components/ScreenHeader";
import mapPic from "../assets/map-pic.png";

const destinations = [
  ["Instagram Story", "media"],
  ["Instagram Message", "messageShare"],
  ["WhatsApp", "share"],
  ["Message", "comment"],
  ["Prodak Message", "users"],
  ["Prodak Post", "feed"],
  ["Copy Link", "copy"],
  ["More", "plus"],
];

export default function Share({ onNavigate }) {
  return (
    <main className="screen screen-pad">
      <ScreenHeader title="Share Activity" onBack={() => onNavigate?.("activityDetail")} action={{ icon: "share", label: "Share" }} />
      <section className="stack">
        <div className="mx-auto h-[280px] w-[160px] overflow-hidden rounded-[28px] bg-[var(--surface-muted)] shadow-[var(--shadow-card)]">
          <img className="h-full w-full object-cover" src={mapPic} alt="Map share preview" />
        </div>
        <div className="row justify-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--text)]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--divider)]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--divider)]" />
        </div>

        <h2 className="section-title mt-2">Share to</h2>
        <div className="grid grid-cols-4 gap-x-3 gap-y-5">
          {destinations.map(([label, icon]) => (
            <button className="grid justify-items-center gap-2 text-center text-[10px] font-medium text-[var(--text-secondary)]" key={label}>
              <span className="grid h-12 w-12 place-items-center rounded-full border border-[var(--border)] bg-white text-[var(--text)]">
                <Icon name={icon} size="md" />
              </span>
              <span>{label}</span>
            </button>
          ))}
        </div>

        <Button className="mt-2 w-full" size="lg" icon="share" onClick={() => onNavigate?.("feed")}>Share now</Button>
      </section>
    </main>
  );
}
