import { useState } from "react";
import Button from "../components/Button";
import GroupsHeader from "../components/GroupsHeader";
import Icon from "../components/Icon";
import Pill from "../components/Pill";
import SectionHeader from "../components/SectionHeader";
import avatar from "../assets/avatar.png";
import bk from "../assets/bk.png";
import landscapeItb from "../assets/landscape-itb.png";
import mapPic from "../assets/map-pic.png";
import { challenges } from "../constants/data";

const challengeImages = [landscapeItb, mapPic, avatar, bk];

export default function GroupClub({ onNavigate }) {
  const [joinedChallenges, setJoinedChallenges] = useState(() => new Set());
  const toggleChallenge = (id) => {
    setJoinedChallenges((current) => {
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
      <GroupsHeader active="challenges" onNavigate={onNavigate} />

      <div className="mt-4 tab-row">
        {["Work", "Research", "Arts", "Laboratory"].map((item, index) => <Pill key={item} active={index === 0}>{item}</Pill>)}
      </div>

      <section className="section">
        <SectionHeader title="Active Challenge" />
        <div className="row mt-3">
          <span className="grid h-14 w-14 place-items-center rounded-full bg-[var(--primary-soft)] text-[var(--blue)]">
            <Icon name="timer" size="lg" />
          </span>
          <div>
            <p className="font-semibold">Overtime Challenge</p>
            <p className="meta">Complete 5 hours before Apr 30</p>
          </div>
        </div>
      </section>

      <section className="section">
        <SectionHeader title="Recommended For You" />
        <div className="grid-2 mt-3">
          {challenges.concat(challenges).slice(0, 4).map((challenge, index) => {
            const id = `${challenge.title}-${index}`;
            const isJoined = joinedChallenges.has(id);

            return (
              <article className="card card-pad flex min-h-[190px] flex-col" key={id}>
                <img
                  className="h-12 w-12 rounded-full object-cover shadow-[var(--shadow-card)]"
                  src={challengeImages[index % challengeImages.length]}
                  alt=""
                />
                <div className="mt-4 grid gap-2">
                  <h2 className="card-title">{challenge.title}</h2>
                  <p className="body">{challenge.reward}</p>
                  <p className="meta">Apr 17 to Apr 30, 2026</p>
                </div>
                <Button
                  className="mt-auto w-full"
                  size="sm"
                  variant={isJoined ? "primary" : "outline"}
                  onClick={() => toggleChallenge(id)}
                >
                  {isJoined ? "Joined" : "Join"}
                </Button>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
