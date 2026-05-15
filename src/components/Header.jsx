import Icon from "./Icon";

function HeaderAction({ icon, label, onClick }) {
  if (!icon) return null;

  return (
    <button className="header-action" onClick={onClick} aria-label={label || icon}>
      <Icon name={icon} size={22} />
    </button>
  );
}

export default function Header({
  title,
  eyebrow,
  mode = "main",
  onBack,
  primaryAction,
  secondaryAction,
  right = "notification",
  status,
}) {
  const isDetail = mode === "detail" || mode === "form" || Boolean(onBack);
  const isFocused = mode === "record";
  const hasTitleContent = Boolean(title || eyebrow || status);

  return (
    <header className={`app-header app-header-${mode}`}>
      <div className="header-main">
        {isDetail ? (
          <button className="header-action" onClick={onBack} aria-label="Back">
            <Icon name="arrowLeft" size={22} />
          </button>
        ) : isFocused ? null : (
          <div className="prodak-mark" aria-label="Prodak">
            <span />
            <strong>Prodak</strong>
          </div>
        )}

        {hasTitleContent ? (
          <div className="header-title-block">
            {eyebrow ? <p>{eyebrow}</p> : null}
            {title ? <h1>{title}</h1> : null}
            {status ? <span>{status}</span> : null}
          </div>
        ) : null}
      </div>

      <div className="header-actions">
        {secondaryAction ? <HeaderAction {...secondaryAction} /> : null}
        {primaryAction ? (
          typeof primaryAction === "string" ? (
            <button className="header-text-action">{primaryAction}</button>
          ) : primaryAction.text ? (
            <button className="header-text-action" onClick={primaryAction.onClick}>
              {primaryAction.text}
            </button>
          ) : (
            <HeaderAction {...primaryAction} />
          )
        ) : (
          <HeaderAction icon={right} label={right} />
        )}
      </div>
    </header>
  );
}

export { HeaderAction };
