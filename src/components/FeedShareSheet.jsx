import { useState } from "react";
import Icon from "./Icon";
import CircleTarget from "./CircleTarget";
import NewMessageSheet from "./NewMessageSheet";
import { messageRecipients, postDestinations } from "../constants/data";

export default function FeedShareSheet({ onClose, onNavigate }) {
  const [copied, setCopied] = useState(false);
  const [showNewMessage, setShowNewMessage] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard?.writeText("https://prodak.app/activity/1");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSend = (recipient) => {
    if (recipient.id === "jane") {
      onClose();
      onNavigate?.("share", { initialMessageDetail: true });
    } else if (recipient.id === "new") {
      setShowNewMessage(true);
    }
  };

  const handlePost = (target) => {
    onClose();
    onNavigate?.("createPost", { postingAs: target, initialStep: 1 });
  };

  if (showNewMessage) {
    return (
      <NewMessageSheet
        onClose={() => setShowNewMessage(false)}
        onCreate={() => { onClose(); onNavigate?.("messageDetail"); }}
      />
    );
  }

  return (
    <div className="absolute inset-0 z-50 flex flex-col justify-end bg-black/12">
      <div className="max-h-[82%] overflow-y-auto rounded-t-[16px] bg-white px-6 pb-9 pt-3 shadow-[0_-10px_30px_rgba(15,23,42,0.12)]">
        <div className="mx-auto h-1.5 w-9 rounded-full bg-[var(--border)]" />

        <div className="between mt-6">
          <h2 className="text-[22px] font-black tracking-normal">Send to</h2>
          <button className="grid h-8 w-8 place-items-center text-[var(--text)]" onClick={onClose} type="button" aria-label="Close feed share">
            <Icon name="cancel" size="lg" stroke={2} />
          </button>
        </div>

        <div className="-mx-2 mt-6 flex gap-6 overflow-x-auto px-2 pb-2">
          {messageRecipients.map((recipient) => (
            <CircleTarget
              item={recipient}
              key={recipient.id}
              rounded="rounded-full"
              onClick={() => handleSend(recipient)}
            />
          ))}
        </div>

        <h2 className="mt-6 text-[22px] font-black tracking-normal">Post to</h2>
        <div className="-mx-2 mt-6 flex gap-5 overflow-x-auto px-2 pb-7">
          {postDestinations.map((target) => (
            <CircleTarget item={target} key={target.id} onClick={() => handlePost(target)} />
          ))}
        </div>

        <div className="border-t border-[var(--border)] pt-7">
          <div className="flex gap-7">
            <button className="grid w-[82px] justify-items-center gap-3 text-center text-[13px] font-semibold text-[var(--text)]" type="button">
              <span className="grid h-[66px] w-[66px] place-items-center rounded-full bg-[var(--surface-muted)]">
                <Icon name="share" size={34} stroke={2} />
              </span>
              Share To
            </button>
            <button className="grid w-[82px] justify-items-center gap-3 text-center text-[13px] font-semibold text-[var(--text)]" onClick={handleCopyLink} type="button">
              <span className="grid h-[66px] w-[66px] place-items-center rounded-full bg-[var(--surface-muted)]">
                <Icon name={copied ? "check" : "link"} size={34} stroke={copied ? 2 : "regular"} />
              </span>
              {copied ? "Copied!" : "Copy Link"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
