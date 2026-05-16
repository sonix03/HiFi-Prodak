import Icon from "./Icon";

export default function FormField({ label, children, textarea = false, ...props }) {
  return (
    <label className="form-field">
      <span>{label}</span>
      {children ||
        (textarea ? (
          <textarea className="textarea" {...props} />
        ) : (
          <input className="input" {...props} />
        ))}
    </label>
  );
}

export function SelectField({ label, value, icon, onOpen }) {
  return (
    <div className="form-field">
      <label>{label}</label>
      <button
        className="input flex items-center justify-between"
        onClick={onOpen}
      >
        <span className="flex items-center gap-2">
          {icon ? (
            <Icon name={icon} size="sm" className="text-[var(--blue)]" />
          ) : null}
          {value}
        </span>
        <Icon
          name="dropdown"
          size="sm"
          className="text-[var(--text-tertiary)]"
        />
      </button>
    </div>
  );
}
