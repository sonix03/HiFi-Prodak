import { Send } from "lucide-react";
import Button from "../components/Button";
import Card from "../components/Card";
import CommentItem from "../components/CommentItem";
import Header from "../components/Header";
import { activities, comments } from "../constants/data";

export default function Comments({ onNavigate }) {
  const activity = activities[0];

  return (
    <main className="screen screen-pad">
      <Header title="Comments" onBack={() => onNavigate?.("activityDetail")} right={Send} />
      <Card>
        <p className="meta">{activity.user.name}</p>
        <h2 className="mt-1 card-title">{activity.title}</h2>
        <p className="mt-2 body">{activity.duration} • Focus score {activity.focusScore}</p>
      </Card>
      <section className="mt-5 stack">
        {comments.map((comment) => <CommentItem key={comment.id} comment={comment} />)}
      </section>
      <div className="absolute bottom-0 left-0 right-0 border-t border-[var(--border)] bg-white p-4">
        <div className="row">
          <input className="input flex-1" placeholder="Add a comment" />
          <Button icon={Send}>Send</Button>
        </div>
      </div>
    </main>
  );
}
