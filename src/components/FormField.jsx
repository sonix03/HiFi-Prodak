import Icon from "./Icon";

export default function FormField({
  label,
  children,
  textarea = false,
  className = "",
  ...props
}) {
  return (
    <label className={`form-field mt-2 ${className}`}>
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

export function SelectField({ label, value, icon, onOpen, className = "" }) {
  return (
    <div className={`form-field mt-2 ${className}`}>
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
