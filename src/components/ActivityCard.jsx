import { Heart, MessageCircle, MoreHorizontal, Share2 } from "lucide-react";
import ActivityMap from "./ActivityMap";
import Avatar from "./Avatar";
import Card from "./Card";
import Pill from "./Pill";
import Stat from "./Stat";

export default function ActivityCard({ activity, onOpen }) {
  return (
    <Card interactive className="overflow-hidden" padded={false}>
      <button className="w-full p-4 text-left" onClick={onOpen}>
        <div className="between">
          <div className="row min-w-0">
            <Avatar user={activity.user} />
            <div className="min-w-0">
              <p className="truncate text-sm font-extrabold">{activity.user.name}</p>
              <p className="meta truncate">{activity.type} • {activity.time}</p>
            </div>
          </div>
          <MoreHorizontal size={19} className="text-[var(--text-tertiary)]" />
        </div>
        <h3 className="mt-4 card-title">{activity.title}</h3>
        <p className="mt-2 body">{activity.caption}</p>
        <div className="mt-4 grid-3">
          <Stat value={activity.duration} label="Duration" />
          <Stat value={activity.focusScore} label="Score" tone="orange" />
          <Stat value={activity.output} label="Output" tone="blue" />
        </div>
        <div className="mt-4">
          <ActivityMap height={160} proof={activity.proof} />
        </div>
        <div className="mt-4 between">
          <Pill tone="success">{activity.proof}</Pill>
          <Pill>{activity.privacy}</Pill>
        </div>
      </button>
      <div className="divider" />
      <div className="grid grid-cols-3 px-2 py-2">
        <button className="row justify-center gap-2 rounded-xl py-2 text-sm font-bold text-[var(--text-secondary)]"><Heart size={17} /> {activity.kudos}</button>
        <button className="row justify-center gap-2 rounded-xl py-2 text-sm font-bold text-[var(--text-secondary)]"><MessageCircle size={17} /> {activity.comments}</button>
        <button className="row justify-center gap-2 rounded-xl py-2 text-sm font-bold text-[var(--text-secondary)]"><Share2 size={17} /> {activity.shares}</button>
      </div>
    </Card>
  );
}
