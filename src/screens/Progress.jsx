import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Share03Icon } from "@hugeicons/core-free-icons";
import AppHeader from "../components/AppHeader";
import Icon from "../components/Icon";
import ListItem from "../components/ListItem";
import MetricGrid from "../components/MetricGrid";
import ProgressChart from "../components/ProgressChart";
import SectionHeader from "../components/SectionHeader";
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

function MonthlyHeatmap({ data }) {
  return (
    <div>
      <div className="between">
        <p className="text-lg font-bold">May 2026</p>
        <button className="flex items-center gap-1 rounded-[20px] border border-[var(--blue)] px-2 py-1 text-sm font-semibold text-[var(--blue)]">
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
      <section className="section">
        <SectionHeader title="Focus volume" meta="Hours recorded by day." />
        <ProgressChart data={weeklyStats} highlightHigh />
      </section>
      <section className="section">
        
        <MonthlyHeatmap data={monthlyProductivity} />
      </section>
      <section className="section">
        <SectionHeader title="Achievements" />
        <div className="list mt-2">
          {challenges.map((challenge) => <ListItem key={challenge.title} icon={challenge.icon} accent="yellow" title={challenge.title} meta={challenge.reward} value={`${challenge.progress}%`} />)}
        </div>
      </section>
    </main>
  );
}
