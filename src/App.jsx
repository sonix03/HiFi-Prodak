import "./App.css";
import { useEffect, useState } from "react";
import BottomNavigation from "./components/BottomNavigation";
import Icon from "./components/Icon";
import Phone from "./components/Phone";
import {
  IntegratedApp,
  Activities,
  ActivityDetail,
  BrowseEvents,
  Club,
  Comments,
  Connections,
  CreateClub,
  CreatePost,
  EditActivity,
  AddGear,
  EditProfile,
  EventFilter,
  Feed,
  ForgotPassword,
  Gear,
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
  RecordFocus,
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
  { title: "Record Focus Playing", Screen: RecordFocus, props: { initialPhase: "running" } },
  { title: "Record Focus Paused", Screen: RecordFocus, props: { initialPhase: "stopped" } },
  { title: "Save Activity", Screen: SaveActivity },
  { title: "Edit Activity 1", Screen: EditActivity, props: { initialStep: 0 } },
  { title: "Edit Profile", Screen: EditProfile },
  { title: "Your Gear", Screen: Gear, nav: "progress" },
  { title: "Add Gear", Screen: AddGear, nav: "progress" },
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
  { title: "Connections - Followers", Screen: Connections, props: { initialTab: "followers" }, nav: "progress" },
  { title: "Connections - Following", Screen: Connections, props: { initialTab: "following" }, nav: "progress" },
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
  { title: "Integrated App", Screen: IntegratedApp },
];

const designColors = [
  { name: "Primary blue", value: "#2563EB", usage: "Main actions, active tabs, selected states" },
  { name: "Primary dark", value: "#1D4ED8", usage: "Stronger action emphasis and pressed states" },
  { name: "Primary soft", value: "#EFF6FF", usage: "Soft highlight backgrounds and active chips" },
  { name: "White surface", value: "#FFFFFF", usage: "Page backgrounds, cards, sheets, headers, inputs" },
  { name: "Surface muted", value: "#F5F5F5", usage: "Search fields, placeholders, quiet panels" },
  { name: "Text primary", value: "#0A0A0A", usage: "Main titles, labels, and high emphasis content" },
  { name: "Text secondary", value: "#525252", usage: "Metadata, helper text, timestamps" },
  { name: "Text tertiary", value: "#8A8A8A", usage: "Disabled text, placeholders, low emphasis labels" },
  { name: "Border", value: "#E5E5E5", usage: "Inputs, cards, dividers, sheet separators" },
  { name: "Divider", value: "#EEEEEE", usage: "List separators, section breaks, subtle layout boundaries" },
  { name: "Achievement yellow", value: "#FACC15", usage: "Achievements, badges, stopped state, progress accents" },
  { name: "Yellow soft", value: "#FEF9C3", usage: "Light achievement backgrounds and warm highlights" },
  { name: "Success", value: "#16A34A", usage: "Verified proof, positive completion, success feedback" },
  { name: "Warning", value: "#F59E0B", usage: "Attention states and non-critical warnings" },
  { name: "Danger", value: "#DC2626", usage: "Errors, destructive actions, failed states" },
  { name: "Canvas background", value: "#E9E9E4", usage: "Outer prototype canvas background" },
];

const typographyScale = [
  { role: "Screen title", size: "18-24px", weight: "700-800" },
  { role: "Section title", size: "16-22px", weight: "650-800" },
  { role: "Card title", size: "15-18px", weight: "650-800" },
  { role: "Body text", size: "13-16px", weight: "400-500" },
  { role: "Metadata", size: "11-13px", weight: "500" },
];

const typographySpecimen = [
  { sample: "Menteng", label: "Plus Jakarta Sans · Extra Light", weight: 200 },
  { sample: "Tanjung Priok", label: "Plus Jakarta Sans · Regular", weight: 400 },
  { sample: "Pasar Minggu", label: "Plus Jakarta Sans · Bold", weight: 700 },
  { sample: "+Jakarta Sans", label: "Plus Jakarta Sans · Extra Bold", weight: 800 },
];

const iconographyItems = [
  { icon: "activity", label: "Activity" },
  { icon: "analytics", label: "Analytics" },
  { icon: "arrowLeft", label: "Back" },
  { icon: "arrowRight", label: "Next" },
  { icon: "award", label: "Award" },
  { icon: "calendar", label: "Calendar" },
  { icon: "cancel", label: "Cancel" },
  { icon: "chart", label: "Chart" },
  { icon: "check", label: "Check" },
  { icon: "club", label: "Club" },
  { icon: "comment", label: "Comment" },
  { icon: "copy", label: "Copy" },
  { icon: "download", label: "Download" },
  { icon: "dropdown", label: "Dropdown" },
  { icon: "edit", label: "Edit" },
  { icon: "eye", label: "Visibility" },
  { icon: "feed", label: "Home" },
  { icon: "filter", label: "Filter" },
  { icon: "fire", label: "Streak" },
  { icon: "globe", label: "Public" },
  { icon: "group", label: "Group" },
  { icon: "heart", label: "Kudos" },
  { icon: "list", label: "List" },
  { icon: "lock", label: "Lock" },
  { icon: "media", label: "Media" },
  { icon: "messageShare", label: "Message" },
  { icon: "more", label: "More" },
  { icon: "notification", label: "Notification" },
  { icon: "play", label: "Play" },
  { icon: "plus", label: "Add" },
  { icon: "profile", label: "Profile" },
  { icon: "proof", label: "Proof" },
  { icon: "qr", label: "QR code" },
  { icon: "record", label: "Record" },
  { icon: "route", label: "Route" },
  { icon: "save", label: "Save" },
  { icon: "search", label: "Search" },
  { icon: "settings", label: "Settings" },
  { icon: "share", label: "Share" },
  { icon: "shield", label: "Shield" },
  { icon: "target", label: "Target" },
  { icon: "timer", label: "Timer" },
  { icon: "trophy", label: "Trophy" },
  { icon: "upload", label: "Upload" },
  { icon: "userAdd", label: "Add user" },
  { icon: "userCheck", label: "User check" },
  { icon: "users", label: "Users" },
  { icon: "link", label: "Copy link" },
  { icon: "laptop", label: "Work" },
];

const promoHighlights = [
  {
    icon: "record",
    title: "Record work faster",
    body: "Start a focus session, pause when needed, and save the activity with clear proof and context.",
  },
  {
    icon: "feed",
    title: "Share progress clearly",
    body: "Activity cards combine time, score, proof, media, and social feedback in one readable flow.",
  },
  {
    icon: "group",
    title: "Build momentum together",
    body: "Clubs, challenges, and progress screens make productivity feel social and easy to revisit.",
  },
];

const userFlow = ["Open Prodak", "Record activity", "Review progress", "Share with clubs"];

export default function App() {
  const navigate = () => {};
  const screenCount = artboards.length;
  const [showDesignSystem, setShowDesignSystem] = useState(false);
  const [showScreens, setShowScreens] = useState(false);

  useEffect(() => {
    if (!showScreens) return;

    document.getElementById("separated-screens")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, [showScreens]);

  const handleScreensToggle = () => {
    setShowScreens((current) => !current);
  };

  return (
    <main className="app">
      <section className="promo-hero" aria-label="Prodak promotional showcase">
        <div className="promo-copy">
          <p className="promo-eyebrow">Prodak productivity app</p>
          <h1>Track focused work, prove progress, and grow with your community.</h1>
          <p className="promo-lede">
            Prodak turns daily productivity into a simple mobile flow: record an activity, attach context, review progress, and share achievements through a familiar social experience.
          </p>
          <div className="promo-actions">
            <a className="promo-primary-action" href="#integrated-demo">
              Try the app demo
            </a>
            <button className="promo-secondary-action" onClick={handleScreensToggle} type="button">
              {showScreens ? "Hide screens" : "See more screens"}
            </button>
          </div>
          <div className="promo-flow" aria-label="Core app flow">
            {userFlow.map((item, index) => (
              <div className="promo-flow-item" key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="promo-demo" id="integrated-demo">
          <div className="promo-demo-label">
            <span>Interactive app</span>
            <strong>Integrated flow</strong>
          </div>
          <div className="promo-phone">
            <Phone>
              <IntegratedApp />
            </Phone>
          </div>
        </div>
      </section>

      <section className="promo-feature-grid" aria-label="UX and feature advantages">
        {promoHighlights.map((item) => (
          <article className="promo-feature" key={item.title}>
            <span className="promo-feature-icon">
              <Icon name={item.icon} size={24} stroke={2} />
            </span>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </article>
        ))}
      </section>

      <section className="support-panel" aria-label="Prototype support materials">
        <div className="support-panel-copy">
          <p className="canvas-eyebrow">Prototype coverage</p>
          <h2>{screenCount} separated screens are available for deeper inspection.</h2>
          <p>
            The main demo above shows the user journey as one application. Use the separated screen gallery when you need to inspect individual flows, states, and poster or video source material.
          </p>
        </div>
        <div className="support-panel-actions">
          <button className="design-system-toggle" onClick={handleScreensToggle} type="button">
            {showScreens ? "Hide separated screens" : "See more screens"}
          </button>
          <button className="design-system-toggle" onClick={() => setShowDesignSystem((current) => !current)} type="button">
            {showDesignSystem ? "Hide design system" : "Show design system"}
          </button>
        </div>
      </section>

      {showDesignSystem ? (
      <section className="design-system-panel" aria-label="Design system overview">
        <div className="design-system-intro">
          <p className="design-system-kicker">Prodak design system</p>
          <div className="design-system-title-row">
            <div>
              <h2>Mobile prototype system</h2>
              <p>
                A compact reference for the visual language used across the prototype: color, typography, iconography, components, and rendered screen coverage.
              </p>
            </div>
            <div className="design-system-summary">
              <div className="design-system-count">
                <span>{screenCount}</span>
                <p>Screens rendered</p>
              </div>
            </div>
          </div>
        </div>

        <div className="design-system-content">
          <div className="design-system-card design-system-card-wide">
            <div className="design-system-card-header">
              <h3>Color system</h3>
              <p>Core tokens used for hierarchy, feedback, surfaces, and interactive states.</p>
            </div>
            <div className="color-token-grid">
              {designColors.map((color) => (
                <div className="color-token" key={color.name}>
                  <span className="color-swatch" style={{ background: color.value }} />
                  <div>
                    <strong>{color.name}</strong>
                    <p>{color.value}</p>
                    <small>{color.usage}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="design-system-card iconography-card">
            <div className="design-system-card-header">
              <h3>Iconography</h3>
              <p>Hugeicons stroke icons used across navigation, actions, forms, proof states, sharing, profile, record, and productivity flows.</p>
            </div>
            <div className="iconography-grid">
              {iconographyItems.map((item) => (
                <div key={item.label}>
                  <Icon name={item.icon} size={24} stroke={2} />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="design-system-card typography-card">
            <div className="design-system-card-header">
              <h3>Typography</h3>
              <p>Plus Jakarta Sans with flexible weights from 200 to 800.</p>
            </div>
            <div className="type-specimen-list">
              {typographySpecimen.map((item) => (
                <div key={item.label}>
                  <strong style={{ fontWeight: item.weight }}>{item.sample}</strong>
                  <p style={{ fontWeight: item.weight }}>{item.label}</p>
                </div>
              ))}
            </div>
            <div className="type-scale-list">
              {typographyScale.map((item) => (
                <div key={item.role}>
                  <strong>{item.role}</strong>
                  <span>{item.size}</span>
                  <p>Weight {item.weight}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="design-system-card">
            <div className="design-system-card-header">
              <h3>Component language</h3>
              <p>Reusable mobile patterns that keep the prototype consistent.</p>
            </div>
            <div className="component-chip-list">
              {[
                "App header",
                "Screen header",
                "Bottom navigation",
                "Button",
                "Pill",
                "Avatar",
                "Feed post",
                "Activity map",
                "Metric grid",
                "Progress chart",
                "Share bottom sheet",
                "Option bottom sheet",
                "Search bar",
                "Form field",
                "Select field",
                "List item",
                "Section header",
                "Profile identity",
                "Message sheet",
              ].map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
      ) : null}

      {showScreens ? (
      <section className="screen-gallery" id="separated-screens" aria-label="Separated screen artboards">
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
      </section>
      ) : null}
    </main>
  );
}
