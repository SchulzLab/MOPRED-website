# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary audience is the MOPRED research community: researchers, PhD/graduate students, and faculty who are existing or prospective members. They come to the site to learn about the initiative, register for and follow symposia/hackathons, see calls for abstracts and registration deadlines, and track the consortium's ongoing activities.

Secondary audiences (served, not optimized-for first): university leadership/funders and industry partners assessing credibility and impact; general public/press wanting a plain-language overview.

## Product Purpose

MOPRED (funded by Goethe University Frankfurt, initiative started 1.1.2023) exists to advance multimodal predictive modeling in medicine — applying AI/ML to integrate multiple types of biomedical data. The website's job is to communicate the initiative's mission, publish its symposia and hackathon events (program, keynotes, registration, deadlines), and give the community a way to engage (register, join).

Success is measured by event participation (registrations, abstract submissions) and by the site credibly representing MOPRED to funders/partners.

## Positioning

MOPRED's distinct claim combines two things that reinforce each other and must both be represented:

1. **Multimodal data integration as the actual mechanism** — not "AI for medicine" in general, but developing methods that integrate genomic, imaging, clinical, pharmacokinetic, and other data types together. A modality is defined as one experimental measurement on a patient/model organism; multimodal means integrating at least two.
2. **A Frankfurt-based cross-institutional community**, expressed through recurring symposia and hackathons that bring together students, researchers, and faculty — the initiative's activity and credibility are visible through its event history, not just its research claims.

## Operating Context

- Content is organized as Astro content collections: `symposia` and `hackathons`, each event with its own detail page (program, keynotes/speakers, registration deadlines, abstract deadlines, selection committee, sponsors, thumbnail).
- Events recur annually/biannually (symposia held 2023, 2024, 2025, with the 4th symposium scheduled 2026-09-30; hackathons held 2023, 2024).
- Organizers/committee members are named individuals (e.g., Florian Buettner, Marcel Schulz, Lena Wiese, Andreas Chiocchetti) — real people, not placeholders.
- Registration flows link out to an external registration system (cpi-online.de).
- The Legal Notice (Impressum) is governed by Goethe University Frankfurt's institutional requirements (§ 5 TMG) and is not content this project authors independently.

## Capabilities and Constraints

- Never fabricate content: no invented testimonials, statistics, sponsors, speakers, or event details. Event facts (dates, organizers, committees, sponsors) must come from real, provided data only.
- Formal accessibility requirements apply to the site (specific standard not yet named — treat as a real, binding constraint rather than best-effort; confirm the exact standard, e.g. WCAG/BITV level, before final accessibility sign-off).
- Branding (visual identity: logo, colors, marks) is supplied by the user rather than invented by design work — treat existing brand assets (`public/logo_*.svg`, favicon) as fixed identity, not raw material to redesign.
- German-language legal content (Impressum) coexists with an otherwise English-language site; this split is intentional and should be preserved.

## Brand Commitments

- Name: MOPRED. Existing logo and favicon assets are already provided (`public/logo_horizontal_300x140.svg`, `public/logo_160x50_bg_dark.svg`, `public/favicon_128x128_light.svg`) and are binding — the user supplies branding rather than delegating it to design work.
- Affiliated with and operating under Goethe University Frankfurt.

## Evidence on Hand

- Real event content for four symposia (2023, 2024, 2025, 2026-planned) and two hackathons (2023, 2024) exists under `src/content/symposia/` and `src/content/hackathons/`, including real organizer and committee names, real dates, and real registration links.
- No testimonials, case studies, or press coverage exist yet — do not fabricate any.
- Legal/Impressum content is real, sourced from Goethe University Frankfurt's institutional requirements.

## Product Principles

1. Represent MOPRED's mechanism accurately: multimodal data integration, not generic "AI in medicine."
2. Make the community and its cadence of real events (symposia, hackathons) visible and central — the initiative's credibility is built through demonstrated activity, not claims alone.
3. Never fabricate facts, people, sponsors, or outcomes; all event and organizational content must trace to real, provided data.
4. Preserve the user-supplied brand identity as fixed; design work should express it, not replace it.
5. Serve the research-community audience first (event discovery, registration, program details), while remaining legible to funders/partners and the general public as secondary readers.

## Accessibility & Inclusion

A formal accessibility standard applies to this site (per user confirmation), though the specific standard (e.g., WCAG 2.1 AA, BITV 2.0) was not specified during this session — confirm and record the exact standard before treating any accessibility work as complete.
