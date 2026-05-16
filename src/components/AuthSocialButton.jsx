export default function AuthSocialButton({ logo, label }) {
  return (
    <button className="relative h-12 w-full rounded-xl border border-[var(--text)] bg-white px-4 text-sm font-semibold shadow-sm">
      <span className="absolute left-4 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-lg">
        <img className="h-5 w-5 object-contain" src={logo} alt="" />
      </span>
      <span className="block text-center">{label}</span>
    </button>
  );
}
