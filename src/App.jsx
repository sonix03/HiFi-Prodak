import { C } from "./constants/theme";
import {
  Activities,
  ActivityDetail,
  Club,
  Comments,
  CreateClub,
  CreateChallenge,
  CreatePost,
  EditActivity,
  Feed,
  Groups,
  Login,
  Notifications,
  Preview,
  Profile,
  Progress,
  Record,
  SaveActivity,
  Share,
  ShareClub,
  SearchFriendClub,
} from "./screens";

const screens = [
  Preview,
  Login,
  Feed,
  Share,
  ShareClub,
  SearchFriendClub,
  CreateClub,
  CreatePost,
  EditActivity,
  Activities,
  Profile,
  Progress,
  Club,
  Groups,
  CreateChallenge,
  Record,
  ActivityDetail,
  Comments,
  SaveActivity,
  Notifications,
];

export default function App() {
  return (
    <div className="min-h-screen px-5 py-8 font-sans text-[#17324D] lg:px-8 lg:py-10">
      <div className="mx-auto max-w-[1640px]">
        <div className="relative isolate mb-10 overflow-hidden rounded-[36px] border border-[#427AB5]/20 bg-[linear-gradient(135deg,#ffffff_0%,#fff8e8_48%,#dfeafd_100%)] p-6 shadow-[0_24px_70px_rgba(64,106,175,0.14)] sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute -right-14 top-6 z-0 h-36 w-36 rounded-full bg-[#F7DD7D]/45" />
          <div className="pointer-events-none absolute bottom-0 right-20 z-0 h-24 w-24 rounded-full bg-[#427AB5]/18 blur-2xl" />
          <p className="relative z-10 text-[11px] font-bold uppercase tracking-[0.28em] text-[#427AB5]">
            PRODAK Hi-Fi Mobile UI
          </p>
          <h1 className="relative z-10 mt-4 max-w-4xl text-4xl font-black leading-[1.02] text-[#17324D] sm:text-5xl lg:text-[3.5rem]">
            Cleaner mobile artboards with a blue and sunny hierarchy
          </h1>
          <p className="relative z-10 mt-5 max-w-3xl text-sm leading-7 text-[#5D6F8B] sm:text-[15px]">
            Spacing, layer order, and typography are tuned so decorative shapes
            stay behind the content while the requested palette leads every
            screen.
          </p>
          <div className="relative z-10 mt-7 flex flex-wrap gap-3">
            {Object.entries(C)
              .slice(0, 4)
              .map(([key, value]) => (
                <div
                  key={key}
                  className="flex items-center gap-2 rounded-full border border-[#427AB5]/20 bg-white/90 px-3 py-2"
                >
                  <span
                    className="h-5 w-5 rounded-full border border-white"
                    style={{ background: value }}
                  />
                  <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#5D6F8B]">
                    {key}
                  </span>
                  <span className="text-xs font-bold text-[#17324D]">{value}</span>
                </div>
              ))}
          </div>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(340px,390px))] justify-center gap-9">
          {screens.map((Screen) => (
            <Screen key={Screen.name} />
          ))}
        </div>
      </div>
    </div>
  );
}
