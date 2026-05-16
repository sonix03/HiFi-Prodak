import { useState } from "react";
import AppHeader from "../components/AppHeader";
import FeedPost from "../components/FeedPost";
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
