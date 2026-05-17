import Icon from "../components/Icon";
import avatar from "../assets/avatar.png";
import bk from "../assets/bk.png";
import landscapeItb from "../assets/landscape-itb.png";

const events = [
  {
    day: "18",
    weekday: "Mon",
    title: "Klaim #SekawanProduktif",
    category: "Social",
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
    place: "Sekawan Kopi & Space",
    host: "SekawanBerdaya",
    members: 28,
    logo: landscapeItb,
  },
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

function EventCard({ event }) {
  return (
    <article className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-[0_10px_28px_rgba(15,23,42,0.08)]">
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
    </article>
  );
}

export default function BrowseEvents({ onNavigate }) {
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
          <button className="inline-flex h-9 items-center gap-1.5 rounded-full border border-[var(--blue)] bg-white px-3.5 text-xs font-semibold text-[var(--blue)]">
            <Icon name="route" size="sm" />
            Work
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
            <EventCard event={event} key={`${event.day}-${event.title}-${index}`} />
          ))}
        </div>
      </section>
    </main>
  );
}
