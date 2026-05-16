import { useState } from "react";
import ActivityMap from "../components/ActivityMap";
import Button from "../components/Button";
import ChangeMapType from "../components/ChangeMapType";
import Icon from "../components/Icon";
import ScreenHeader from "../components/ScreenHeader";
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

const hiddenDetailsOptions = [
  "Show all details",
  "Hide time",
  "Hide output",
  "Hide focus score",
  "Hide all",
];

export default function SaveActivity({ onNavigate }) {
  const [selectedActivityType, setSelectedActivityType] = useState(0);
  const [selectedTag, setSelectedTag] = useState(0);
  const [selectedVisibility, setSelectedVisibility] = useState(0);
  const [selectedHiddenDetails, setSelectedHiddenDetails] = useState(0);
  const [selectedFeeling, setSelectedFeeling] = useState(1);

  const [showActivityTypeSheet, setShowActivityTypeSheet] = useState(false);
  const [showTagSheet, setShowTagSheet] = useState(false);
  const [showFeelingSheet, setShowFeelingSheet] = useState(false);
  const [showHiddenDetailsSheet, setShowHiddenDetailsSheet] = useState(false);

  const activity = activities[0];

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
          <div className="form-field">
            <label>Title</label>
            <input className="input" defaultValue={activity.title} />
          </div>

          <div className="form-field">
            <label>Description</label>
            <textarea className="textarea" defaultValue={activity.caption} />
          </div>

          <div className="form-field">
            <label>Jenis Kegiatan</label>
            <button
              className="input flex items-center justify-between"
              onClick={() => setShowActivityTypeSheet(true)}
            >
              <span className="flex items-center gap-2">
                <Icon name={activityTypes[selectedActivityType].icon} size="sm" className="text-[var(--blue)]" />
                {activityTypes[selectedActivityType].label}
              </span>
              <Icon name="dropdown" size="sm" className="text-[var(--text-tertiary)]" />
            </button>
          </div>

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

            <div className="form-field">
              <label>Activity tag</label>
              <button
                className="input flex items-center justify-between"
                onClick={() => setShowTagSheet(true)}
              >
                <span>{activityTags[selectedTag].label}</span>
                <Icon name="dropdown" size="sm" className="text-[var(--text-tertiary)]" />
              </button>
            </div>

            <div className="form-field">
              <label>How did that activity feel</label>
              <button
                className="input flex items-center justify-between"
                onClick={() => setShowFeelingSheet(true)}
              >
                <span>{feelingLevels[selectedFeeling]}</span>
                <Icon name="dropdown" size="sm" className="text-[var(--text-tertiary)]" />
              </button>
            </div>
          </div>

          <div className="mt-2">
            <p className="mb-2 font-semibold text-[var(--text)]">Visibility</p>

            <div className="form-field">
              <label>Who can view</label>
              <div className="flex gap-2">
                {visibilityOptions.map((item, index) => (
                  <button
                    key={item.label}
                    className={`flex flex-1 items-center justify-center gap-2 rounded-xl border px-3 py-2 text-xs font-medium transition ${
                      selectedVisibility === index
                        ? "border-[var(--blue)] bg-[var(--blue-soft)] text-[var(--blue)]"
                        : "border-[var(--border)] text-[var(--text-secondary)]"
                    }`}
                    onClick={() => setSelectedVisibility(index)}
                  >
                    <Icon name={item.icon} size="sm" />
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="form-field">
              <label>Hidden details</label>
              <button
                className="input flex items-center justify-between"
                onClick={() => setShowHiddenDetailsSheet(true)}
              >
                <span>{hiddenDetailsOptions[selectedHiddenDetails]}</span>
                <Icon name="dropdown" size="sm" className="text-[var(--text-tertiary)]" />
              </button>
            </div>
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
        <div className="absolute inset-0 z-50">
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-x-0 bottom-0 flex items-end">
          <div className="w-full rounded-t-3xl bg-white p-6">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-lg font-semibold">Jenis Kegiatan</h3>
              <button onClick={() => setShowActivityTypeSheet(false)}>
                <Icon name="cancel" size={24} stroke={2} />
              </button>
            </div>
            <div className="stack gap-2">
              {activityTypes.map((item, index) => (
                <button
                  key={item.label}
                  className={`w-full flex items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm font-medium ${
                    selectedActivityType === index
                      ? "border-[var(--blue)] bg-[var(--blue-soft)] text-[var(--blue)]"
                      : "border-[var(--border)] text-[var(--text)]"
                  }`}
                  onClick={() => {
                    setSelectedActivityType(index);
                    setShowActivityTypeSheet(false);
                  }}
                >
                  <Icon name={item.icon} size="md" />
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          </div>
        </div>
      )}

      {showTagSheet && (
        <div className="absolute inset-0 z-50">
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-x-0 bottom-0 flex items-end">
          <div className="w-full rounded-t-3xl bg-white p-6">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-lg font-semibold">Activity tag</h3>
              <button onClick={() => setShowTagSheet(false)}>
                <Icon name="cancel" size={24} stroke={2} />
              </button>
            </div>
            <div className="stack gap-2">
              {activityTags.map((item, index) => (
                <button
                  key={item.label}
                  className={`w-full rounded-xl border border-[var(--border)] px-4 py-3 text-left text-sm font-medium ${
                    selectedTag === index ? "bg-[var(--blue-soft)] text-[var(--blue)]" : "text-[var(--text)]"
                  }`}
                  onClick={() => {
                    setSelectedTag(index);
                    setShowTagSheet(false);
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          </div>
        </div>
      )}

      {showFeelingSheet && (
        <div className="absolute inset-0 z-50">
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-x-0 bottom-0 flex items-end">
          <div className="w-full rounded-t-3xl bg-white p-6">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-lg font-semibold">How did that activity feel</h3>
              <button onClick={() => setShowFeelingSheet(false)}>
                <Icon name="cancel" size={24} stroke={2} />
              </button>
            </div>
            <div className="mb-6 flex justify-between gap-2">
              {feelingLevels.map((item, index) => (
                <button
                  key={item}
                  className={`flex-1 rounded-xl py-3 text-center text-sm font-medium ${
                    selectedFeeling === index
                      ? "bg-[var(--blue)] text-white"
                      : "bg-[var(--surface-muted)] text-[var(--text-secondary)]"
                  }`}
                  onClick={() => setSelectedFeeling(index)}
                >
                  {item}
                </button>
              ))}
            </div>
            <div className="mb-6">
              <input
                type="range"
                min="0"
                max="2"
                value={selectedFeeling}
                onChange={(e) => setSelectedFeeling(parseInt(e.target.value))}
                className="h-2 w-full appearance-none rounded-full bg-[var(--divider)] accent-[var(--blue)]"
              />
            </div>
            <Button className="w-full" onClick={() => setShowFeelingSheet(false)}>Confirm</Button>
          </div>
          </div>
        </div>
      )}

      {showHiddenDetailsSheet && (
        <div className="absolute inset-0 z-50">
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-x-0 bottom-0 flex items-end">
          <div className="w-full rounded-t-3xl bg-white p-6">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-lg font-semibold">Hidden details</h3>
              <button onClick={() => setShowHiddenDetailsSheet(false)}>
                <Icon name="cancel" size={24} stroke={2} />
              </button>
            </div>
            <div className="stack gap-2">
              {hiddenDetailsOptions.map((option, index) => (
                <button
                  key={option}
                  className={`w-full rounded-xl border px-4 py-3 text-left text-sm font-medium ${
                    selectedHiddenDetails === index
                      ? "border-[var(--blue)] bg-[var(--blue-soft)] text-[var(--blue)]"
                      : "border-[var(--border)] text-[var(--text)]"
                  }`}
                  onClick={() => {
                    setSelectedHiddenDetails(index);
                    setShowHiddenDetailsSheet(false);
                  }}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
          </div>
        </div>
      )}
    </main>
  );
}
