import React from "react"
import { Routes, Route } from "react-router-dom"
import { Sidebar, TopBar } from "./components/Layout"
import { Dashboard } from "./components/Dashboard"
import { EmptyState } from "./components/EmptyState"

function App() {
  return (
    <div className="flex h-screen bg-bg-page font-sans text-brand-navy selection:bg-brand-gold/20">
      <Sidebar />
      <div className="flex-1 flex flex-col pl-[260px] overflow-hidden">
        <TopBar />
        <main className="flex-1 overflow-y-auto relative">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/inbox" element={<div className="p-8"><EmptyState title="Lead Inbox" description="Inbox leads filterable by portal will be developed here. Data is merged from Zillow, Rightmove, etc." /></div>} />
            <Route path="/listings" element={<div className="p-8"><EmptyState title="Property Listings" description="Grid view to search and filter active property listings." /></div>} />
            <Route path="/viewings" element={<div className="p-8"><EmptyState title="Viewing Scheduler" description="Calendar-based scheduler for property viewings with leads." /></div>} />
            <Route path="/offers" element={<div className="p-8"><EmptyState title="Offer Pipeline" description="Kanban board implementation for dragging offers through stages." /></div>} />
            <Route path="/performance" element={<div className="p-8"><EmptyState title="Agent Performance" description="Leaderboard and detailed conversion reports." /></div>} />
            <Route path="/commission" element={<div className="p-8"><EmptyState title="Commission Tracker" description="Monthly commission payouts calculation and deals chart." /></div>} />
            <Route path="/settings" element={<div className="p-8"><EmptyState title="Integrations & Settings" description="Setup portal API integrations and notification rules." /></div>} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App
