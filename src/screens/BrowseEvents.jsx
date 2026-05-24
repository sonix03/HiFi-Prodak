import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Location01Icon } from "@hugeicons/core-free-icons";
import Icon from "../components/Icon";
import WorkTypeSheet from "../components/WorkTypeSheet";
import ShareBottomSheet from "../components/ShareBottomSheet";
import ShareTargets from "../components/ShareTargets";
import avatar from "../assets/avatar.png";
import bk from "../assets/bk.png";
import instagramLogo from "../assets/instagram-logo.png";
import landscapeItb from "../assets/landscape-itb.png";
import mapPic from "../assets/map-pic.png";

const events = [
  {
    day: "18",
    weekday: "Mon",
    title: "Klaim #SekawanProduktif",
    category: "Social",
    type: "Work",
    time: "Monday, 18 May 2026 at 8:00 AM",
    place: "Sekawan Kopi & Space",
    host: "SekawanBerdaya",
    members: 28,
    logo: landscapeItb,
  },
  {
    day: "19",
    weekday: "Tue",
    title: "Klaim #SekawanProduktif",
    category: "Social",
    type: "Work",
    time: "Tuesday, 19 May 2026 at 8:00 AM",
    place: "Sekawan Kopi & Space",
    host: "SekawanBerdaya",
    members: 28,
    logo: landscapeItb,
  },
  {
    day: "20",
    weekday: "Wed",
    title: "Klaim #SekawanProduktif",
    category: "Social",
    type: "Work",
    time: "Wednesday, 20 May 2026 at 8:00 AM",
    place: "Sekawan Kopi & Space",
    host: "SekawanBerdaya",
    members: 28,
    logo: bk,
  },
  {
    day: "20",
    weekday: "Wed",
    title: "Deep work meetup",
    category: "Work",
    type: "Deep Work",
    time: "Wednesday, 20 May 2026 at 7:00 PM",
    place: "Cisanggurung nomor 2",
    host: "Yakes Telkom Olahraga",
    members: 76,
    logo: avatar,
  },
  {
    day: "21",
    weekday: "Thu",
    title: "Klaim #SekawanProduktif",
    category: "Social",
    type: "Work",
    time: "Thursday, 21 May 2026 at 8:00 AM",
    place: "Sekawan Kopi & Space",
    host: "SekawanBerdaya",
    members: 28,
    logo: landscapeItb,
  },
];

const eventShareTargets = [
  { label: "Instagram Story", image: instagramLogo },
  { label: "Copy to Clipboard", icon: "copy" },
  { label: "Save", icon: "download" },
  { label: "Copy Link", icon: "link" },
];

function EventDate({ day, weekday }) {
  return (
    <div className="w-[54px] shrink-0 overflow-hidden rounded-xl border border-[var(--divider)] bg-white text-center">
      <p className="bg-[var(--blue)] py-1 text-[12px] font-extrabold text-white">May</p>
      <p className="text-[32px] font-medium leading-[1.1] text-[var(--text)]">{day}</p>
      <p className="pb-1 text-[11px] font-medium text-[var(--text-secondary)]">{weekday}</p>
    </div>
  );
}

function EventCard({ event, onOpen }) {
  return (
    <button className="flex items-center gap-4 rounded-2xl bg-white p-4 text-left shadow-[0_10px_28px_rgba(15,23,42,0.08)]" onClick={() => onOpen(event)} type="button">
      <EventDate day={event.day} weekday={event.weekday} />
      <div className="min-w-0 flex-1">
        <h2 className="truncate text-[16px] font-extrabold leading-tight text-[var(--text)]">{event.title}</h2>
        <div className="mt-2 flex items-center gap-1.5 text-[12px] font-medium text-[var(--text-secondary)]">
          <Icon name="users" size="sm" className="text-[var(--blue)]" />
          <span className="truncate">{event.category} · {event.place}</span>
        </div>
        <div className="mt-2 flex items-center gap-2 text-[12px] font-medium text-[var(--text-secondary)]">
          <img className="h-5 w-5 rounded object-cover" src={event.logo} alt="" />
          <span className="truncate">{event.host} · {event.members} Members</span>
        </div>
      </div>
    </button>
  );
}

function EventDetail({ event, joined, onBack, onJoin, onShare, showShareEvent, onCloseShare }) {
  return (
    <main className="screen flex h-full flex-col bg-white">
      <section className="relative h-[320px] shrink-0 overflow-hidden bg-[var(--surface-muted)]">
        <img className="h-full w-full object-cover object-center opacity-90" src={mapPic} alt="" />
        <div className="absolute left-1/2 top-[42%] -translate-x-1/2 text-[var(--blue)]">
          <HugeiconsIcon icon={Location01Icon} size={34} color="currentColor" strokeWidth={2} />
        </div>
        <button className="absolute left-5 top-7 grid h-11 w-11 place-items-center rounded-full bg-white text-[var(--text)] shadow-[var(--shadow-floating)]" onClick={onBack} type="button" aria-label="Back to events">
          <Icon name="arrowLeft" size="lg" stroke={2} />
        </button>
        <button className="absolute right-5 top-7 grid h-11 w-11 place-items-center rounded-full bg-white text-[var(--text)] shadow-[var(--shadow-floating)]" type="button" aria-label="More event options">
          <Icon name="more" size="lg" stroke={2} />
        </button>
      </section>

      <section className="flex-1 overflow-y-auto px-6 pb-[124px] pt-7">
        <div className="between items-start">
          <EventDate day={event.day} weekday={event.weekday} />
          {joined ? (
            <div className="grid justify-items-center gap-2 text-center text-[12px] font-medium text-[var(--text-secondary)]">
              <img className="h-9 w-9 rounded-full object-cover" src={avatar} alt="" />
              <span>You're Going</span>
            </div>
          ) : null}
        </div>

        <h1 className="mt-8 text-[24px] font-black leading-tight tracking-normal text-[var(--text)]">{event.title}</h1>
        <p className="mt-4 text-[16px] font-medium text-[var(--text-secondary)]">{event.time}</p>

        <div className="mt-8 flex gap-12">
          <div>
            <p className="text-[12px] font-semibold text-[var(--text-secondary)]">Type</p>
            <p className="row mt-1 gap-1.5 text-[17px] font-black text-[var(--text)]">
              <Icon name="laptop" size="sm" stroke={2} />
              {event.type}
            </p>
          </div>
          <div>
            <p className="text-[12px] font-semibold text-[var(--text-secondary)]">Format</p>
            <p className="mt-1 text-[17px] font-black text-[var(--text)]">{event.category}</p>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-[22px] font-black tracking-normal text-[var(--text)]">About</h2>
          <p className="mt-5 text-[16px] font-medium leading-relaxed text-[var(--text)]">
            Halo pekerja produktif Bandung! Saatnya mulai hari dengan fokus bareng komunitas. Selesaikan sesi kerja, klaim reward, dan kenalan dengan orang-orang yang sedang membangun kebiasaan produktif.
          </p>
        </div>
      </section>

      <footer className="absolute inset-x-0 bottom-0 flex gap-3 bg-white/95 px-6 py-5 shadow-[var(--shadow-navbar)] backdrop-blur">
        {joined ? (
          <>
            <button className="grid h-14 w-28 place-items-center rounded-full border border-[var(--border)] bg-white text-[var(--blue)]" type="button" aria-label="Joined">
              <Icon name="check" size="lg" stroke={2} />
            </button>
            <button className="row h-14 flex-1 justify-center rounded-full bg-[var(--blue)] text-[16px] font-black text-white" onClick={onShare} type="button">
              <Icon name="share" size="lg" stroke={2} />
              Share
            </button>
          </>
        ) : (
          <>
            <button className="h-14 flex-1 rounded-full bg-[var(--blue)] text-[16px] font-black text-white" onClick={onJoin} type="button">
              Join
            </button>
            <button className="grid h-14 w-28 place-items-center rounded-full border border-[var(--border)] bg-white text-[var(--text)]" onClick={onShare} type="button" aria-label="Share event">
              <Icon name="share" size="lg" stroke={2} />
            </button>
          </>
        )}
      </footer>

      {showShareEvent ? <ShareEvent event={event} onClose={onCloseShare} /> : null}
    </main>
  );
}

function ShareEventCard({ event }) {
  return (
    <div className="relative mx-auto h-[360px] w-[216px] overflow-hidden rounded-[8px] bg-[var(--text)] text-center text-white shadow-[var(--shadow-card)]">
      <img className="absolute inset-0 h-full w-full object-cover opacity-30 blur-[2px] grayscale" src={landscapeItb} alt="" />
      <div className="absolute inset-0 bg-black/45" />
      <div className="relative flex h-full flex-col items-center px-5 py-7">
        <img className="h-9 w-9 rounded-md object-cover" src={event.logo} alt="" />
        <p className="mt-4 text-[11px] font-medium uppercase tracking-wide text-white/80">Sekawan Produktif</p>
        <h2 className="mt-9 text-[18px] font-black leading-tight tracking-normal">{event.title}</h2>
        <p className="mt-10 text-[12px] font-medium leading-relaxed text-white/90">
          Monday, 18 May 2026
          <br />
          8:00 AM
          <br />
          {event.place}
        </p>
        <Icon name="laptop" className="mt-3" size="md" stroke={2} />
        <div className="mt-6 rounded-full border border-dashed border-white/70 px-4 py-2 text-[11px] font-medium text-white/90">
          Link here
        </div>
        <div className="mt-auto">
          <p className="text-[11px] font-medium text-white/75">Join us on</p>
          <div className="prodak-mark mt-1 text-white" aria-label="Prodak">
            <span className="!h-6 !w-6 !border-white !border-r-[var(--blue)]" />
            <strong className="!text-[15px] !font-extrabold text-white">Prodak</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

function ShareEvent({ event, onClose }) {
  return (
    <ShareBottomSheet title="Share Event" onClose={onClose}>
      <ShareEventCard event={event} />
      <ShareTargets className="mt-16" targets={eventShareTargets} />
    </ShareBottomSheet>
  );
}

export default function BrowseEvents({ onNavigate, initialWorkSheet = false, initialEventDetail = false, initialJoined = false, initialShareEvent = false }) {
  const [selectedWork, setSelectedWork] = useState("Work");
  const [showWorkSheet, setShowWorkSheet] = useState(initialWorkSheet);
  const [activeEvent, setActiveEvent] = useState(initialEventDetail || initialJoined || initialShareEvent ? events[0] : null);
  const [joined, setJoined] = useState(initialJoined || initialShareEvent);
  const [showShareEvent, setShowShareEvent] = useState(initialShareEvent);

  if (activeEvent) {
    return (
      <EventDetail
        event={activeEvent}
        joined={joined}
        showShareEvent={showShareEvent}
        onCloseShare={() => setShowShareEvent(false)}
        onBack={() => {
          setActiveEvent(null);
          setJoined(false);
          setShowShareEvent(false);
        }}
        onJoin={() => setJoined(true)}
        onShare={() => setShowShareEvent(true)}
      />
    );
  }

  return (
    <main className="screen flex h-full flex-col bg-white">
      <header className="relative flex h-[58px] shrink-0 items-center border-b border-[var(--border)] bg-white px-5 shadow-[var(--shadow-header)]">
        <button className="flex items-center gap-2 text-[15px] font-medium text-[var(--text)]" onClick={() => onNavigate?.("groups")}>
          <Icon name="arrowLeft" size={22} />
          Groups
        </button>
        <h1 className="absolute left-1/2 -translate-x-1/2 text-[17px] font-extrabold text-[var(--text)]">Browse Events</h1>
      </header>

      <section className="flex-1 overflow-y-auto px-5 pb-28 pt-5">
        <div className="mb-8 flex justify-end gap-2.5">
          <button
            className="inline-flex h-9 items-center gap-1.5 rounded-full border border-[var(--blue)] bg-white px-3.5 text-xs font-semibold text-[var(--blue)]"
            onClick={() => setShowWorkSheet(true)}
            type="button"
          >
            <Icon name="route" size="sm" />
            {selectedWork}
            <Icon name="dropdown" size="sm" />
          </button>
          <button
            className="inline-flex h-9 items-center gap-1.5 rounded-full border border-[var(--blue)] bg-white px-3.5 text-xs font-semibold text-[var(--blue)]"
            onClick={() => onNavigate?.("eventFilter")}
          >
            <Icon name="filter" size="sm" />
            Filter
          </button>
        </div>

        <div className="grid gap-5">
          {events.map((event, index) => (
            <EventCard event={event} key={`${event.day}-${event.title}-${index}`} onOpen={setActiveEvent} />
          ))}
        </div>
      </section>

      {showWorkSheet ? (
        <WorkTypeSheet
          selected={selectedWork}
          onClose={() => setShowWorkSheet(false)}
          onSelect={(value) => {
            setSelectedWork(value);
            setShowWorkSheet(false);
          }}
        />
      ) : null}
    </main>
  );
}
