import { useState } from "react";
import Icon from "../components/Icon";
import MessageRecipientSheet from "../components/MessageRecipientSheet";
import PostComposer from "../components/PostComposer";
import ShareBottomSheet from "../components/ShareBottomSheet";
import ShareTargets from "../components/ShareTargets";
import ActivityDetail from "./ActivityDetail";
import MessageDetail from "./MessageDetail";
import avatar from "../assets/avatar.png";
import indomieLogo from "../assets/indomie-logo.png";
import instagramLogo from "../assets/instagram-logo.png";
import landscapeItb from "../assets/landscape-itb.png";
import mapPic from "../assets/map-pic.png";
import whatsappLogo from "../assets/whatsapp-logo.png";
import { activities, messageThreads } from "../constants/data";

const prodakShareTargets = [
  { label: "Prodak Post", icon: "feed" },
  { label: "Prodak Message", icon: "messageShare" },
  { label: "Instagram Story", image: instagramLogo },
  { label: "WhatsApp", image: whatsappLogo },
  { label: "Copy Link", icon: "link" },
  { label: "Save", icon: "download" },
];

const postDestinations = [
  { id: "followers", name: "Your Followers", icon: "users" },
  { id: "hmif", name: "HMIF ITB Work Club", image: indomieLogo },
  { id: "gajah", name: "Gajah Lulumpatan", image: avatar },
  { id: "freerun", name: "Deep Work Bandung", image: landscapeItb },
  { id: "code", name: "Code Workers : IATB", icon: "club" },
];

function CustomShareCard({ activity }) {
  return (
    <div className="relative h-[280px] w-[168px] shrink-0 overflow-hidden rounded-[28px] bg-[var(--text)] text-white shadow-[var(--shadow-card)]">
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(45deg,rgba(255,255,255,.18)_25%,transparent_25%),linear-gradient(-45deg,rgba(255,255,255,.18)_25%,transparent_25%),linear-gradient(45deg,transparent_75%,rgba(255,255,255,.18)_75%),linear-gradient(-45deg,transparent_75%,rgba(255,255,255,.18)_75%)] [background-position:0_0,0_12px,12px_-12px,-12px_0] [background-size:24px_24px]" />
      <div className="relative flex h-full flex-col items-center px-5 py-5 text-center">
        <span className="self-start rounded-md border border-white/70 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-white/90">
          Prodak
        </span>

        <div className="mt-4">
          <p className="text-[10px] font-bold text-white/80">Duration</p>
          <p className="text-[23px] font-black leading-tight">{activity.duration}</p>
        </div>
        <div className="mt-2.5">
          <p className="text-[10px] font-bold text-white/80">Score</p>
          <p className="text-[23px] font-black leading-tight">{activity.focusScore}</p>
        </div>
        <div className="mt-2.5">
          <p className="text-[10px] font-bold text-white/80">Steps</p>
          <p className="text-[23px] font-black leading-tight">{activity.output}</p>
        </div>

        <svg className="mt-3 h-[72px] w-14 text-[var(--yellow)]" viewBox="0 0 64 96" fill="none" aria-hidden="true">
          <path
            d="M23 4C27 11 39 10 37 21C35 30 22 28 24 39C26 51 45 47 44 61C43 72 29 72 31 84C33 92 47 88 57 91"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="6"
          />
        </svg>

        <div className="prodak-mark mt-auto text-white" aria-label="Prodak">
          <span className="!h-6 !w-6 !border-white !border-r-[var(--blue)]" />
          <strong className="!text-[15px] !font-extrabold text-white">Prodak</strong>
        </div>
      </div>
    </div>
  );
}

function ImageShareCard({ src, alt }) {
  return (
    <div className="h-[280px] w-[168px] shrink-0 overflow-hidden rounded-[28px] bg-[var(--surface-muted)] shadow-[var(--shadow-card)]">
      <img className="h-full w-full object-cover" src={src} alt={alt} />
    </div>
  );
}

function DestinationAvatar({ destination }) {
  return (
    <span className="grid h-[66px] w-[66px] place-items-center overflow-hidden rounded-[12px] bg-[var(--surface-muted)] text-[var(--text)]">
      {destination.image ? (
        <img className="h-full w-full object-contain p-1.5" src={destination.image} alt="" />
      ) : (
        <Icon name={destination.icon} size={34} stroke={2} />
      )}
    </span>
  );
}

function PostToSheet({ onClose, onSelect }) {
  return (
    <div className="absolute inset-0 z-20 flex flex-col justify-end bg-black/12">
      <div className="rounded-t-[16px] bg-white px-6 pb-7 pt-3 shadow-[0_-10px_30px_rgba(15,23,42,0.12)]">
        <div className="mx-auto h-1.5 w-9 rounded-full bg-[var(--border)]" />
        <div className="between mt-6">
          <h2 className="text-[22px] font-black tracking-normal">Post to</h2>
          <button className="grid h-8 w-8 place-items-center text-[var(--text)]" onClick={onClose} type="button" aria-label="Close post destinations">
            <Icon name="cancel" size="lg" stroke={2} />
          </button>
        </div>

        <div className="-mx-2 mt-6 flex gap-5 overflow-x-auto px-2 pb-2">
          {postDestinations.map((destination) => (
            <button
              className="grid w-[82px] shrink-0 justify-items-center gap-3 text-center text-[13px] font-semibold leading-tight text-[var(--text)]"
              key={destination.id}
              onClick={() => onSelect(destination)}
              type="button"
            >
              <DestinationAvatar destination={destination} />
              <span className="line-clamp-2">{destination.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Share({ onNavigate, initialMessageSheet = false, initialMessageDetail = false }) {
  const activity = activities[0];
  const [showPostSheet, setShowPostSheet] = useState(false);
  const [showMessageSheet, setShowMessageSheet] = useState(initialMessageSheet);
  const [postDestination, setPostDestination] = useState(null);
  const [messageRecipient, setMessageRecipient] = useState(initialMessageDetail ? { id: "jane", name: "Jane Doe" } : null);

  if (messageRecipient) {
    return (
      <MessageDetail
        backLabel="Back"
        composeAttachment
        thread={{ ...messageThreads[0], name: messageRecipient.name }}
        onBack={() => setMessageRecipient(null)}
      />
    );
  }

  if (postDestination) {
    return (
      <PostComposer
        initialStep={1}
        headerTitle={postDestination.name}
        postingAs={{
          name: postDestination.name,
          image: postDestination.image,
          onChange: () => {
            setPostDestination(null);
            setShowPostSheet(true);
          },
        }}
        attachment={{
          image: mapPic,
          alt: "Activity route preview",
          title: "Focus Work",
          source: "PRODAK.APP",
        }}
        onClose={() => setPostDestination(null)}
        onPublish={() => onNavigate?.("feed")}
      />
    );
  }

  return (
    <main className="screen relative h-full overflow-hidden bg-white">
      <ActivityDetail onNavigate={onNavigate} />
      <ShareBottomSheet title="Share Activity" onClose={() => onNavigate?.("activityDetail")}>
        <div className="-mx-6 flex snap-x gap-5 overflow-x-auto px-[calc(50%-84px)] pb-3">
          <CustomShareCard activity={activity} />
          <ImageShareCard src={mapPic} alt="Map share preview" />
          <ImageShareCard src={landscapeItb} alt="Photo share preview" />
        </div>
        <div className="row justify-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--text-tertiary)]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--text)]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--divider)]" />
        </div>

        <ShareTargets
          className="mt-8"
          targets={prodakShareTargets}
          onSelect={(target) => {
            if (target.label === "Prodak Post") {
              setShowPostSheet(true);
            } else if (target.label === "Prodak Message") {
              setShowMessageSheet(true);
            }
          }}
        />

      {showPostSheet ? (
        <PostToSheet
          onClose={() => setShowPostSheet(false)}
          onSelect={(destination) => {
            setShowPostSheet(false);
            setPostDestination(destination);
          }}
        />
      ) : null}

      {showMessageSheet ? (
        <MessageRecipientSheet
          onClose={() => setShowMessageSheet(false)}
          onSelect={(recipient) => {
            if (recipient.id === "new") return;
            setShowMessageSheet(false);
            setMessageRecipient(recipient);
          }}
        />
      ) : null}
      </ShareBottomSheet>
    </main>
  );
}
