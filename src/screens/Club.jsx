import ActivityMap from "../components/ActivityMap";
import Avatar from "../components/Avatar";
import Button from "../components/Button";
import Pill from "../components/Pill";
import ScreenHeader from "../components/ScreenHeader";
import SectionHeader from "../components/SectionHeader";
import indomieLogo from "../assets/indomie-logo.png";
import landscapeItb from "../assets/landscape-itb.png";
import { activities, clubs } from "../constants/data";

export default function Club({ onNavigate }) {
  const club = clubs[0];

  return (
    <main className="screen screen-pad">
      <ScreenHeader title="Club detail" onBack={() => onNavigate?.("groups")} action={{ icon: "more", label: "Club actions" }} />
      <section className="hero-panel">
        <div className="relative -mx-2 pb-1">
          <div className="h-44 overflow-hidden rounded-b-[28px] bg-[var(--surface-muted)]">
            <img className="h-full w-full object-cover" src={landscapeItb} alt={`${club.name} campus building`} />
            <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-t from-black/35 via-black/5 to-transparent" />
            <div className="absolute bottom-14 left-1/2 flex -translate-x-1/2 gap-2">
              {[0, 1, 2, 3, 4].map((dot) => <span className="h-2 w-2 rounded-full bg-white" key={dot} />)}
            </div>
          </div>
          <div className="relative z-10 -mt-10 ml-2 grid h-20 w-20 place-items-center overflow-hidden rounded-full border-4 border-white bg-white shadow-[var(--shadow-card)]">
            <img className="h-full w-full object-contain p-3" src={indomieLogo} alt={`${club.name} logo`} />
          </div>
        </div>
        <h1 className="mt-4 title">{club.name}</h1>
        <div className="mt-3 row flex-wrap">
          <Pill icon="users">{club.members} Members</Pill>
          <Pill icon="globe">Public</Pill>
        </div>
        <div className="mt-5 grid grid-cols-2 gap-3">
          <Button size="sm" icon="userCheck">Join</Button>
          <Button size="sm" variant="outline" icon="share" onClick={() => onNavigate?.("shareClub")}>Share</Button>
        </div>
      </section>

      <section className="section">
        <SectionHeader title="Recent Post" />
        <article className="mt-3 stack rounded-2xl bg-white p-4 shadow-[var(--shadow-card)]">
          <div className="row">
            <Avatar user={activities[1].user} />
            <div className="min-w-0 flex-1">
              <p className="truncate font-semibold">{activities[1].user.name}</p>
              <p className="meta">May 16, 2026 • Posted a note in {club.name}</p>
            </div>
          </div>
          <p className="body">
            Besok pagi kita coba 90-minute focus sprint. Drop progress di thread ini setelah selesai.
          </p>
        </article>

        <article className="mt-4 stack rounded-2xl bg-white p-4 shadow-[var(--shadow-card)]">
          <div className="row">
            <Avatar user={activities[0].user} />
            <div className="min-w-0 flex-1">
              <p className="truncate font-semibold">{activities[0].user.name}</p>
              <p className="meta">{activities[0].time} • Posted from {club.name}</p>
            </div>
          </div>
          <ActivityMap height={220} label="Club proof" proof={activities[0].proof} />
        </article>
      </section>
    </main>
  );
}
