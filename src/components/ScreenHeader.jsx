import Header from "./Header";

export default function ScreenHeader({
  title,
  eyebrow,
  onBack,
  action,
  secondaryAction,
  mode = "detail",
  status,
}) {
  return (
    <Header
      eyebrow={eyebrow}
      mode={mode}
      onBack={onBack}
      primaryAction={action}
      secondaryAction={secondaryAction}
      status={status}
      title={title}
    />
  );
}
