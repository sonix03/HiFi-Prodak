import { Flame, Target, Timer, TrendingUp } from "lucide-react";
import Header from "../components/Header";
import MetricCard from "../components/MetricCard";
import ProgressChart from "../components/ProgressChart";
import SectionHeader from "../components/SectionHeader";
import { challenges, weeklyStats } from "../constants/data";

export default function Progress() {
  return (
    <main className="screen screen-pad">
      <Header title="Progress" eyebrow="Performance" right="settings" />
      <section className="card blue-gradient card-pad text-white">
        <p className="text-sm font-bold opacity-80">Weekly focus time</p>
        <p className="mt-2 text-5xl font-black">17h 12m</p>
        <p className="mt-3 text-sm font-semibold opacity-80">You are 4h 20m ahead of your four-week average.</p>
      </section>
      <div className="mt-4 grid-2">
        <MetricCard label="Streak" value="18d" sub="Personal best" icon={Flame} tone="yellow" />
        <MetricCard label="Avg score" value="86" sub="+5 this week" icon={TrendingUp} tone="orange" />
        <MetricCard label="Sessions" value="24" sub="May total" icon={Timer} tone="blue" />
        <MetricCard label="Goal" value="72%" sub="50K challenge" icon={Target} tone="neutral" progress={72} />
      </div>
      <section className="mt-5 stack">
        <SectionHeader title="Focus volume" meta="Hours recorded by day." />
        <ProgressChart data={weeklyStats} />
      </section>
      <section className="mt-5 stack">
        <SectionHeader title="Insights" />
        {challenges.map((challenge) => <MetricCard key={challenge.title} label={challenge.title} value={`${challenge.progress}%`} sub={challenge.reward} icon={challenge.icon} tone="yellow" progress={challenge.progress} />)}
      </section>
    </main>
  );
}
