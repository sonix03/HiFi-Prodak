import ActivityMap from "./ActivityMap";
import Avatar from "./Avatar";
import Icon from "./Icon";
import MetricGrid from "./MetricGrid";

export default function ActivityRow({ activity, expanded = false, onOpen }) {
  return (
    <article className="border-b border-[var(--divider)] py-4 last:border-b-0">
      <button className="w-full text-left" onClick={onOpen}>
        <div className="row min-w-0">
          <Avatar user={activity.user} size="sm" />
          <div className="min-w-0 flex-1">
            <p className="truncate text-[13px] font-semibold">{activity.user.name}</p>
            <p className="meta truncate">{activity.type} • {activity.time}</p>
          </div>
          <Icon name="more" size="sm" className="text-[var(--text-tertiary)]" />
        </div>
        <h3 className="mt-3 text-[15px] font-semibold leading-snug">{activity.title}</h3>
        <p className="mt-1 text-[13px] font-normal leading-5 text-[var(--text-secondary)]">{activity.caption}</p>
        <div className="mt-3">
          <MetricGrid
            columns={3}
            items={[
              { label: "Duration", value: activity.duration },
              { label: "Score", value: activity.focusScore, tone: "blue" },
              { label: "Steps", value: activity.output, tone: "blue" },
            ]}
          />
        </div>
        {expanded ? <div className="mt-3"><ActivityMap height={150} proof={activity.proof} /></div> : null}
      </button>
      <div className="mt-3 grid grid-cols-3 text-[12px] text-[var(--text-secondary)]">
        <span className="row justify-center gap-1.5"><Icon name="heart" size="xs" />{activity.kudos}</span>
        <span className="row justify-center gap-1.5"><Icon name="comment" size="xs" />{activity.comments}</span>
        <span className="row justify-center gap-1.5"><Icon name="share" size="xs" />{activity.shares}</span>
      </div>
    </article>
  );
}
