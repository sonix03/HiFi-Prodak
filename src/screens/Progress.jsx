import { useState } from "react";
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
import { challenges, monthlyProductivity, weeklyStats } from "../constants/data";

function HeatmapCell({ item }) {
  const level =
    item.hours >= 4 ? "bg-[var(--primary)] text-white" :
    item.hours >= 2.5 ? "bg-[var(--blue)]/80 text-white" :
    item.hours >= 1 ? "bg-[var(--primary-soft)] text-[var(--blue)]" :
    item.hours > 0 ? "bg-[var(--surface-muted)] text-[var(--text-secondary)]" :
    "bg-white text-[var(--text-tertiary)]";

  return (
    <div className={`grid aspect-square place-items-center rounded-xl border border-[var(--border)] ${level}`}>
      <span className="text-[11px] font-semibold">{item.day}</span>
    </div>
  );
}

function MonthlyHeatmap({ data, onShare }) {
  return (
    <div>
      <div className="between">
        <p className="text-lg font-bold">May 2026</p>
        <button className="flex items-center gap-1 rounded-[20px] border border-[var(--blue)] px-2 py-1 text-sm font-semibold text-[var(--blue)]" onClick={onShare} type="button">
          <HugeiconsIcon icon={Share03Icon} size={14} />
          Share
        </button>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-4">
        <div>
          <p className="text-xs text-[var(--text-secondary)]">Your Streak</p>
          <p className="text-lg font-bold">18d</p>
        </div>
        <div>
          <p className="text-xs text-[var(--text-secondary)]">Activities</p>
          <p className="text-lg font-bold">10</p>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-7 gap-2">
        {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => (
          <span className="text-center text-[10px] font-semibold text-[var(--text-tertiary)]" key={`${day}-${index}`}>{day}</span>
        ))}
        {data.map((item) => <HeatmapCell item={item} key={item.day} />)}
      </div>
    </div>
  );
}

export default function Progress({ onNavigate }) {
  const [showMenu, setShowMenu] = useState(false);
  const [showShare, setShowShare] = useState(false);

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
          onClick={() => onNavigate?.("activities")}
          title="Activities"
          meta="Review tracked work sessions and device signals"
        />
      </div>
      <section className="section">
        <SectionHeader title="Focus volume" meta="Working time tracked across devices." />
        <ProgressChart data={weeklyStats} highlightHigh />
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
        
        <MonthlyHeatmap data={monthlyProductivity} onShare={() => setShowShare(true)} />
      </section>
      <section className="section">
        <SectionHeader title="Achievements" />
        <div className="list mt-2">
          {challenges.map((challenge) => <ListItem key={challenge.title} icon={challenge.icon} accent="yellow" title={challenge.title} meta={challenge.reward} value={`${challenge.progress}%`} />)}
        </div>
      </section>
      {showShare ? (
        <ShareBottomSheet title="Share Progress" onClose={() => setShowShare(false)}>
          <div className="rounded-[8px] bg-[var(--text)] px-5 py-6 text-white shadow-[var(--shadow-card)]">
            <p className="text-[11px] font-bold uppercase tracking-wide text-white/70">May 2026</p>
            <h2 className="mt-3 text-[28px] font-black leading-none tracking-normal">17h 12m</h2>
            <p className="mt-2 text-[13px] font-semibold text-white/80">Weekly focus time across connected devices</p>
            <div className="mt-5 grid grid-cols-3 gap-2 text-center">
              <div className="rounded-md bg-white/10 px-2 py-3">
                <p className="text-[17px] font-black">18d</p>
                <p className="mt-1 text-[10px] font-semibold text-white/70">Streak</p>
              </div>
              <div className="rounded-md bg-white/10 px-2 py-3">
                <p className="text-[17px] font-black">86</p>
                <p className="mt-1 text-[10px] font-semibold text-white/70">Score</p>
              </div>
              <div className="rounded-md bg-white/10 px-2 py-3">
                <p className="text-[17px] font-black">24</p>
                <p className="mt-1 text-[10px] font-semibold text-white/70">Sessions</p>
              </div>
            </div>
          </div>
          <ShareTargets className="mt-8" />
        </ShareBottomSheet>
      ) : null}
    </main>
  );
}
