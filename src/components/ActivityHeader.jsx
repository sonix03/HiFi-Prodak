import Header from "./Header";

export default function ActivityHeader({ title = "Activity", onBack }) {
  return (
    <Header
      mode="detail"
      onBack={onBack}
      right={null}
      secondaryAction={{ icon: "more", label: "More activity actions" }}
      title={title}
    />
  );
}
