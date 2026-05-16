import BottomNavigation from "../components/BottomNavigation";
import QRCodeSheet from "../components/QRCodeSheet";
import { users } from "../constants/data";
import Profile from "./Profile";

export default function QRCode({ onNavigate }) {
  const user = users[0];

  return (
    <main className="screen relative overflow-hidden bg-[var(--bg)]">
      <div className="absolute inset-0">
        <Profile onNavigate={onNavigate} />
        <BottomNavigation active="progress" onNavigate={onNavigate} />
      </div>
      <QRCodeSheet user={user} onDone={() => onNavigate?.("profile")} />
    </main>
  );
}
