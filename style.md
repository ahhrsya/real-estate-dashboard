# Style Guide — PropTrack: Real Estate Lead & Viewing Workflow

## Visual Identity

**Design Language:** Luxury property meets modern SaaS. Photography-forward with a premium, editorial aesthetic. Deep navy with warm gold accents — confident, high-value. Think Airbnb Luxe meets a top-tier real estate portal. Light mode primary; dark sidebar option.

**Mood Board Keywords:** Deep navy, warm gold, crisp white, full-bleed photos, editorial grid, premium confidence

---

## Color Palette

### Primary Colors
| Token | Hex | Usage |
|---|---|---|
| `brand-navy` | `#0C1B33` | Primary brand, sidebar, headings |
| `brand-gold` | `#C9A84C` | Accent CTA, premium badges, highlights |
| `brand-gold-light` | `#FDF6E3` | Gold tint backgrounds |
| `bg-white` | `#FFFFFF` | Main surface |
| `bg-page` | `#F7F8FA` | App background |
| `bg-sidebar` | `#0C1B33` | Dark sidebar |

### Lead Score Colors
| Score | Color | Badge Style |
|---|---|---|
| Hot 🔥 | `#EF4444` red | Filled red pill |
| Warm | `#F59E0B` amber | Filled amber pill |
| Cold | `#94A3B8` slate | Outline gray pill |

### Offer Stage Colors (Kanban)
| Stage | Header Color |
|---|---|
| Offer Submitted | `#DBEAFE` blue-100 |
| Under Review | `#FEF3C7` amber-100 |
| Negotiating | `#FED7AA` orange-100 |
| Accepted | `#D1FAE5` green-100 |
| Fallen Through | `#F1F5F9` slate-100 (muted) |
| Completed | `#DCFCE7` green-50 |

### Portal Source Badge Colors
```
Zillow:           bg-blue-600
Realtor.com:      bg-red-600
Trulia:           bg-green-600
Rightmove:        bg-green-700
Zoopla:           bg-purple-600
Property Finder:  bg-teal-600
Bayut:            bg-orange-500
Direct:           bg-slate-500
```
All portal badges: white text, `rounded-full px-2 py-0.5 text-xs font-bold`

---

## Typography

### Font Stack
```css
/* Display / Hero headings */
font-family: 'Playfair Display', Georgia, serif;

/* UI / Body */
font-family: 'Inter', system-ui, sans-serif;

/* Data: prices, IDs, commissions */
font-family: 'IBM Plex Mono', monospace;
```
> Note: Playfair Display for hero headlines gives the editorial, luxury-property feel. All dashboard UI uses Inter.

### Type Scale
| Role | Class | Notes |
|---|---|---|
| Hero H1 | `text-6xl font-bold` (Playfair) | Landing page only |
| Page Title | `text-2xl font-bold` (Inter) | Dashboard section headers |
| Property Price | `text-2xl font-bold font-mono` | Always monospace, navy or gold |
| Card Title | `text-base font-semibold` | Property address, lead name |
| Body | `text-sm` | Default content |
| Caption | `text-xs text-gray-400` | Source, timestamp |
| Commission | `text-lg font-bold font-mono text-gold` | Commission amounts |

---

## Spacing & Layout

### Dashboard
- **Sidebar:** 260px dark navy, white icon + label text
- **Top bar:** 60px white, search + new lead button + agent avatar
- **Page content:** `px-8 py-6 max-w-screen-xl`
- **KPI row:** 4-column grid, `gap-5`
- **Property grid:** `grid grid-cols-3 gap-6` (listing cards)
- **Card padding:** `p-5`

### Kanban (Offer Pipeline)
- Columns: horizontal scroll, each `w-72` (288px), `min-h-[600px]`
- Column header: colored top border (4px), stage name, count badge
- Cards: `bg-white rounded-xl shadow-sm p-4 mb-3`
- Drag handle: subtle `⠿` icon top-right

### Mobile (Agent App)
- **Bottom nav:** 5 tabs — Leads, Properties, Viewings, Deals, Profile
- **Lead cards:** Full-width swipeable, `rounded-2xl shadow-md mx-4 my-2`
- **Property cards:** Full-width photo-top card, 16:9 image ratio
- **Action bar:** Floating bottom action row (call / WhatsApp / email)

---

## Component Styles

### Property Listing Card (web grid)
```
rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow
bg-white cursor-pointer

Image: h-48 w-full object-cover
Body: p-4
  Price: text-xl font-bold font-mono text-navy
  Address: text-sm text-gray-600 mt-1
  Specs row: beds · baths · sqft — text-xs text-gray-400 flex gap-3
  Status badge: absolute top-3 left-3
  Enquiry count: absolute top-3 right-3 bg-white/80 rounded-full px-2 py-0.5 text-xs
```

### Lead Inbox Card
```
bg-white rounded-xl border border-gray-100 shadow-sm p-4
flex gap-3 items-start hover:border-navy/20 hover:shadow-md transition

Left: avatar circle (initials, navy bg)
Center: name (bold), property interest (sm gray), source badge
Right: timestamp (xs muted) + lead score badge
Bottom strip: quick actions on hover (Call / Schedule / Assign)
```

### Agent Performance Row (leaderboard)
```
flex items-center gap-4 px-4 py-3 border-b border-gray-50
Rank number: text-2xl font-bold text-gray-200 w-8 (ghosted rank)
Avatar: w-10 h-10 rounded-full
Name + title: font-semibold / text-xs text-gray-500
Stats: mono text, right-aligned columns (leads / viewings / closings / commission)
Top agent: left-border 3px gold + bg-gold-50
```

### Dark Sidebar (nav)
```
bg-[#0C1B33] text-white w-64 flex flex-col
Logo: px-6 py-5 text-white font-bold text-xl
Nav items: px-4 py-2.5 rounded-lg mx-2 text-sm font-medium
  Active: bg-white/10 text-white
  Inactive: text-white/60 hover:text-white hover:bg-white/5
Icon: w-5 h-5 mr-3
Bottom: agent avatar card with name + role
```

### Gold CTA Button
```
bg-[#C9A84C] hover:bg-[#B8943A] text-white font-semibold
px-5 py-2.5 rounded-xl shadow-sm hover:shadow-md transition
```

---

## Landing Page Specific

### Hero
- Full-bleed luxury interior photo (high-res placeholder — living room, ocean view, etc.)
- Dark navy gradient overlay: `from-navy/80 via-navy/40 to-transparent`
- Text: white, left-aligned on overlay
- Serif headline (Playfair Display): "Close More Deals, Faster"
- Dual CTA: Gold filled "Start Free Trial" + white ghost "Watch Demo"

### Property Photography Guidelines
- Always 16:9 or 3:2 crop ratio
- Only high-quality interior/exterior placeholder images
- Never use generic stock business photos — always property imagery
- Slight vignette on card hover to add depth

### Pricing Cards
- Middle "Team" card: gold ring `ring-2 ring-[#C9A84C]` + "Most Popular" gold badge
- Annual toggle shows 20% discount with strikethrough

---

## Iconography

- **Library:** Lucide Icons
- **Key icons:** `home`, `map-pin`, `calendar`, `users`, `trending-up`, `star`, `phone`, `message-circle`, `file-text`, `award`
- **Sidebar icons:** Outline, white
- **Portal logos:** SVG wordmarks, colored
- **Sizes:** `w-5 h-5` standard, `w-8 h-8` feature card

---

## Animation & Interaction

| Element | Animation |
|---|---|
| Property card hover | Shadow deepens + slight scale 1.01 |
| Lead score badge | Pulse ring on "Hot" leads |
| Kanban drag | Card lifts with shadow, column highlights on hover |
| Photo gallery | Cross-fade transition between images |
| Offer accepted | Gold confetti burst (subtle) |
| New lead notification | Slide-in toast from top-right with source badge |

---

## UAE / International Considerations

- Price display: show both AED and USD with small conversion note
- Property size: sqft primary for US, m² for UAE/EU (toggle)
- RTL layout: sidebar and nav elements mirror for Arabic UI version
- WhatsApp CTA: prominent in lead actions (dominant channel in UAE)
- Luxury tier badge: "Premium Listing" with gold star icon for high-value properties
