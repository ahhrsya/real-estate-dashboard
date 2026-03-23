# PRD — PropTrack: Real Estate Lead & Viewing Workflow

**Target Market:** US real estate agencies, UAE luxury property groups, UK estate agents
**Portfolio Purpose:** Dribbble/Behance showcase — frontend only, dummy data
**Tech Stack:** React + Tailwind CSS
**Regions:** North America (primary), Middle East/UAE (secondary)

---

## 1. Product Overview

PropTrack is a real estate CRM and viewing management platform for agencies and brokers. Agents capture leads from portals, schedule property viewings, track buyer/renter journeys, manage offer pipelines, and report on sales performance. For UAE: premium brand feel, multi-language readiness, and luxury property photography front and centre.

**Core Value Props:**
- Unified lead inbox from all portals (Zillow, Rightmove, Property Finder, etc.)
- One-click viewing scheduling with automated confirmations
- Offer and negotiation pipeline with status tracking
- Property listing management with photo galleries
- Agent performance leaderboard and commission tracking

---

## 2. Landing Page

**Goal:** Convert agency owners and team leads — demo or free trial
**Tone:** Premium, aspirational, property-forward — high-quality photography aesthetic
**Key Sections:**

| Section | Description |
|---|---|
| Hero | Full-bleed luxury property photo BG + "Close More Deals, Faster" headline + "Start Free Trial" CTA |
| Lead source logos | Zillow, Rightmove, Bayut, Property Finder, Realtor.com logos row |
| 3-column feature strip | Lead Inbox / Viewing Scheduler / Offer Pipeline |
| Dashboard preview | Browser-framed screenshot of the agent dashboard |
| Agent testimonials | 2 quotes from fictional top-performing agents with photo |
| "How it works" | 4-step horizontal flow: Capture Lead → Schedule Viewing → Track Offer → Close Deal |
| Pricing | 3 tiers: Agent ($59/mo), Team ($199/mo), Brokerage (custom) |
| UAE/International section | "Multi-currency, multi-language, built for global brokerages" |
| Footer | Links, "Book a Demo" CTA |

---

## 3. Web App / Dashboard — 10 Pages

### 3.1 Agent Home Dashboard
- **Purpose:** Daily performance snapshot for individual agents
- **Key elements:** KPI row (leads today, viewings this week, active offers, closed MTD), lead pipeline funnel chart, today's viewing schedule (timeline view), recent activity feed, top listings by enquiry count

### 3.2 Lead Inbox
- **Purpose:** Unified inbox of all inbound leads from all portal sources
- **Key elements:** Lead cards (name, phone, source badge, property interest, timestamp, status), filter by source / status / agent, lead detail slide-out panel (contact info, notes, history, quick actions: call / schedule viewing / assign), bulk assign button, lead scoring badge

### 3.3 Lead Detail / CRM Profile
- **Purpose:** Full buyer/renter record and journey history
- **Key elements:** Header (name, contact, source, lead score, assigned agent), tab nav: Overview / Viewings / Offers / Notes / Documents. Overview: budget range, requirements, timeline. Viewings: list of scheduled and past viewings. Offers: any submitted offers. Notes: agent notes timeline.

### 3.4 Property Listings
- **Purpose:** Manage the agency's property portfolio
- **Key elements:** Grid/list toggle view of properties (photo, address, price, status: Available/Under Offer/Sold/Let), filter by type/price/status/agent, "Add Listing" button, sort by newest/price/enquiries

### 3.5 Property Detail
- **Purpose:** Full property record and performance
- **Key elements:** Photo gallery carousel, property specs (beds, baths, sqft, price), description editor, status badge, linked viewings list, enquiry count, listing source toggles (published to which portals), "Edit Listing" and "Mark Sold" actions

### 3.6 Viewing Scheduler
- **Purpose:** Manage all property viewings
- **Key elements:** Calendar view (agent lanes), viewing cards (property photo thumbnail, lead name, time, status: Scheduled/Completed/No-Show/Cancelled), "Schedule Viewing" modal (select lead, property, agent, date/time), automated confirmation email toggle

### 3.7 Offer Pipeline
- **Purpose:** Track all offers from submission to close
- **Key elements:** Kanban board with columns: Offer Submitted / Under Review / Negotiating / Accepted / Fallen Through / Completed. Card per offer shows: property address, buyer name, offer amount vs. asking price, days in stage. Click card for full offer detail and history.

### 3.8 Agent Performance
- **Purpose:** Team and individual agent analytics
- **Key elements:** Leaderboard table (agent name, leads, viewings, offers, closings, commission MTD), conversion funnel per agent, performance chart (MTD vs. last month), filter by date range, export report

### 3.9 Commission & Deals Tracker
- **Purpose:** Track closed deals and commission payouts
- **Key elements:** Deals table (property, buyer, closing date, sale price, commission %, commission amount, status: Pending/Paid), total commission MTD card, chart of commission over time, "Add Deal" button

### 3.10 Settings — Portal Integrations & Notifications
- **Purpose:** Manage lead source connections and alerts
- **Key elements:** Portal integration cards (Zillow, Rightmove, Property Finder, Bayut — status toggle), API key input per portal, lead routing rules (assign by zone / round-robin / manual), notification preferences (new lead, viewing reminder, offer update)

---

## 4. Mobile App — 20 Screens (Agent-facing)

| # | Screen | Description |
|---|---|---|
| 1 | Splash | PropTrack logo + luxury property photo fade |
| 2 | Login | Email + password, "Continue with Google" |
| 3 | Home | Today's summary: new leads, viewings today, open offers |
| 4 | Lead Inbox | Swipeable lead cards with source badge and lead score |
| 5 | Lead Detail | Contact info, requirements, quick action bar (call/WhatsApp/email) |
| 6 | Add Lead | Quick lead capture form: name, phone, source, property interest |
| 7 | Property Search | Search + filter properties by type, price, beds |
| 8 | Property Card | Photo gallery swipe, specs, quick "Schedule Viewing" CTA |
| 9 | Schedule Viewing | Date picker + time slots + lead selector — 3-step form |
| 10 | Viewing Confirmation | Summary screen + share via WhatsApp button |
| 11 | Today's Viewings | Timeline list of scheduled viewings with map thumbnails |
| 12 | Viewing Check-In | "Arrived at property" confirmation + lead notes quick entry |
| 13 | Post-Viewing Feedback | Rating (hot/warm/cold) + notes + "Submit Offer" shortcut |
| 14 | Offer Pipeline | Horizontal kanban scroll — offer cards per stage |
| 15 | Submit Offer | Amount input, contingencies, cover note — quick form |
| 16 | Offer Detail | Offer history, negotiation thread, accept/counter actions |
| 17 | My Performance | Personal stats: leads, viewings, closings, commission MTD |
| 18 | Notifications | New leads, viewing reminders, offer updates feed |
| 19 | Property Map View | Map with listing pins, cluster groups, tap to preview card |
| 20 | Profile & Settings | Photo, contact info, notification prefs, language, logout |

---

## 5. Design Constraints

- All data is dummy/fictional — no real API calls
- React + Tailwind CSS, component-based
- Mobile screens at 390×844px (iPhone 14 viewport)
- Dashboard at 1440px wide desktop
- Property photography: use high-quality placeholder images (luxury homes)
- Map: static placeholder or Leaflet with dummy markers
- UAE variant: RTL layout awareness noted in style guide
