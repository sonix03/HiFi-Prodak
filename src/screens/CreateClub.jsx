import { Check, Globe2, Users } from "lucide-react";
import Button from "../components/Button";
import Header from "../components/Header";
import Pill from "../components/Pill";

export default function CreateClub({ onNavigate }) {
  return (
    <main className="screen screen-pad">
      <Header title="Create club" onBack={() => onNavigate?.("groups")} right={Users} />
      <section className="card card-pad">
        <p className="meta text-[var(--primary)]">Step 1 of 3</p>
        <h1 className="mt-2 title">Build a focus league</h1>
        <p className="mt-2 body">Create a community around weekly hours, proof standards, and shared output goals.</p>
      </section>
      <section className="mt-5 stack">
        <div className="form-field"><label>Club name</label><input className="input" defaultValue="Deep Work Jakarta" /></div>
        <div className="form-field"><label>Category</label><div className="tab-row">{["Work", "Study", "Design", "Startup"].map((item, index) => <Pill key={item} active={index === 0}>{item}</Pill>)}</div></div>
        <div className="form-field"><label>Description</label><textarea className="textarea" defaultValue="A local club for verified focus sessions and weekly productivity challenges." /></div>
        <div className="form-field"><label>Visibility</label><div className="tab-row"><Pill active icon={Globe2}>Public</Pill><Pill>Invite only</Pill><Pill>Private</Pill></div></div>
        <div className="grid-2">
          <div className="card card-pad"><p className="metric-sm">240h</p><p className="meta">Weekly goal</p></div>
          <div className="card card-pad"><p className="metric-sm">50</p><p className="meta">Member target</p></div>
        </div>
      </section>
      <Button className="mt-6 w-full" size="lg" icon={Check} onClick={() => onNavigate?.("club")}>Create club</Button>
    </main>
  );
}
