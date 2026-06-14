import { useState } from "react";
import Button from "../components/Button";
import Avatar from "../components/Avatar";
import FeedPost from "../components/FeedPost";
import Icon from "../components/Icon";
import Pill from "../components/Pill";
import ScreenHeader from "../components/ScreenHeader";
import SectionHeader from "../components/SectionHeader";
import ShareBottomSheet from "../components/ShareBottomSheet";
import ShareTargets from "../components/ShareTargets";
import indomieLogo from "../assets/indomie-logo.png";
import landscapeItb from "../assets/landscape-itb.png";
import mapPic from "../assets/map-pic.png";
import { activities, clubs, users } from "../constants/data";

export default function Club({ onNavigate }) {
  const club = clubs[0];
  const [joined, setJoined] = useState(false);
  const [showShare, setShowShare] = useState(false);

  return (
    <main className="screen screen-pad relative">
      <ScreenHeader title="Club detail" onBack={() => onNavigate?.("groups")} action={{ icon: "more", label: "Club actions" }} />
      <section className="hero-panel !border-b-0 !pb-0">
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
        <div className="mt-2">    <p className="mt-2 text-[13px] font-semibold leading-snug text-[var(--text-secondary)]">
            A working environment initiative by and from HMIF.
          </p></div>
        <div className="mt-3 row flex-wrap">
          <Pill icon="users">{club.members} Members</Pill>
          <Pill icon="globe">Public</Pill>
        </div>
        <div className="mt-5 grid grid-cols-2 gap-3">
          <Button
            size="sm"
            icon="userCheck"
            variant={joined ? "outline" : "primary"}
            onClick={() => setJoined((current) => !current)}
          >
            {joined ? "Joined" : "Join"}
          </Button>
          <Button size="sm" variant="outline" icon="share" onClick={() => setShowShare(true)}>Share</Button>
        </div>
      </section>

      <section className="section">
        <div className="border-y border-[var(--divider)]">
          <button
            className="flex w-full items-center gap-3 bg-white py-3 text-left"
            onClick={() => onNavigate?.("createPost")}
            type="button"
          >
            <Avatar user={users[0]} size="md" />
            <span className="min-w-0 flex-1 truncate text-[15px] font-medium text-[var(--text-secondary)]">
              Post something...
            </span>
            <Icon name="media" size="lg" className="text-[var(--text-secondary)]" />
          </button>
        </div>
        <div className="mt-4">
          <SectionHeader title="Recent Posts" />
        </div>
        <div className="stack mt-4">
          <FeedPost
            activity={activities[1]}
            body="Besok pagi kita coba 90-minute focus sprint. Drop progress di thread ini setelah selesai."
            headline="Morning sprint check-in"
            media={[{ type: "photo", src: landscapeItb }]}
            onNavigate={onNavigate}
            onShare={() => setShowShare(true)}
            place={club.name}
          />
          <FeedPost
            activity={activities[0]}
            headline="Proof from today's focus block"
            media={[{ type: "map", src: mapPic }]}
            onNavigate={onNavigate}
            onShare={() => setShowShare(true)}
            place={club.name}
          />
        </div>
      </section>

      {showShare ? (
        <ShareBottomSheet title="Share Club" onClose={() => setShowShare(false)}>
          <div className="relative mx-auto flex h-[340px] w-[220px] flex-col items-center rounded-[22px] bg-[var(--text)] px-6 py-8 text-center text-white shadow-[var(--shadow-card)]">
            <div className="grid h-14 w-14 place-items-center rounded-xl bg-white">
              <img className="h-11 w-11 object-contain" src={indomieLogo} alt={`${club.name} logo`} />
            </div>
            <h2 className="mt-5 max-w-[170px] text-[18px] font-black leading-tight tracking-normal">
              {club.name}
            </h2>
            <div className="mt-8 text-[12px] font-medium leading-snug text-white/90">
              <p>Make some friends.</p>
              <p>Get some kudos.</p>
              <p className="font-extrabold text-white">Join the Club.</p>
            </div>
            <div className="absolute inset-x-0 bottom-8 grid justify-items-center">
              <p className="text-[10px] font-semibold text-white/80">Join us on</p>
              <div className="prodak-mark mt-1 text-white" aria-label="Prodak">
                <span className="!h-6 !w-6 !border-white !border-r-[var(--blue)]" />
                <strong className="!text-[15px] !font-extrabold text-white">Prodak</strong>
              </div>
            </div>
          </div>

          <ShareTargets className="mt-14" />
        </ShareBottomSheet>
      ) : null}
    </main>
  );
}
