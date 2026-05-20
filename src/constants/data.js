import indomieLogo from "../assets/indomie-logo.png";
import instagramLogo from "../assets/instagram-logo.png";
import whatsappLogo from "../assets/whatsapp-logo.png";
import avatar from "../assets/avatar.png";
import landscapeItb from "../assets/landscape-itb.png";

export const users = [
  { id: "u1", name: "Jane Doe", handle: "@jane", initials: "JD", role: "Product designer", streak: 18 },
  { id: "u2", name: "Alex Chen", handle: "@alex", initials: "AC", role: "Founder", streak: 31 },
  { id: "u3", name: "Sam Taylor", handle: "@sam", initials: "ST", role: "Data analyst", streak: 12 },
  { id: "u4", name: "Jordan Lee", handle: "@jordan", initials: "JL", role: "Frontend engineer", streak: 9 },
];

export const activities = [
  {
    id: "a1",
    user: users[0],
    type: "Deep Work",
    title: "Shipped the onboarding prototype",
    time: "May 16, 2026, 07:42",
    duration: "2h 18m",
    focusScore: 91,
    output: "8,420",
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
    time: "May 15, 2026, 21:10",
    duration: "1h 46m",
    focusScore: 84,
    output: "6,180",
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
    time: "May 11, 2026, 06:30",
    duration: "52m",
    focusScore: 76,
    output: "4,950",
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

export const mikaActivities = [
  activities[0],
  {
    id: "mika-a2",
    user: users[0],
    type: "Deep Work",
    title: "Mapped the mobile profile flow",
    time: "May 15, 2026, 09:18",
    duration: "1h 54m",
    focusScore: 88,
    output: "7,360",
    streak: "18d",
    category: "Design",
    caption: "Tightened profile, achievements, and activity history into one coherent path.",
    kudos: 96,
    comments: 12,
    shares: 4,
    proof: "Figma edit trail verified",
    privacy: "Public",
    color: "blue",
  },
  {
    id: "mika-a3",
    user: users[0],
    type: "Research",
    title: "Reviewed creator activity patterns",
    time: "May 14, 2026, 14:05",
    duration: "1h 12m",
    focusScore: 82,
    output: "5,280",
    streak: "17d",
    category: "Research",
    caption: "Pulled examples from fitness and productivity feeds for interaction references.",
    kudos: 61,
    comments: 7,
    shares: 2,
    proof: "Notion history verified",
    privacy: "Followers",
    color: "yellow",
  },
  {
    id: "mika-a4",
    user: users[0],
    type: "Study",
    title: "React state cleanup session",
    time: "May 13, 2026, 20:32",
    duration: "48m",
    focusScore: 79,
    output: "3,940",
    streak: "16d",
    category: "Code",
    caption: "Separated navigation state from screen composition and checked reusable component boundaries.",
    kudos: 44,
    comments: 5,
    shares: 1,
    proof: "Git history verified",
    privacy: "Private",
    color: "orange",
  },
];

export const sessions = [
  { label: "Deep Work", icon: "target", active: true, description: "Long uninterrupted output" },
  { label: "Study", icon: "activity", active: false, description: "Reading, course, practice" },
  { label: "Admin", icon: "list", active: false, description: "Operational tasks" },
  { label: "Recovery", icon: "timer", active: false, description: "Planning and reset" },
];

export const comments = [
  { id: "c1", user: users[1], text: "The proof trail is clean. Huge focus score.", time: "6m", likes: 24 },
  { id: "c2", user: users[2], text: "This is the kind of morning block I need tomorrow.", time: "18m", likes: 11 },
  { id: "c3", user: users[3], text: "Nice pace. The steps metric makes the sprint easy to understand.", time: "41m", likes: 8 },
];

export const clubs = [
  { id: "cl1", name: "Deep Work Jakarta", members: "12,096", goal: "240h weekly focus", rank: "#2 city", joined: true },
  { id: "cl2", name: "Builders Morning Club", members: "4,821", goal: "5 sessions before 9 AM", rank: "#8 global", joined: false },
  { id: "cl3", name: "Design Sprint League", members: "1,204", goal: "100 prototypes shipped", rank: "#1 design", joined: true },
];

export const challenges = [
  { title: "May Focus 50K", progress: 72, reward: "Gold badge", icon: "trophy" },
  { title: "7-Day Morning Streak", progress: 86, reward: "Streak flame", icon: "fire" },
  { title: "Proof Verified Week", progress: 55, reward: "Verified mark", icon: "proof" },
];

export const notifications = [
  { id: "n1", type: "kudos", icon: "fire", title: "Alex gave kudos", body: "On Shipped the onboarding prototype", time: "3m" },
  { id: "n2", type: "comment", icon: "comment", title: "Sam commented", body: "This is the kind of morning block I need.", time: "18m" },
  { id: "n3", type: "club", icon: "users", title: "Deep Work Jakarta moved up", body: "Your club is now #2 in the city leaderboard.", time: "1h" },
  { id: "n4", type: "achievement", icon: "trophy", title: "18-day streak", body: "You kept your productivity identity alive.", time: "Today" },
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

export const monthlyProductivity = [
  { day: 1, hours: 2.4 },
  { day: 2, hours: 0.8 },
  { day: 3, hours: 0 },
  { day: 4, hours: 3.1 },
  { day: 5, hours: 4.2 },
  { day: 6, hours: 1.6 },
  { day: 7, hours: 0.4 },
  { day: 8, hours: 2.9 },
  { day: 9, hours: 3.7 },
  { day: 10, hours: 1.1 },
  { day: 11, hours: 0 },
  { day: 12, hours: 2.2 },
  { day: 13, hours: 4.8 },
  { day: 14, hours: 3.4 },
  { day: 15, hours: 0.6 },
  { day: 16, hours: 1.9 },
  { day: 17, hours: 2.6 },
  { day: 18, hours: 0 },
  { day: 19, hours: 3.9 },
  { day: 20, hours: 4.5 },
  { day: 21, hours: 2.1 },
  { day: 22, hours: 1.4 },
  { day: 23, hours: 0.3 },
  { day: 24, hours: 3.2 },
  { day: 25, hours: 2.7 },
  { day: 26, hours: 4.1 },
  { day: 27, hours: 0.9 },
  { day: 28, hours: 1.8 },
];

export const proofStatuses = [
  { label: "Verified proof", tone: "success", icon: "proof" },
  { label: "Map context", tone: "blue", icon: "globe" },
  { label: "Private proof", tone: "neutral", icon: "lock" },
];

export const privacyStatuses = ["Public", "Followers", "Club", "Private"];

export const prodakShareTargets = [
  { label: "Prodak Post", icon: "feed" },
  { label: "Prodak Message", icon: "messageShare" },
  { label: "Instagram Story", image: instagramLogo },
  { label: "WhatsApp", image: whatsappLogo },
  { label: "Copy Link", icon: "link" },
  { label: "Save", icon: "download" },
];

export const postDestinations = [
  { id: "followers", name: "Your Followers", icon: "users" },
  { id: "hmif", name: "HMIF ITB Work Club", image: indomieLogo },
  { id: "gajah", name: "Gajah Lulumpatan", image: avatar },
  { id: "deep-work", name: "Deep Work Bandung", image: landscapeItb },
  { id: "code", name: "Code Workers : IATB", icon: "club" },
];

export const messageRecipients = [
  { id: "new", name: "New Chat", icon: "plus" },
  { id: "jane", name: "Jane Doe", image: avatar },
];

export const people = users.map((user, index) => ({
  ...user,
  mutual: `${18 - index * 4} mutual focus athletes`,
  metric: `${user.streak} day streak`,
}));

export const messageThreads = [
  {
    id: "m1",
    name: "Jane Doe",
    preview: "You: Focus Work",
    time: "14.22",
    unread: 1,
    avatar: "default",
  },
  {
    id: "m2",
    name: "Alex Chen",
    preview: "Nice focus score today.",
    time: "13.48",
    unread: 0,
    avatar: "default",
  },
  {
    id: "m3",
    name: "Sam Taylor",
    preview: "Can you share the activity recap?",
    time: "Yesterday",
    unread: 0,
    avatar: "default",
  },
];

export const leaderboard = [
  { name: "Jane", metric: "12h 40m", rank: 1 },
  { name: "Alex", metric: "11h 05m", rank: 2 },
  { name: "Sam", metric: "9h 25m", rank: 3 },
];

export const deviceProofs = [
  { label: "Laptop activity", value: "2h 18m", icon: "laptop" },
  { label: "Distraction blocks", value: "17", icon: "lock" },
  { label: "Steps events", value: "42", icon: "proof" },
];
