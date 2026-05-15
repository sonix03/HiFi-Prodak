import { Search, UserPlus, Users, Zap } from "lucide-react";
import Phone from "../components/Phone";

const friends = [
  { name: "Sarah Wijaya", meta: "12 mutual friends", badge: "Designer" },
  { name: "Kevin Pratama", meta: "8 mutual friends", badge: "Runner" },
  { name: "Nadia Putri", meta: "5 mutual friends", badge: "Research" },
];

export default function SearchFriend() {
  return (
    <Phone title="Search Friend">
      <div className="relative h-full overflow-hidden bg-[#F6FAFD] px-6 pb-8 pt-8 text-left">
        <div className="flex items-center gap-3 rounded-[24px] border border-[#427AB5]/16 bg-white px-4 py-4 shadow-[0_16px_34px_rgba(64,106,175,0.08)]">
          <Search size={18} strokeWidth={2.2} className="text-[#427AB5]" />
          <div className="min-w-0 flex-1">
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#5D6F8B]">
              Search
            </p>
            <p className="mt-1 text-[12px] font-black text-[#17324D]">
              Find a friend by name
            </p>
          </div>
        </div>

        <div className="mt-5 rounded-[28px] border border-[#427AB5]/18 bg-white p-5 shadow-[0_18px_40px_rgba(64,106,175,0.1)]">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#427AB5]">
                Discover
              </p>
              <h2 className="mt-1 text-[18px] font-black text-[#17324D]">
                Search friends
              </h2>
            </div>

            <div className="grid h-12 w-12 place-items-center rounded-[16px] bg-[#FFF8E8] text-[#17324D]">
              <Users size={22} strokeWidth={2.1} />
            </div>
          </div>

          <div className="mt-5 rounded-[20px] border border-[#427AB5]/14 bg-[#D8E1EB]/45 p-4">
            <div className="flex items-center gap-2">
              <Zap size={15} strokeWidth={2.1} className="text-[#17324D]" />
              <p className="text-[11px] font-black text-[#17324D]">
                Suggested for you
              </p>
            </div>
            <p className="mt-2 text-[10px] font-medium text-[#5D6F8B]">
              People active in your clubs, events, and challenges
            </p>
          </div>

          <div className="mt-5 space-y-3">
            {friends.map((friend) => (
              <article
                key={friend.name}
                className="flex items-center gap-4 rounded-[22px] border border-[#427AB5]/14 bg-[#F6FAFD] p-4"
              >
                <div className="h-12 w-12 shrink-0 rounded-full bg-[#427AB5]/18" />
                <div className="min-w-0 flex-1">
                  <h3 className="truncate text-[12px] font-black text-[#17324D]">
                    {friend.name}
                  </h3>
                  <p className="mt-1 text-[10px] font-medium text-[#5D6F8B]">
                    {friend.meta}
                  </p>
                  <span className="mt-2 inline-flex rounded-full bg-white px-2.5 py-1 text-[9px] font-bold text-[#17324D]">
                    {friend.badge}
                  </span>
                </div>
                <button className="grid h-10 w-10 place-items-center rounded-full bg-[#17324D] text-white">
                  <UserPlus size={17} strokeWidth={2.2} />
                </button>
              </article>
            ))}
          </div>
        </div>
      </div>
    </Phone>
  );
}
