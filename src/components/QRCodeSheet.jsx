import Avatar from "./Avatar";
import Icon from "./Icon";

const qrCells = Array.from({ length: 21 * 21 }, (_, index) => {
  const row = Math.floor(index / 21);
  const col = index % 21;
  const inFinder =
    (row < 7 && col < 7) ||
    (row < 7 && col > 13) ||
    (row > 13 && col < 7);

  if (inFinder) {
    const localRow = row > 13 ? row - 14 : row;
    const localCol = col > 13 ? col - 14 : col;
    const isOuter = localRow === 0 || localRow === 6 || localCol === 0 || localCol === 6;
    const isInner = localRow >= 2 && localRow <= 4 && localCol >= 2 && localCol <= 4;
    return isOuter || isInner;
  }

  const centerLogo = row >= 9 && row <= 12 && col >= 9 && col <= 12;
  if (centerLogo) return false;

  return (row * 7 + col * 11 + row * col) % 5 < 2 || (row + col) % 11 === 0;
});

function QRPreview() {
  return (
    <div className="relative mx-auto grid h-[232px] w-[232px] grid-cols-[repeat(21,minmax(0,1fr))] gap-1 bg-white p-1">
      {qrCells.map((active, index) => (
        <span
          className={active ? "rounded-[1px] bg-[var(--blue)]" : "rounded-[1px] bg-transparent"}
          key={index}
        />
      ))}
      <span className="absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-xl bg-white shadow-[0_8px_18px_rgba(15,23,42,0.08)]">
        <span className="block h-5 w-5 rounded-full border-[5px] border-[var(--text)] border-r-[var(--blue)]" />
      </span>
    </div>
  );
}

export default function QRCodeSheet({ user, onDone }) {
  return (
    <>
      <div className="absolute inset-0 z-40 bg-black/35" />
      <section className="absolute inset-x-0 bottom-0 z-50 h-[calc(100%-48px)] overflow-hidden rounded-t-[26px] bg-white shadow-[0_-18px_44px_rgba(15,23,42,0.18)]">
        <header className="grid h-[58px] grid-cols-3 items-center bg-white px-6 shadow-[var(--shadow-header)]">
          <span aria-hidden="true" />
          <h1 className="text-center text-[18px] font-extrabold text-[var(--text)]">QR Code</h1>
          <button
            className="justify-self-end text-[16px] font-bold text-[var(--blue)]"
            onClick={onDone}
          >
            Done
          </button>
        </header>

        <div className="flex h-[calc(100%-58px)] flex-col items-center justify-center px-7 pb-14 text-center">
          <div className="flex justify-center">
            <Avatar user={user} size="lg" tone="neutral" />
          </div>
          <h2 className="mx-auto mt-9 max-w-[310px] text-[34px] font-black leading-[1.18] tracking-normal text-[var(--text)]">
            Scan to follow {user.name}
          </h2>

          <div className="mt-11">
            <QRPreview />
          </div>

          <button className="mx-auto mt-9 inline-flex h-10 items-center gap-2 rounded-full bg-[var(--blue-soft)] px-5 text-[13px] font-extrabold text-[var(--blue)]">
            <Icon name="link" size="sm" />
            Copy Link
          </button>
        </div>
      </section>
    </>
  );
}
