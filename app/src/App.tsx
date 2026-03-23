import { Routes, Route } from "react-router-dom"
import { Sidebar, TopBar } from "./components/Layout"
import { Dashboard } from "./components/Dashboard"
import { LeadInbox } from "./components/pages/LeadInbox"
import { PropertyListings } from "./components/pages/PropertyListings"
import { ViewingScheduler } from "./components/pages/ViewingScheduler"
import { OfferPipeline } from "./components/pages/OfferPipeline"
import { AgentPerformance } from "./components/pages/AgentPerformance"
import { CommissionTracker } from "./components/pages/CommissionTracker"
import { Settings } from "./components/pages/Settings"
import { PropertyDetail } from "./components/pages/PropertyDetail"

function App() {
  return (
    <div className="flex h-screen bg-bg-page font-sans text-brand-navy selection:bg-brand-gold/20">
      <Sidebar />
      <div className="flex-1 flex flex-col pl-[260px] overflow-hidden">
        <TopBar />
        <main className="flex-1 overflow-y-auto relative">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/inbox" element={<LeadInbox />} />
            <Route path="/listings" element={<PropertyListings />} />
            <Route path="/properties/:id" element={<PropertyDetail />} />
            <Route path="/viewings" element={<ViewingScheduler />} />
            <Route path="/offers" element={<OfferPipeline />} />
            <Route path="/performance" element={<AgentPerformance />} />
            <Route path="/commission" element={<CommissionTracker />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App
