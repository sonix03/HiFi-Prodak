import {
  Bell,
  Heart,
  ImagePlus,
  MessageCircle,
  MoreHorizontal,
  Search,
  Share2,
} from "lucide-react";
import Nav from "../components/Nav";
import Phone from "../components/Phone";
import Map from "../components/Map";

const feeds = [
  {
    name: "Muhammad Fathur Rizky",
    time: "Today at 5:26 AM • NVIDIA",
    title: "ASIKKK",
    desc: "Working 9 to 5 at NVIDIA",
    duration: "9h 5m",
  },
  {
    name: "Muhammad Fathur Rizky",
    time: "Today at 5:26 AM • NVIDIA",
    title: "ASIKKK",
    desc: "Working 9 to 5 at NVIDIA",
    duration: "9h 5m",
  },
];

export default function Feed() {
  return (
    <Phone title="Feeds">
      <div className="relative h-full overflow-hidden bg-[#F6FAFD] pb-[92px] text-left">
        <div className="flex h-[68px] items-center justify-between border-b border-[#17324D]/12 px-7 pt-3">
          <button className="grid h-10 w-10 place-items-center rounded-full text-[#050505]">
            <Bell size={18} strokeWidth={2.2} />
          </button>

          <div className="flex items-center gap-5">
            <button className="grid h-10 w-10 place-items-center rounded-full text-[#050505]">
              <Search size={18} strokeWidth={2.2} />
            </button>

            <div className="h-7 w-7 rounded-full bg-[#050505]" />
          </div>
        </div>

        <div className="h-[calc(100%-68px)] overflow-y-auto px-7 pt-7">
          <div className="space-y-9">
            {feeds.map((feed, index) => (
              <article key={index} className="pb-2">
                <div className="flex items-start gap-4">
                  <div className="mt-1 h-8 w-8 shrink-0 rounded-full bg-[#050505]" />

                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <p className="truncate text-[12px] font-semibold text-[#17324D]">
                          {feed.name}
                        </p>

                        <p className="mt-1.5 text-[10px] font-medium text-[#17324D]/72">
                          {feed.time}
                        </p>
                      </div>

                      <button className="grid h-8 w-8 shrink-0 place-items-center rounded-full">
                        <MoreHorizontal
                          size={22}
                          strokeWidth={2.3}
                          className="text-[#050505]"
                        />
                      </button>
                    </div>

                    <h2 className="mt-7 text-[1.2rem] font-black leading-none tracking-[-0.03em] text-[#050505]">
                      {feed.title}
                    </h2>

                    <p className="mt-4 text-[11px] font-medium leading-5 text-[#050505]/85">
                      {feed.desc}
                    </p>

                    <div className="mt-7">
                      <p className="text-[11px] font-medium text-[#050505]/75">
                        Duration
                      </p>

                      <p className="mt-1.5 text-[14px] font-black text-[#050505]">
                        {feed.duration}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 overflow-hidden rounded-[28px] border border-[#427AB5]/20 bg-[#427AB5]/10 shadow-[0_18px_36px_rgba(64,106,175,0.12)]">
                  <div className="relative grid h-48 place-items-center bg-[#427AB5]/15">
                    <Map className="h-full w-full" />
                  </div>
                </div>

                <div className="mt-5 flex items-center gap-6 text-[#050505]">
                  <Heart size={20} strokeWidth={2.2} />
                  <MessageCircle size={20} strokeWidth={2.2} />
                  <Share2 size={20} strokeWidth={2.2} />
                </div>
              </article>
            ))}
          </div>
        </div>

        <Nav active="home" />
      </div>
    </Phone>
  );
}