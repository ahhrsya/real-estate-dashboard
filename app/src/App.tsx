import React from "react"
import { Sidebar, TopBar } from "./components/Layout"
import { Dashboard } from "./components/Dashboard"

function App() {
  return (
    <div className="flex h-screen bg-bg-page font-sans text-brand-navy selection:bg-brand-gold/20">
      <Sidebar />
      <div className="flex-1 flex flex-col pl-[260px] overflow-hidden">
        <TopBar />
        <main className="flex-1 overflow-y-auto">
          <Dashboard />
        </main>
      </div>
    </div>
  )
}

export default App
