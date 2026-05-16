import { useState } from "react";
import { Search, UserPlus, Users, Zap } from "lucide-react";
import Phone from "../components/Phone";
import Nav from "../components/Nav";

const friends = [
  { name: "Sarah Wijaya", meta: "12 mutual friends", badge: "Designer" },
  { name: "Kevin Pratama", meta: "8 mutual friends", badge: "Runner" },
  { name: "Nadia Putri", meta: "5 mutual friends", badge: "Research" },
];

const clubs = [
  { name: "Pejuang SCBD", meta: "12,096 members", badge: "Running" },
  { name: "Weekend Run Club", meta: "4,821 members", badge: "Community" },
  { name: "Design Circle", meta: "1,204 members", badge: "Creative" },
];

export default function SearchFriendClub() {
  const [activeTab, setActiveTab] = useState("Friends");
  const [query, setQuery] = useState("");

  const tabs = ["Friends", "Clubs"];
  const list = activeTab === "Friends" ? friends : clubs;
  const filtered = list.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase()) ||
    item.meta.toLowerCase().includes(query.toLowerCase()) ||
    item.badge.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Phone title="Search">
      <div className="relative h-full overflow-hidden bg-[#F6FAFD] px-6 pb-8 pt-8 text-left">

        <div className="mt-5 rounded-[28px] border border-[#427AB5]/18 bg-white p-5 shadow-[0_18px_40px_rgba(64,106,175,0.1)]">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#427AB5]">
                Discover
              </p>
              <h2 className="mt-1 text-[18px] font-black text-[#17324D]">
                Search
              </h2>
            </div>

            <div className="grid h-12 w-12 place-items-center rounded-[16px] bg-[#FFF8E8] text-[#17324D]">
              <Users size={22} strokeWidth={2.1} />
            </div>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`rounded-full px-4 py-2 text-[11px] font-bold transition ${
                  activeTab === tab
                    ? "bg-[#427AB5] text-white"
                    : "bg-[#F6FAFD] text-[#17324D] border border-[#427AB5]/14"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="mt-5 rounded-[20px] border border-[#427AB5]/14 bg-[#D8E1EB]/45 p-4">
            <div className="flex items-center gap-2">
              <Search size={15} strokeWidth={2.1} className="text-[#17324D]" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder={`Search ${activeTab.toLowerCase()}`}
                className="w-full bg-transparent text-[11px] font-medium text-[#17324D] outline-none placeholder:text-[#5D6F8B]"
              />
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
            {filtered.map((item) => (
              <article
                key={item.name}
                className="flex items-center gap-4 rounded-[22px] border border-[#427AB5]/14 bg-[#F6FAFD] p-4"
              >
                <div className="h-12 w-12 shrink-0 rounded-full bg-[#427AB5]/18" />
                <div className="min-w-0 flex-1">
                  <h3 className="truncate text-[12px] font-black text-[#17324D]">
                    {item.name}
                  </h3>
                  <p className="mt-1 text-[10px] font-medium text-[#5D6F8B]">
                    {item.meta}
                  </p>
                  <span className="mt-2 inline-flex rounded-full bg-white px-2.5 py-1 text-[9px] font-bold text-[#17324D]">
                    {item.badge}
                  </span>
                </div>
                <button className="grid h-10 w-10 place-items-center rounded-full bg-[#17324D] text-white">
                  <UserPlus size={17} strokeWidth={2.2} />
                </button>
              </article>
            ))}
            {filtered.length === 0 && (
              <p className="rounded-[20px] border border-[#427AB5]/14 bg-[#F6FAFD] p-4 text-[11px] text-[#5D6F8B]">
                No {activeTab.toLowerCase()} found.
              </p>
            )}
          </div>
        </div>
      </div>
      <Nav />
    </Phone>
  );
}
