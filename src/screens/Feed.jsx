import { useState } from "react";
import AppHeader from "../components/AppHeader";
import FeedPost from "../components/FeedPost";
import FeedShareSheet from "../components/FeedShareSheet";
import landscapeItb from "../assets/landscape-itb.png";
import mapPic from "../assets/map-pic.png";
import { activities, clubs } from "../constants/data";

export default function Feed({ onNavigate, initialShareSheet = false }) {
  const [showShare, setShowShare] = useState(initialShareSheet);

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

  return (
    <main className="screen screen-pad relative">
      <AppHeader
        right="notification"
        rightSecondary="profile"
        secondaryAction={{ icon: "messageShare", label: "Messages", onClick: () => onNavigate?.("messages") }}
        tertiaryAction={{ icon: "search", label: "Search", onClick: () => onNavigate?.("searchFriend") }}
      />
      <section className="stack">
        {posts.map((post) => (
          <FeedPost key={post.activity.id} onNavigate={onNavigate} {...post} onShare={handleShare} />
        ))}
      </section>

      {showShare && <FeedShareSheet onClose={() => setShowShare(false)} />}
    </main>
  );
}
