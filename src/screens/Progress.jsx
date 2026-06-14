import { useEffect, useRef, useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Share03Icon } from "@hugeicons/core-free-icons";
import AppHeader from "../components/AppHeader";
import Icon from "../components/Icon";
import ListItem from "../components/ListItem";
import MetricGrid from "../components/MetricGrid";
import ProgressChart from "../components/ProgressChart";
import SectionHeader from "../components/SectionHeader";
import ShareBottomSheet from "../components/ShareBottomSheet";
import ShareTargets from "../components/ShareTargets";
import { challenges, getMayActivitiesForDay, monthlyProductivity, weeklyStats } from "../constants/data";

const focusVolumeData = weeklyStats.map((item, index) => ({
  ...item,
  dayNumber: 11 + index,
}));

const topAchievements = [
  { title: "18-Day Focus Streak", meta: "Personal best", value: "18d", icon: "fire" },
  { title: "May Focus 50K", meta: "Gold badge progress", value: "72%", icon: "trophy" },
  { title: "7-Day Morning Streak", meta: "Streak flame", value: "86%", icon: "fire" },
  { title: "Proof Verified Week", meta: "Verified mark", value: "55%", icon: "proof" },
  { title: "Weekly Focus Time", meta: "Across connected devices", value: "17h 12m", icon: "timer" },
];

function HeatmapCell({ item, selected, onNavigate, onSelect }) {
  const level =
    item.hours >= 4 ? "bg-[var(--primary)] text-white" :
    item.hours >= 2.5 ? "bg-[var(--blue)]/80 text-white" :
    item.hours >= 1 ? "bg-[var(--primary-soft)] text-[var(--blue)]" :
    item.hours > 0 ? "bg-[var(--surface-muted)] text-[var(--text-secondary)]" :
    "bg-white text-[var(--text-tertiary)]";
  const selectedActivities = getMayActivitiesForDay(item.day);
  const column = (item.day - 1) % 7;
  const tooltipAlign = column >= 4 ? "right-0" : "left-5";

  return (
    <div className="relative">
      <button
        className={`grid aspect-square w-full place-items-center rounded-xl border ${selected ? "border-[var(--text)] ring-2 ring-[var(--blue)]/20" : "border-[var(--border)]"} ${level}`}
        onClick={() => onSelect(item)}
        type="button"
        aria-label={`Show activities for May ${item.day}`}
      >
        <span className="text-[11px] font-semibold">{item.day}</span>
      </button>
      {selected ? (
        <button
          className={`absolute bottom-[18px] z-20 w-[190px] rounded-[8px] border border-[var(--border)] bg-white px-3 py-2 text-left text-[var(--text)] shadow-[var(--shadow-card)] active:scale-[0.99] ${tooltipAlign}`}
          onClick={() => onNavigate?.("activities", { returnTo: "progress", selectedDay: item.day })}
          type="button"
        >
          <div className="between gap-3">
            <div className="min-w-0">
              <p className="text-[11px] font-black">May {item.day}, 2026</p>
              <p className="mt-0.5 text-[10px] font-semibold text-[var(--text-secondary)]">{selectedActivities.length} activities completed</p>
            </div>
            <span className="shrink-0 text-[10px] font-black text-[var(--blue)]">
              View
            </span>
          </div>
          <p className="mt-1 truncate text-[10px] font-semibold text-[var(--text-secondary)]">
            {selectedActivities.length ? selectedActivities.map((activity) => activity.title).join(", ") : "No completed activity"}
          </p>
        </button>
      ) : null}
    </div>
  );
}

function MonthlyHeatmap({ data, onNavigate, onShare }) {
  const [selectedDay, setSelectedDay] = useState(null);
  const heatmapRef = useRef(null);

  useEffect(() => {
    function clearTooltip(event) {
      if (!heatmapRef.current?.contains(event.target)) {
        setSelectedDay(null);
      }
    }

    document.addEventListener("pointerdown", clearTooltip);
    return () => document.removeEventListener("pointerdown", clearTooltip);
  }, []);

  return (
    <div ref={heatmapRef}>
      <div className="between">
        <p className="text-lg font-bold">May 2026</p>
        <button className="flex items-center gap-1 rounded-[20px] border border-[var(--blue)] px-2 py-1 text-sm font-semibold text-[var(--blue)]" onClick={onShare} type="button">
          <HugeiconsIcon icon={Share03Icon} size={14} />
          Share
        </button>
      </div>

      <div className="relative mt-4 grid grid-cols-7 gap-2">
        {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => (
          <span className="text-center text-[10px] font-semibold text-[var(--text-tertiary)]" key={`${day}-${index}`}>{day}</span>
        ))}
        {data.map((item) => (
          <HeatmapCell
            item={item}
            key={item.day}
            selected={selectedDay?.day === item.day}
            onNavigate={onNavigate}
            onSelect={setSelectedDay}
          />
        ))}
      </div>
    </div>
  );
}

export default function Progress({ onNavigate }) {
  const [showMenu, setShowMenu] = useState(false);
  const [showShare, setShowShare] = useState(false);
  const [showAchievementShare, setShowAchievementShare] = useState(false);

  return (
    <main className="screen screen-pad">
      <AppHeader right="settings" secondaryAction={{ icon: "plus", label: "Add", onClick: () => setShowMenu((prev) => !prev) }} />
      {showMenu ? (
        <>
          <div className="absolute inset-0 z-40" onClick={() => setShowMenu(false)} />
          <div className="absolute right-5 top-[74px] z-50 w-[180px] overflow-hidden rounded-[14px] bg-white shadow-[0_8px_30px_rgba(15,23,42,0.16)]">
          <button
            className="between w-full px-5 py-4 text-[15px] font-semibold text-[var(--text)] hover:bg-[var(--surface-muted)]"
            onClick={() => { setShowMenu(false); onNavigate?.("record"); }}
            type="button"
          >
            <span>New Activity</span>
            <Icon name="activity" size="sm" />
          </button>
          <div className="mx-5 h-px bg-[var(--border)]" />
          <button
            className="between w-full px-5 py-4 text-[15px] font-semibold text-[var(--text)] hover:bg-[var(--surface-muted)]"
            onClick={() => { setShowMenu(false); onNavigate?.("createPost"); }}
            type="button"
          >
            <span>New Post</span>
            <Icon name="feed" size="sm" />
          </button>
        </div>
        </>
      ) : null}
      <section className="hero-panel">
        <p className="text-sm font-semibold text-[var(--blue)]">Weekly focus time</p>
        <p className="mt-2 text-[30px] font-bold">17h 12m</p>
        <p className="mt-3 text-sm font-medium text-[var(--text-secondary)]">You are 4h 20m ahead of your four-week average.</p>
      </section>
      <div className="mt-4">
        <MetricGrid columns={2} items={[
          { label: "Streak", value: "18d", sub: "Personal best", icon: "fire" },
          { label: "Avg score", value: "86", sub: "+5 this week", icon: "analytics" },
          { label: "Sessions", value: "24", sub: "May total", icon: "timer" },
          { label: "Goal", value: "72%", sub: "50K challenge", icon: "target" },
        ]} />
      </div>
      <div className="list mt-4 border-y border-[var(--divider)]">
        <ListItem
          action={<Icon name="arrowRight" size="sm" className="text-[var(--text-tertiary)]" />}
          icon="activity"
          onClick={() => onNavigate?.("activities", { returnTo: "progress" })}
          title="All activities"
          meta="Open the complete activity history"
        />
      </div>
      <section className="section">
        <SectionHeader title="Focus volume" meta="Working time tracked across devices." />
        <ProgressChart
          data={focusVolumeData}
          getTooltipContent={(item) => {
            const activities = getMayActivitiesForDay(item.dayNumber);

            return (
              <>
                <div className="between gap-3">
                  <div className="min-w-0">
                    <p className="text-[11px] font-black">May {item.dayNumber}, 2026</p>
                    <p className="mt-0.5 text-[10px] font-semibold text-[var(--text-secondary)]">{activities.length} activities completed</p>
                  </div>
                  <span className="shrink-0 text-[10px] font-black text-[var(--blue)]">View</span>
                </div>
                <p className="mt-1 text-[10px] font-semibold text-[var(--text-secondary)]">{item.hours.toFixed(1)}h focus volume</p>
              </>
            );
          }}
          highlightHigh
          onTooltipClick={(item) => onNavigate?.("activities", { returnTo: "progress", selectedDay: item.dayNumber })}
        />
        <div className="list border-t border-[var(--divider)]">
          <div className="list-row py-2">
            <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[var(--yellow)]" />
            <p className="min-w-0 flex-1 text-[12px] font-semibold text-[var(--text-secondary)]">Yellow marks above-average focus days</p>
            <span className="text-[12px] font-black text-[var(--text)]">Peak 4h</span>
          </div>
          <div className="list-row py-2">
            <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[var(--blue)]" />
            <p className="min-w-0 flex-1 text-[12px] font-semibold text-[var(--text-secondary)]">Blue marks regular working volume</p>
            <span className="text-[12px] font-black text-[var(--text)]">Avg 2.3h</span>
          </div>
        </div>
      </section>
      <section className="section">
        
        <MonthlyHeatmap data={monthlyProductivity} onNavigate={onNavigate} onShare={() => setShowShare(true)} />
      </section>
      <section className="section">
        <div className="between">
          <h2 className="section-title">Achievements</h2>
          <button
            className="flex items-center gap-1 rounded-[20px] border border-[var(--blue)] px-2 py-1 text-sm font-semibold text-[var(--blue)]"
            onClick={() => setShowAchievementShare(true)}
            type="button"
          >
            <HugeiconsIcon icon={Share03Icon} size={14} />
            Share
          </button>
        </div>
        <div className="list mt-2">
          {challenges.map((challenge) => <ListItem key={challenge.title} icon={challenge.icon} accent="yellow" title={challenge.title} meta={challenge.reward} value={`${challenge.progress}%`} />)}
        </div>
      </section>
      {showShare ? (
        <ShareBottomSheet title="Share Progress" onClose={() => setShowShare(false)}>
          <div className="rounded-[8px] border border-[var(--border)] bg-white px-5 py-6 text-[var(--text)] shadow-[var(--shadow-card)]">
            <p className="text-[11px] font-bold uppercase tracking-wide text-[var(--text-secondary)]">May 2026</p>
            <h2 className="mt-3 text-[28px] font-black leading-none tracking-normal">17h 12m</h2>
            <p className="mt-2 text-[13px] font-semibold text-[var(--text-secondary)]">Weekly focus time across connected devices</p>
            <div className="mt-5 grid grid-cols-3 gap-2 text-center">
              <div className="rounded-md bg-[var(--surface-muted)] px-2 py-3">
                <p className="text-[17px] font-black">18d</p>
                <p className="mt-1 text-[10px] font-semibold text-[var(--text-secondary)]">Streak</p>
              </div>
              <div className="rounded-md bg-[var(--blue-soft)] px-2 py-3">
                <p className="text-[17px] font-black text-[var(--blue)]">86</p>
                <p className="mt-1 text-[10px] font-semibold text-[var(--text-secondary)]">Score</p>
              </div>
              <div className="rounded-md bg-[var(--surface-muted)] px-2 py-3">
                <p className="text-[17px] font-black">24</p>
                <p className="mt-1 text-[10px] font-semibold text-[var(--text-secondary)]">Sessions</p>
              </div>
            </div>
          </div>
          <ShareTargets className="mt-8" />
        </ShareBottomSheet>
      ) : null}
      {showAchievementShare ? (
        <ShareBottomSheet title="Share Achievements" onClose={() => setShowAchievementShare(false)}>
          <div className="rounded-[8px] border border-[var(--border)] bg-white px-5 py-6 text-[var(--text)] shadow-[var(--shadow-card)]">
            <p className="text-[11px] font-bold uppercase tracking-wide text-[var(--text-secondary)]">Top 5 achievements</p>
            <h2 className="mt-3 text-[26px] font-black leading-none tracking-normal">May Progress</h2>
            <p className="mt-2 text-[13px] font-semibold text-[var(--text-secondary)]">Verified productivity wins across devices</p>
            <div className="mt-5 divide-y divide-[var(--divider)]">
              {topAchievements.map((achievement, index) => {
                const iconTone = index % 2 === 0 ? "text-[var(--blue)]" : "text-[var(--yellow)]";
                const valueTone = index % 2 === 0 ? "text-[var(--blue)]" : "text-[var(--text)]";

                return (
                <div className="flex items-center gap-3 py-3" key={achievement.title}>
                  <span className={`grid h-7 w-7 shrink-0 place-items-center ${iconTone}`}>
                    <Icon name={achievement.icon} size="sm" stroke={2} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[13px] font-black text-[var(--text)]">{achievement.title}</p>
                    <p className="mt-0.5 truncate text-[10px] font-semibold text-[var(--text-secondary)]">{achievement.meta}</p>
                  </div>
                  <p className={`shrink-0 text-[13px] font-black ${valueTone}`}>{achievement.value}</p>
                </div>
                );
              })}
            </div>
          </div>
          <ShareTargets className="mt-8" />
        </ShareBottomSheet>
      ) : null}
    </main>
  );
}
