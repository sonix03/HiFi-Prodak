import { Image, Paperclip } from "lucide-react";

export default function MediaPlaceholder({ title = "Proof attachment", body = "Screenshot, document trail, or workspace capture", icon: Icon = Image }) {
  return (
    <div className="rounded-2xl border border-dashed border-[var(--border)] bg-[var(--surface-muted)] p-5">
      <div className="between">
        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-[var(--blue)]"><Icon size={22} /></span>
        <Paperclip size={18} className="text-[var(--text-tertiary)]" />
      </div>
      <p className="mt-5 text-sm font-extrabold">{title}</p>
      <p className="mt-1 meta">{body}</p>
    </div>
  );
}
