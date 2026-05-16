import Header from "./Header";

export default function AppHeader({ title, eyebrow, right = "notification", rightSecondary, secondaryAction }) {
  return (
    <Header
      eyebrow={eyebrow}
      mode="main"
      right={right}
      rightSecondary={rightSecondary}
      secondaryAction={secondaryAction}
      title={title}
    />
  );
}
