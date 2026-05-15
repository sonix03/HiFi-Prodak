import Header from "../components/Header";
import Pill from "../components/Pill";
import { notifications } from "../constants/data";

export default function Notifications({ onNavigate }) {
  return (
    <main className="screen screen-pad">
      <Header title="Notifications" onBack={() => onNavigate?.("feed")} right="settings" />
      <div className="tab-row">{["All", "Kudos", "Comments", "Clubs"].map((tab, index) => <Pill key={tab} active={index === 0}>{tab}</Pill>)}</div>
      <section className="mt-6 stack">
        {notifications.map((item) => <article className="card card-pad row" key={item.id}><span className="grid h-11 w-11 place-items-center rounded-2xl bg-[var(--primary-soft)] text-[var(--primary)]"><item.icon size={20} /></span><div className="min-w-0 flex-1"><p className="text-sm font-extrabold">{item.title}</p><p className="meta mt-1">{item.body}</p></div><span className="text-[11px] font-bold text-[var(--text-tertiary)]">{item.time}</span></article>)}
      </section>
    </main>
  );
}
