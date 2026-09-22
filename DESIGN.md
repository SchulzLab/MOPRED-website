---
name: MOPRED
description: A precise, collaborative interface for a multimodal medical-AI research consortium.
colors:
  deep-mopred-teal: "rgb(0 97 143)"
  network-blue: "rgb(75 142 192)"
  pale-cyan: "rgb(179 241 255)"
  cool-mist: "rgb(230 242 248)"
  muted-slate: "rgb(132 143 149)"
  paper-white: "rgb(255 255 255)"
  soft-white: "rgb(245 245 245)"
  ink-black: "rgb(0 0 0)"
  graphite: "rgb(95 95 95)"
typography:
  heading-large:
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "clamp(1.625rem, 1.477vw + 1.256rem, 2.438rem)"
    fontWeight: 700
    lineHeight: "clamp(2.113rem, 0.148vw + 2.076rem, 2.194rem)"
  heading-medium:
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "clamp(1.438rem, 0.909vw + 1.21rem, 1.938rem)"
    fontWeight: 700
    lineHeight: "clamp(1.744rem, -0.227vw + 1.926rem, 1.869rem)"
  eyebrow:
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "clamp(1.125rem, 0.227vw + 1.068rem, 1.25rem)"
    fontWeight: 300
    letterSpacing: "0.05em"
  body:
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "clamp(1rem, 0.909vw + 0.773rem, 1.5rem)"
    fontWeight: 400
    lineHeight: "clamp(1.3rem, 0.091vw + 1.277rem, 1.35rem)"
  readable-body:
    fontFamily: "ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1rem, 0.909vw + 0.773rem, 1.5rem)"
    fontWeight: 400
    lineHeight: "clamp(1.3rem, 0.091vw + 1.277rem, 1.35rem)"
  label:
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "clamp(0.813rem, 0.114vw + 0.784rem, 0.875rem)"
    fontWeight: 300
rounded:
  button: "0.25rem"
  card: "0.5rem"
  card-lg: "0.75rem"
  full: "9999px"
spacing:
  subheading: "0.5rem"
  heading: "2rem"
  paragraph: "1.25rem"
  highlight: "1.5rem"
  section: "4rem"
  navigation: "3rem"
components:
  button-primary:
    backgroundColor: "{colors.pale-cyan}"
    textColor: "{colors.ink-black}"
    rounded: "{rounded.button}"
    padding: "8px 24px"
  button-primary-hover:
    backgroundColor: "{colors.deep-mopred-teal}"
    textColor: "{colors.paper-white}"
  tag:
    backgroundColor: "transparent"
    textColor: "{colors.ink-black}"
    typography: "{typography.label}"
  card-timeline:
    backgroundColor: "{colors.deep-mopred-teal}"
    textColor: "{colors.paper-white}"
    rounded: "{rounded.card-lg}"
    padding: "16px"
---

# Design System: MOPRED

## Overview

**Creative North Star: "The Molecular Network"**

MOPRED presents itself as a structural, data-connective system rather than a marketing surface: monospace type reads like output from a research instrument, hexagonal icon badges echo molecular/lattice geometry, and a literal connector-and-node timeline traces the consortium's history as a network of linked events. The system is precise but not cold — buttons compress on press, navigation links grow an underline on hover, and section headers alternate between left- and right-aligned compositions rather than settling into a single rigid grid. It reads as a working scientific tool built by and for a collaborative research community, not a generic institutional brochure.

The system deliberately avoids the generic corporate/SaaS register: no soft gradient hero banners, no interchangeable stock-photo blue-and-white dashboards. Where imagery appears (hero photo, graphical abstract), it sits inside precise rounded containers rather than bleeding into decorative backgrounds.

**Key Characteristics:**
- Monospace-first typography, with a deliberate serif/sans switch (`.readable`) for long-form prose sections
- Hexagonal icon badges as the system's signature geometric motif
- Hashtag-prefixed tags and labels (`#Symposium`, `#OrganizerName`) used as a recurring metadata convention
- A literal node-and-connector timeline for chronological/history content
- Tactile, responsive micro-interactions on every actionable element (press-scale on buttons, underline-grow on nav links)
- Deliberately asymmetric section headers (right-aligned on desktop) rather than a single centered convention

## Colors

A narrow, cool-toned palette anchored by one deep brand teal, with pale cyan and near-white mist tones doing most of the surface work; near-flat neutrals (black/white/two greys) carry text and structure.

### Primary
- **Deep MOPRED Teal** (`rgb(0 97 143)` / `#00618F`): the brand anchor. Fills the site header/mobile nav bar, the hover state of primary buttons, and the background of timeline cards. Also the browser theme-color meta value — this is the color MOPRED "is."
- **Network Blue** (`rgb(75 142 192)` / `#4B8EC0`): a lighter structural blue. Used for eyebrow labels/subheadings (uppercase, small caps rhythm above headings), inline links inside body copy, and the hexagon icon badge fill.
- **Pale Cyan** (`rgb(179 241 255)` / `#B3F1FF`): the palest brand tint. Default (non-hover) primary button background, and the color of hashtag `#` prefixes on tags and organizer lists — a small, consistent accent that shows up wherever metadata is labeled.

### Neutral
- **Cool Mist** (`rgb(230 242 248)` / `#E6F2F8`): near-white pale blue. Background for `AccentBackground`-wrapped sections (graphical abstracts, CTA bands) and the detail box on event hero sections — MOPRED's version of a "card on tinted surface," not white-on-white.
- **Muted Slate** (`rgb(132 143 149)` / `#848F95`): a desaturated grey-blue. Used narrowly as the timeline's vertical connector line and thin section dividers.
- **Paper White** (`rgb(255 255 255)` / `#FFFFFF`) / **Soft White** (`rgb(245 245 245)` / `#F5F5F5`): page background and header/nav text (white), with soft white reserved for the nav-link hover underline against the dark header.
- **Ink Black** (`rgb(0 0 0)` / `#000000`) / **Graphite** (`rgb(95 95 95)` / `#5F5F5F`): primary body text and dividers (black); a secondary, currently lightly-used dark grey.

### Named Rules
**The Hashtag Rule.** Any place metadata is listed inline — event tags, organizer names, topic lists — is prefixed with a Pale Cyan `#`. It is the system's consistent way of marking "this is a label, not prose."

## Typography

**Body/Display Font:** ui-monospace stack (`ui-monospace, SFMono-Regular, Menlo, Consolas, monospace`) — this is the default for the entire site, headings included.
**Readable-mode Font:** ui-sans-serif system stack, applied only inside `.readable` containers (long-form prose: About page body copy, Legal Notice).

**Character:** Monospace-by-default gives the site its "research instrument" precision even in ordinary navigation and short copy; the readable-mode switch exists specifically to make dense paragraph reading comfortable without abandoning the system's identity in headings.

### Hierarchy
- **H1** (700, `clamp(1.625rem, 1.477vw + 1.256rem, 2.438rem)`): page/hero titles.
- **H2** (700, `clamp(1.438rem, 0.909vw + 1.21rem, 1.938rem)`): section titles.
- **H3** (400, `clamp(1.25rem, 0.568vw + 1.108rem, 1.563rem)`): sub-section titles (e.g. timeline entry titles, rendered semibold in practice).
- **H4** (300, `clamp(1.125rem, 0.227vw + 1.068rem, 1.25rem)`): eyebrow/kicker labels, typically uppercase and tinted Network Blue.
- **H5** (300, `clamp(1rem, 0.909vw + 0.773rem, 1.5rem)`): rarely used standalone; matches body scale.
- **H6 / address** (300, `clamp(0.813rem, 0.114vw + 0.784rem, 0.875rem)`): fine print, timestamps, addresses, event metadata lines.

### Named Rules
**The Readable Override Rule.** Inside a `.readable` container, body text switches to the sans-serif stack for comfortable long-form reading, but `h1`, `h2`, and `h6` stay on the monospace stack — headings keep the system's identity even where prose softens.

## Layout

Content sits in a `max-w-screen-xl` centered container with `px-4` gutters (`lg:px-0` once the container's own margin takes over). Vertical rhythm runs on a small named spacing scale rather than ad hoc values: `subheading` (0.5rem) → `paragraph`/`highlight` (1.25–1.5rem) → `heading` (2rem) → `navigation` (3rem) → `section` (4rem), applied as Tailwind margin utilities (`mb-section`, `mb-heading`, etc.).

Section headers are frequently right-aligned on desktop (`items-end`, `md:text-right`) while stacking left-aligned on mobile — an intentional asymmetry rather than a uniform centered/left convention. Event listings and hero layouts use CSS grid (e.g. an 8-column grid for the homepage's compressed event rows) to place date, title, and thumbnail independently rather than stacking them uniformly.

Mobile navigation is a fixed bottom bar (not a hamburger drawer); desktop navigation lives inline in the header.

### Named Rules
**The Semantic Spacing Rule.** Vertical spacing is chosen by semantic role (`mb-section`, `mb-heading`, `mb-paragraph`, ...) via CSS custom properties, not by raw Tailwind spacing scale numbers — new layout work should extend this named scale rather than reaching for arbitrary `mb-6`/`mb-10` values.

## Elevation & Depth

Currently minimal and functional: the system is flat at rest, and `shadow-md` (plus `drop-shadow-lg` on hexagon icon badges) appears only on buttons, cards, and highlighted content boxes — a signal of "this is interactive or worth noticing," not ambient decoration. Timeline node dots also carry a small shadow to lift them off the connector line.

**Forward note (confirmed direction, not yet implemented):** the site owner wants more elevation depth in future work than the current sparing use provides. Treat "flat except on interactive/highlighted elements" as the current baseline, not a ceiling — richer shadow/layering work is an open, intended direction for upcoming polish passes.

### Shadow Vocabulary
- **Interactive lift** (`box-shadow` via Tailwind `shadow-md`): buttons, timeline card boxes, event hero detail box, timeline node dots.
- **Badge lift** (`drop-shadow-lg`): the hexagon icon badge in `LogoTopic`.

## Shapes

Two coexisting form languages: soft rounded rectangles for content containers (`rounded-lg`/`rounded-xl` on cards, images, highlight boxes; small `rounded` on buttons), and a signature **hexagon clip-path** (`clip-path: polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%)`) reserved for icon badges — the system's one deliberately non-rectangular geometric motif, reinforcing the Molecular Network identity. Timeline node markers are full circles (`rounded-full`).

## Components

### Buttons
- **Shape:** small radius (`rounded`, ~4px).
- **Primary:** Pale Cyan background, Ink Black text, `shadow-md`, `px-6 py-2`, bold label, trailing icon (external-link glyph for outbound links, arrow for internal).
- **Hover:** background shifts to Deep MOPRED Teal, text flips to Paper White.
- **Press:** `active:scale-90` with a transform transition — a distinctly tactile compression, not just a color change.

### Tags
- **Style:** small, font-light label text with a Pale Cyan `#` prefix (`.event-tag` utility). No background, border, or pill shape — reads as inline metadata, not a chip/badge component.

### Cards / Containers
- **Timeline card:** Deep MOPRED Teal background, Paper White text, `rounded-xl`, `shadow-md`, alternates left/right along a central connector line with a circular node marker.
- **Highlight/detail box** (e.g. event hero date/location panel): Cool Mist background, `rounded-lg`, `shadow-md`, icon + text rows.
- **Accent section wrapper:** Cool Mist full-bleed background band (`AccentBackground`), used to set apart graphical abstracts and CTA bands from the white page background.

### Navigation
- **Desktop header:** Deep MOPRED Teal bar, Paper White text/logo, inline nav links.
- **Nav link hover/active state:** an absolutely-positioned underline bar that grows from 0 to full width on hover (`transition-[width]`), and is permanently full-width on the active route — no color change, only the underline signals state.
- **Mobile:** fixed bottom bar (Deep MOPRED Teal), not a slide-out drawer.

### Hexagon Icon Badge (signature component)
A hexagonal clip-path container (Network Blue fill) housing a small icon, used in `LogoTopic` to introduce the site's three core value-proposition blocks. This is the system's most distinctive custom shape and the clearest visual expression of the Molecular Network north star.

## Do's and Don'ts

### Do:
- **Do** prefix inline metadata (tags, organizer names, topic labels) with a Pale Cyan `#` (the Hashtag Rule).
- **Do** give every interactive element a tactile reaction on press/hover (button `active:scale-90`, nav underline growth) — nothing should feel visually static when touched.
- **Do** use the hexagon clip-path exclusively for icon badges; it is the system's one signature non-rectangular shape and loses its meaning if applied broadly.
- **Do** use the named spacing scale (`mb-section`, `mb-heading`, etc.) for vertical rhythm rather than arbitrary spacing utilities.
- **Do** keep headings on the monospace stack even inside `.readable` long-form sections (the Readable Override Rule).

### Don't:
- **Don't** default to a generic corporate/SaaS look — no soft gradient hero banners, no interchangeable stock-photo dashboards; this was explicitly named as an anti-reference.
- **Don't** apply heavy, ambient, or decorative shadows everywhere — elevation stays a deliberate signal, even as the system moves toward "a bit more depth" in future passes.
- **Don't** turn tags/labels into pill-shaped chips with background fills; the hashtag-prefixed plain-text convention is the established pattern.
- **Don't** center every section header uniformly; the established rhythm alternates left-aligned (mobile) and right-aligned (desktop) headers rather than defaulting to center.
