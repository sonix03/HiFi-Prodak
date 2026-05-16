import Header from "./Header";

export default function ScreenHeader({
  title,
  eyebrow,
  onBack,
  backLabel,
  centeredTitle,
  action,
  secondaryAction,
  mode = "detail",
  status,
  right,
}) {
  return (
    <Header
      eyebrow={eyebrow}
      mode={mode}
      backLabel={backLabel}
      centeredTitle={centeredTitle}
      onBack={onBack}
      primaryAction={action}
      secondaryAction={secondaryAction}
      status={status}
      title={title}
      right={right}
    />
  );
}
