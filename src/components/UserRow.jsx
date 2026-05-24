import Avatar from "./Avatar";
import Button from "./Button";

export default function UserRow({
  user,
  meta,
  action = "Follow",
  compact = false,
  onAction,
  onClick,
  actionIcon = "userAdd",
  actionVariant,
}) {
  return (
    <div className="row min-w-0 overflow-hidden">
      <button className="row min-w-0 flex-1 text-left" onClick={onClick} type="button">
        <Avatar user={user} tone={compact ? "neutral" : "orange"} />
        <div className="min-w-0 flex-1">
          <p className="truncate text-[13px] font-semibold">{user.name}</p>
          <p className="truncate meta">{meta || user.role}</p>
        </div>
      </button>
      <Button
        className="w-[86px] shrink-0 px-2"
        icon={actionIcon}
        onClick={(e) => { e.stopPropagation(); onAction?.(e); }}
        size="sm"
        variant={actionVariant || (compact ? "outline" : "primary")}
      >
        {action}
      </Button>
    </div>
  );
}
