import { HugeiconsIcon } from "@hugeicons/react";
import {
  Activity03Icon,
  AnalyticsUpIcon,
  ArrowLeft02Icon,
  ArrowRight02Icon,
  Award03Icon,
  BarChartIcon,
  Calendar03Icon,
  Cancel01Icon,
  CheckmarkBadge02Icon,
  CheckmarkCircle02Icon,
  ClipboardCopyIcon,
  Clubs01Icon,
  Comment01Icon,
  Download04Icon,
  DropdownFieldTypeIcon,
  EyeIcon,
  FileVerifiedIcon,
  FilterHorizontalIcon,
  Fire03Icon,
  Globe02Icon,
  GroupIcon,
  HeartAddIcon,
  Home05Icon,
  ImageUploadIcon,
  LaptopIcon,
  ListViewIcon,
  LockIcon,
  MessageSquareShareIcon,
  MoreHorizontalIcon,
  Notification03Icon,
  PencilEdit02Icon,
  PlayCircleIcon,
  PlusSignIcon,
  QrCodeIcon,
  RecordIcon,
  Route03Icon,
  Search01Icon,
  Settings02Icon,
  Share03Icon,
  Shield02Icon,
  Target02Icon,
  Timer02Icon,
  ChampionIcon,
  UserAdd02Icon,
  UserCheck02Icon,
  UserCircleIcon,
  UserGroup03Icon,
} from "@hugeicons/core-free-icons";
import { theme } from "../constants/theme";

const icons = {
  activity: Activity03Icon,
  analytics: AnalyticsUpIcon,
  arrowLeft: ArrowLeft02Icon,
  arrowRight: ArrowRight02Icon,
  award: Award03Icon,
  calendar: Calendar03Icon,
  cancel: Cancel01Icon,
  chart: BarChartIcon,
  check: CheckmarkCircle02Icon,
  club: Clubs01Icon,
  comment: Comment01Icon,
  copy: ClipboardCopyIcon,
  download: Download04Icon,
  dropdown: DropdownFieldTypeIcon,
  edit: PencilEdit02Icon,
  eye: EyeIcon,
  feed: Home05Icon,
  filter: FilterHorizontalIcon,
  fire: Fire03Icon,
  globe: Globe02Icon,
  group: GroupIcon,
  heart: HeartAddIcon,
  list: ListViewIcon,
  lock: LockIcon,
  media: ImageUploadIcon,
  messageShare: MessageSquareShareIcon,
  more: MoreHorizontalIcon,
  notification: Notification03Icon,
  play: PlayCircleIcon,
  plus: PlusSignIcon,
  qr: QrCodeIcon,
  profile: UserCircleIcon,
  proof: FileVerifiedIcon,
  record: RecordIcon,
  route: Route03Icon,
  save: CheckmarkBadge02Icon,
  search: Search01Icon,
  settings: Settings02Icon,
  share: Share03Icon,
  shield: Shield02Icon,
  target: Target02Icon,
  timer: Timer02Icon,
  trophy: ChampionIcon,
  upload: ImageUploadIcon,
  userAdd: UserAdd02Icon,
  userCheck: UserCheck02Icon,
  users: UserGroup03Icon,
  laptop: LaptopIcon,
};

const sizes = theme.iconSizes;
const strokes = theme.iconStroke;

export default function Icon({
  name,
  icon,
  size = "md",
  stroke = "regular",
  decorative = true,
  label,
  className = "",
}) {
  const iconSource = icon || icons[name] || icons.activity;
  const pixelSize = typeof size === "number" ? size : sizes[size] || sizes.md;
  const strokeWidth = typeof stroke === "number" ? stroke : strokes[stroke] || strokes.regular;

  return (
    <HugeiconsIcon
      aria-hidden={decorative ? "true" : undefined}
      aria-label={!decorative ? label : undefined}
      className={className}
      color="currentColor"
      icon={iconSource}
      size={pixelSize}
      strokeWidth={strokeWidth}
    />
  );
}
