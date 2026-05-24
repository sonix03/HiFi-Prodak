import ShareBottomSheet from "../components/ShareBottomSheet";
import ShareTargets from "../components/ShareTargets";
import indomieLogo from "../assets/indomie-logo.png";
import { clubs } from "../constants/data";
import Club from "./Club";

function ShareClubCard({ club }) {
  return (
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
  );
}

export default function ShareClub({ onNavigate }) {
  const club = clubs[0];

  return (
    <main className="screen relative h-full overflow-hidden bg-white">
      <Club onNavigate={onNavigate} />
      <ShareBottomSheet title="Share Club" onClose={() => onNavigate?.("club")}>
        <ShareClubCard club={club} />

        <ShareTargets className="mt-14" />
      </ShareBottomSheet>
    </main>
  );
}
