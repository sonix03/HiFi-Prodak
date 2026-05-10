import { Image as ImageIcon, MapPin, Settings, Trophy } from "lucide-react";
import Avatar from "../components/Avatar";
import MediaPlaceholder from "../components/MediaPlaceholder";
import Nav from "../components/Nav";
import Phone from "../components/Phone";
import Stat from "../components/Stat";
import Top from "../components/Top";

const achievements = [
  ["7-day streak", "88"],
  ["Cycling 50 km", "64"],
  ["Morning runner", "46"],
];
const weeklyActivity = [32, 58, 42, 70, 54, 88, 62];
const recentPhotos = [
  ["Ride 01", "Warm-up"],
  ["Ride 02", "Club pace"],
  ["Ride 03", "Finish shot"],
];

export default function Profile() {
  return (
    <Phone title="Profile">
      <div className="h-full bg-[#FFE8BE]/45 pb-[112px] text-left">
        <div className="relative isolate overflow-hidden bg-[#406AAF] pb-12 text-white">
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-32 bg-[radial-gradient(circle_at_bottom,rgba(247,221,125,0.35),transparent_60%)]" />
          <Top title="Athlete profile" light right={<Settings size={16} />} />
          <div className="relative z-10 px-6">
            <span className="inline-flex rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white/70">
              Week 19
            </span>
            <div className="mt-5 flex items-end justify-between gap-4">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/55">
                  This month
                </p>
                <p className="mt-2 text-[2.6rem] font-black leading-none tracking-[-0.04em]">
                  124.8 km
                </p>
                <p className="mt-3 max-w-[210px] text-[13px] leading-6 text-white/70">
                  Mixed from commute rides, easy runs, and one club weekend.
                </p>
              </div>
              <div className="rounded-[24px] border border-white/10 bg-white/5 p-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/55">
                  Gain
                </p>
                <p className="mt-2 text-2xl font-black tracking-[-0.02em]">1,240 m</p>
              </div>
            </div>
          </div>
        </div>

        <div className="-mt-8 px-6">
          <section className="rounded-[30px] border border-[#427AB5]/20 bg-white p-5 shadow-[0_18px_34px_rgba(64,106,175,0.1)]">
            <div className="flex items-end gap-4">
              <Avatar initials="MF" size="lg" tone="orange" />
              <div className="min-w-0 flex-1">
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#5D6F8B]">
                  Runner / Cyclist
                </p>
                <h3 className="mt-1 text-[1.2rem] font-black tracking-[-0.02em] text-[#17324D]">
                  Muhammad Fathir Rizky
                </h3>
                <p className="mt-2 flex items-center gap-1.5 text-[11px] font-semibold text-[#5D6F8B]">
                  <MapPin size={12} />
                  Sleman, Yogyakarta
                </p>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-2.5">
              <div className="rounded-[20px] bg-[#FFE8BE]/45 p-4">
                <Stat n="8" label="posts" />
              </div>
              <div className="rounded-[20px] bg-[#FFE8BE]/45 p-4">
                <Stat n="45" label="following" />
              </div>
              <div className="rounded-[20px] bg-[#FFE8BE]/45 p-4">
                <Stat n="48" label="followers" />
              </div>
            </div>

            <button className="mt-5 h-11 w-full rounded-full bg-[#406AAF] text-[11px] font-black uppercase tracking-[0.2em] text-white">
              Edit profile
            </button>
          </section>

          <div className="mt-5 grid grid-cols-2 gap-3">
            <section className="rounded-[24px] border border-[#427AB5]/20 bg-white p-4">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#5D6F8B]">
                Training log
              </p>
              <div className="mt-4 flex h-24 items-end gap-2">
                {weeklyActivity.map((height, index) => (
                  <div
                    key={`${height}-${index}`}
                    className="flex flex-1 flex-col items-center gap-2"
                  >
                    <div
                      className={`w-full rounded-full ${
                        index === weeklyActivity.length - 2
                          ? "bg-[#427AB5]"
                          : "bg-[#406AAF]/12"
                      }`}
                      style={{ height: `${height}%` }}
                    />
                    <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-[#5D6F8B]">
                      {["M", "T", "W", "T", "F", "S", "S"][index]}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-[24px] border border-[#F7DD7D] bg-[#FFE8BE] p-4">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#406AAF]">
                Community
              </p>
              <p className="mt-4 text-3xl font-black tracking-[-0.03em] text-[#17324D]">12</p>
              <p className="mt-2 text-[13px] leading-6 text-[#5D6F8B]">
                club rides joined this month with a stronger weekend streak.
              </p>
            </section>
          </div>

          <section className="mt-5 rounded-[24px] border border-[#427AB5]/20 bg-white p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[15px] font-black text-[#17324D]">Achievements</p>
                <p className="mt-1 text-[11px] font-semibold text-[#5D6F8B]">
                  Overview inspired by Strava-style trophy sections
                </p>
              </div>
              <Trophy size={17} className="text-[#427AB5]" />
            </div>
            <div className="mt-4 space-y-4">
              {achievements.map(([achievement, progress]) => (
                <div key={achievement}>
                  <div className="flex justify-between text-xs font-bold text-[#17324D]">
                    <span>{achievement}</span>
                    <span className="text-[#427AB5]">{progress}%</span>
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-[#FFE8BE]">
                    <div
                      className="h-2 rounded-full bg-[#427AB5]"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-5 rounded-[24px] border border-[#427AB5]/20 bg-white p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[15px] font-black text-[#17324D]">Photos</p>
                <p className="mt-1 text-[11px] font-semibold text-[#5D6F8B]">
                  Placeholder kotak untuk isi visual nanti
                </p>
              </div>
              <ImageIcon size={17} className="text-[#427AB5]" />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {recentPhotos.map(([label, caption], index) => (
                <MediaPlaceholder
                  key={label}
                  label={label}
                  caption={caption}
                  square
                  tone={index === 0 ? "warm" : "light"}
                />
              ))}
            </div>
          </section>
        </div>
        <Nav active="progress" />
      </div>
    </Phone>
  );
}
