import { useState } from "react";
import FormField, { SelectField } from "../components/FormField";
import Icon from "../components/Icon";
import OptionBottomSheet from "../components/OptionBottomSheet";
import VisibilityField from "../components/VisibilityField";

const gearTypes = ["Bag", "Laptop sleeve", "Organizer"];
const jobTypes = ["Designer", "Engineer", "Researcher", "Founder"];
const brands = ["Tumi", "Bellroy", "Peak Design", "Samsonite"];
const notifyOptions = ["700 hours", "500 hours", "1,000 hours"];

function getInitialIndex(options, value) {
  const index = options.findIndex((item) => item === value);
  return index >= 0 ? index : 0;
}

export default function AddGear({ gear, mode = "add", onNavigate }) {
  const isEdit = mode === "edit";
  const [typeIndex, setTypeIndex] = useState(getInitialIndex(gearTypes, gear?.defaultSports ? "Shoes" : gear?.typeName));
  const [jobIndex, setJobIndex] = useState(getInitialIndex(jobTypes, gear?.jobType));
  const [brandIndex, setBrandIndex] = useState(getInitialIndex(brands, gear?.brand));
  const [notifyIndex, setNotifyIndex] = useState(0);
  const [sheet, setSheet] = useState(null);
  const modelPlaceholder = gear?.defaultSports ? "Model shoes" : "Model tas";

  return (
    <main className="screen bg-white">
      <header className="sticky top-0 z-20 grid h-[64px] grid-cols-3 items-center bg-white px-6 shadow-[var(--shadow-header)]">
        <button
          className="row justify-self-start gap-2 text-[16px] font-semibold text-[var(--text)]"
          onClick={() => onNavigate?.("gear")}
          type="button"
        >
          <Icon name="arrowLeft" size={22} />
          Your Gear
        </button>
        <h1 className="text-center text-[18px] font-extrabold text-[var(--text)]">{isEdit ? "Edit Gear" : "Add Gear"}</h1>
        <button
          className="justify-self-end text-[16px] font-semibold text-[var(--blue)]"
          onClick={() => onNavigate?.("gear")}
          type="button"
        >
          Save
        </button>
      </header>

      <section className="px-6 py-5">
        <div className="stack gap-4">
          <SelectField label="Type" onOpen={() => setSheet("type")} value={gearTypes[typeIndex]} />
          <SelectField label="Jenis Pekerjaan" onOpen={() => setSheet("job")} value={jobTypes[jobIndex]} />
          <SelectField label="Brand" onOpen={() => setSheet("brand")} value={brands[brandIndex]} />
          <FormField label="Model" placeholder={modelPlaceholder} defaultValue={gear?.model || "Alpha Bravo"} />
          <FormField label="Nickname" placeholder="Nickname" defaultValue={isEdit ? gear?.name : undefined} />
          <FormField label="Notes" textarea placeholder="Notes" defaultValue={isEdit ? `${gear?.name} for daily work sessions.` : undefined} />
          <VisibilityField
            options={[
              { label: "Off", icon: "cancel" },
              { label: "On", icon: "check" },
            ]}
            selectedIndex={0}
            onSelect={() => {}}
            className="!mt-2"
          />
          <SelectField
            label="Notify me when I have reached"
            onOpen={() => setSheet("notify")}
            value={notifyOptions[notifyIndex]}
          />
        </div>
      </section>

      {sheet === "type" ? (
        <OptionBottomSheet
          closeLabel="Done"
          options={gearTypes}
          onClose={() => setSheet(null)}
          onSelect={(index) => {
            setTypeIndex(index);
            setSheet(null);
          }}
          selectedIndex={typeIndex}
          title="Type"
        />
      ) : null}

      {sheet === "job" ? (
        <OptionBottomSheet
          closeLabel="Done"
          options={jobTypes}
          onClose={() => setSheet(null)}
          onSelect={(index) => {
            setJobIndex(index);
            setSheet(null);
          }}
          selectedIndex={jobIndex}
          title="Jenis Pekerjaan"
        />
      ) : null}

      {sheet === "brand" ? (
        <OptionBottomSheet
          closeLabel="Done"
          options={brands}
          onClose={() => setSheet(null)}
          onSelect={(index) => {
            setBrandIndex(index);
            setSheet(null);
          }}
          selectedIndex={brandIndex}
          title="Brand"
        />
      ) : null}

      {sheet === "notify" ? (
        <OptionBottomSheet
          closeLabel="Done"
          options={notifyOptions}
          onClose={() => setSheet(null)}
          onSelect={(index) => {
            setNotifyIndex(index);
            setSheet(null);
          }}
          selectedIndex={notifyIndex}
          title="Notify me when I have reached"
        />
      ) : null}
    </main>
  );
}
