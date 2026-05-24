import Icon from "./Icon";

export default function CircleTarget({ item, rounded = "rounded-[12px]", onClick }) {
  return (
    <button className="grid w-[82px] shrink-0 justify-items-center gap-3 text-center text-[13px] font-semibold leading-tight text-[var(--text)]" onClick={onClick} type="button">
      {item.image ? (
        <img className={`h-[66px] w-[66px] ${rounded} object-cover`} src={item.image} alt="" />
      ) : (
        <span className="grid h-[66px] w-[66px] place-items-center rounded-full bg-[var(--surface-muted)] text-[var(--text)]">
          <Icon name={item.icon} size={rounded === "rounded-full" ? 38 : 34} stroke={2} />
        </span>
      )}
      <span className="line-clamp-2 whitespace-pre-line">{item.name}</span>
    </button>
  );
}
