import Button from "../components/Button";
import Card from "../components/Card";
import Icon from "../components/Icon";
import Pill from "../components/Pill";
import ScreenHeader from "../components/ScreenHeader";
import SectionHeader from "../components/SectionHeader";
import { privacyStatuses, sessions } from "../constants/data";

export default function Record({ onNavigate }) {
  return (
    <main className="screen screen-pad">
      <ScreenHeader title="Record" mode="record" eyebrow="Deep Work" status="Private proof ready" action={{ icon: "lock", label: "Privacy" }} />
      <section className="grid place-items-center rounded-[28px] border border-[var(--border)] bg-white px-6 py-9 text-center shadow-[var(--shadow-card)]">
        <span className="grid h-24 w-24 place-items-center rounded-full bg-[var(--primary-soft)] text-[var(--blue)] ring-8 ring-[var(--yellow-soft)]">
          <Icon name="record" size={54} />
        </span>
        <p className="mt-6 text-sm font-semibold text-[var(--text-secondary)]">Ready for Deep Work</p>
        <p className="mt-2 text-[36px] font-bold leading-none">00:00</p>
        <Button className="mt-8 w-full" size="lg" icon="play" onClick={() => onNavigate?.("saveActivity")}>Start focus</Button>
      </section>

      <section className="mt-6 stack">
        <SectionHeader title="Session type" />
        {sessions.map((session) => <Card key={session.label} className={session.active ? "border-[var(--blue)] bg-[var(--blue-soft)]" : ""}><div className="row"><span className={session.active ? "text-[var(--blue)]" : "text-[var(--text)]"}><Icon name={session.icon} size="md" /></span><div><p className="font-semibold">{session.label}</p><p className="meta">{session.description}</p></div></div></Card>)}
      </section>

      <section className="mt-5 card card-pad">
        <SectionHeader title="Privacy and proof" />
        <div className="mt-4 tab-row">
          {privacyStatuses.map((status, index) => <Pill key={status} active={index === 0} icon={index === 3 ? "lock" : undefined}>{status}</Pill>)}
        </div>
        <div className="mt-4 row rounded-2xl bg-[var(--surface-muted)] p-4">
          <Icon name="proof" className="text-[var(--success)]" size="md" />
          <p className="text-sm font-medium">Attach verified proof after finishing</p>
        </div>
      </section>
    </main>
  );
}
