import Header from "./Header";

export default function AppHeader({ title, eyebrow, right = "notification", secondaryAction }) {
  return (
    <Header
      eyebrow={eyebrow}
      mode="main"
      right={right}
      secondaryAction={secondaryAction}
      title={title}
    />
  );
}
