import { useState } from "react";
import Button from "../components/Button";
import Icon from "../components/Icon";
import Pill from "../components/Pill";
import ScreenHeader from "../components/ScreenHeader";

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

function CustomizeStep() {
  return (
    <div className="stack">
      <div className="mx-auto grid h-20 w-20 place-items-center rounded-3xl bg-[var(--surface-muted)] text-[var(--blue)]">
        <Icon name="users" size="xl" />
      </div>
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
  const [selected, setSelected] = useState({
    0: "All Productivity",
    1: "Team",
    3: "Public",
    4: "Global",
  });
  const step = steps[currentStep];
  const isFirst = currentStep === 0;
  const isFinal = currentStep === steps.length - 1;

  function previousStep() {
    if (isFirst) {
      onNavigate?.("groups");
      return;
    }
    setCurrentStep((stepIndex) => stepIndex - 1);
  }

  function nextStep() {
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
          <CustomizeStep />
        ) : (
          <OptionList
            options={step.options}
            selected={selected[currentStep]}
            setSelected={(value) => setSelected((state) => ({ ...state, [currentStep]: value }))}
          />
        )}

        <p className="text-center text-[11px] font-medium text-[var(--text-tertiary)]">
          You can change these choices later in club settings.
        </p>

        <Button className="w-full" icon={isFinal ? "check" : "arrowRight"} onClick={nextStep}>
          {isFinal ? "Create Club" : "Next"}
        </Button>
      </section>
    </main>
  );
}
