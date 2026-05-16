import Avatar from "./Avatar";

export default function ProfileIdentity({ user }) {
  return (
    <div className="row">
      <Avatar user={user} size="lg" />
      <div className="min-w-0">
        <h1 className="title">{user.name}</h1>
        <p className="body">{user.handle} • {user.role}</p>
      </div>
    </div>
  );
}
