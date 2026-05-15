import { useState } from "react";
import ActivityMap from "../components/ActivityMap";
import AppHeader from "../components/AppHeader";
import Avatar from "../components/Avatar";
import Icon from "../components/Icon";
import Pill from "../components/Pill";
import ShareSheet from "../components/ShareSheet";
import landscapeItb from "../assets/landscape-itb.png";
import mapPic from "../assets/map-pic.png";
import { activities, clubs } from "../constants/data";

export default function Feed({ onNavigate }) {
  const [showShare, setShowShare] = useState(false);
  const [shareMedia, setShareMedia] = useState([]);

  const posts = [
    {
      activity: activities[0],
      place: "NVIDIA",
      headline: "ASIKKK",
      body: "Working 9 to 5 at NVIDIA",
      media: [
        { type: "map", src: mapPic },
        { type: "photo", src: landscapeItb },
      ],
    },
    {
      activity: activities[1],
      club: clubs[0],
      label: "Posted in club",
      place: clubs[0].name,
      media: [{ type: "photo", src: landscapeItb }],
    },
    {
      activity: activities[2],
      place: "Personal study log",
      media: [{ type: "map", src: mapPic }],
    },
  ];

  const handleShare = (media) => {
    setShareMedia(media);
    setShowShare(true);
  };

  return (
    <main className="screen screen-pad relative">
      <AppHeader right="notification" rightSecondary="profile" secondaryAction={{ icon: "search", label: "Search" }} />
      <section className="stack">
        {posts.map((post) => (
          <FeedPost key={post.activity.id} onNavigate={onNavigate} {...post} onShare={() => handleShare(post.media)} />
        ))}
      </section>

      {showShare && <ShareSheet onClose={() => setShowShare(false)} onShare={() => setShowShare(false)} media={shareMedia} />}
    </main>
  );
}

function FeedPost({ activity, club, label, place, headline, body, media = [], onNavigate, onShare }) {
  const isFeatured = media.length > 1;

  return (
    <article className="stack gap-2">
      <div className="row">
        <Avatar user={activity.user} />
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold">{activity.user.name}</p>
          <p className="meta">{activity.time} • {place}</p>
        </div>
        <Icon name="more" size="md" className="text-[var(--text-tertiary)]" />
      </div>

      {club ? (
        <button className="row rounded-2xl bg-[var(--surface-muted)] p-3 text-left" onClick={() => onNavigate?.("club")}>
          <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-[var(--blue)]">
            <Icon name="users" size="md" />
          </span>
          <div className="min-w-0">
            <p className="truncate text-xs font-semibold text-[var(--blue)]">{label}</p>
            <p className="truncate text-sm font-semibold">{club.name}</p>
          </div>
        </button>
      ) : null}

      <button className="text-left" onClick={() => onNavigate?.("activityDetail")}>
        <h1 className={isFeatured ? "text-[24px] font-bold leading-tight" : "card-title"}>{headline || activity.title}</h1>
        <p className="mt-2 body">{body || activity.caption}</p>
      </button>

      <div className="grid-3">
        <div><p className="meta">Duration</p><p className="metric-sm mt-1">{activity.duration}</p></div>
        <div><p className="meta">Score</p><p className="metric-sm mt-1 text-[var(--blue)]">{activity.focusScore}</p></div>
        <div><p className="meta">Output</p><p className="metric-sm mt-1">{activity.output}</p></div>
      </div>

      <MediaRow media={media} proof={activity.proof} />

      <div className="grid-3 border-y border-[var(--divider)] py-3 text-center">
        <button className="grid justify-items-center gap-1 text-[12px] font-semibold text-[var(--text-secondary)]">
          <Icon name="heart" size="sm" /> {activity.kudos}
        </button>
        <button className="grid justify-items-center gap-1 text-[12px] font-semibold text-[var(--text-secondary)]" onClick={() => onNavigate?.("comments")}>
          <Icon name="comment" size="sm" /> {activity.comments}
        </button>
        <button className="grid justify-items-center gap-1 text-[12px] font-semibold text-[var(--text-secondary)]" onClick={onShare}>
          <Icon name="share" size="sm" /> Share
        </button>
      </div>

      </article>
  );
}

function MediaRow({ media, proof }) {
  if (!media.length) return null;

  return (
    <div className={`grid gap-3 ${media.length > 1 ? "grid-cols-2" : "grid-cols-1"}`}>
      {media.map((item) => (
        item.type === "map" ? (
          <ActivityMap height={media.length > 1 ? 170 : 220} imageSrc={item.src} key={`${item.type}-${item.src}`} />
        ) : (
          <div className="relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface-muted)] shadow-[var(--shadow-card)]" key={`${item.type}-${item.src}`}>
            <img className="h-[170px] w-full object-cover" src={item.src} alt="Uploaded activity" />
          </div>
        )
      ))}
    </div>
  );
}
