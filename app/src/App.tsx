import { Routes, Route } from "react-router-dom"
import { TopBar } from "./components/Layout"
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
    <div className="min-h-screen bg-brand-bg xl:p-8 flex items-center justify-center font-sans tracking-tight text-gray-800 selection:bg-brand-orange/20">
      <div className="w-full max-w-[1550px] md:h-[92vh] flex flex-col xl:rounded-[32px] overflow-hidden bg-white xl:shadow-2xl ring-1 ring-black/5">
        <TopBar />
        <main className="flex-1 overflow-hidden relative border-t border-white/5">
          <Routes>
            <Route path="/" element={<PropertyListings />} />
            <Route path="/dashboard" element={<Dashboard />} />
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
