import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { MessageMultiple01Icon, Notification01Icon, Search02Icon } from "@hugeicons/core-free-icons";
import FeedPost from "../components/FeedPost";
import FeedShareSheet from "../components/FeedShareSheet";
import landscapeItb from "../assets/landscape-itb.png";
import mapPic from "../assets/map-pic.png";
import avatar from "../assets/avatar.png";
import { activities, clubs, notifications } from "../constants/data";
import OtherProfile from "./OtherProfile";

export default function Feed({ onNavigate, initialShareSheet = false }) {
  const [showShare, setShowShare] = useState(initialShareSheet);
  const [showOtherProfile, setShowOtherProfile] = useState(false);

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
      activity: { ...activities[2], kudos: 0, comments: 0 },
      place: "Personal study log",
      media: [{ type: "map", src: mapPic }],
    },
  ];

  const handleShare = () => {
    setShowShare(true);
  };

  if (showOtherProfile) {
    return <OtherProfile onNavigate={(screen) => (screen === "feed" ? setShowOtherProfile(false) : onNavigate?.(screen))} />;
  }

  return (
    <main className="screen screen-pad relative">
      <header className="app-header app-header-main">
        <div className="flex items-center gap-2">
          <button className="header-action !h-[26px] !w-[26px] overflow-hidden border border-[var(--border)]" onClick={() => onNavigate?.("profile")} type="button" aria-label="Profile">
            <img className="h-full w-full rounded-full object-cover" src={avatar} alt="" />
          </button>
          <button className="header-action" onClick={() => onNavigate?.("searchFriend")} type="button" aria-label="Search">
            <HugeiconsIcon icon={Search02Icon} size={24} color="currentColor" strokeWidth={2} />
          </button>
        </div>
        <div className="flex items-center gap-2">
          <button className="header-action" onClick={() => onNavigate?.("messages")} type="button" aria-label="Messages">
            <HugeiconsIcon icon={MessageMultiple01Icon} size={24} color="currentColor" strokeWidth={2} />
          </button>
          <button className="header-action relative" onClick={() => onNavigate?.("notifications")} type="button" aria-label="Notifications">
            <HugeiconsIcon icon={Notification01Icon} size={24} color="currentColor" strokeWidth={2} />
            {notifications.length > 0 ? <span className="absolute right-0.5 top-0.5 h-2 w-2 rounded-full bg-red-500" /> : null}
          </button>
        </div>
      </header>
      <section className="stack">
        {posts.map((post) => (
          <FeedPost key={post.activity.id} onNavigate={onNavigate} {...post} onOpenProfile={() => setShowOtherProfile(true)} onShare={handleShare} />
        ))}
      </section>

      {showShare && <FeedShareSheet onClose={() => setShowShare(false)} onNavigate={onNavigate} />}
    </main>
  );
}
