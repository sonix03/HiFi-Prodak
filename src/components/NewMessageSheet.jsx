import { useState } from "react";
import Icon from "./Icon";
import avatar from "../assets/avatar.png";
import landscapeItb from "../assets/landscape-itb.png";
import mapPic from "../assets/map-pic.png";

const people = [
  { name: "Jane Doe", meta: "Product designer", image: avatar },
  { name: "Alex Chen", meta: "Founder", initial: "A" },
  { name: "Adam Joaquin", meta: "Frontend engineer", image: landscapeItb },
  { name: "Sam Taylor", meta: "Data analyst", image: mapPic },
  { name: "Jordan Lee", meta: "Research assistant", image: avatar },
  { name: "Casey Morgan", meta: "Product manager", image: landscapeItb },
  { name: "Riley Brooks", meta: "Writer", initial: "R" },
  { name: "Morgan Smith", meta: "Design researcher", image: mapPic },
  { name: "Taylor Kim", meta: "Student", image: avatar },
  { name: "Catherine Alicia", meta: "UX designer", image: landscapeItb },
  { name: "Darrel Adinarya", meta: "Software engineer", image: mapPic },
];

export default function NewMessageSheet({ onClose, onCreate }) {
  const [selected, setSelected] = useState(() => new Set());
  const toggle = (name) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(name)) {
        next.delete(name);
      } else {
        next.add(name);
      }
      return next;
    });
  };

  return (
    <div className="absolute inset-0 z-50 flex flex-col justify-end bg-black/12">
      <div className="max-h-[calc(100%-52px)] overflow-hidden rounded-t-[16px] bg-white shadow-[0_-10px_30px_rgba(15,23,42,0.12)]">
        <header className="relative flex h-[64px] items-center border-b border-[var(--border)] px-5 shadow-[var(--shadow-header)]">
          <button className="text-[16px] font-medium text-[var(--text)]" onClick={onClose} type="button">
            Close
          </button>
          <h2 className="pointer-events-none absolute left-1/2 -translate-x-1/2 text-[18px] font-black tracking-normal">New Message</h2>
          <button
            className={`ml-auto text-[16px] font-semibold ${selected.size > 0 ? "text-[var(--blue)]" : "text-[var(--text-tertiary)]"}`}
            onClick={() => selected.size > 0 && onCreate?.(Array.from(selected))}
            type="button"
          >
            Create
          </button>
        </header>

        <div className="px-5 pt-4">
          <div className="flex h-10 items-center gap-2 rounded-full bg-[var(--surface-muted)] px-4 text-[15px] font-medium text-[var(--text-tertiary)]">
            <Icon name="search" size="md" />
            <span>Search people who follow you</span>
          </div>
        </div>

        <section className="max-h-[640px] overflow-y-auto px-5 pb-7 pt-5">
          <div className="grid gap-5">
            {people.map((person, index) => {
              const isSelected = selected.has(person.name);

              return (
                <button className="flex items-center gap-3 text-left" key={`${person.name}-${index}`} onClick={() => toggle(person.name)} type="button">
                  {person.image ? (
                    <img className="h-10 w-10 shrink-0 rounded-full object-cover" src={person.image} alt="" />
                  ) : (
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[var(--blue)] text-[20px] font-semibold text-white">
                      {person.initial}
                    </span>
                  )}
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[16px] font-semibold leading-tight text-[var(--text)]">{person.name}</p>
                    <p className="mt-1 truncate text-[13px] font-medium text-[var(--text-secondary)]">{person.meta}</p>
                  </div>
                  <span
                    className={`grid h-7 w-7 shrink-0 place-items-center rounded-[5px] border-2 ${isSelected ? "border-[var(--blue)] bg-[var(--blue)] text-white" : "border-[var(--text-secondary)]"}`}
                  >
                    {isSelected ? <Icon name="check" size="xs" /> : null}
                  </span>
                </button>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
