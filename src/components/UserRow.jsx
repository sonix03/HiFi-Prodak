import { UserPlus } from "lucide-react";
import Avatar from "./Avatar";
import Button from "./Button";

export default function UserRow({ user, meta, action = "Follow", compact = false }) {
  return (
    <div className="row">
      <Avatar user={user} tone={compact ? "neutral" : "orange"} />
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-extrabold">{user.name}</p>
        <p className="truncate meta">{meta || user.role}</p>
      </div>
      <Button size="sm" variant={compact ? "outline" : "primary"} icon={UserPlus}>{action}</Button>
    </div>
  );
}
