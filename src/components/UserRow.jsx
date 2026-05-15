import Avatar from "./Avatar";
import Button from "./Button";

export default function UserRow({ user, meta, action = "Follow", compact = false }) {
  return (
    <div className="row min-w-0 overflow-hidden">
      <Avatar user={user} tone={compact ? "neutral" : "orange"} />
      <div className="min-w-0 flex-1">
        <p className="truncate text-[13px] font-semibold">{user.name}</p>
        <p className="truncate meta">{meta || user.role}</p>
      </div>
      <Button className="w-[86px] shrink-0 px-2" size="sm" variant={compact ? "outline" : "primary"} icon="userAdd">{action}</Button>
    </div>
  );
}
