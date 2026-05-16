import ActivityMap from "./ActivityMap";
import Avatar from "./Avatar";
import Card from "./Card";
import Icon from "./Icon";
import Pill from "./Pill";
import Stat from "./Stat";

export default function ActivityCard({ activity, onOpen }) {
  return (
    <Card interactive className="overflow-hidden" padded={false}>
      <button className="w-full p-3.5 text-left" onClick={onOpen}>
        <div className="between">
          <div className="row min-w-0">
            <Avatar user={activity.user} />
            <div className="min-w-0">
              <p className="truncate text-[13px] font-semibold">{activity.user.name}</p>
              <p className="meta truncate">{activity.type} • {activity.time}</p>
            </div>
          </div>
          <Icon name="more" size="md" className="text-[var(--text-tertiary)]" />
        </div>
        <h3 className="mt-3 card-title">{activity.title}</h3>
        <p className="mt-1.5 body">{activity.caption}</p>
        <div className="mt-3 grid-3">
          <Stat value={activity.duration} label="Duration" />
          <Stat value={activity.focusScore} label="Score" tone="orange" />
          <Stat value={activity.output} label="Output" tone="blue" />
        </div>
        <div className="mt-3">
          <ActivityMap height={160} proof={activity.proof} />
        </div>
        <div className="mt-3 between">
          <Pill tone="success">{activity.proof}</Pill>
          <Pill>{activity.privacy}</Pill>
        </div>
      </button>
      <div className="divider" />
      <div className="grid grid-cols-3 px-2 py-2">
        <button className="row justify-center gap-2 rounded-xl py-2 text-xs font-medium text-[var(--text-secondary)]"><Icon name="heart" size="sm" /> {activity.kudos}</button>
        <button className="row justify-center gap-2 rounded-xl py-2 text-xs font-medium text-[var(--text-secondary)]"><Icon name="comment" size="sm" /> {activity.comments}</button>
        <button className="row justify-center gap-2 rounded-xl py-2 text-xs font-medium text-[var(--text-secondary)]"><Icon name="share" size="sm" /> {activity.shares}</button>
      </div>
    </Card>
  );
}
