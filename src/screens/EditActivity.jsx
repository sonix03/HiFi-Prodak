import { Component } from "react";
import ActivityMap from "../components/ActivityMap";
import Button from "../components/Button";
import ChangeMapType from "../components/ChangeMapType";
import FeelingField from "../components/FeelingField";
import FormField, { SelectField } from "../components/FormField";
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

const hiddenDetailsOptions = [
  "Show all details",
  "Hide time",
  "Hide output",
  "Hide focus score",
  "Hide all",
];

export default class EditActivity extends Component {
  state = {
    selectedActivityType: 0,
    selectedTag: 0,
    selectedVisibility: 0,
    selectedHiddenDetails: 0,
    selectedFeeling: 1,
    showActivityTypeSheet: false,
    showTagSheet: false,
    showFeelingSheet: false,
    showHiddenDetailsSheet: false,
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
    selectedHiddenDetails,
    selectedFeeling,
    showActivityTypeSheet,
    showTagSheet,
    showFeelingSheet,
    showHiddenDetailsSheet,
  } = state;
  const activity = activities[0];

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
              <ActivityMap height={120} imageSrc={mapPic} />
            </div>
            <div className="flex-1 overflow-hidden rounded-xl border border-[var(--border)]">
              <img
                className="h-[120px] w-full object-cover"
                src={landscapeItb}
                alt=""
              />
            </div>
          </div>

          <ChangeMapType />

          <div className="mt-2">
            <p className="mb-2 font-semibold text-[var(--text)]">Details</p>

            <SelectField
              label="Activity tag"
              onOpen={() => setSheet("showTagSheet", true)}
              value={activityTags[selectedTag].label}
            />

            <FeelingField
              value={feelingLevels[selectedFeeling]}
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

            <SelectField
              label="Hidden details"
              onOpen={() => setSheet("showHiddenDetailsSheet", true)}
              value={hiddenDetailsOptions[selectedHiddenDetails]}
            />
          </div>

          <button
            className="mt-2 text-center text-sm font-semibold text-[var(--red)]"
            onClick={() => onNavigate?.("activityDetail")}
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
        <OptionBottomSheet
          title="Hidden details"
          options={hiddenDetailsOptions}
          selectedIndex={selectedHiddenDetails}
          onClose={() => setSheet("showHiddenDetailsSheet", false)}
          onSelect={(index) => {
            setSelected("selectedHiddenDetails", index);
            setSheet("showHiddenDetailsSheet", false);
          }}
        />
      )}
    </main>
  );
}
