import {
  BadgeCheck,
  BookOpen,
  Brain,
  BriefcaseBusiness,
  Coffee,
  Flame,
  Globe2,
  Laptop,
  Lock,
  MessageCircle,
  Trophy,
  Users,
} from "lucide-react";

export const users = [
  { id: "u1", name: "Mika Ananda", handle: "@mika", initials: "MA", role: "Product designer", streak: 18 },
  { id: "u2", name: "Rafi Wirawan", handle: "@rafi", initials: "RW", role: "Founder", streak: 31 },
  { id: "u3", name: "Naya Putri", handle: "@naya", initials: "NP", role: "Data analyst", streak: 12 },
  { id: "u4", name: "Dimas Hartono", handle: "@dimas", initials: "DH", role: "Frontend engineer", streak: 9 },
];

export const activities = [
  {
    id: "a1",
    user: users[0],
    type: "Deep Work",
    title: "Shipped the onboarding prototype",
    time: "Today, 07:42",
    duration: "2h 18m",
    focusScore: 91,
    output: "6.4 km eq",
    streak: "18d",
    category: "Design",
    caption: "One clean block, phone on airplane mode, proof attached from Figma history.",
    kudos: 124,
    comments: 18,
    shares: 7,
    proof: "Figma edit trail verified",
    privacy: "Public",
    color: "orange",
  },
  {
    id: "a2",
    user: users[1],
    type: "Strategy",
    title: "Investor deck rewrite sprint",
    time: "Yesterday, 21:10",
    duration: "1h 46m",
    focusScore: 84,
    output: "14 slides",
    streak: "31d",
    category: "Writing",
    caption: "Tightened the narrative and cut four weak slides.",
    kudos: 88,
    comments: 9,
    shares: 3,
    proof: "Docs version history",
    privacy: "Club",
    color: "blue",
  },
  {
    id: "a3",
    user: users[2],
    type: "Study",
    title: "SQL window functions practice",
    time: "Mon, 06:30",
    duration: "52m",
    focusScore: 76,
    output: "22 queries",
    streak: "12d",
    category: "Learning",
    caption: "Short session before commute. Accuracy finally clicked.",
    kudos: 52,
    comments: 6,
    shares: 2,
    proof: "Notebook screenshot",
    privacy: "Followers",
    color: "yellow",
  },
];

export const sessions = [
  { label: "Deep Work", icon: Brain, active: true, description: "Long uninterrupted output" },
  { label: "Study", icon: BookOpen, active: false, description: "Reading, course, practice" },
  { label: "Admin", icon: BriefcaseBusiness, active: false, description: "Operational tasks" },
  { label: "Recovery", icon: Coffee, active: false, description: "Planning and reset" },
];

export const comments = [
  { id: "c1", user: users[1], text: "The proof trail is clean. Huge focus score.", time: "6m", likes: 24 },
  { id: "c2", user: users[2], text: "This is the kind of morning block I need tomorrow.", time: "18m", likes: 11 },
  { id: "c3", user: users[3], text: "Nice pace. The output metric makes the sprint easy to understand.", time: "41m", likes: 8 },
];

export const clubs = [
  { id: "cl1", name: "Deep Work Jakarta", members: "12,096", goal: "240h weekly focus", rank: "#2 city", joined: true },
  { id: "cl2", name: "Builders Morning Club", members: "4,821", goal: "5 sessions before 9 AM", rank: "#8 global", joined: false },
  { id: "cl3", name: "Design Sprint League", members: "1,204", goal: "100 prototypes shipped", rank: "#1 design", joined: true },
];

export const challenges = [
  { title: "May Focus 50K", progress: 72, reward: "Gold badge", icon: Trophy },
  { title: "7-Day Morning Streak", progress: 86, reward: "Streak flame", icon: Flame },
  { title: "Proof Verified Week", progress: 55, reward: "Verified mark", icon: BadgeCheck },
];

export const notifications = [
  { id: "n1", type: "kudos", icon: Flame, title: "Rafi gave kudos", body: "On Shipped the onboarding prototype", time: "3m" },
  { id: "n2", type: "comment", icon: MessageCircle, title: "Naya commented", body: "This is the kind of morning block I need.", time: "18m" },
  { id: "n3", type: "club", icon: Users, title: "Deep Work Jakarta moved up", body: "Your club is now #2 in the city leaderboard.", time: "1h" },
  { id: "n4", type: "achievement", icon: Trophy, title: "18-day streak", body: "You kept your productivity identity alive.", time: "Today" },
];

export const weeklyStats = [
  { day: "M", hours: 2.5, score: 82 },
  { day: "T", hours: 1.4, score: 76 },
  { day: "W", hours: 3.2, score: 91 },
  { day: "T", hours: 2.1, score: 85 },
  { day: "F", hours: 4.0, score: 94 },
  { day: "S", hours: 1.2, score: 72 },
  { day: "S", hours: 2.8, score: 88 },
];

export const proofStatuses = [
  { label: "Verified proof", tone: "success", icon: BadgeCheck },
  { label: "Map context", tone: "blue", icon: Globe2 },
  { label: "Private proof", tone: "neutral", icon: Lock },
];

export const privacyStatuses = ["Public", "Followers", "Club", "Private"];

export const shareTargets = ["Prodak Feed", "Deep Work Jakarta", "Copy Link", "Export Image"];

export const people = users.map((user, index) => ({
  ...user,
  mutual: `${18 - index * 4} mutual focus athletes`,
  metric: `${user.streak} day streak`,
}));

export const leaderboard = [
  { name: "Mika", metric: "12h 40m", rank: 1 },
  { name: "Rafi", metric: "11h 05m", rank: 2 },
  { name: "Naya", metric: "9h 25m", rank: 3 },
];

export const deviceProofs = [
  { label: "Laptop activity", value: "2h 18m", icon: Laptop },
  { label: "Distraction blocks", value: "17", icon: Lock },
  { label: "Output events", value: "42", icon: BadgeCheck },
];
