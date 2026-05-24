import { useState } from "react";
import PostComposer from "../components/PostComposer";
import DestinationSheet from "../components/DestinationSheet";
import { postDestinations } from "../constants/data";
import mapPic from "../assets/map-pic.png";

export default function CreatePost({ onNavigate, initialStep = 0, postingAs: initialAccount }) {
  const [postingAs, setPostingAs] = useState(initialAccount || null);
  const [showAccounts, setShowAccounts] = useState(false);

  return (
    <>
      <PostComposer
        initialStep={initialStep}
        postingAs={postingAs ? { ...postingAs, onChange: () => setShowAccounts(true) } : undefined}
        attachment={postingAs ? { image: mapPic, alt: "Activity route preview", title: "Focus Work", source: "PRODAK.APP" } : undefined}
        onClose={() => onNavigate?.("feed")}
        onPublish={() => onNavigate?.("feed")}
      />
      {showAccounts ? (
        <DestinationSheet
          title="Post to"
          destinations={postDestinations}
          onClose={() => setShowAccounts(false)}
          onSelect={(acc) => {
            setPostingAs(acc);
            setShowAccounts(false);
          }}
        />
      ) : null}
    </>
  );
}
