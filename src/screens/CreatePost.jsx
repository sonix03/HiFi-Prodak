import PostComposer from "../components/PostComposer";

export default function CreatePost({ onNavigate, initialStep = 0 }) {
  return (
    <PostComposer
      initialStep={initialStep}
      onClose={() => onNavigate?.("feed")}
      onPublish={() => onNavigate?.("feed")}
    />
  );
}
