import Button from "../components/Button";
import CommentItem from "../components/CommentItem";
import ScreenHeader from "../components/ScreenHeader";
import { activities, comments } from "../constants/data";

export default function Comments({ onNavigate }) {
  const activity = activities[0];

  return (
    <main className="screen screen-pad">
      <ScreenHeader title="Comments" status="Activity discussion" onBack={() => onNavigate?.("activityDetail")} action={{ icon: "share", label: "Share thread" }} />
      <section className="hero-panel">
        <p className="meta">{activity.user.name}</p>
        <h2 className="mt-1 card-title">{activity.title}</h2>
        <p className="mt-2 body">{activity.duration} • Focus score {activity.focusScore}</p>
      </section>
      <section className="mt-5 list gap-4">
        {comments.map((comment) => <CommentItem key={comment.id} comment={comment} />)}
      </section>
      <div className="absolute bottom-0 left-0 right-0 border-t border-[var(--border)] bg-white p-4">
        <div className="row">
          <input className="input flex-1" placeholder="Add a comment" />
          <Button icon="arrowRight">Send</Button>
        </div>
      </div>
    </main>
  );
}
