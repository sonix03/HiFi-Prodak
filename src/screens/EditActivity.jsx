import { Component } from "react";
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

const feelingLevels = Array.from({ length: 10 }, (_, index) => `${index + 1}`);

const visibilityOptions = [
  { label: "Public", icon: "globe" },
  { label: "Followers", icon: "users" },
  { label: "Private", icon: "lock" },
];

export default class EditActivity extends Component {
  state = {
    selectedActivityType: 0,
    selectedTag: 0,
    selectedVisibility: 0,
    hiddenDetails: {
      time: false,
      steps: false,
      focusScore: false,
    },
    selectedFeeling: 6,
    selectedVisualType: "map",
    showActivityTypeSheet: false,
    showTagSheet: false,
    showFeelingSheet: false,
    showHiddenDetailsSheet: false,
    showVisualTypeSheet: false,
    showDeleteConfirm: false,
  };

  setSheet = (sheet, value) => {
    this.setState({ [sheet]: value });
  };

  render() {
    return (
      <EditActivityView
        onNavigate={this.props.onNavigate}
        setSheet={this.setSheet}
        setSelected={(key, value) => this.setState({ [key]: value })}
        state={this.state}
      />
    );
  }
}

function EditActivityView({ onNavigate, state, setSheet, setSelected }) {
  const {
    selectedActivityType,
    selectedTag,
    selectedVisibility,
    hiddenDetails,
    selectedFeeling,
    selectedVisualType,
    showActivityTypeSheet,
    showTagSheet,
    showFeelingSheet,
    showHiddenDetailsSheet,
    showVisualTypeSheet,
    showDeleteConfirm,
  } = state;
  const activity = activities[0];
  const toggleHiddenDetail = (key) => {
    setSelected("hiddenDetails", { ...hiddenDetails, [key]: !hiddenDetails[key] });
  };

  return (
    <main
      className="screen screen-pad flex flex-col relative"
      style={{ paddingBottom: "20px" }}
    >
      <ScreenHeader
        mode="form"
        onBack={() => onNavigate?.("activityDetail")}
        title="Edit activity"
        right={null}
      />

      <div className="flex-1 overflow-y-auto pb-4 pt-2">
        <div className="stack gap-4">
          <FormField label="Title" defaultValue={activity.title} />

          <FormField label="Description" textarea defaultValue={activity.caption} />

          <SelectField
            icon={activityTypes[selectedActivityType].icon}
            label="Jenis Kegiatan"
            onOpen={() => setSheet("showActivityTypeSheet", true)}
            value={activityTypes[selectedActivityType].label}
          />

          <div className="flex gap-3">
            <div className="flex-1 overflow-hidden rounded-xl border border-[var(--blue)]">
              <ActivityMap height={120} imageSrc={mapPic} visualType={selectedVisualType} />
            </div>
            <div className="flex-1 overflow-hidden rounded-xl border border-[var(--border)]">
              <img
                className="h-[120px] w-full object-cover"
                src={landscapeItb}
                alt=""
              />
            </div>
          </div>

          <ChangeMapType
            selected={selectedVisualType}
            onChange={(value) => setSelected("selectedVisualType", value)}
            open={showVisualTypeSheet}
            onOpen={() => setSheet("showVisualTypeSheet", true)}
            onClose={() => setSheet("showVisualTypeSheet", false)}
          />

          <div className="mt-2">
            <p className="mb-2 font-semibold text-[var(--text)]">Details</p>

            <SelectField
              label="Activity tag"
              onOpen={() => setSheet("showTagSheet", true)}
              value={activityTags[selectedTag].label}
            />

            <FeelingField
              value={`${feelingLevels[selectedFeeling]}/10`}
              onOpen={() => setSheet("showFeelingSheet", true)}
            />
          </div>

          <div className="mt-2">
            <p className="mb-2 font-semibold text-[var(--text)]">Visibility</p>

            <VisibilityField
              options={visibilityOptions}
              selectedIndex={selectedVisibility}
              onSelect={(index) => setSelected("selectedVisibility", index)}
            />

            <HiddenDetailsField
              value={hiddenDetails}
              onOpen={() => setSheet("showHiddenDetailsSheet", true)}
            />
          </div>

          <button
            className="mt-2 text-center text-sm font-semibold text-[var(--red)]"
            onClick={() => setSheet("showDeleteConfirm", true)}
            type="button"
          >
            Delete Activity
          </button>
        </div>
      </div>

      <div className="border-t border-[var(--divider)] bg-white py-3">
        <Button className="w-full" onClick={() => onNavigate?.("activityDetail")}>
          Update Activity
        </Button>
      </div>

      {showActivityTypeSheet && (
        <OptionBottomSheet
          title="Jenis Kegiatan"
          options={activityTypes}
          selectedIndex={selectedActivityType}
          onClose={() => setSheet("showActivityTypeSheet", false)}
          onSelect={(index) => {
            setSelected("selectedActivityType", index);
            setSheet("showActivityTypeSheet", false);
          }}
        />
      )}

      {showTagSheet && (
        <OptionBottomSheet
          title="Activity tag"
          options={activityTags}
          selectedIndex={selectedTag}
          variant="pills"
          onClose={() => setSheet("showTagSheet", false)}
          onSelect={(index) => {
            setSelected("selectedTag", index);
            setSheet("showTagSheet", false);
          }}
        />
      )}

      {showFeelingSheet && (
        <FeelingBottomSheet
          levels={feelingLevels}
          selectedIndex={selectedFeeling}
          onClose={() => setSheet("showFeelingSheet", false)}
          onSelect={(index) => setSelected("selectedFeeling", index)}
        />
      )}

      {showHiddenDetailsSheet && (
        <HiddenDetailsBottomSheet
          value={hiddenDetails}
          onClose={() => setSheet("showHiddenDetailsSheet", false)}
          onToggle={toggleHiddenDetail}
        />
      )}

      {showDeleteConfirm ? (
        <ConfirmDialog
          title="Delete activity?"
          body="This removes the saved activity and its device proof from your activity history."
          confirmLabel="Delete"
          onCancel={() => setSheet("showDeleteConfirm", false)}
          onConfirm={() => onNavigate?.("activityDetail")}
        />
      ) : null}

    </main>
  );
}

function ConfirmDialog({ title, body, confirmLabel, onCancel, onConfirm }) {
  return (
    <div className="absolute inset-0 z-50 grid place-items-center bg-black/30 px-6">
      <div className="w-full rounded-2xl bg-white p-5 shadow-[var(--shadow-floating)]">
        <h2 className="text-[18px] font-black text-[var(--text)]">{title}</h2>
        <p className="mt-2 text-[13px] font-semibold leading-snug text-[var(--text-secondary)]">{body}</p>
        <div className="mt-6 grid grid-cols-2 gap-3">
          <Button variant="outline" onClick={onCancel}>Cancel</Button>
          <Button className="!bg-[var(--red)]" onClick={onConfirm}>{confirmLabel}</Button>
        </div>
      </div>
    </div>
  );
}
