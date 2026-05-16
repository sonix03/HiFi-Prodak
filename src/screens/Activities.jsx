import AppHeader from "../components/AppHeader";
import Avatar from "../components/Avatar";
import FeedPost from "../components/FeedPost";
import MetricGrid from "../components/MetricGrid";
import Pill from "../components/Pill";
import SectionHeader from "../components/SectionHeader";
import landscapeItb from "../assets/landscape-itb.png";
import mapPic from "../assets/map-pic.png";
import { mikaActivities, users } from "../constants/data";

export default function Activities({ onNavigate }) {
  const user = users[0];
  const activityMedia = [
    [{ type: "map", src: mapPic }],
    [{ type: "photo", src: landscapeItb }],
    [{ type: "map", src: mapPic }],
    [{ type: "map", src: mapPic }],
  ];

  return (
    <main className="screen screen-pad">
      <AppHeader right="filter" secondaryAction={{ icon: "search", label: "Search activities" }} />
      <section className="hero-panel">
        <div className="row">
          <Avatar user={user} size="lg" />
          <div className="min-w-0">
            <h1 className="title">{user.name}</h1>
            <p className="body">{user.handle} • {user.role}</p>
          </div>
        </div>
      </section>
      <MetricGrid columns={2} items={[
        { label: "Activities", value: mikaActivities.length, sub: "Mika's logged sessions", icon: "activity", tone: "blue" },
        { label: "May focus", value: "42h", sub: "+14% vs Apr", icon: "calendar", tone: "neutral" },
      ]} />
      <div className="mt-5 tab-row">
        {["All", "Deep Work", "Study", "Club", "Proof"].map((tab, index) => <Pill key={tab} active={index === 0}>{tab}</Pill>)}
      </div>
      <section className="section">
        <SectionHeader title="Mika's activities" meta="Tap any activity to review proof and comments." />
        <div className="stack mt-3">
          {mikaActivities.map((activity, index) => (
            <FeedPost
              key={activity.id}
              activity={activity}
              media={activityMedia[index] || [{ type: "map", src: mapPic }]}
              onNavigate={onNavigate}
              place={activity.type}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
