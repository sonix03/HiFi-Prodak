import Icon from "./Icon";
import instagramLogo from "../assets/instagram-logo.png";
import whatsappLogo from "../assets/whatsapp-logo.png";

const defaultTargets = [
  { label: "Instagram Story", image: instagramLogo },
  { label: "WhatsApp", image: whatsappLogo },
  { label: "Copy to Clipboard", icon: "copy" },
  { label: "Save", icon: "download" },
  { label: "Copy Link", icon: "copy" },
  { label: "More", icon: "share" },
];

export default function ShareTargets({ targets = defaultTargets, className = "" }) {
  return (
    <section className={className}>
      <h2 className="section-title">Share to</h2>
      <div className="mt-5 grid grid-cols-4 gap-x-3 gap-y-5">
        {targets.map((item) => (
          <button
            className="grid justify-items-center gap-2 text-center text-[9px] font-semibold leading-[1.15] text-[var(--text)]"
            key={item.label}
            type="button"
          >
            <span className="grid h-14 w-14 place-items-center rounded-full bg-[var(--surface-muted)] text-[var(--text)]">
              {item.image ? (
                <img className="h-11 w-11 object-contain" src={item.image} alt={item.label} />
              ) : (
                <Icon name={item.icon} size="lg" />
              )}
            </span>
            <span>{item.label}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
