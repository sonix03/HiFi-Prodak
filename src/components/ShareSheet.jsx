import { useState } from "react";
import Icon from "./Icon";
import MessageRecipientSheet from "./MessageRecipientSheet";
import MessageDetail from "../screens/MessageDetail";
import instagramLogo from "../assets/instagram-logo.png";
import whatsappLogo from "../assets/whatsapp-logo.png";
import { messageThreads } from "../constants/data";

const destinations = [
  { label: "Instagram Story", image: instagramLogo },
  { label: "Instagram Message", image: instagramLogo },
  { label: "WhatsApp", image: whatsappLogo },
  { label: "Message", icon: "comment" },
  { label: "Prodak Message", icon: "users" },
  { label: "Prodak Post", icon: "feed" },
  { label: "Copy Link", icon: "link" },
  { label: "More", icon: "more" },
];

export default function ShareSheet({ onClose, onShare, media }) {
  const [showMessages, setShowMessages] = useState(false);
  const [messageRecipient, setMessageRecipient] = useState(null);

  if (messageRecipient) {
    return (
      <div className="absolute inset-0 z-50 bg-white">
        <MessageDetail
          backLabel="Back"
          bottomInset
          composeAttachment
          thread={{ ...messageThreads[0], name: messageRecipient.name }}
          onBack={() => setMessageRecipient(null)}
        />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 z-50">
      <div className="absolute inset-0 bg-black/30" onClick={onClose} />
      <div className="absolute inset-x-0 bottom-0 max-h-[90vh] overflow-y-auto rounded-t-3xl bg-white p-6">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold">Share Activity</h3>
          <button onClick={onClose}>
            <Icon name="cancel" size={24} stroke={2} />
          </button>
        </div>

        {media && media.length > 0 && (
          <>
            <div className="mx-auto mb-3 flex justify-center gap-2">
              {media.map((item, index) => (
                <span
                  key={index}
                  className={`h-1.5 w-1.5 rounded-full ${index === 0 ? "bg-[var(--text)]" : "bg-[var(--divider)]"}`}
                />
              ))}
            </div>
            <div className="mx-auto mb-4 h-[180px] w-[120px] overflow-hidden rounded-[20px] bg-[var(--surface-muted)]">
              {media[0]?.src && (
                <img className="h-full w-full object-cover" src={media[0].src} alt="Share preview" />
              )}
            </div>
          </>
        )}

        <div className="grid grid-cols-4 gap-x-3 gap-y-5">
          {destinations.map((item) => (
            <button
              className="grid justify-items-center gap-2 text-center text-[10px] font-medium text-[var(--text-secondary)]"
              key={item.label}
              onClick={() => {
                if (item.label === "Prodak Message") {
                  setShowMessages(true);
                  return;
                }

                onShare?.();
              }}
            >
              <span className="grid h-10 w-10 place-items-center rounded-full border border-[var(--border)] bg-white text-[var(--text)]">
                {item.image ? (
                  <img className="h-7 w-7 object-contain" src={item.image} alt={item.label} />
                ) : (
                  <Icon name={item.icon} size="md" />
                )}
              </span>
              <span className="font-bold">{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      {showMessages ? (
        <MessageRecipientSheet
          onClose={() => setShowMessages(false)}
          onSelect={(recipient) => {
            if (recipient.id === "new") return;
            setShowMessages(false);
            setMessageRecipient(recipient);
          }}
        />
      ) : null}
    </div>
  );
}
