import { BadgeCheck, Circle, Lock, Play, TimerReset } from "lucide-react";
import Button from "../components/Button";
import Card from "../components/Card";
import Header from "../components/Header";
import Pill from "../components/Pill";
import SectionHeader from "../components/SectionHeader";
import { privacyStatuses, sessions } from "../constants/data";

export default function Record({ onNavigate }) {
  return (
    <main className="screen screen-pad">
      <Header title="Record" eyebrow="Start a session" right={TimerReset} />
      <section className="grid place-items-center rounded-[30px] bg-[var(--text)] px-6 py-9 text-center text-white shadow-[var(--shadow-floating)]">
        <span className="grid h-24 w-24 place-items-center rounded-full bg-white/10 ring-8 ring-white/5">
          <Circle size={54} className="text-[var(--primary)]" strokeWidth={1.5} />
        </span>
        <p className="mt-6 text-sm font-bold opacity-70">Ready for Deep Work</p>
        <p className="mt-2 text-[52px] font-black leading-none">00:00</p>
        <Button className="mt-8 w-full" size="lg" icon={Play} onClick={() => onNavigate?.("saveActivity")}>Start focus</Button>
      </section>

      <section className="mt-6 stack">
        <SectionHeader title="Session type" />
        {sessions.map((session) => <Card key={session.label} className={session.active ? "border-[var(--primary)] bg-[var(--primary-soft)]" : ""}><div className="row"><span className="grid h-11 w-11 place-items-center rounded-2xl bg-white text-[var(--primary)]"><session.icon size={20} /></span><div><p className="font-extrabold">{session.label}</p><p className="meta">{session.description}</p></div></div></Card>)}
      </section>

      <section className="mt-5 card card-pad">
        <SectionHeader title="Privacy and proof" />
        <div className="mt-4 tab-row">
          {privacyStatuses.map((status, index) => <Pill key={status} active={index === 0} icon={index === 3 ? Lock : undefined}>{status}</Pill>)}
        </div>
        <div className="mt-4 row rounded-2xl bg-[var(--surface-muted)] p-4">
          <BadgeCheck className="text-[var(--success)]" size={20} />
          <p className="text-sm font-bold">Attach verified proof after finishing</p>
        </div>
      </section>
    </main>
  );
}
