export default function Map({ className, alt = "Map image placeholder", ...props }) {
  return (
    <img
      src="src/assets/map.png"
      alt={alt}
      className={className}
      {...props}
    />
  );
}