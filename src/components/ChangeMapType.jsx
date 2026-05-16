export default function ChangeMapType({ onClick }) {
  return (
    <button
      className="w-full rounded-[20px] border border-[var(--blue)] py-2 text-center text-sm font-semibold text-[var(--blue)]"
      onClick={onClick}
    >
      Change Map Type
    </button>
  );
}