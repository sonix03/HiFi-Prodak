import ListItem from "../components/ListItem";
import ScreenHeader from "../components/ScreenHeader";
import Pill from "../components/Pill";
import { notifications } from "../constants/data";

export default function Notifications({ onNavigate }) {
  return (
    <main className="screen screen-pad">
      <ScreenHeader title="Notifications" onBack={() => onNavigate?.("feed")} right={null} />
      <div className="tab-row">{["All", "Kudos", "Comments", "Clubs"].map((tab, index) => <Pill key={tab} active={index === 0}>{tab}</Pill>)}</div>
      <section className="section list">
        {notifications.map((item) => (
          <ListItem
            accent={item.type === "achievement" ? "yellow" : item.type === "club" ? "blue" : "neutral"}
            hideDivider
            icon={item.icon}
            key={item.id}
            meta={item.body}
            title={item.title}
            unread={item.unread}
            value={item.time}
          />
        ))}
      </section>
    </main>
  );
}
