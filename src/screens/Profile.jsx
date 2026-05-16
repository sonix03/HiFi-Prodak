import Icon from "../components/Icon";
import ListItem from "../components/ListItem";
import ProgressChart from "../components/ProgressChart";
import ProfileHeader from "../components/ProfileHeader";
import ProfileIdentity from "../components/ProfileIdentity";
import SectionHeader from "../components/SectionHeader";
import landscapeItb from "../assets/landscape-itb.png";
import loginVideo from "../assets/login_page_video.mp4";
import mapPic from "../assets/map-pic.png";
import { activities, users, weeklyStats } from "../constants/data";

const profileStats = [
  { label: "Following", value: "218" },
  { label: "Followers", value: "8.7k" },
  { label: "Activities", value: "142" },
  { label: "Weekly Streak", value: "18d" },
];

const profileMedia = [
  { id: "map", type: "map", src: mapPic, alt: "Activity route map" },
  { id: "photo", type: "photo", src: landscapeItb, alt: "Activity photo" },
  { id: "video", type: "video", src: loginVideo, alt: "Activity video" },
];

const profileActions = [
  { icon: "activity", title: "Activities", route: "activities" },
  { icon: "list", title: "Posts" },
  { icon: "settings", title: "Gear" },
];

export default function Profile({ onNavigate }) {
  const user = users[0];

  return (
    <main className="screen screen-pad">
      <ProfileHeader
        onBack={() => onNavigate?.("feed")}
        onSearch={() => onNavigate?.("searchFriend")}
        onShare={() => onNavigate?.("share")}
      />
      <section className="hero-panel">
        <ProfileIdentity user={user} />
        <div className="profile-stats mt-5">
          {profileStats.map((stat) => (
            <div key={stat.label}>
              <p>{stat.value}</p>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          <button className="profile-pill" onClick={() => onNavigate?.("share")}>
            <Icon name="qr" size="sm" />
            Share my QR Code
          </button>
          <button className="profile-pill">
            <Icon name="edit" size="sm" />
            Edit
          </button>
        </div>
      </section>

      <section className="section">
        <div className="profile-media-grid">
          {profileMedia.map((item) => (
            <button className="profile-media-item" key={item.id} type="button">
              {item.type === "video" ? (
                <>
                  <video muted playsInline preload="metadata">
                    <source src={item.src} type="video/mp4" />
                  </video>
                  <span className="profile-media-play">
                    <Icon name="play" size="sm" />
                  </span>
                </>
              ) : (
                <img src={item.src} alt={item.alt} />
              )}
            </button>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="flex items-center gap-[9px]">
          <span className="inline-flex items-center justify-center text-[var(--text)]">
            <Icon name="laptop" size="sm" />
          </span>
          <h2 className="text-base font-extrabold leading-none text-[var(--text)]">This week</h2>
        </div>
        <div className="mt-5 grid grid-cols-3 gap-2.5">
          <div>
            <p className="text-lg font-extrabold leading-none text-[var(--text)]">42h</p>
            <span className="mt-1.5 block text-[11px] font-semibold leading-tight text-[var(--text-secondary)]">Focus time</span>
          </div>
          <div>
            <p className="text-lg font-extrabold leading-none text-[var(--text)]">10</p>
            <span className="mt-1.5 block text-[11px] font-semibold leading-tight text-[var(--text-secondary)]">Activities</span>
          </div>
          <div>
            <p className="text-lg font-extrabold leading-none text-[var(--text)]">86</p>
            <span className="mt-1.5 block text-[11px] font-semibold leading-tight text-[var(--text-secondary)]">Avg score</span>
          </div>
        </div>
        <div className="mt-3">
          <ProgressChart data={weeklyStats} flushX />
        </div>
        <div className="h-[3px] rounded-full bg-[var(--divider)]" />
        <div className="list">
          {profileActions.map((item) => (
            <ListItem
              action={<Icon name="arrowRight" size="sm" className="text-[var(--text-tertiary)]" />}
              icon={item.icon}
              key={item.title}
              onClick={item.route ? () => onNavigate?.(item.route) : undefined}
              title={item.title}
            />
          ))}
        </div>
      </section>

      <section className="section">
        <SectionHeader title="Personal records" />
        <div className="list mt-2">
          <ListItem icon="award" accent="yellow" title="Best focus score" meta="Design sprint" value="97" />
          <ListItem icon="timer" accent="blue" title="Longest session" meta="Research writing" value="4h 22m" />
        </div>
      </section>
      <section className="section">
        <SectionHeader title="Recent activity" />
        <div className="list mt-2">
          {activities.slice(0, 2).map((activity) => <ListItem key={activity.id} icon="activity" title={activity.title} meta={`${activity.duration} • Score ${activity.focusScore}`} />)}
        </div>
      </section>
    </main>
  );
}
