# PR Summary

## Overview
This PR expands the productivity tracking experience across the app, with a stronger focus on multi-device tracking, richer activity detail states, and more interactive navigation and filters.

## What Changed

### Recording Flow
- Added a separate enlarged focus view (`RecordFocus`) for the running and paused states.
- Kept `Record` as the default idle entry point with a visible `Start` action.
- Added live timer behavior for:
  - `Elapsed Time`
  - `Working Time`
- Added support for switching between `idle`, `running`, and `paused` states.
- Made the minimized and enlarged record layouts visually consistent.

### Focus Detail View
- Added a dedicated `RecordFocus` screen focused on productivity metrics instead of map-heavy UI.
- Removed map emphasis from the enlarged focus mode.
- Increased the size of the main time display for the detail view.
- Added a compact AI suggestion card for productivity guidance.
- Added `Live Sharing` toggle to the detail view.
- Added clearer session metrics:
  - elapsed session time
  - connected devices
  - focus score
- Added a visual session quality chart with 4 bars.

### Activities and Filters
- Made pill filters interactive in:
  - `Activities`
  - `Groups`
  - `GroupClub`
- Added active state behavior for topic pills.
- Connected `Activities` back navigation to the source screen, so it can return to either `Profile` or `Progress`.
- Added date-aware filtering when `Activities` is opened from Progress.
- Connected Progress date drilldowns to generated productivity activity data so focused days do not open as empty activity lists.

### Progress Screen
- Added an `Activities` action entry in `Progress`.
- Added annotation rows beneath `Focus volume`.
- Made the `Share` action in `Progress` open a share sheet.
- Made the May 2026 productivity calendar interactive by date.
- Added compact clickable tooltips on calendar dates showing the number of completed activities.
- Connected calendar tooltips to open `Activities` filtered to the selected date.
- Removed the unclear `Activities` count summary from the May 2026 header.
- Made `Focus volume` bars interactive with clickable tooltips.
- Connected `Focus volume` tooltips to open `Activities` filtered to the selected day.
- Added outside-click dismissal for calendar and focus-volume tooltips.
- Added a `Share Achievements` action with a top-5 achievement share template.
- Updated Progress and Achievements share templates to use a white preview background.
- Updated the Achievements share template to use icon-based rows with blue/yellow accents instead of numbered badges.

### Save / Edit Activity
- Reworked the visualization selector from a map-only concept to a broader activity visualization selector.
- Added selectable visualization modes:
  - `Route map`
  - `Focus bars`
  - `Device timeline`
  - `Score ring`
- Connected the selector to the preview area in both `SaveActivity` and `EditActivity`.
- Added confirm dialogs before destructive actions:
  - `Discard Activity`
  - `Delete Activity`
- Updated `How did that activity feel` to use a 1-10 effort scale with `Easy (1)`, `Moderate (5)`, and `Max Effort (10)` anchors.

### Feed
- Reworked the Feed header to remove the Prodak logo.
- Added a compact left/right header layout:
  - profile and search on the left
  - messages and notifications on the right
- Updated Feed header icons to use the requested Hugeicons variants and consistent `strokeWidth={2}`.
- Added a border-only profile avatar treatment without extra padding.

### Clubs
- Added a minimal club description directly below the club title.
- Updated the club description copy to: `A working environment initiative by and from HMIF.`
- Added club photo changing in `CreateClub`.
- Added simulated phone gallery selection for club photos through an image file picker.
- Added validation to `CreateClub` so `Choose your club’s productivity` must be selected before continuing.

### Connections
- Added a new `Connections` screen for:
  - `Following`
  - `Followers`
- Wired profile follower/following stats to open the new screen.
- Kept the screen aligned with the existing design system.

### Activity Detail
- Updated `ActivityDetail` to reflect multi-device productivity tracking.
- Reworked metric labels to be clearer and more contextual.
- Added tooltips explaining metric meaning.
- Renamed proof section to better match device-based tracking.

### Supporting Updates
- Updated copy and dummy data across the app to better match the productivity/multi-device context.
- Adjusted bottom nav and route handling so focus-related screens stay clean and default record entry returns to idle.
- Added reusable tooltip support to metric components.
- Made `Pill` interactive when used as a filter button.

## Verification
- `npm run build`
- `npm run lint`

## Notes
- This PR keeps the current design system and existing screen structure intact.
- Changes are mostly additive or localized to the screens involved in recording, activity review, progress, and connections.
