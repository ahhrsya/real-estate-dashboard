# Knowledge Base — PropTrack: Real Estate Lead & Viewing Workflow

## Domain Context

### The Problem Space
Real estate agents receive leads from multiple portals simultaneously — Zillow, Rightmove, Property Finder, Bayut — and track them via spreadsheets or disconnected CRMs. Viewings are scheduled via WhatsApp, offer negotiations happen over email threads, and managers have no visibility into pipeline health or agent performance. Deals fall through because of slow response times and disorganised follow-up.

### Who Uses This Product

**Real Estate Agent (web + mobile)**
- Manages 20–80 active leads simultaneously
- Needs: instant lead notification, quick viewing scheduling, offer tracking on the go
- Pain: Misses leads because portal emails go to spam; loses track of which leads saw which property

**Team Lead / Sales Manager (web dashboard)**
- Manages 5–20 agents across one or more offices
- Needs: agent performance visibility, pipeline health, deal forecasting
- Pain: No single view of team activity — relies on weekly Excel updates

**Brokerage Owner (web dashboard)**
- Monitors overall revenue, commission payouts, and market activity
- Needs: high-level deal flow, top performers, commission totals
- Pain: Can't see which agents are underperforming until month-end

---

## Core Concepts & Terminology

| Term | Definition |
|---|---|
| **Lead** | A potential buyer or renter who has enquired about a property |
| **Enquiry** | An inbound message or form submission from a portal |
| **Viewing** | A scheduled visit to a property by a lead with an agent |
| **Offer** | A formal proposal from a buyer to purchase/rent at a price |
| **Pipeline** | The full journey of a lead from enquiry to deal close |
| **Listing** | A property available for sale or rent on the market |
| **Portal** | A third-party property marketplace (Zillow, Rightmove, etc.) |
| **Commission** | Agent earnings as a % of the property sale/rental price |
| **Conversion rate** | % of leads that progress to viewing, offer, or close |
| **Days on market** | How long a listing has been active without selling |
| **Under offer** | Property for which an offer has been accepted, pending completion |
| **Off-plan** | A property sold before construction is complete (UAE market) |
| **Lead score** | A rating (hot/warm/cold) indicating buyer readiness |

---

## Dummy Data Reference

### Fictional Agency
**Meridian Real Estate Group** — offices in New York, Dubai, London

### Sample Agents
| Name | Office | Active Leads | Viewings MTD | Closings MTD | Commission MTD |
|---|---|---|---|---|---|
| Jessica Park | New York | 34 | 22 | 3 | $18,400 |
| Omar Al Farsi | Dubai | 48 | 31 | 5 | $42,000 |
| Claire Beaumont | London | 27 | 18 | 2 | £9,600 |
| Tyler Rhodes | New York | 19 | 12 | 1 | $6,200 |

### Sample Listings
| Property | Type | Price | Status | Enquiries |
|---|---|---|---|---|
| 42 Park Avenue, NYC | Condo | $2,400,000 | Available | 18 |
| Villa 7, Palm Jumeirah, Dubai | Villa | AED 12,500,000 | Under Offer | 44 |
| 14 Chelsea Mews, London | Townhouse | £1,850,000 | Available | 9 |
| Studio 8A, Downtown Dubai | Apartment | AED 1,200,000 | Let | 31 |
| 88 Riverside Drive, NYC | Penthouse | $5,900,000 | Available | 7 |

### Sample Leads (Inbox)
| Lead | Source | Interest | Score | Status |
|---|---|---|---|---|
| Ahmed Hassan | Bayut | Palm Jumeirah Villa, 5BR | Hot 🔥 | Viewing Scheduled |
| Sarah Mitchell | Zillow | Upper West Side, 3BR | Warm | New |
| James & Priya Patel | Rightmove | Chelsea, period property | Hot 🔥 | Offer Submitted |
| Ryan Carter | Realtor.com | Brooklyn, under $900k | Cold | Followed Up |

### Offer Pipeline Sample
| Property | Buyer | Offer | Asking | Stage |
|---|---|---|---|---|
| 42 Park Ave, NYC | Sarah & Tom Mitchell | $2,250,000 | $2,400,000 | Negotiating |
| Palm Villa 7, Dubai | Ahmed Hassan | AED 11,800,000 | AED 12,500,000 | Under Review |
| Chelsea Mews, London | James Patel | £1,800,000 | £1,850,000 | Accepted |

### Portal Sources (lead badges)
- Zillow (blue)
- Realtor.com (red)
- Trulia (green)
- Rightmove (green UK)
- Zoopla (purple)
- Property Finder (teal UAE)
- Bayut (orange UAE)
- Direct / Website (gray)

---

## Market Context

### US Market
- Buyer's agent commission: typically 2.5–3% of sale price
- Average days on market (2025): 38 days
- Digital lead response time benchmark: under 5 minutes for 50% higher conversion

### UAE Market
- Off-plan purchases common — buyers buy before construction completes
- High-net-worth international buyer segment prominent
- WhatsApp is the dominant communication channel for agents
- Multi-currency: AED, USD both displayed
- Arabic language used alongside English

### UK Market
- Letting agents charge 8–15% of annual rent for full management
- Right to Rent checks required by law
- Online viewings and video tours became standard post-2020

---

## Competitor Context
Real CRMs in this space: Follow Up Boss, Sierra Interactive, LionDesk, Propertybase, Salesforce for Real Estate. PropTrack is positioned as more modern, mobile-first, and portal-integrated than legacy tools.

---

## UI/UX Notes

### Property photography must dominate:
- Listings always show full-width or large photo cards — never text-only
- Photo carousel on property detail: swipeable, full-bleed
- Search results: grid with photo-first cards (real estate portal aesthetic)

### Lead response urgency:
- New leads should show "5 min ago" / "just now" timestamps with a pulse indicator
- Hot leads get a 🔥 badge and appear at top of inbox
- Overdue follow-ups: red indicator on cards

### Offer kanban:
- Drag cards between stages (visual only in dummy version)
- Each card shows: property photo thumbnail (small), buyer name, offer vs. asking (% diff in red/green)
- "Fallen Through" column styled in muted gray to reduce visual noise
