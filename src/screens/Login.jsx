import { ArrowRight, BadgeCheck, Flame, Radio } from "lucide-react";
import Button from "../components/Button";

export default function Login({ onNavigate }) {
  return (
    <main className="screen screen-pad flex flex-col justify-between">
      <section>
        <div className="between">
          <div className="row">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[var(--primary)] text-white"><Radio size={22} /></span>
            <span className="text-xl font-black">Prodak</span>
          </div>
          <span className="rounded-full bg-white px-3 py-1.5 text-xs font-extrabold text-[var(--primary)]">Beta</span>
        </div>

        <div className="mt-12 rounded-[28px] primary-gradient p-6 text-white shadow-[var(--shadow-floating)]">
          <p className="text-sm font-bold opacity-85">Productivity as a sport</p>
          <h1 className="mt-3 text-[38px] font-black leading-[1.02]">Record focus. Prove output. Build your identity.</h1>
          <div className="mt-8 grid-3">
            <div>
              <p className="text-2xl font-black">18d</p>
              <p className="text-xs font-bold opacity-80">Streak</p>
            </div>
            <div>
              <p className="text-2xl font-black">91</p>
              <p className="text-xs font-bold opacity-80">Focus</p>
            </div>
            <div>
              <p className="text-2xl font-black">2h</p>
              <p className="text-xs font-bold opacity-80">Session</p>
            </div>
          </div>
        </div>

        <div className="mt-6 stack">
          {[
            ["Verified proof", "Attach work trails without turning productivity into surveillance.", BadgeCheck],
            ["Social feed", "Give kudos, comment, and compete with clubs.", Flame],
          ].map(([title, body, Icon]) => (
            <div className="row card card-pad" key={title}>
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[var(--primary-soft)] text-[var(--primary)]"><Icon size={20} /></span>
              <div>
                <p className="font-extrabold">{title}</p>
                <p className="meta mt-1">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="stack">
        <Button size="lg" className="w-full" icon={ArrowRight} onClick={() => onNavigate?.("feed")}>Continue with email</Button>
        <Button size="lg" variant="outline" className="w-full">Continue with Google</Button>
        <p className="px-4 text-center text-xs font-semibold leading-5 text-[var(--text-tertiary)]">By continuing, you join a public productivity network where you control proof and privacy.</p>
      </section>
    </main>
  );
}
