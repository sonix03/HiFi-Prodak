import videoSrc from "../assets/login_page_video.mp4";

export default function VideoHero({ children }) {
  return (
    <section className="video-hero">
      <video autoPlay muted loop playsInline preload="metadata">
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div className="video-hero-content">{children}</div>
    </section>
  );
}
