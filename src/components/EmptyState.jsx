import Button from "./Button";
import Icon from "./Icon";

export default function EmptyState({ icon, title, body, action }) {
  return (
    <div className="grid place-items-center rounded-2xl border border-dashed border-[var(--border)] bg-white p-6 text-center">
      {icon ? <div className="text-[var(--text)]"><Icon name={icon} size="xl" /></div> : null}
      <h3 className="mt-4 card-title">{title}</h3>
      <p className="mt-2 body">{body}</p>
      {action ? <Button className="mt-5" size="sm">{action}</Button> : null}
    </div>
  );
}
