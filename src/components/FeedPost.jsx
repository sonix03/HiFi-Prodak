import ActivityMap from "./ActivityMap";
import Avatar from "./Avatar";
import Icon from "./Icon";
import { users } from "../constants/data";

export default function FeedPost({
  activity,
  club,
  label,
  place,
  headline,
  body,
  media = [],
  onNavigate,
  onShare,
}) {
  return (
    <article className="stack gap-2">
      <div className="row">
        <Avatar user={activity.user} />
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold">{activity.user.name}</p>
          <p className="meta">
            {activity.time} • {place || activity.type}
          </p>
        </div>
        <Icon name="more" size="md" className="text-[var(--text-tertiary)]" />
      </div>

      {club ? (
        <button
          className="row rounded-2xl bg-[var(--surface-muted)] p-3 text-left"
          onClick={() => onNavigate?.("club")}
        >
          <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-[var(--blue)]">
            <Icon name="users" size="md" />
          </span>
          <div className="min-w-0">
            <p className="truncate text-xs font-semibold text-[var(--blue)]">
              {label}
            </p>
            <p className="truncate text-sm font-semibold">{club.name}</p>
          </div>
        </button>
      ) : null}

      <button className="text-left" onClick={() => onNavigate?.("activityDetail")}>
        <h1 className="card-title">{headline || activity.title}</h1>
        <p className="mt-2 body">{body || activity.caption}</p>
      </button>

      <div className="grid-3">
        <div>
          <p className="meta">Duration</p>
          <p className="metric-sm mt-1">{activity.duration}</p>
        </div>
        <div>
          <p className="meta">Score</p>
          <p className="metric-sm mt-1 text-[var(--blue)]">
            {activity.focusScore}
          </p>
        </div>
        <div>
          <p className="meta">Output</p>
          <p className="metric-sm mt-1">{activity.output}</p>
        </div>
      </div>

      <MediaRow media={media} />

      <SocialSummary activity={activity} onNavigate={onNavigate} />

      <div className="grid-3 border-b border-[var(--divider)] pb-3 pt-1 text-center">
        <button
          className="row justify-center gap-1.5 text-[12px] font-semibold text-[var(--text-secondary)]"
          aria-label="Like"
        >
          <Icon name="heart" size="md" />
        </button>
        <button
          className="row justify-center gap-1.5 text-[12px] font-semibold text-[var(--text-secondary)]"
          onClick={() => onNavigate?.("comments")}
          aria-label="Comments"
        >
          <Icon name="comment" size="md" />
        </button>
        <button
          className="row justify-center gap-1.5 text-[12px] font-semibold text-[var(--text-secondary)]"
          onClick={onShare}
          aria-label="Share"
        >
          <Icon name="share" size="md" stroke={2} />
        </button>
      </div>
    </article>
  );
}

function SocialSummary({ activity, onNavigate }) {
  const kudosUsers = users.filter((user) => user.id !== activity.user.id).slice(0, 3);
  const commentLabel = `${activity.comments} ${activity.comments === 1 ? "comment" : "comments"}`;

  return (
    <div className="row justify-between gap-3 pt-1">
      <div className="row min-w-0">
        <div className="row -space-x-8">
          {kudosUsers.map((user) => (
            <Avatar key={user.id} user={user} size="sm" tone="neutral" />
          ))}
        </div>
        <p className="truncate text-[11px] font-semibold leading-none text-[var(--text-secondary)]">
          {activity.kudos} gave kudos
        </p>
      </div>
      <button
        className="shrink-0 text-[var(--text-secondary)]"
        onClick={() => onNavigate?.("comments")}
        type="button"
      >
        <p className="text-[11px] font-semibold leading-none">{commentLabel}</p>
      </button>
    </div>
  );
}

function MediaRow({ media }) {
  if (!media.length) return null;

  return (
    <div className={`grid gap-3 ${media.length > 1 ? "grid-cols-2" : "grid-cols-1"}`}>
      {media.map((item) =>
        item.type === "map" ? (
          <ActivityMap
            height={media.length > 1 ? 170 : 220}
            imageSrc={item.src}
            key={`${item.type}-${item.src}`}
          />
        ) : (
          <div
            className="relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface-muted)] shadow-[var(--shadow-card)]"
            key={`${item.type}-${item.src}`}
          >
            <img
              className="h-[170px] w-full object-cover"
              src={item.src}
              alt="Uploaded activity"
            />
          </div>
        )
      )}
    </div>
  );
}
