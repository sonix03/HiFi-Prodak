import Icon from "./Icon";
import CircleTarget from "./CircleTarget";

function DestinationAvatar({ destination }) {
  return (
    <span className="grid h-[66px] w-[66px] place-items-center overflow-hidden rounded-[12px] bg-[var(--surface-muted)] text-[var(--text)]">
      {destination.image ? (
        <img className="h-full w-full object-contain p-1.5" src={destination.image} alt="" />
      ) : (
        <Icon name={destination.icon} size={34} stroke={2} />
      )}
    </span>
  );
}

export default function DestinationSheet({ title = "Post to", destinations, onClose, onSelect, useCircle = false }) {
  return (
    <div className="absolute inset-0 z-50 flex flex-col justify-end bg-black/12">
      <div className="rounded-t-[16px] bg-white px-6 pb-7 pt-3 shadow-[0_-10px_30px_rgba(15,23,42,0.12)]">
        <div className="mx-auto h-1.5 w-9 rounded-full bg-[var(--border)]" />
        <div className="between mt-6">
          <h2 className="text-[22px] font-black tracking-normal">{title}</h2>
          <button className="grid h-8 w-8 place-items-center text-[var(--text)]" onClick={onClose} type="button" aria-label={`Close ${title}`}>
            <Icon name="cancel" size="lg" stroke={2} />
          </button>
        </div>

        <div className="-mx-2 mt-6 flex gap-5 overflow-x-auto px-2 pb-2">
          {destinations.map((item) =>
            useCircle ? (
              <CircleTarget item={item} key={item.id} onClick={() => onSelect(item)} />
            ) : (
              <button
                className="grid w-[82px] shrink-0 justify-items-center gap-3 text-center text-[13px] font-semibold leading-tight text-[var(--text)]"
                key={item.id}
                onClick={() => onSelect(item)}
                type="button"
              >
                <DestinationAvatar destination={item} />
                <span className="line-clamp-2">{item.name}</span>
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
}
