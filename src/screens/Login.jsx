import Button from "../components/Button";
import Icon from "../components/Icon";

export default function Login({ onNavigate }) {
  return (
    <main className="screen screen-pad flex flex-col justify-between">
      <section>
        <div className="between">
          <div className="row">
            <span className="text-[var(--text)]"><Icon name="record" size="lg" /></span>
            <span className="text-xl font-bold">Prodak</span>
          </div>
          <span className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-[var(--primary)]">Beta</span>
        </div>

        <div className="mt-12 rounded-[24px] border border-[var(--border)] bg-white p-6 shadow-[var(--shadow-card)]">
          <p className="text-sm font-semibold text-[var(--blue)]">Productivity as a sport</p>
          <h1 className="mt-3 text-[30px] font-bold leading-[1.08]">Record focus. Prove output. Build your identity.</h1>
          <div className="mt-8 grid-3">
            <div>
              <p className="text-2xl font-bold">18d</p>
              <p className="text-xs font-medium text-[var(--text-secondary)]">Streak</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-[var(--blue)]">91</p>
              <p className="text-xs font-medium text-[var(--text-secondary)]">Focus</p>
            </div>
            <div>
              <p className="text-2xl font-bold">2h</p>
              <p className="text-xs font-medium text-[var(--text-secondary)]">Session</p>
            </div>
          </div>
        </div>

        <div className="mt-6 stack">
          {[
            ["Verified proof", "Attach work trails without turning productivity into surveillance.", "proof"],
            ["Social feed", "Give kudos, comment, and compete with clubs.", "fire"],
          ].map(([title, body, icon]) => (
            <div className="row card card-pad" key={title}>
              <span className="text-[var(--text)]"><Icon name={icon} size="md" /></span>
              <div>
                <p className="font-semibold">{title}</p>
                <p className="meta mt-1">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="stack">
        <Button size="lg" className="w-full" icon="arrowRight" onClick={() => onNavigate?.("feed")}>Continue with email</Button>
        <Button size="lg" variant="outline" className="w-full">Continue with Google</Button>
        <p className="px-4 text-center text-xs font-semibold leading-5 text-[var(--text-tertiary)]">By continuing, you join a public productivity network where you control proof and privacy.</p>
      </section>
    </main>
  );
}
