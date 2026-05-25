import { useState } from "react";
import FeedShareSheet from "../components/FeedShareSheet";
import FeedPost from "../components/FeedPost";
import Pill from "../components/Pill";
import SectionHeader from "../components/SectionHeader";
import ScreenHeader from "../components/ScreenHeader";
import landscapeItb from "../assets/landscape-itb.png";
import mapPic from "../assets/map-pic.png";
import { mikaActivities } from "../constants/data";

export default function Activities({ onNavigate }) {
  const [activeFilter, setActiveFilter] = useState("All");
  const [showShare, setShowShare] = useState(false);
  const activityMedia = [
    [{ type: "map", src: mapPic }],
    [{ type: "photo", src: landscapeItb }],
    [{ type: "map", src: mapPic }],
    [{ type: "map", src: mapPic }],
  ];

  return (
    <main className="screen screen-pad">
      <ScreenHeader
        backLabel="Profile"
        centeredTitle
        onBack={() => onNavigate?.("profile")}
        right={null}
        title="Activities"
      />
      <div className="tab-row">
        {["All", "Deep Work", "Study", "Club", "Proof"].map((tab) => (
          <Pill key={tab} active={activeFilter === tab} onClick={() => setActiveFilter(tab)}>
            {tab}
          </Pill>
        ))}
      </div>
      <section className="section">
        <SectionHeader title="Jane's activities" meta="Tap any activity to review proof and comments." />
        <div className="stack mt-3">
          {mikaActivities.map((activity, index) => (
            <FeedPost
              key={activity.id}
              activity={activity}
              media={activityMedia[index] || [{ type: "map", src: mapPic }]}
              onNavigate={onNavigate}
              onShare={() => setShowShare(true)}
              place={activity.type}
            />
          ))}
        </div>
      </section>
      {showShare ? <FeedShareSheet onClose={() => setShowShare(false)} onNavigate={onNavigate} /> : null}
    </main>
  );
}
