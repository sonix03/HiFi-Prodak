import Avatar from "./Avatar";
import { HeaderAction } from "./Header";

export default function ProfileHeader({ user, title = "Profile", onSettings }) {
  return (
    <header className="app-header app-header-profile">
      <div className="header-main">
        <Avatar user={user} size="sm" tone="neutral" />
        <div className="header-title-block">
          <p>{user?.handle || "Prodak athlete"}</p>
          <h1>{title}</h1>
        </div>
      </div>
      <div className="header-actions">
        <HeaderAction icon="edit" label="Edit profile" />
        <HeaderAction icon="settings" label="Settings" onClick={onSettings} />
      </div>
    </header>
  );
}
