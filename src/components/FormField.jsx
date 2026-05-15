export default function FormField({ label, children, textarea = false, ...props }) {
  return (
    <label className="form-field">
      <span>{label}</span>
      {children || (textarea ? <textarea className="textarea" {...props} /> : <input className="input" {...props} />)}
    </label>
  );
}
