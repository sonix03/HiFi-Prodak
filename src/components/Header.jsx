import Icon from "./Icon";

function HeaderAction({ icon, image, label, onClick, badge }) {
  if (!icon && !image) return null;

  if (image) {
    return (
      <button className="header-action" onClick={onClick} aria-label={label || "Avatar"}>
        <img className="h-[24px] w-[24px] rounded-full object-cover" src={image} alt="" />
      </button>
    );
  }

  return (
    <button className="header-action relative" onClick={onClick} aria-label={label || icon}>
      <Icon name={icon} size={22} />
      {badge ? <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-red-500" /> : null}
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
  tertiaryAction,
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
        {tertiaryAction ? <HeaderAction {...tertiaryAction} /> : null}
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
          typeof right === "string"
            ? <HeaderAction icon={right} label={right} />
            : <HeaderAction icon={right.icon} image={right.image} label={right.label || right.icon} onClick={right.onClick} />
        ) : null}
        {rightSecondary ? (
          typeof rightSecondary === "string"
            ? <HeaderAction icon={rightSecondary} label={rightSecondary} />
            : <HeaderAction icon={rightSecondary.icon} image={rightSecondary.image} label={rightSecondary.label || rightSecondary.icon} onClick={rightSecondary.onClick} />
        ) : null}
      </div>
    </header>
  );
}

export { HeaderAction };
