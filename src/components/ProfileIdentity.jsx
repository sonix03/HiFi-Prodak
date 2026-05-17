import Avatar from "./Avatar";

export default function ProfileIdentity({ user }) {
  const subtitle = user.subtitle || [user.handle, user.role].filter(Boolean).join(" • ");

  return (
    <div className="row">
      <Avatar user={user} size="lg" />
      <div className="min-w-0">
        <h1 className="title">{user.name}</h1>
        {subtitle ? <p className="body">{subtitle}</p> : null}
      </div>
    </div>
  );
}
