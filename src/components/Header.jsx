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
  backLabel,
  centeredTitle = false,
  primaryAction,
  secondaryAction,
  right = "notification",
  rightSecondary,
  status,
}) {
  const showRightAction = right !== null && right !== false;
  const isDetail = mode === "detail" || mode === "form" || Boolean(onBack);
  const isFocused = mode === "record";
  const hasTitleContent = Boolean(title || eyebrow || status);
  const showInlineTitle = hasTitleContent && !centeredTitle;

  return (
    <header className={`app-header app-header-${mode}`}>
      <div className="header-main">
        {isDetail ? (
          <button className="header-back" onClick={onBack} aria-label={backLabel ? `Back to ${backLabel}` : "Back"}>
            <Icon name="arrowLeft" size={22} />
            {backLabel ? <p>{backLabel}</p> : null}
          </button>
        ) : isFocused ? null : (
          <div className="prodak-mark" aria-label="Prodak">
            <span />
            <strong>Prodak</strong>
          </div>
        )}

        {showInlineTitle ? (
          <div className="header-title-block">
            {eyebrow ? <p>{eyebrow}</p> : null}
            {title ? <h1>{title}</h1> : null}
            {status ? <span>{status}</span> : null}
          </div>
        ) : null}
      </div>

      {centeredTitle && title ? (
        <div className="header-center-title">
          <h1>{title}</h1>
        </div>
      ) : null}

      <div className="header-actions">
        {secondaryAction ? <HeaderAction {...secondaryAction} /> : null}
        {rightSecondary ? <HeaderAction icon={rightSecondary} label={rightSecondary} /> : null}
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
        ) : showRightAction ? (
          <HeaderAction icon={right} label={right} />
        ) : null}
      </div>
    </header>
  );
}

export { HeaderAction };
