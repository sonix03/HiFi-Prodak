import "./App.css";
import BottomNav from "./components/BottomNav";
import Phone from "./components/Phone";
import {
  Activities,
  ActivityDetail,
  Club,
  Comments,
  CreateClub,
  CreatePost,
  EditActivity,
  Feed,
  GroupClub,
  Groups,
  Login,
  Notifications,
  Preview,
  Profile,
  Progress,
  Record,
  SaveActivity,
  SearchFriend,
  Share,
  ShareClub,
} from "./screens";

const artboards = [
  { key: "login", title: "Login", component: Login },
  { key: "feed", title: "Feed", component: Feed, nav: "feed" },
  { key: "activities", title: "Activities", component: Activities, nav: "activities" },
  { key: "activityDetail", title: "Activity Detail", component: ActivityDetail, nav: "feed" },
  { key: "record", title: "Record", component: Record, nav: "record" },
  { key: "saveActivity", title: "Save Activity", component: SaveActivity, nav: "record" },
  { key: "editActivity", title: "Edit Activity", component: EditActivity, nav: "feed" },
  { key: "progress", title: "Progress", component: Progress, nav: "profile" },
  { key: "profile", title: "Profile", component: Profile, nav: "profile" },
  { key: "groups", title: "Groups", component: Groups, nav: "groups" },
  { key: "groupClub", title: "Group Club", component: GroupClub, nav: "groups" },
  { key: "club", title: "Club Detail", component: Club, nav: "groups" },
  { key: "createClub", title: "Create Club", component: CreateClub, nav: "groups" },
  { key: "createPost", title: "Create Post", component: CreatePost, nav: "feed" },
  { key: "searchFriend", title: "Search Friend", component: SearchFriend, nav: "feed" },
  { key: "comments", title: "Comments", component: Comments, nav: "feed" },
  { key: "notifications", title: "Notifications", component: Notifications, nav: "feed" },
  { key: "share", title: "Share Activity", component: Share, nav: "feed" },
  { key: "shareClub", title: "Share Club", component: ShareClub, nav: "groups" },
  { key: "preview", title: "Preview", component: Preview, nav: "feed" },
];

const noopNavigate = () => {};

export default function App() {
  return (
    <main className="app">
      <header className="canvas-header">
        <p className="canvas-eyebrow">Prodak Hi-Fi Mobile Prototype</p>
        <h1>Separated screen artboards</h1>
        <p>
          Setiap screen dirender sebagai artboard mandiri dari file di
          <span> src/screens</span>, seperti canvas presentasi Figma.
        </p>
      </header>

      <section className="artboard-grid" aria-label="Prodak screens">
        {artboards.map(({ key, title, component: Screen, nav }) => (
          <article className="artboard" key={key}>
            <div className="artboard-label">
              <div>
                <p>Screen</p>
                <h2>{title}</h2>
              </div>
              <span>390 x 844</span>
            </div>

            <Phone>
              <Screen onNavigate={noopNavigate} />
              {nav ? <BottomNav active={nav} onNavigate={noopNavigate} /> : null}
            </Phone>
          </article>
        ))}
      </section>
    </main>
  );
}
