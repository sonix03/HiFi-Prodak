import Icon from "../components/Icon";
import ScreenHeader from "../components/ScreenHeader";
import Pill from "../components/Pill";
import { notifications } from "../constants/data";

export default function Notifications({ onNavigate }) {
  return (
    <main className="screen screen-pad">
      <ScreenHeader title="Notifications" onBack={() => onNavigate?.("feed")} action={{ icon: "settings", label: "Notification settings" }} />
      <div className="tab-row">{["All", "Kudos", "Comments", "Clubs"].map((tab, index) => <Pill key={tab} active={index === 0}>{tab}</Pill>)}</div>
      <section className="mt-6 stack">
        {notifications.map((item) => <article className="card card-pad row" key={item.id}><span className={item.type === "achievement" ? "text-[var(--yellow)]" : item.type === "club" ? "text-[var(--blue)]" : "text-[var(--text)]"}><Icon name={item.icon} size="md" /></span><div className="min-w-0 flex-1"><p className="text-sm font-semibold">{item.title}</p><p className="meta mt-1">{item.body}</p></div><span className="text-[11px] font-medium text-[var(--text-tertiary)]">{item.time}</span></article>)}
      </section>
    </main>
  );
}
