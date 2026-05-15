import Button from "../components/Button";
import Icon from "../components/Icon";
import ListItem from "../components/ListItem";
import VideoHero from "../components/VideoHero";

export default function Login({ onNavigate }) {
  return (
    <main className="screen screen-pad flex flex-col justify-between">
      <section>
        <div className="between">
          <div className="row">
            <Icon name="record" size="lg" className="text-[var(--blue)]" />
            <span className="text-lg font-semibold">Prodak</span>
          </div>
          <span className="text-[11px] font-medium text-[var(--text-secondary)]">Social productivity</span>
        </div>

        <div className="mt-5">
          <VideoHero>
            <p className="text-[12px] font-semibold text-[var(--blue)]">Productivity as proof</p>
            <h1 className="mt-2 max-w-[260px] text-[26px] font-semibold leading-[1.08]">
              Record focus and build a visible progress identity.
            </h1>
            <p className="mt-3 max-w-[270px] text-[13px] font-normal leading-5 text-[var(--text-secondary)]">
              Turn deep work into activity, proof, streaks, clubs, and momentum.
            </p>
          </VideoHero>
        </div>

        <div className="mt-5 list">
          <ListItem icon="proof" title="Verified productivity proof" meta="Attach work trails without making productivity noisy." accent="blue" />
          <ListItem icon="users" title="Clubs and challenges" meta="Compete with teams and keep streaks alive." accent="yellow" />
        </div>
      </section>

      <section className="stack">
        <Button size="lg" className="w-full" icon="arrowRight" onClick={() => onNavigate?.("feed")}>Continue with email</Button>
        <Button size="lg" variant="outline" className="w-full">Continue with Google</Button>
        <p className="px-4 text-center text-[11px] font-normal leading-5 text-[var(--text-tertiary)]">
          Control visibility, proof, and sharing from every activity.
        </p>
      </section>
    </main>
  );
}
