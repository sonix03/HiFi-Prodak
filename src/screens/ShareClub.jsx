import { useState } from "react";
import Button from "../components/Button";
import Icon from "../components/Icon";
import MediaPlaceholder from "../components/MediaPlaceholder";
import Pill from "../components/Pill";
import ScreenHeader from "../components/ScreenHeader";
import { clubs } from "../constants/data";

export default function ShareClub({ onNavigate }) {
  const [allowComments, setAllowComments] = useState(true);

  return (
    <main className="screen screen-pad">
      <ScreenHeader title="Share to club" onBack={() => onNavigate?.("share")} action={{ icon: "messageShare", label: "Share to club" }} />
      <MediaPlaceholder title="Club share card" body="Preview how the activity appears inside the selected club." />
      <section className="mt-5 stack">
        {clubs.map((club, index) => <div className={`card card-pad between ${index === 0 ? "border-[var(--primary)] bg-[var(--primary-soft)]" : ""}`} key={club.id}><div><p className="font-semibold">{club.name}</p><p className="meta mt-1">{club.members} members • {club.goal}</p></div><Pill active={index === 0}>{index === 0 ? "Selected" : "Pick"}</Pill></div>)}
      </section>
      <div className="mt-5 tab-row">
        <Pill active>Members only</Pill>
        <button
          className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[11px] font-medium ${
            allowComments
              ? "border-[var(--text)] bg-white text-[var(--text)]"
              : "border-[var(--border)] bg-white text-[var(--text-secondary)]"
          }`}
          onClick={() => setAllowComments((current) => !current)}
          type="button"
        >
          <span
            className={`grid h-4 w-4 place-items-center rounded border ${
              allowComments
                ? "border-[var(--text)] bg-[var(--text)] text-white"
                : "border-[var(--border)] bg-white text-transparent"
            }`}
          >
            <Icon name="check" size="xs" stroke={2} />
          </span>
          Allow comments
        </button>
        <Pill>Pin proof</Pill>
      </div>
      <Button className="mt-6 w-full" size="lg" icon="messageShare" onClick={() => onNavigate?.("club")}>Share to club</Button>
    </main>
  );
}
