export default function Card({ children, className = "", padded = true, interactive = false }) {
  return (
    <article className={`card ${padded ? "card-pad" : ""} ${interactive ? "transition active:scale-[0.99]" : ""} ${className}`}>
      {children}
    </article>
  );
}
