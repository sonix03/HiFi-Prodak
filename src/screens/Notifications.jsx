import {
  ArrowLeft,
  Bell,
  Heart,
  MessageCircle,
  Trophy,
} from "lucide-react";
import Nav from "../components/Nav";
import Phone from "../components/Phone";

const notifications = [
  {
    type: "Challenge Completed",
    body: "Nice Work, Overtime Challenge III completed",
    time: "Yesterday at 16:59",
    icon: Trophy,
    tone: "blue",
  },
  {
    type: "Another activity down",
    body: "Great work there, check your stats now!",
    time: "10 Apr 2026 at 22:41",
    icon: Bell,
    tone: "dark",
  },
  {
    type: "New Likes",
    body: "1002 gave you like on your new posts",
    time: "9 Apr 2026 at 22:41",
    icon: Heart,
    tone: "soft",
  },
  {
    type: "Challenge Completed",
    body: "Nice Work, Overtime Challenge I completed",
    time: "8 Apr 2026 at 15:59",
    icon: Trophy,
    tone: "blue",
  },
  {
    type: "Another activity down",
    body: "Great work there, check your stats now!",
    time: "7 Apr 2026 at 22:41",
    icon: Bell,
    tone: "dark",
  },
  {
    type: "New Likes",
    body: "1002 gave you like on your new posts",
    time: "6 Apr 2026 at 22:41",
    icon: Heart,
    tone: "soft",
  },
  {
    type: "Challenge Completed",
    body: "Nice Work, Overtime Challenge II completed",
    time: "5 Apr 2026 at 15:59",
    icon: Trophy,
    tone: "blue",
  },
  {
    type: "Another activity down",
    body: "Great work there, check your stats now!",
    time: "5 Apr 2026 at 22:41",
    icon: MessageCircle,
    tone: "dark",
  },
  {
    type: "New Likes",
    body: "1002 gave you like on your new posts",
    time: "4 Apr 2026 at 22:41",
    icon: Heart,
    tone: "soft",
  },
];

export default function Notifications() {
  return (
    <Phone title="Notifications">
      <div className="relative h-full overflow-hidden bg-[#F6FAFD] pb-[96px] text-left">
        <div className="pointer-events-none absolute -right-20 top-20 h-44 w-44 rounded-full bg-[#F7DD7D]/25 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-20 h-56 w-56 rounded-full bg-[#427AB5]/15 blur-3xl" />

        <header className="relative z-10 flex h-[88px] items-center justify-center border-b border-[#17324D]/15 px-7 pt-4">
          <button className="absolute left-7 top-9 grid h-10 w-10 place-items-center rounded-full border border-[#050505]/70 bg-white/70 text-[#050505] shadow-[0_10px_22px_rgba(23,50,77,0.08)] backdrop-blur-md">
            <ArrowLeft size={18} strokeWidth={2.2} />
          </button>

          <h1 className="text-[15px] font-black text-[#050505]">
            Notifications
          </h1>
        </header>

        <main className="relative z-10 h-[calc(100%-88px)] overflow-y-auto px-6 pt-5">
          <div className="space-y-4 pb-6">
            {notifications.map((item, index) => {
              const Icon = item.icon;

              return (
                <article key={`${item.type}-${index}`} className="flex gap-3">
                  <div
                    className={`grid h-10 w-10 shrink-0 place-items-center rounded-full border shadow-[0_8px_18px_rgba(64,106,175,0.1)] ${
                      item.tone === "dark"
                        ? "border-[#050505] bg-[#050505] text-white"
                        : item.tone === "blue"
                          ? "border-[#050505]/70 bg-[#D8E1EB] text-[#050505]"
                          : "border-[#050505]/50 bg-[#F6FAFD] text-[#050505]"
                    }`}
                  >
                    <Icon size={17} strokeWidth={2.1} />
                  </div>

                  <div className="min-w-0 flex-1 pt-0.5">
                    <h2 className="text-[12px] font-black leading-tight text-[#050505]">
                      {item.type}
                    </h2>

                    <p className="mt-1 text-[9.5px] font-semibold leading-4 text-[#050505]/75">
                      {item.body}
                    </p>

                    <p className="mt-1 text-[9px] font-medium text-[#050505]/45">
                      {item.time}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </main>

        <Nav active="home" />
      </div>
    </Phone>
  );
}