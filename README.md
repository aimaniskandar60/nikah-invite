# Nikah Invitation Project

This repository contains the invitation website for the nikah event. It is built with Next.js (App Router) and currently uses Google Forms for RSVP collection.

## Quick Start

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open `http://localhost:3000` in your browser.

## Current Pages

- `/` Home
- `/event-details` Event schedule and venue details
- `/rsvp` Embedded Google Form with fallback link
- `/faq` Common questions and guidance
- `/confirmation` Manual thank-you page

## Content Files to Edit

- `src/content/site-content.ts`
- `src/content/rsvp-config.ts`

Update these files first when changing names, dates, venues, contact details, FAQ text, or RSVP messaging.

## RSVP via Google Forms

This project uses the published Google Form URL from `src/content/rsvp-config.ts`.

Before launch, verify in Google Forms settings:

1. Sign-in is not required for submission.
2. The form is publicly accessible in an incognito window.
3. Responses are linked to a Google Sheet.
4. Confirmation message text is finalized.

## Launch Checklist

1. Replace all placeholder event and contact details.
2. Test RSVP submit flow on desktop and mobile.
3. Confirm response rows appear correctly in Google Sheets.
4. Deploy on Vercel and validate production URL.
5. Share invitation URL with guests.
