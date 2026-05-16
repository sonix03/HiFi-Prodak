import Button from "../components/Button";
import GroupsHeader from "../components/GroupsHeader";
import Icon from "../components/Icon";
import Pill from "../components/Pill";
import SectionHeader from "../components/SectionHeader";
import { challenges } from "../constants/data";

export default function GroupClub({ onNavigate }) {
  return (
    <main className="screen screen-pad">
      <GroupsHeader active="challenges" onNavigate={onNavigate} />

      <div className="mt-4 tab-row">
        {["Work", "Research", "Arts", "Laboratory"].map((item, index) => <Pill key={item} active={index === 0}>{item}</Pill>)}
      </div>

      <section className="section">
        <SectionHeader title="Active Challenge" />
        <div className="row mt-3">
          <span className="grid h-14 w-14 place-items-center rounded-full bg-[var(--primary-soft)] text-[var(--blue)]">
            <Icon name="timer" size="lg" />
          </span>
          <div>
            <p className="font-semibold">Overtime Challenge</p>
            <p className="meta">Complete 5 hours before Apr 30</p>
          </div>
        </div>
      </section>

      <section className="section">
        <SectionHeader title="Recommended For You" />
        <div className="grid-2 mt-3">
          {challenges.concat(challenges).slice(0, 4).map((challenge, index) => (
            <article className="card card-pad min-h-[190px]" key={`${challenge.title}-${index}`}>
              <Icon name={challenge.icon} size="lg" className="text-[var(--blue)]" />
              <h2 className="mt-4 card-title">{challenge.title}</h2>
              <p className="body mt-2">{challenge.reward}</p>
              <p className="meta mt-2">Apr 17 to Apr 30, 2026</p>
              <Button className="mt-4 w-full" size="sm" variant="outline">Join</Button>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
