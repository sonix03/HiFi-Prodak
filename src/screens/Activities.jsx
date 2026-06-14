import { useState } from "react";
import FeedShareSheet from "../components/FeedShareSheet";
import FeedPost from "../components/FeedPost";
import Pill from "../components/Pill";
import SectionHeader from "../components/SectionHeader";
import ScreenHeader from "../components/ScreenHeader";
import landscapeItb from "../assets/landscape-itb.png";
import mapPic from "../assets/map-pic.png";
import { getMayActivitiesForDay, mikaActivities } from "../constants/data";

export default function Activities({ onNavigate, returnTo = "profile", selectedDay = null }) {
  const [activeFilter, setActiveFilter] = useState("All");
  const [showShare, setShowShare] = useState(false);
  const backLabel = returnTo === "progress" ? "Progress" : "Profile";
  const selectedDayNumber = selectedDay ? Number(selectedDay) : null;
  const sourceActivities = selectedDayNumber ? getMayActivitiesForDay(selectedDayNumber) : mikaActivities;
  const filteredActivities = sourceActivities.filter((activity) => {
    const matchesFilter =
      activeFilter === "All" ||
      activity.type === activeFilter ||
      activity.category === activeFilter ||
      activity.privacy === activeFilter ||
      (activeFilter === "Proof" && activity.proof);

    return matchesFilter;
  });
  const activityMedia = [
    [{ type: "map", src: mapPic }],
    [{ type: "photo", src: landscapeItb }],
    [{ type: "map", src: mapPic }],
    [{ type: "map", src: mapPic }],
  ];

  return (
    <main className="screen screen-pad">
      <ScreenHeader
        backLabel={backLabel}
        centeredTitle
        onBack={() => onNavigate?.(returnTo)}
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
        <SectionHeader
          title={selectedDayNumber ? `May ${selectedDayNumber}, 2026` : "Jane's activities"}
          meta={selectedDayNumber ? `${filteredActivities.length} activities from Progress` : "Tap any activity to review proof and comments."}
        />
        <div className="stack mt-3">
          {filteredActivities.map((activity, index) => (
            <FeedPost
              key={activity.id}
              activity={activity}
              media={activityMedia[index] || [{ type: "map", src: mapPic }]}
              onNavigate={onNavigate}
              onShare={() => setShowShare(true)}
              place={activity.type}
            />
          ))}
          {!filteredActivities.length ? (
            <div className="py-10 text-center text-[12px] font-semibold text-[var(--text-secondary)]">
              No activities match this selection.
            </div>
          ) : null}
        </div>
      </section>
      {showShare ? <FeedShareSheet onClose={() => setShowShare(false)} onNavigate={onNavigate} /> : null}
    </main>
  );
}
