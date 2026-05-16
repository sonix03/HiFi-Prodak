import Avatar from "../components/Avatar";
import Icon from "../components/Icon";
import { users } from "../constants/data";

function FieldRow({ label, value, muted = false, helper, onClick }) {
  return (
    <button
      className="w-full border-b border-[var(--divider)] bg-white px-7 py-4 text-left last:border-b-0"
      onClick={onClick}
      type="button"
    >
      <div className="between min-h-7 gap-4">
        <p className="text-[15px] font-semibold text-[var(--text)]">{label}</p>
        {value ? (
          <p className={`shrink-0 text-right text-[15px] font-semibold ${muted ? "text-[var(--text-tertiary)]" : "text-[var(--text)]"}`}>
            {value}
          </p>
        ) : null}
      </div>
      {helper ? (
        <p className="mt-2 text-[12px] font-medium leading-relaxed text-[var(--text-secondary)]">{helper}</p>
      ) : null}
    </button>
  );
}

export default function EditProfile({ onNavigate }) {
  const user = users[0];
  const [firstName, lastName] = user.name.split(" ");

  return (
    <main className="screen bg-white">
      <header className="sticky top-0 z-20 grid h-[64px] grid-cols-3 items-center bg-white px-6 shadow-[var(--shadow-header)]">
        <button
          className="justify-self-start text-[16px] font-semibold text-[var(--text)]"
          onClick={() => onNavigate?.("profile")}
        >
          Cancel
        </button>
        <h1 className="text-center text-[18px] font-extrabold text-[var(--text)]">Profile</h1>
        <button
          className="justify-self-end text-[16px] font-semibold text-[var(--blue)]"
          onClick={() => onNavigate?.("profile")}
        >
          Save
        </button>
      </header>

      <section className="bg-[var(--surface-muted)] px-7 py-7">
        <div className="grid grid-cols-[92px_minmax(0,1fr)] gap-5">
          <button className="relative h-20 w-20 overflow-hidden rounded-full ring-2 ring-[var(--blue)] ring-offset-2 ring-offset-[var(--surface-muted)]" type="button">
            <Avatar user={user} size="lg" tone="neutral" />
            <span className="absolute inset-0 grid place-items-center bg-black/10 text-white opacity-0 transition hover:opacity-100">
              <Icon name="edit" size="sm" />
            </span>
          </button>

          <div className="overflow-hidden rounded-xl bg-white shadow-[0_8px_22px_rgba(15,23,42,0.05)]">
            <label className="block px-4 py-4">
              <span className="sr-only">First name</span>
              <input
                className="w-full bg-transparent text-[15px] font-semibold text-[var(--text)] outline-none"
                defaultValue={firstName}
              />
            </label>
            <label className="block border-t border-[var(--divider)] px-4 py-4">
              <span className="sr-only">Last name</span>
              <input
                className="w-full bg-transparent text-[15px] font-semibold text-[var(--text)] outline-none"
                defaultValue={lastName}
              />
            </label>
          </div>
        </div>
      </section>

      <section>
        <FieldRow label="Bio" />
        <FieldRow label="City" value="Jawa Barat" />
        <FieldRow label="Primary Focus" value="Deep Work" />
      </section>

      <section className="bg-[var(--surface-muted)] px-7 py-4">
        <p className="text-[12px] font-extrabold uppercase tracking-normal text-[var(--text-secondary)]">
          Worker Information
        </p>
      </section>

      <section>
        <FieldRow label="Birthdate" value="14 Oct 2005" />
        <FieldRow label="Role" value="Designer" />
        <FieldRow
          label="Weekly Goal"
          muted
          value="hours"
        />
      </section>
    </main>
  );
}
