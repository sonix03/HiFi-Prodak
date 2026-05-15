import Button from "../components/Button";
import CommentItem from "../components/CommentItem";
import ScreenHeader from "../components/ScreenHeader";
import { comments } from "../constants/data";

export default function Comments({ onNavigate }) {
  return (
    <main className="screen screen-pad">
      <ScreenHeader title="Discussion" onBack={() => onNavigate?.("activityDetail")} action={{ icon: "share", label: "Share thread" }} />
      <section className="mt-5 list gap-4 pb-24">
        {comments.map((comment) => <CommentItem key={comment.id} comment={comment} />)}
      </section>
      <div className="absolute bottom-0 left-0 right-0 border-t border-[var(--border)] bg-white p-4 shadow-[var(--shadow-navbar)]">
        <div className="row">
          <input className="input flex-1" placeholder="Add a comment" />
          <Button icon="arrowRight">Send</Button>
        </div>
      </div>
    </main>
  );
}
