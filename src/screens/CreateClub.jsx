import { useState } from "react";
import Button from "../components/Button";
import Icon from "../components/Icon";
import OptionBottomSheet from "../components/OptionBottomSheet";
import ScreenHeader from "../components/ScreenHeader";
import avatar from "../assets/avatar.png";
import bk from "../assets/bk.png";
import indomieLogo from "../assets/indomie-logo.png";
import landscapeItb from "../assets/landscape-itb.png";
import mapPic from "../assets/map-pic.png";

const steps = [
  {
    title: "Choose your club’s productivity",
    helper: "Pick the activity identity people will rally around.",
    options: [
      ["All Focus", "list"],
      ["Deep Work", "target"],
      ["Study Group", "activity"],
      ["Creator", "edit"],
      ["Startup", "analytics"],
      ["Design Sprint", "route"],
    ],
  },
  {
    title: "Which best describes your club?",
    helper: "This helps Prodak recommend your club to the right people.",
    options: [
      ["Just for fun", "fire"],
      ["Team", "users"],
      ["Employee Group", "group"],
      ["Mentor", "award"],
      ["Creator", "profile"],
    ],
  },
  {
    title: "Customize your club",
    helper: "Add a clear name and one compact description.",
    form: true,
  },
  {
    title: "Private or Public?",
    helper: "Public clubs can be discovered. Private clubs require invite approval.",
    options: [
      ["Public", "globe"],
      ["Private", "lock"],
    ],
  },
  {
    title: "Where is your club located?",
    helper: "Choose global if location does not matter.",
    options: [
      ["Global", "globe"],
      ["Choose a location", "search"],
    ],
    final: true,
  },
];

const clubPhotos = [
  { label: "Deep Work", image: indomieLogo, objectFit: "contain" },
  { label: "Campus", image: landscapeItb, objectFit: "cover" },
  { label: "Builders", image: avatar, objectFit: "cover" },
  { label: "Club Badge", image: bk, objectFit: "cover" },
  { label: "Focus Map", image: mapPic, objectFit: "cover" },
];

function StepIndicator({ currentStep }) {
  return (
    <div>
      <div className="between">
        <p className="meta">Step {currentStep + 1} of {steps.length}</p>
        <p className="meta">{Math.round(((currentStep + 1) / steps.length) * 100)}%</p>
      </div>
      <div className="mt-2 grid grid-cols-5 gap-1">
        {steps.map((step, index) => (
          <span
            className={`h-1 rounded-full ${index <= currentStep ? "bg-[var(--blue)]" : "bg-[var(--divider)]"}`}
            key={step.title}
          />
        ))}
      </div>
    </div>
  );
}

function OptionList({ options, selected, setSelected }) {
  return (
    <div className="stack">
      {options.map(([label, icon]) => (
        <button
          className={`between rounded-xl border bg-white px-4 py-3 text-left transition active:scale-[0.99] ${
            selected === label ? "border-[var(--blue)] bg-[var(--blue-soft)]" : "border-[var(--border)]"
          }`}
          key={label}
          onClick={() => setSelected(label)}
        >
          <span className="row">
            <Icon name={icon} size="md" className={selected === label ? "text-[var(--blue)]" : "text-[var(--text)]"} />
            <span className="text-sm font-medium">{label}</span>
          </span>
          <span className={`grid h-5 w-5 place-items-center rounded-full border ${selected === label ? "border-[var(--blue)] bg-[var(--blue)]" : "border-[var(--text-tertiary)]"}`}>
            {selected === label ? <Icon name="check" size={12} className="text-white" /> : null}
          </span>
        </button>
      ))}
    </div>
  );
}

function CustomizeStep({ photo, onOpenPhotoPicker }) {
  return (
    <div className="stack">
      <button
        className="mx-auto grid justify-items-center gap-2 text-center"
        onClick={onOpenPhotoPicker}
        type="button"
      >
        <span className="grid h-20 w-20 place-items-center overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface-muted)]">
          <img
            className={`h-full w-full ${photo.objectFit === "contain" ? "object-contain p-3" : "object-cover"}`}
            src={photo.image}
            alt=""
          />
        </span>
        <span className="text-xs font-black text-[var(--blue)]">Change photo</span>
      </button>
      <div className="form-field">
        <label>Club name</label>
        <input className="input" defaultValue="Deep Work Jakarta" />
      </div>
      <div className="form-field">
        <label>Description</label>
        <textarea className="textarea" defaultValue="A club for verified focus sessions and weekly output challenges." />
      </div>
      </div>
  );
}

export default function CreateClub({ onNavigate, initialStep = 0 }) {
  const [currentStep, setCurrentStep] = useState(initialStep);
  const [selectedPhoto, setSelectedPhoto] = useState(0);
  const [customPhoto, setCustomPhoto] = useState(null);
  const [showPhotoSheet, setShowPhotoSheet] = useState(false);
  const [validationError, setValidationError] = useState("");
  const [selected, setSelected] = useState({
    1: "Team",
    3: "Public",
    4: "Global",
  });
  const step = steps[currentStep];
  const isFirst = currentStep === 0;
  const isFinal = currentStep === steps.length - 1;
  const currentPhoto = customPhoto || clubPhotos[selectedPhoto];

  function previousStep() {
    setValidationError("");
    if (isFirst) {
      onNavigate?.("groups");
      return;
    }
    setCurrentStep((stepIndex) => stepIndex - 1);
  }

  function nextStep() {
    if (!step.form && !selected[currentStep]) {
      setValidationError("Please choose one option to continue.");
      return;
    }

    setValidationError("");
    if (isFinal) {
      onNavigate?.("club");
      return;
    }
    setCurrentStep((stepIndex) => stepIndex + 1);
  }

  return (
    <main className="screen screen-pad">
      <ScreenHeader
        action={{ text: isFinal ? "Create" : "Next", onClick: nextStep }}
        mode="form"
        onBack={previousStep}
        secondaryAction={{ icon: "cancel", label: "Cancel", onClick: () => onNavigate?.("groups") }}
        title="Create club"
      />

      <section className="stack">
        <StepIndicator currentStep={currentStep} />

        <div>
          <h1 className="section-title">{step.title}</h1>
          <p className="body mt-2">{step.helper}</p>
        </div>

        {step.form ? (
          <CustomizeStep photo={currentPhoto} onOpenPhotoPicker={() => setShowPhotoSheet(true)} />
        ) : (
          <OptionList
            options={step.options}
            selected={selected[currentStep]}
            setSelected={(value) => {
              setSelected((state) => ({ ...state, [currentStep]: value }));
              setValidationError("");
            }}
          />
        )}

        {validationError ? (
          <p className="rounded-xl bg-red-50 px-4 py-3 text-[12px] font-semibold text-[var(--red)]">
            {validationError}
          </p>
        ) : null}

        <p className="text-center text-[11px] font-medium text-[var(--text-tertiary)]">
          You can change these choices later in club settings.
        </p>

        <Button className="w-full" icon={isFinal ? "check" : "arrowRight"} onClick={nextStep}>
          {isFinal ? "Create Club" : "Next"}
        </Button>
      </section>

      {showPhotoSheet ? (
        <OptionBottomSheet title="Change club photo" onClose={() => setShowPhotoSheet(false)}>
          <label className="mb-4 flex cursor-pointer items-center gap-3 rounded-xl border border-[var(--blue)] bg-[var(--blue-soft)] px-4 py-3 text-left">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white text-[var(--blue)]">
              <Icon name="upload" size="md" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-sm font-black text-[var(--blue)]">Choose from phone gallery</span>
              <span className="mt-0.5 block text-[11px] font-semibold text-[var(--text-secondary)]">Simulate selecting a club photo from your device.</span>
            </span>
            <input
              accept="image/*"
              className="hidden"
              type="file"
              onChange={(event) => {
                const file = event.target.files?.[0];
                if (!file) return;

                const reader = new FileReader();
                reader.onload = () => {
                  setCustomPhoto({ label: file.name, image: reader.result, objectFit: "cover" });
                  setShowPhotoSheet(false);
                };
                reader.readAsDataURL(file);
              }}
            />
          </label>
          <div className="grid grid-cols-3 gap-3">
            {clubPhotos.map((photo, index) => (
              <button
                className={`grid justify-items-center gap-2 rounded-xl border px-2 py-3 text-center text-[11px] font-semibold ${
                  !customPhoto && selectedPhoto === index
                    ? "border-[var(--blue)] bg-[var(--blue-soft)] text-[var(--blue)]"
                    : "border-[var(--border)] text-[var(--text-secondary)]"
                }`}
                key={photo.label}
                onClick={() => {
                  setSelectedPhoto(index);
                  setCustomPhoto(null);
                  setShowPhotoSheet(false);
                }}
                type="button"
              >
                <span className="grid h-14 w-14 place-items-center overflow-hidden rounded-2xl bg-white">
                  <img
                    className={`h-full w-full ${photo.objectFit === "contain" ? "object-contain p-2" : "object-cover"}`}
                    src={photo.image}
                    alt=""
                  />
                </span>
                <span>{photo.label}</span>
              </button>
            ))}
          </div>
        </OptionBottomSheet>
      ) : null}
    </main>
  );
}
