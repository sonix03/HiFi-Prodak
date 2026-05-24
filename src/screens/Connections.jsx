import { useState } from "react";
import Button from "../components/Button";
import ScreenHeader from "../components/ScreenHeader";
import SearchBar from "../components/SearchBar";
import UserRow from "../components/UserRow";
import { connections } from "../constants/data";

const tabs = [
  { key: "following", label: "Following", heading: "People you follow" },
  { key: "followers", label: "Followers", heading: "People who follow you" },
];

export default function Connections({ initialTab = "followers", returnTo = "profile", onNavigate }) {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [followingIds, setFollowingIds] = useState(() => {
    const allConnections = [...connections.following, ...connections.followers];
    return new Set(allConnections.filter((person) => person.following).map((person) => person.id));
  });
  const active = tabs.find((tab) => tab.key === activeTab) || tabs[1];
  const people = connections[active.key];

  const toggleFollow = (id) => {
    setFollowingIds((current) => {
      const next = new Set(current);

      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }

      return next;
    });
  };

  return (
    <main className="screen screen-pad">
      <ScreenHeader
        className="!mb-0"
        title="Connections"
        backLabel="Profile"
        centeredTitle
        onBack={() => onNavigate?.(returnTo)}
        right={null}
      />

      <div className="-mx-5 border-b border-[var(--border)] px-5">
        <div className="grid grid-cols-2">
          {tabs.map((tab) => {
            const selected = active.key === tab.key;

            return (
              <button
                className={`relative h-12 text-[15px] font-black ${selected ? "text-[var(--text)]" : "text-[var(--text-secondary)]"}`}
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                type="button"
              >
                {tab.label}
                {selected ? <span className="absolute inset-x-7 bottom-0 h-0.5 rounded-full bg-[var(--blue)]" /> : null}
              </button>
            );
          })}
        </div>
      </div>

      <section className="pt-5">
        <SearchBar placeholder={`Search ${active.label.toLowerCase()}`} filters={false} />
      </section>

      <section className="section">
        <div className="-mx-5 border-y border-[var(--divider)] bg-[var(--surface-muted)] px-5 py-3">
          <h2 className="text-[12px] font-black uppercase tracking-wide text-[var(--text-secondary)]">{active.heading}</h2>
        </div>
        <div className="mt-2 grid gap-1">
          {people.map((person) => {
            const isFollowing = followingIds.has(person.id);

            return (
              <UserRow
                action={isFollowing ? "Following" : "Follow"}
                actionIcon={isFollowing ? "check" : "userAdd"}
                actionVariant={isFollowing ? "outline" : "primary"}
                key={person.id}
                meta={person.location}
                onAction={() => toggleFollow(person.id)}
                onClick={() => onNavigate?.("otherProfile", { initialFollowed: isFollowing })}
                user={person}
              />
            );
          })}
        </div>
      </section>

      <Button className="mt-6 w-full" icon="search" onClick={() => onNavigate?.("searchFriend")} size="lg" variant="outline">
        Find more friends
      </Button>
    </main>
  );
}
