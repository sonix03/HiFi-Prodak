import { useState, useCallback } from "react";
import BottomNavigation from "../components/BottomNavigation";
import Activities from "./Activities";
import ActivityDetail from "./ActivityDetail";
import AddGear from "./AddGear";
import BrowseEvents from "./BrowseEvents";
import Club from "./Club";
import Comments from "./Comments";
import CreateClub from "./CreateClub";
import CreatePost from "./CreatePost";
import EditActivity from "./EditActivity";
import EditProfile from "./EditProfile";
import EventFilter from "./EventFilter";
import Feed from "./Feed";
import ForgotPassword from "./ForgotPassword";
import Gear from "./Gear";
import GroupClub from "./GroupClub";
import Groups from "./Groups";
import Login from "./Login";
import LoginIntro from "./LoginIntro";
import Messages from "./Messages";
import Notifications from "./Notifications";
import OtherProfile from "./OtherProfile";
import Profile from "./Profile";
import Progress from "./Progress";
import QRCode from "./QRCode";
import Record from "./Record";
import Registration from "./Registration";
import SaveActivity from "./SaveActivity";
import SearchClub from "./SearchClub";
import SearchFriend from "./SearchFriend";
import Share from "./Share";
import ShareClub from "./ShareClub";

const screenMap = {
  feed: Feed,
  record: Record,
  groups: Groups,
  progress: Progress,
  messages: Messages,
  activityDetail: ActivityDetail,
  activities: Activities,
  browseEvents: BrowseEvents,
  club: Club,
  groupClub: GroupClub,
  comments: Comments,
  createClub: CreateClub,
  createPost: CreatePost,
  editActivity: EditActivity,
  eventFilter: EventFilter,
  forgotPassword: ForgotPassword,
  login: Login,
  loginIntro: LoginIntro,
  notifications: Notifications,
  otherProfile: OtherProfile,
  profile: Profile,
  qrCode: QRCode,
  registration: Registration,
  saveActivity: SaveActivity,
  searchClub: SearchClub,
  searchFriend: SearchFriend,
  share: Share,
  shareClub: ShareClub,
  gear: Gear,
  addGear: AddGear,
  editProfile: EditProfile,
};

const tabForScreen = {
  feed: "feed",
  messages: "feed",
  activityDetail: "feed",
  notifications: "feed",
  otherProfile: "feed",
  activities: "feed",
  groups: "groups",
  club: "groups",
  groupClub: "groups",
  browseEvents: "groups",
  progress: "progress",
  profile: "progress",
  gear: "progress",
  addGear: "progress",
};

const noBottomNav = new Set([
  "record",
  "saveActivity",
  "editActivity",
  "login",
  "loginIntro",
  "registration",
  "forgotPassword",
  "comments",
  "createClub",
  "createPost",
  "eventFilter",
  "searchFriend",
  "searchClub",
  "share",
  "shareClub",
  "qrCode",
  "editProfile",
]);

const backTargets = {
  searchFriend: "groups",
  searchClub: "groups",
  comments: "activityDetail",
  eventFilter: "browseEvents",
  otherProfile: "feed",
  club: "groups",
  notifications: "feed",
  activities: "profile",
  activityDetail: "feed",
  messages: "feed",
  saveActivity: "record",
  editActivity: "activityDetail",
  shareClub: "club",
  createClub: "groups",
};

export default function IntegratedApp() {
  const [navStack, setNavStack] = useState(["loginIntro"]);
  const [currentScreen, setCurrentScreen] = useState("loginIntro");

  const handleNavigate = useCallback((screen) => {
    const expectedBack = backTargets[currentScreen];

    if (expectedBack && screen === expectedBack) {
      const idx = navStack.lastIndexOf(currentScreen);
      if (idx > 0) {
        const prev = navStack[idx - 1];
        setNavStack((prev) => prev.slice(0, idx));
        setCurrentScreen(prev);
        return;
      }
    }

    setNavStack((prev) => {
      const tabRoot = tabForScreen[screen];
      if (tabRoot) {
        const rootIdx = prev.lastIndexOf(screen);
        if (rootIdx !== -1) {
          return prev.slice(0, rootIdx + 1);
        }
      }
      return [...prev, screen];
    });
    setCurrentScreen(screen);
  }, [currentScreen, navStack]);

  const ScreenComponent = screenMap[currentScreen];

  if (!ScreenComponent) {
    return (
      <main className="screen screen-pad grid place-items-center">
        <p>Unknown screen: {currentScreen}</p>
      </main>
    );
  }

  const showNav = !noBottomNav.has(currentScreen);
  const activeTab = tabForScreen[currentScreen] || "feed";

  return (
    <div className="relative h-full">
      <main className="screen">
        <ScreenComponent onNavigate={handleNavigate} />
      </main>
      {showNav && <BottomNavigation active={activeTab} onNavigate={handleNavigate} />}
    </div>
  );
}
