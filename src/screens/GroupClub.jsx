import { useEffect, useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft01Icon, Share03Icon } from "@hugeicons/core-free-icons";
import Button from "../components/Button";
import FeedShareSheet from "../components/FeedShareSheet";
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
const challengeDetail = {
  title: "May 400-minute Focus Challenge",
  subtitle: "Log 400 minutes this May to unlock a free 2-week productivity sprint.",
  progressText: "4h 56m",
  targetText: "6h 40m",
  daysLeft: "14 days left",
  period: "1 May 2026 to 31 May 2026",
  rule: "Complete 400 mins of focused work in May - any productive session counts.",
  qualifying: "Qualifying activities: Deep Work, Study, Research, Writing, and Design.",
};

const activeChallengeId = "active-challenge";

const invitees = [
  { name: "Jane Doe", location: "Jakarta" },
  { name: "Alex Chen", location: "Bandung" },
  { name: "Sam Taylor", location: "Jawa Barat" },
  { name: "Jordan Lee", location: "Surabaya" },
  { name: "Casey Morgan", location: "Yogyakarta" },
  { name: "Riley Brooks", location: "Bandung" },
  { name: "Morgan Smith", location: "Jawa Timur" },
  { name: "Taylor Kim", location: "Jawa Barat" },
];

function InviteFriends({ onDone }) {
  return (
    <main className="screen flex h-full flex-col bg-white">
      <header className="relative flex h-[64px] shrink-0 items-center border-b border-[var(--border)] bg-white px-5 shadow-[var(--shadow-header)]">
        <h1 className="pointer-events-none absolute left-1/2 -translate-x-1/2 text-[18px] font-black tracking-normal">Invite Friends</h1>
        <button className="ml-auto text-[16px] font-semibold text-[var(--text)]" onClick={onDone} type="button">
          Done
        </button>
      </header>

      <section className="flex-1 overflow-y-auto px-5 pb-[128px] pt-4">
        <div className="flex h-10 items-center gap-2 rounded-full bg-[var(--surface-muted)] px-4 text-[15px] font-medium text-[var(--text-tertiary)]">
          <Icon name="search" size="md" />
          <span>Search people who follow you</span>
        </div>

        <h2 className="mt-8 text-[12px] font-black uppercase tracking-wide text-[var(--text-secondary)]">People who follow you</h2>
        <div className="mt-5 grid gap-5">
          {invitees.map((person, index) => (
            <div className="flex items-center gap-3" key={person.name}>
              {index === 1 ? (
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[var(--blue)] text-[22px] font-semibold text-white">A</span>
              ) : (
                <img className="h-11 w-11 shrink-0 rounded-full object-cover" src={index % 3 === 0 ? avatar : landscapeItb} alt="" />
              )}
              <div className="min-w-0 flex-1">
                <p className="truncate text-[16px] font-semibold text-[var(--text)]">{person.name}</p>
                <p className="mt-0.5 truncate text-[13px] font-medium text-[var(--text-secondary)]">{person.location}</p>
              </div>
              <button className="h-9 rounded-full border border-[var(--blue)] px-5 text-[13px] font-black text-[var(--blue)]" type="button">
                Invite
              </button>
            </div>
          ))}
        </div>
      </section>

      <footer className="absolute inset-x-0 bottom-0 bg-white/95 px-6 py-5 text-center shadow-[var(--shadow-navbar)] backdrop-blur">
        <button className="row h-14 w-full justify-center rounded-full bg-[var(--blue)] text-[16px] font-black text-white" type="button">
          <Icon name="share" size="lg" stroke={2} />
          Invite
        </button>
      </footer>
    </main>
  );
}

function ChallengeDetail({ isJoined, onBack, onJoin, onNavigate }) {
  const [showShare, setShowShare] = useState(false);
  const [showInvite, setShowInvite] = useState(false);

  if (showInvite) {
    return <InviteFriends onDone={() => setShowInvite(false)} />;
  }

  return (
    <main className="screen relative flex h-full flex-col bg-white">
      <header className="relative flex h-[64px] shrink-0 items-center border-b border-[var(--border)] bg-white px-5 shadow-[var(--shadow-header)]">
        <button className="row gap-2 text-[17px] font-medium text-[var(--text)]" onClick={onBack} type="button">
          <HugeiconsIcon icon={ArrowLeft01Icon} size={24} color="currentColor" strokeWidth={2} />
          <span>Groups</span>
        </button>
        <h1 className="pointer-events-none absolute left-1/2 -translate-x-1/2 text-[18px] font-black tracking-normal">Challenge</h1>
        <button className="ml-auto grid h-10 w-10 place-items-center text-[var(--text)]" onClick={() => setShowShare(true)} type="button" aria-label="Share challenge">
          <HugeiconsIcon icon={Share03Icon} size={24} color="currentColor" strokeWidth={2} />
        </button>
      </header>

      <section className="flex-1 overflow-y-auto pb-[112px]">
        <div className="relative h-[248px] overflow-hidden bg-[var(--surface-muted)]">
          <img className="h-full w-full object-cover" src={landscapeItb} alt="" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20" />
          <div className="absolute left-6 top-7 text-white">
            <p className="text-[34px] font-black leading-none tracking-normal">Focus</p>
            <p className="mt-1 text-[11px] font-bold uppercase tracking-wide text-white/80">by Prodak</p>
          </div>
        </div>

        <div className="relative px-6 pt-[72px] text-center">
          <div className="absolute left-1/2 top-0 grid h-[112px] w-[112px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-[28px] border-4 border-white bg-[var(--yellow)] text-[var(--text)] shadow-[var(--shadow-floating)] rotate-[-5deg]">
            <div className="rotate-[5deg]">
              <p className="text-[34px] font-black leading-none">400</p>
              <p className="mt-1 text-[12px] font-black uppercase">min</p>
            </div>
          </div>

          <h2 className="text-[24px] font-black leading-tight tracking-normal text-[var(--text)]">{challengeDetail.title}</h2>
          <p className="mx-auto mt-4 max-w-[300px] text-[15px] font-medium leading-relaxed text-[var(--text-secondary)]">{challengeDetail.subtitle}</p>

          <div className="mt-8 rounded-2xl bg-white p-5 text-left shadow-[0_10px_28px_rgba(15,23,42,0.10)]">
            <div className="between text-[15px] font-black text-[var(--text)]">
              <p>
                {challengeDetail.progressText} <span className="text-[var(--text-secondary)]">/ {challengeDetail.targetText}</span>
              </p>
              <p className="text-[var(--text-secondary)]">{challengeDetail.daysLeft}</p>
            </div>
            <div className="mt-5 grid grid-cols-4 gap-1.5">
              {[0, 1, 2, 3].map((bar) => (
                <span className={`h-1.5 rounded-full ${bar < 3 ? "bg-[var(--blue)]" : "bg-[var(--divider)]"}`} key={bar} />
              ))}
            </div>
          </div>

          <div className="mt-9 grid gap-7 text-left">
            <div className="flex gap-4">
              <span className="grid h-9 w-9 shrink-0 place-items-center text-[var(--text)]">
                <Icon name="calendar" size="lg" stroke={2} />
              </span>
              <p className="pt-1 text-[17px] font-medium text-[var(--text)]">{challengeDetail.period}</p>
            </div>
            <div className="flex gap-4">
              <span className="grid h-9 w-9 shrink-0 place-items-center text-[var(--text)]">
                <Icon name="target" size="lg" stroke={2} />
              </span>
              <div className="min-w-0">
                <p className="text-[17px] font-medium leading-snug text-[var(--text)]">{challengeDetail.rule}</p>
                <p className="mt-2 text-[14px] font-medium leading-snug text-[var(--text-secondary)]">{challengeDetail.qualifying}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="absolute inset-x-0 bottom-0 flex gap-3 bg-white/95 px-6 py-5 shadow-[var(--shadow-navbar)] backdrop-blur">
        {isJoined ? (
          <>
            <button className="grid h-14 w-28 place-items-center rounded-full border border-[var(--border)] bg-white text-[var(--blue)]" onClick={onJoin} type="button" aria-label="Cancel challenge join">
              <Icon name="check" size="lg" stroke={2} />
            </button>
            <button className="h-14 flex-1 rounded-full bg-[var(--blue)] text-[16px] font-black text-white" onClick={() => setShowInvite(true)} type="button">
              Invite Friends
            </button>
          </>
        ) : (
          <button className="h-14 flex-1 rounded-full bg-[var(--blue)] text-[16px] font-black text-white" onClick={onJoin} type="button">
            Join
          </button>
        )}
      </footer>

      {showShare ? <FeedShareSheet onClose={() => setShowShare(false)} onNavigate={onNavigate} /> : null}
    </main>
  );
}

export default function GroupClub({ onNavigate, onBottomNavVisibilityChange, initialDetail = false, initialInvite = false }) {
  const [joinedChallenges, setJoinedChallenges] = useState(() => new Set([activeChallengeId]));
  const [activeChallenge, setActiveChallenge] = useState(initialDetail ? challenges[0] : null);
  const [activeChallengeKey, setActiveChallengeKey] = useState(initialDetail ? activeChallengeId : null);
  const [activeTopic, setActiveTopic] = useState("Work");
  const [showInitialInvite, setShowInitialInvite] = useState(initialInvite);
  const isFocusedFlow = Boolean(activeChallenge || showInitialInvite);

  const openChallenge = (challenge, id) => {
    setActiveChallenge(challenge);
    setActiveChallengeKey(id);
  };

  useEffect(() => {
    onBottomNavVisibilityChange?.(!isFocusedFlow);

    return () => onBottomNavVisibilityChange?.(true);
  }, [isFocusedFlow, onBottomNavVisibilityChange]);

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

  if (showInitialInvite) {
    return <InviteFriends onDone={() => setShowInitialInvite(false)} />;
  }

  if (activeChallenge) {
    const isJoined = joinedChallenges.has(activeChallengeKey);

    return (
      <ChallengeDetail
        challenge={activeChallenge}
        isJoined={isJoined}
        onBack={() => {
          setActiveChallenge(null);
          setActiveChallengeKey(null);
        }}
        onJoin={() => toggleChallenge(activeChallengeKey)}
        onNavigate={onNavigate}
      />
    );
  }

  return (
    <main className="screen screen-pad">
      <GroupsHeader active="challenges" onNavigate={onNavigate} />

      <div className="mt-4 tab-row">
        {["Work", "Research", "Arts", "Laboratory"].map((item) => <Pill key={item} active={activeTopic === item} onClick={() => setActiveTopic(item)}>{item}</Pill>)}
      </div>

      <section className="section">
        <SectionHeader title="Active Challenge" />
        <button
          className="card mt-3 overflow-hidden text-left"
          onClick={() => openChallenge(challenges[0], activeChallengeId)}
          type="button"
        >
          <div className="relative h-[128px] bg-[var(--surface-muted)]">
            <img className="h-full w-full object-cover" src={landscapeItb} alt="" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-black/45" />
            <span className="absolute bottom-3 left-3 grid h-12 w-12 place-items-center rounded-full bg-white/95 text-[var(--blue)] shadow-[var(--shadow-card)]">
              <Icon name="timer" size="lg" />
            </span>
          </div>
          <div className="p-4">
            <p className="font-semibold">Overtime Challenge</p>
            <p className="meta mt-1">Complete 5 hours before Apr 30</p>
          </div>
        </button>
      </section>

      <section className="section">
        <SectionHeader title="Recommended For You" />
        <div className="grid-2 mt-3">
          {challenges.concat(challenges).slice(0, 4).map((challenge, index) => {
            const id = `${challenge.title}-${index}`;
            const isJoined = joinedChallenges.has(id);

            return (
              <article className="card flex min-h-[238px] flex-col overflow-hidden" key={id}>
                <button className="text-left" onClick={() => openChallenge(challenge, id)} type="button">
                  <img
                    className="h-[92px] w-full object-cover"
                    src={challengeImages[index % challengeImages.length]}
                    alt=""
                  />
                </button>
                <button className="grid gap-2 p-3 text-left" onClick={() => openChallenge(challenge, id)} type="button">
                  <h2 className="card-title">{challenge.title}</h2>
                  <p className="body">{challenge.reward}</p>
                  <p className="meta">Apr 17 to Apr 30, 2026</p>
                </button>
                <Button
                  className="mx-3 mb-3 mt-auto w-[calc(100%-24px)]"
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
