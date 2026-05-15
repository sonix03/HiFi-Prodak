import { Heart } from "lucide-react";
import Avatar from "./Avatar";

export default function CommentItem({ comment }) {
  return (
    <div className="flex gap-3">
      <Avatar user={comment.user} tone="neutral" />
      <div className="min-w-0 flex-1">
        <div className="rounded-2xl bg-[var(--surface-muted)] px-4 py-3">
          <p className="text-sm font-extrabold">{comment.user.name}</p>
          <p className="mt-1 text-sm text-[var(--text-secondary)]">{comment.text}</p>
        </div>
        <div className="mt-2 row gap-4 px-2 text-[11px] font-bold text-[var(--text-tertiary)]">
          <span>{comment.time}</span>
          <span>Reply</span>
          <span className="row gap-1"><Heart size={12} /> {comment.likes}</span>
        </div>
      </div>
    </div>
  );
}
