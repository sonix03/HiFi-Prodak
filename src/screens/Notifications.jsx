import { Bell, Heart, MessageCircle, Trophy, Users } from "lucide-react";
import Nav from "../components/Nav";
import Phone from "../components/Phone";
import Top from "../components/Top";

const updates = [
  [Users, "Club invite", "Pejuang SCBD invited you to a weekend ride."],
  [Heart, "New kudos", "Ari liked your morning tempo ride."],
  [MessageCircle, "New comment", "Tesa replied to your activity."],
  [Trophy, "Challenge progress", "You moved into the top 10 this week."],
  [Bell, "Route reminder", "North loop starts tomorrow at 06:30."],
];

export default function Notifications() {
  return (
    <Phone title="Notifications">
      <div className="h-full bg-[#FFE8BE]/45 pb-[112px] text-left">
        <Top title="Notifications" right={<Bell size={16} />} />
        <div className="space-y-3 px-6">
          {updates.map(([Icon, title, body]) => (
            <div
              key={title}
              className="flex gap-3 rounded-[22px] border border-[#427AB5]/20 bg-white p-4 shadow-[0_10px_24px_rgba(64,106,175,0.07)]"
            >
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#FFE8BE] text-[#406AAF]">
                <Icon size={17} />
              </div>
              <div className="min-w-0">
                <p className="text-[13px] font-black text-[#17324D]">{title}</p>
                <p className="mt-1 text-[11px] leading-5 text-[#5D6F8B]">
                  {body}
                </p>
              </div>
            </div>
          ))}
        </div>
        <Nav active="home" />
      </div>
    </Phone>
  );
}
