import Button from "../components/Button";
import Icon from "../components/Icon";
import ListItem from "../components/ListItem";
import Pill from "../components/Pill";
import ScreenHeader from "../components/ScreenHeader";
import SectionHeader from "../components/SectionHeader";
import { privacyStatuses, sessions } from "../constants/data";

export default function Record({ onNavigate, initialPlaying = false }) {
  const time = initialPlaying ? "00:13" : "00:00";
  const title = initialPlaying ? "Stopped" : "Ready for Deep Work";
  const cta = initialPlaying ? "Finish" : "Start focus";
  const ctaIcon = initialPlaying ? "check" : "play";

  return (
    <main className="screen screen-pad">
      <ScreenHeader title="Record" mode="record" eyebrow="Deep Work" status="Private proof ready" action={{ icon: "lock", label: "Privacy" }} />
      <section className="grid place-items-center border-b border-[var(--divider)] px-6 pb-8 pt-4 text-center">
        <span className="grid h-24 w-24 place-items-center rounded-full bg-[var(--primary-soft)] text-[var(--blue)] ring-8 ring-[var(--yellow-soft)]">
          <Icon name="record" size={54} />
        </span>
        <p className="mt-6 text-sm font-semibold text-[var(--text-secondary)]">{title}</p>
        <p className="mt-2 text-[36px] font-bold leading-none">{time}</p>
        {initialPlaying ? (
          <div className="mt-4 grid-3 w-full">
            <div><p className="metric-sm">--</p><p className="meta">Focus score</p></div>
            <div><p className="metric-sm">0.00</p><p className="meta">Working time</p></div>
            <div><p className="metric-sm">17</p><p className="meta">Blocks</p></div>
          </div>
        ) : null}
        <Button className="mt-8 w-full" size="lg" icon={ctaIcon} onClick={() => onNavigate?.("saveActivity")}>{cta}</Button>
      </section>

      <section className="section">
        <SectionHeader title="Session type" />
        <div className="list mt-2">
          {sessions.map((session) => <ListItem key={session.label} icon={session.icon} accent={session.active ? "blue" : "neutral"} title={session.label} meta={session.description} action={session.active ? <Pill tone="blue">Selected</Pill> : null} />)}
        </div>
      </section>

      <section className="section">
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
