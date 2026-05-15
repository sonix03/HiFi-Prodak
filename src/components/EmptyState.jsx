import Button from "./Button";

export default function EmptyState({ icon: Icon, title, body, action }) {
  return (
    <div className="grid place-items-center rounded-2xl border border-dashed border-[var(--border)] bg-white p-8 text-center">
      {Icon ? <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[var(--primary-soft)] text-[var(--primary)]"><Icon size={24} /></div> : null}
      <h3 className="mt-4 card-title">{title}</h3>
      <p className="mt-2 body">{body}</p>
      {action ? <Button className="mt-5" size="sm">{action}</Button> : null}
    </div>
  );
}
