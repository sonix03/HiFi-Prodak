import { useState } from "react";
import ShareBottomSheet from "../components/ShareBottomSheet";
import ShareTargets from "../components/ShareTargets";
import MessageRecipientSheet from "../components/MessageRecipientSheet";
import DestinationSheet from "../components/DestinationSheet";
import PostComposer from "../components/PostComposer";
import { CustomShareCard, ImageShareCard } from "../components/ShareCard";
import ActivityDetail from "./ActivityDetail";
import MessageDetail from "./MessageDetail";
import mapPic from "../assets/map-pic.png";
import landscapeItb from "../assets/landscape-itb.png";
import { activities, messageThreads, prodakShareTargets, postDestinations } from "../constants/data";

export default function Share({ onNavigate, onBack, initialMessageSheet = false, initialMessageDetail = false }) {
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
        onBack={() => initialMessageDetail ? onBack?.() : setMessageRecipient(null)}
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

  if (initialMessageSheet && showMessageSheet && !messageRecipient) {
    return (
      <main className="screen relative h-full overflow-hidden bg-white">
        <ActivityDetail onNavigate={onNavigate} />
        <MessageRecipientSheet
          onClose={() => onBack?.()}
          onSelect={(recipient) => {
            if (recipient.id === "new") return;
            setShowMessageSheet(false);
            setMessageRecipient(recipient);
          }}
        />
      </main>
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
        <DestinationSheet
          destinations={postDestinations}
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
