import Icon from "./Icon";

export default function ShareBottomSheet({ title, onClose, children }) {
  return (
    <div className="absolute inset-0 z-50 flex flex-col justify-end bg-black/35">
      <div className="absolute inset-x-0 bottom-0 max-h-[92%] overflow-hidden rounded-t-[18px] bg-white shadow-[0_-14px_40px_rgba(15,23,42,0.18)]">
        <div className="mx-auto mt-3 h-1.5 w-10 rounded-full bg-[var(--border)]" />
        <header className="relative border-b border-[var(--divider)] bg-white px-6 py-5">
          <button className="absolute left-6 top-1/2 -translate-y-1/2 text-sm font-semibold text-[var(--blue)]" onClick={onClose} type="button">
            Close
          </button>
          <h1 className="text-center text-[20px] font-black tracking-normal">{title}</h1>
          <button className="absolute right-5 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center text-[var(--text)]" onClick={onClose} type="button" aria-label={`Close ${title}`}>
            <Icon name="cancel" size="lg" stroke={2} />
          </button>
        </header>
        <div className="max-h-[calc(844px*0.92-76px)] overflow-y-auto px-6 py-8">
          {children}
        </div>
      </div>
    </div>
  );
}
