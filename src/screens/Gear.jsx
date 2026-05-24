import { useState } from "react";
import Icon from "../components/Icon";
import OptionBottomSheet from "../components/OptionBottomSheet";
import SectionHeader from "../components/SectionHeader";

const gearItems = [
  {
    brand: "Tumi",
    jobType: "Designer",
    model: "Alpha Bravo",
    name: "Tumi Alpha Bravo",
    typeName: "Bag",
    type: "Work bag",
    usage: "238 hours",
  },
];

const shoeItems = [
  {
    brand: "Adidas",
    defaultSports: "Run",
    model: "Evo SL",
    name: "Adidas Evo SL",
    typeName: "Shoes",
    type: "Run shoes",
    usage: "238 kilometers",
  },
];

function GearRow({ title, meta, value, onClick }) {
  return (
    <button className="w-full border-b border-[var(--divider)] bg-white px-7 py-4 text-left last:border-b-0" onClick={onClick} type="button">
      <div className="between min-h-7 gap-4">
        <div className="min-w-0">
          <p className="truncate text-[15px] font-semibold text-[var(--text)]">{title}</p>
          <p className="mt-1 truncate text-[12px] font-medium text-[var(--text-secondary)]">{meta}</p>
        </div>
        <p className="shrink-0 text-right text-[15px] font-semibold text-[var(--text)]">{value}</p>
      </div>
    </button>
  );
}

function DetailRow({ label, value }) {
  return (
    <div className="border-b border-[var(--divider)] py-4 last:border-b-0">
      <p className="text-[18px] font-extrabold leading-tight text-[var(--text)]">{label}</p>
      <p className="mt-1 text-[15px] font-medium leading-tight text-[var(--text)]">{value}</p>
    </div>
  );
}

export default function Gear({ onNavigate }) {
  const [selectedGear, setSelectedGear] = useState(null);

  return (
    <main className="screen relative bg-white">
      <header className="sticky top-0 z-20 grid h-[64px] grid-cols-3 items-center bg-white px-6 shadow-[var(--shadow-header)]">
        <button
          className="row justify-self-start gap-2 text-[16px] font-semibold text-[var(--text)]"
          onClick={() => onNavigate?.("profile")}
          type="button"
        >
          <Icon name="arrowLeft" size={22} />
          Profile
        </button>
        <h1 className="text-center text-[18px] font-extrabold text-[var(--text)]">Your Gear</h1>
        <button
          aria-label="Add gear"
          className="grid h-10 w-10 place-items-center justify-self-end text-[var(--text)]"
          onClick={() => onNavigate?.("addGear")}
          type="button"
        >
          <Icon name="plus" size={28} stroke={2} />
        </button>
      </header>

      <section className="section px-6">
        <SectionHeader title="Bags" meta="1 item" />
        <div className="mt-3 overflow-hidden rounded-xl border border-[var(--divider)] bg-white">
          {gearItems.map((item) => (
            <GearRow
              key={item.name}
              meta={item.type}
              onClick={() => setSelectedGear(item)}
              title={item.name}
              value={item.usage}
            />
          ))}
        </div>

        <div className="mt-6">
          <SectionHeader title="Shoes" meta="1 item" />
          <div className="mt-3 overflow-hidden rounded-xl border border-[var(--divider)] bg-white">
            {shoeItems.map((item) => (
              <GearRow
                key={item.name}
                meta={item.type}
                onClick={() => setSelectedGear(item)}
                title={item.name}
                value={item.usage}
              />
            ))}
          </div>
        </div>
      </section>

      {selectedGear ? (
        <OptionBottomSheet title={selectedGear.name} onClose={() => setSelectedGear(null)}>
          <div>
            <DetailRow label="Brand" value={selectedGear.brand} />
            <DetailRow label="Model" value={selectedGear.model} />
            <DetailRow label={selectedGear.defaultSports ? "Mileage" : "Usage"} value={selectedGear.usage} />
            <DetailRow
              label={selectedGear.defaultSports ? "Default Sports" : "Jenis Pekerjaan"}
              value={selectedGear.defaultSports || selectedGear.jobType}
            />

            <button
              className="mt-7 h-12 w-full rounded-xl bg-[var(--danger)] text-[15px] font-extrabold text-white"
              type="button"
            >
              Retire {selectedGear.defaultSports ? "Shoes" : "Bag"}
            </button>
            <button
              className="mt-4 h-12 w-full rounded-xl bg-[var(--yellow)] text-center text-[15px] font-extrabold text-[var(--text)]"
              onClick={() => onNavigate?.("editGear", selectedGear)}
              type="button"
            >
              Edit {selectedGear.defaultSports ? "Shoes" : "Bag"}
            </button>
          </div>
        </OptionBottomSheet>
      ) : null}
    </main>
  );
}
