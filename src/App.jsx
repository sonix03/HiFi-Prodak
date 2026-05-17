import "./App.css";
import BottomNavigation from "./components/BottomNavigation";
import Phone from "./components/Phone";
import {
  Activities,
  ActivityDetail,
  BrowseEvents,
  Club,
  Comments,
  CreateClub,
  CreatePost,
  EditActivity,
  EditProfile,
  EventFilter,
  Feed,
  ForgotPassword,
  GroupClub,
  Groups,
  Login,
  LoginIntro,
  MessageDetail,
  Messages,
  Notifications,
  OtherProfile,
  Profile,
  Progress,
  QRCode,
  Record,
  Registration,
  SaveActivity,
  SearchClub,
  SearchFriend,
  Share,
  ShareClub,
} from "./screens";

const artboards = [
  { title: "Login Intro", Screen: LoginIntro },
  { title: "Login", Screen: Login },
  { title: "Registration", Screen: Registration },
  { title: "Forgot Password", Screen: ForgotPassword },
  { title: "Feed", Screen: Feed, nav: "feed" },
  { title: "Feed - Share Sheet", Screen: Feed, props: { initialShareSheet: true }, nav: "feed" },
  { title: "Messages", Screen: Messages, nav: "feed" },
  { title: "Messages - New Message", Screen: Messages, props: { initialNewMessage: true }, nav: "feed" },
  { title: "Message Detail", Screen: MessageDetail },
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
  { title: "Browse Events", Screen: BrowseEvents, nav: "groups" },
  { title: "Browse Events - Work Type", Screen: BrowseEvents, props: { initialWorkSheet: true }, nav: "groups" },
  { title: "Event Detail", Screen: BrowseEvents, props: { initialEventDetail: true } },
  { title: "Event Detail - Joined", Screen: BrowseEvents, props: { initialJoined: true } },
  { title: "Share Event", Screen: BrowseEvents, props: { initialShareEvent: true } },
  { title: "Event Filter", Screen: EventFilter },
  { title: "Groups - Challenges", Screen: GroupClub, nav: "groups" },
  { title: "Challenge Detail", Screen: GroupClub, props: { initialDetail: true } },
  { title: "Challenge Invite Friends", Screen: GroupClub, props: { initialInvite: true } },
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
  { title: "Other Profile", Screen: OtherProfile, nav: "feed" },
  { title: "Other Profile - Following", Screen: OtherProfile, props: { initialFollowed: true }, nav: "feed" },
  { title: "Profile", Screen: Profile, nav: "progress" },
  { title: "QR Code", Screen: QRCode },
  { title: "Share Activity", Screen: Share },
  { title: "Share Activity - Send to", Screen: Share, props: { initialMessageSheet: true } },
  { title: "Prodak Message Detail", Screen: Share, props: { initialMessageDetail: true } },
  { title: "Share Club", Screen: ShareClub },
];

export default function App() {
  const navigate = () => {};
  const screenCount = artboards.length;

  return (
    <main className="app">
      <section className="design-system-panel" aria-label="Design system overview">
        <div>
          <p className="canvas-eyebrow">Prodak design system</p>
          <h2>Mobile prototype system</h2>
          <p>
            Plus Jakarta Sans, blue primary actions, soft layered surfaces, rounded controls, Hugeicons, reusable cards, headers, bottom navigation, and bottom sheets.
          </p>
        </div>
        <div className="design-system-stats" aria-label="Prototype summary">
          <div>
            <span>{screenCount}</span>
            <p>Screens rendered</p>
          </div>
          <div>
            <span>#2563EB</span>
            <p>Primary color</p>
          </div>
          <div>
            <span>200-800</span>
            <p>Font weights</p>
          </div>
          <div>
            <span>4</span>
            <p>Main navigation</p>
          </div>
        </div>
      </section>

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
