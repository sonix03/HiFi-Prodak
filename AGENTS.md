# Agent Instructions for HiFi-Prodak

This project is a React/Vite high-fidelity mobile app prototype for Prodak. Continue work by preserving the current component architecture and visual direction.

## Product and Design Context

- Treat `src/img-hires` as low-fidelity Figma/wireframe references.
- Do not render wireframe PNGs directly in the app.
- Use the wireframes only to understand content hierarchy, screen layout, and user flow.
- Current styling is already considered good. When matching `src/img-hires`, focus on content and layout, not copying the low-fidelity visual style.
- Prefer small, precise visual refinements over broad redesigns.

## Architecture Rules

- Keep screens separated. Every page-level screen belongs in `src/screens`.
- `App.jsx` should stay small and only handle the app shell, artboard/screen composition, navigation state, and route-like switching.
- Do not put detailed screen markup in `App.jsx`.
- Repeated UI belongs in `src/components`.
- Shared dummy data belongs in `src/constants/data.js`.
- Shared design tokens belong in `src/constants/theme.js` and CSS variables in `src/index.css`.

## Screen Files

The project currently uses these screen files:

- `src/screens/Feed.jsx`
- `src/screens/Activities.jsx`
- `src/screens/ActivityDetail.jsx`
- `src/screens/Record.jsx`
- `src/screens/SaveActivity.jsx`
- `src/screens/EditActivity.jsx`
- `src/screens/Progress.jsx`
- `src/screens/Groups.jsx`
- `src/screens/GroupClub.jsx`
- `src/screens/Club.jsx`
- `src/screens/CreateClub.jsx`
- `src/screens/CreatePost.jsx`
- `src/screens/Comments.jsx`
- `src/screens/SearchFriend.jsx`
- `src/screens/SearchClub.jsx`
- `src/screens/Notifications.jsx`
- `src/screens/Profile.jsx`
- `src/screens/Preview.jsx`
- `src/screens/Share.jsx`
- `src/screens/ShareClub.jsx`
- `src/screens/Login.jsx`

Keep each screen independently editable. If a screen starts duplicating another screen's UI pattern, extract the repeated pattern into `src/components`.

## Component Patterns Already Established

Important shared components include:

- `AppHeader`, `ScreenHeader`
- `BottomNavigation`
- `Button`, `GradientBorderButton`
- `FormField`, `SelectField`, `FeelingField`, `VisibilityField`
- `OptionBottomSheet`, `ShareSheet`
- `FeedPost`
- `Avatar`, `Icon`, `SearchBar`, `SectionHeader`
- `ActivityMap`, `MetricGrid`, `ProgressChart`

Use these before creating new patterns. Add new reusable components only when they reduce real duplication or preserve screen clarity.

## Navigation Rules

- Bottom navigation has only 4 primary items:
  - Home
  - Record
  - Groups
  - Progress
- Keep bottom navigation implementation in `BottomNavigation`.
- Do not duplicate navbar markup inside screens.
- Record screens intentionally have no bottom navbar.

## Current Product Decisions

- `Activities` is Mika Ananda's own list of activities only.
- Activity/post cards in `Activities` should visually match Feed posts. Use `FeedPost` for consistency.
- Every activity or post should include a visible date/time.
- Feed can mix individual posts and posts made in a club.
- Feed media rows can show either a map or an uploaded photo. Some posts may show both.
- Do not show labels like "Map", "Photo", "Public", "Proof verified", or "Productivity context" unless the user explicitly asks.
- `Groups` has two topics: Challenges and Clubs. Use clear on-focus underline states.
- Search screens are tied to the search action from Groups:
  - Search Friends is for adding friends.
  - Search Clubs is for joining clubs.
  - Heading should be just "Search"; tabs/buttons Friends and Clubs appear above the input.
- Club detail uses `indomie-logo.png` for the club photo/profile.
- Login uses the Prodak logo and provided Google, Apple, and Facebook logos.

## Record Screen Decisions

- `Record.jsx` covers both idle and playing states via `initialPlaying`.
- Use `src/assets/map-pic.png` as the full-screen map background.
- Record screens have no bottom navbar.
- The work/stopped information uses a floating card above the bottom sheet.
- Map controls should be positioned relative to the bottom content stack, not as an independent absolute block.
- Idle state has a 3-column action row:
  - Work on the left
  - Start centered and larger
  - Empty right column
- Playing state has Resume and Finish buttons:
  - Resume is blue filled
  - Finish is black filled
- Use Hugeicons:
  - `PlayIcon` for Start/Resume
  - `RacingFlagIcon` for Finish
- Work and Stopped header blocks should have the same size. Stopped uses yellow filled background.

## Styling Preferences

- Preserve the current polished app styling.
- Header and bottom navigation should feel like persistent layers:
  - Header shadow token: `0 2px 10px rgba(15, 23, 42, 0.04)`
  - Navbar shadow token: `0 -4px 18px rgba(15, 23, 42, 0.08)`
- Shadows should stay soft, not heavy or brutalist.
- Navbar labels should have strong font weight. Active color differs; inactive colors should be consistent.
- Close/cancel actions should use `Cancel01Icon` through the shared `Icon` component where possible.
- Share buttons in Feed should be icon-only and use stroke width 2.
- Activity tags should be small pill chips, not one full-width row per tag.
- Use `src/assets/avatar.png` as the default avatar.

## Form Refactor Context

Save Activity and Edit Activity share the same form concepts. Keep them using shared components:

- `FormField` for plain input/textarea fields.
- `SelectField` for selectable input rows.
- `FeelingField` for "How did that activity feel".
- `VisibilityField` for the visibility button group.
- `OptionBottomSheet` and `FeelingBottomSheet` for repeated bottom sheet options.

These extracted form fields intentionally include `mt-2` spacing.

## Image Assets

Prefer existing assets:

- `src/assets/map-pic.png`
- `src/assets/landscape-itb.png`
- `src/assets/avatar.png`
- `src/assets/indomie-logo.png`
- `src/assets/google-logo.png`
- `src/assets/apple-logo.png`
- `src/assets/facebook-logo.png`
- `src/assets/login_page_video.mp4`

Use `src/img-hires` as screen reference only. Use `src/img` only when specifically needed for older reference naming.

## Verification

After changes, run:

```bash
npm run build
npm run lint
```

Fix any errors before finishing. If a visual/layout change is made and a dev server is needed, run it and provide the local URL.

## Working Style

- Keep changes scoped to the user request.
- Do not revert unrelated user changes.
- Prefer `rg` for searches.
- Use `apply_patch` for manual edits.
- Avoid large rewrites unless the user explicitly asks for a refactor.
- When in doubt, follow the existing style and component patterns already in the repo.
