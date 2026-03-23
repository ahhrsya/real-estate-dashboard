import React from "react"
import { Link, useLocation } from "react-router-dom"
import { LayoutDashboard, Users, Grid, Calendar, Award, TrendingUp, Search, Bell, DollarSign, Settings, Map as MapIcon } from "lucide-react"

export function Sidebar() {
  const location = useLocation()
  
  const navItems = [
    { label: "Dashboard", icon: LayoutDashboard, path: "/" },
    { label: "Lead Inbox", icon: Users, path: "/inbox" },
    { label: "Listings", icon: Grid, path: "/listings" },
    { label: "Viewings", icon: Calendar, path: "/viewings" },
    { label: "Offers", icon: TrendingUp, path: "/offers" },
    { label: "Performance", icon: Award, path: "/performance" },
    { label: "Commission", icon: DollarSign, path: "/commission" },
    { label: "Settings", icon: Settings, path: "/settings" },
  ]

  return (
    <div className="w-[260px] bg-brand-navy text-white h-screen flex flex-col fixed left-0 top-0">
      <div className="px-6 py-8">
        <h1 className="text-2xl font-serif font-bold tracking-wide">PropTrack<span className="text-brand-gold">.</span></h1>
      </div>
      
      <nav className="flex-1 px-4 space-y-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path
          return (
            <Link 
              key={item.label}
              to={item.path}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${isActive ? 'bg-white/10 text-white font-semibold' : 'text-white/60 hover:text-white hover:bg-white/5'}`}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-sm">{item.label}</span>
            </Link>
          )
        })}
      </nav>

      <div className="p-6">
        <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl">
          <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="Agent" className="w-10 h-10 rounded-full object-cover border-2 border-brand-gold/50" />
          <div className="text-left">
            <p className="text-sm font-semibold">Jessica Park</p>
            <p className="text-xs text-white/50">Senior Agent, NYC</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export function TopBar() {
  return (
    <div className="h-[76px] bg-white border-b border-gray-100 flex items-center justify-between px-8 sticky top-0 z-10 w-full">
      <div className="flex-1 max-w-xl relative">
        <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input 
          type="text" 
          placeholder="Search leads, properties, or offers..." 
          className="w-full bg-bg-page border-none rounded-full py-2.5 pl-10 pr-4 text-sm focus:ring-2 focus:ring-brand-gold/50 outline-none"
        />
      </div>
      <div className="flex items-center gap-6 pl-8">
        <button className="bg-brand-gold hover:bg-brand-gold/90 text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-sm transition transform hover:scale-105">
          + New Lead
        </button>
        <button className="relative text-gray-400 hover:text-brand-navy transition">
          <Bell className="w-6 h-6" />
          <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
      </div>
    </div>
  )
}
