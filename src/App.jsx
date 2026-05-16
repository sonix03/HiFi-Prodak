import "./App.css";
import BottomNavigation from "./components/BottomNavigation";
import Phone from "./components/Phone";
import {
  Activities,
  ActivityDetail,
  Club,
  Comments,
  CreateClub,
  CreatePost,
  EditActivity,
  EditProfile,
  Feed,
  ForgotPassword,
  GroupClub,
  Groups,
  Login,
  LoginIntro,
  Notifications,
  Preview,
  Profile,
  Progress,
  QRCode,
  Record,
  Registration,
  SaveActivity,
  SearchClub,
  SearchFriend,
  ShareClub,
} from "./screens";

const artboards = [
  { title: "Login Intro", Screen: LoginIntro },
  { title: "Login", Screen: Login },
  { title: "Registration", Screen: Registration },
  { title: "Forgot Password", Screen: ForgotPassword },
  { title: "Feed", Screen: Feed, nav: "feed" },
  { title: "Activities", Screen: Activities },
  { title: "Activity Detail", Screen: ActivityDetail },
  { title: "Record", Screen: Record },
  { title: "Record Playing", Screen: Record, props: { initialRunning: true } },
  { title: "Record Stopped", Screen: Record, props: { initialPlaying: true } },
  { title: "Save Activity", Screen: SaveActivity },
  { title: "Edit Activity 1", Screen: EditActivity, props: { initialStep: 0 } },
  { title: "Edit Profile", Screen: EditProfile },
  // { title: "Edit Activity 2", Screen: EditActivity, props: { initialStep: 1 } },
  { title: "Progress", Screen: Progress, nav: "progress" },
  { title: "Groups - Clubs", Screen: Groups, nav: "groups" },
  { title: "Groups - Challenges", Screen: GroupClub, nav: "groups" },
  { title: "Club Detail", Screen: Club, nav: "groups" },
  { title: "Create Club 1", Screen: CreateClub, props: { initialStep: 0 } },
  { title: "Create Club 2", Screen: CreateClub, props: { initialStep: 1 } },
  { title: "Create Club 3", Screen: CreateClub, props: { initialStep: 2 } },
  { title: "Create Club 4", Screen: CreateClub, props: { initialStep: 3 } },
  { title: "Create Club 5", Screen: CreateClub, props: { initialStep: 4 } },
  { title: "Create Post 1", Screen: CreatePost, props: { initialStep: 0 } },
  { title: "Create Post 2", Screen: CreatePost, props: { initialStep: 1 } },
  { title: "Comments", Screen: Comments },
  { title: "Search Clubs", Screen: SearchClub },
  { title: "Search Friends", Screen: SearchFriend },
  { title: "Notifications", Screen: Notifications },
  { title: "Profile", Screen: Profile, nav: "progress" },
  { title: "QR Code", Screen: QRCode },
  { title: "Preview", Screen: Preview },
  { title: "Share Club", Screen: ShareClub },
];

export default function App() {
  const navigate = () => {};

  return (
    <main className="app">
      <header className="canvas-header">
        <p className="canvas-eyebrow">Prodak screens</p>
        <h1>Separated screen artboards</h1>
        <p>Each phone below renders a separate React screen file, with multi-step flows split into individual artboards for Figma-style inspection.</p>
      </header>

      <section className="artboard-grid" aria-label="Screen artboards">
        {artboards.map(({ title, Screen, props = {}, nav }) => (
          <article className="artboard" key={title}>
            <div className="artboard-label">
              <div>
                <p>Screen</p>
                <h2>{title}</h2>
              </div>
            </div>
            <Phone>
              <Screen onNavigate={navigate} {...props} />
              {nav ? <BottomNavigation active={nav} onNavigate={navigate} /> : null}
            </Phone>
          </article>
        ))}
      </section>
    </main>
  );
}
