export default function Logo({ className, alt = "PRODAK logo", ...props }) {
  return (
    <img
      src="/favicon.svg"
      alt={alt}
      className={className}
      {...props}
    />
  );
}
