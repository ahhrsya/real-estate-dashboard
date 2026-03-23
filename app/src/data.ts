export const agents = [
  { id: 1, name: "Jessica Park", title: "Senior Agent", leads: 34, viewings: 22, offers: 7, closings: 3, commission: 18400, avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d" },
];

export const kpiData = [
  { label: "Leads Today", value: "24", trend: "+12%", trendUp: true },
  { label: "Viewings this week", value: "18", trend: "+4%", trendUp: true },
  { label: "Active Offers", value: "11", trend: "-2", trendUp: false },
  { label: "Closed MTD", value: "3", trend: "0", trendUp: true },
];

export const topListings = [
  {
    id: 1,
    address: "42 Park Avenue, NYC",
    price: "$2,400,000",
    beds: 3,
    baths: 2,
    sqft: 2100,
    status: "Available",
    enquiries: 18,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&w=500&q=80"
  },
  {
    id: 2,
    address: "Villa 7, Palm Jumeirah",
    price: "AED 12.5M",
    beds: 5,
    baths: 6,
    sqft: 6500,
    status: "Under Offer",
    enquiries: 44,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&w=500&q=80"
  },
];

export const funnelData = [
  { stage: "New Leads", value: 120, fill: "#0C1B33" },
  { stage: "Contacted", value: 85, fill: "#1E3B70" },
  { stage: "Viewing", value: 45, fill: "#3A60A6" },
  { stage: "Offer", value: 18, fill: "#C9A84C" },
  { stage: "Closed", value: 5, fill: "#F59E0B" }
];

export const todaysViewings = [
  { id: 1, leadName: "Ahmed Hassan", property: "Villa 7, Palm Jumeirah", time: "10:00 AM", status: "Scheduled", source: "Bayut", badge: "Hot" },
  { id: 2, leadName: "Sarah Mitchell", property: "Upper West Side, 3BR", time: "1:30 PM", status: "Completed", source: "Zillow", badge: "Warm" },
  { id: 3, leadName: "James Patel", property: "Chelsea Mews", time: "3:00 PM", status: "Scheduled", source: "Rightmove", badge: "Hot" },
];

export const recentActivities = [
  { id: 1, type: "lead", message: "New lead from Property Finder for Studio 8A", time: "5 min ago", agent: "Omar Al Farsi" },
  { id: 2, type: "offer", message: "Offer submitted for 42 Park Ave ($2.25M)", time: "1 hour ago", agent: "Jessica Park" },
  { id: 3, type: "viewing", message: "Viewing completed at 14 Chelsea Mews", time: "2 hours ago", agent: "Claire Beaumont" },
  { id: 4, type: "close", message: "Deal closed for 88 Riverside Drive", time: "Yesterday", agent: "Tyler Rhodes" },
];
