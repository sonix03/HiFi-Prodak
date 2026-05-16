import { useState } from "react";
import ActivityMap from "../components/ActivityMap";
import Button from "../components/Button";
import ChangeMapType from "../components/ChangeMapType";
import FeelingField from "../components/FeelingField";
import FormField, { SelectField } from "../components/FormField";
import HiddenDetailsField, { HiddenDetailsBottomSheet } from "../components/HiddenDetailsField";
import OptionBottomSheet, {
  FeelingBottomSheet,
} from "../components/OptionBottomSheet";
import ScreenHeader from "../components/ScreenHeader";
import VisibilityField from "../components/VisibilityField";
import mapPic from "../assets/map-pic.png";
import landscapeItb from "../assets/landscape-itb.png";
import { activities } from "../constants/data";

const activityTypes = [
  { label: "Deep Work", icon: "target" },
  { label: "Studying", icon: "book" },
];

const activityTags = [
  { label: "Design" },
  { label: "Writing" },
  { label: "Learning" },
  { label: "Research" },
  { label: "Meeting" },
  { label: "Coding" },
];

const feelingLevels = ["Easy", "Moderate", "Max Effort"];

const visibilityOptions = [
  { label: "Public", icon: "globe" },
  { label: "Followers", icon: "users" },
  { label: "Private", icon: "lock" },
];

export default function SaveActivity({ onNavigate }) {
  const [selectedActivityType, setSelectedActivityType] = useState(0);
  const [selectedTag, setSelectedTag] = useState(0);
  const [selectedVisibility, setSelectedVisibility] = useState(0);
  const [hiddenDetails, setHiddenDetails] = useState({
    time: false,
    steps: false,
    focusScore: false,
  });
  const [selectedFeeling, setSelectedFeeling] = useState(1);

  const [showActivityTypeSheet, setShowActivityTypeSheet] = useState(false);
  const [showTagSheet, setShowTagSheet] = useState(false);
  const [showFeelingSheet, setShowFeelingSheet] = useState(false);
  const [showHiddenDetailsSheet, setShowHiddenDetailsSheet] = useState(false);

  const activity = activities[0];
  const toggleHiddenDetail = (key) => {
    setHiddenDetails((current) => ({ ...current, [key]: !current[key] }));
  };

  return (
    <main className="screen screen-pad flex flex-col relative" style={{ paddingBottom: "20px" }}>
      <ScreenHeader
        mode="form"
        onBack={() => onNavigate?.("record")}
        title="Save activity"
        right={null}
      />

      <div className="flex-1 overflow-y-auto pb-4 pt-2">
        <div className="stack gap-4">
          <FormField label="Title" defaultValue={activity.title} />

          <FormField label="Description" textarea defaultValue={activity.caption} />

          <SelectField
            icon={activityTypes[selectedActivityType].icon}
            label="Jenis Kegiatan"
            onOpen={() => setShowActivityTypeSheet(true)}
            value={activityTypes[selectedActivityType].label}
          />

          <div className="flex gap-3">
            <div className="flex-1 overflow-hidden rounded-xl border border-[var(--blue)]">
              <ActivityMap height={120} imageSrc={mapPic} />
            </div>
            <div className="flex-1 overflow-hidden rounded-xl border border-[var(--border)]">
              <img className="h-[120px] w-full object-cover" src={landscapeItb} alt="" />
            </div>
          </div>

          <ChangeMapType />

          <div className="mt-2">
            <p className="mb-2 font-semibold text-[var(--text)]">Details</p>

            <SelectField
              label="Activity tag"
              onOpen={() => setShowTagSheet(true)}
              value={activityTags[selectedTag].label}
            />

            <FeelingField
              value={feelingLevels[selectedFeeling]}
              onOpen={() => setShowFeelingSheet(true)}
            />
          </div>

          <div className="mt-2">
            <p className="mb-2 font-semibold text-[var(--text)]">Visibility</p>

            <VisibilityField
              options={visibilityOptions}
              selectedIndex={selectedVisibility}
              onSelect={setSelectedVisibility}
            />

            <HiddenDetailsField
              value={hiddenDetails}
              onOpen={() => setShowHiddenDetailsSheet(true)}
            />
          </div>

          <button
            className="mt-2 text-center text-sm font-semibold text-[var(--red)]"
            onClick={() => onNavigate?.("record")}
          >
            Discard Activity
          </button>
        </div>
      </div>

      <div className="border-t border-[var(--divider)] bg-white py-3">
        <Button className="w-full" onClick={() => onNavigate?.("feed")}>
          Save Activity
        </Button>
      </div>

      {showActivityTypeSheet && (
        <OptionBottomSheet
          title="Jenis Kegiatan"
          options={activityTypes}
          selectedIndex={selectedActivityType}
          onClose={() => setShowActivityTypeSheet(false)}
          onSelect={(index) => {
            setSelectedActivityType(index);
            setShowActivityTypeSheet(false);
          }}
        />
      )}

      {showTagSheet && (
        <OptionBottomSheet
          title="Activity tag"
          options={activityTags}
          selectedIndex={selectedTag}
          variant="pills"
          onClose={() => setShowTagSheet(false)}
          onSelect={(index) => {
            setSelectedTag(index);
            setShowTagSheet(false);
          }}
        />
      )}

      {showFeelingSheet && (
        <FeelingBottomSheet
          levels={feelingLevels}
          selectedIndex={selectedFeeling}
          onClose={() => setShowFeelingSheet(false)}
          onSelect={setSelectedFeeling}
        />
      )}

      {showHiddenDetailsSheet && (
        <HiddenDetailsBottomSheet
          value={hiddenDetails}
          onClose={() => setShowHiddenDetailsSheet(false)}
          onToggle={toggleHiddenDetail}
        />
      )}

    </main>
  );
}
