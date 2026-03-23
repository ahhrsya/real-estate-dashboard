import { Search, Bell, ChevronDown } from "lucide-react"

export function TopBar() {
  return (
    <div className="h-[88px] bg-brand-dark shrink-0 flex items-center justify-between px-8 text-white z-20">
      {/* Brand logo */}
      <div className="flex items-center gap-3 w-[260px] shrink-0">
        <div className="w-8 h-8 rounded-t-lg rounded-bl-lg rounded-br-sm bg-brand-orange relative flex items-center justify-center shadow-[inset_0_2px_4px_rgba(255,255,255,0.3)]">
          <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-b-[8px] border-transparent border-b-white absolute top-2.5"></div>
        </div>
        <h1 className="text-xl font-bold font-sans tracking-tight">
          Roemah
          <span className="text-[9px] bg-[#3B3B42] text-orange-400 px-1.5 py-0.5 rounded-md font-bold uppercase ml-2 align-middle border border-white/5 shadow-sm">
            Beta
          </span>
        </h1>
      </div>

      {/* Search Input */}
      <div className="flex-1 w-full max-w-2xl mx-12">
        <div className="bg-[#2A2B31] rounded-full h-[52px] flex items-center px-2 border border-white/10 shadow-inner">
          <input 
            type="text" 
            placeholder="Search Anything..." 
            className="bg-transparent text-sm text-gray-200 placeholder-gray-500 px-4 focus:outline-none flex-1 font-medium" 
          />
          <div className="w-px h-6 bg-white/10 mx-2"></div>
          <button className="text-sm text-gray-400 hover:text-white px-3 font-medium transition whitespace-nowrap">Add rooms</button>
          <div className="w-px h-6 bg-white/10 mx-2"></div>
          <button className="text-sm text-gray-400 hover:text-white px-3 font-medium transition whitespace-nowrap">Add guest</button>
          <button className="w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center text-white ml-2 hover:bg-orange-600 transition shadow-sm shrink-0">
            <Search className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-6 shrink-0">
        <button className="w-11 h-11 rounded-full bg-[#2A2B31] flex items-center justify-center text-gray-400 hover:text-white transition border border-white/5 relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-3 right-3 w-2 h-2 bg-brand-orange rounded-full"></span>
        </button>
        <div className="flex items-center gap-3 cursor-pointer group hover:bg-[#2A2B31] p-1.5 pr-3 rounded-full transition border border-transparent hover:border-white/5">
          <div className="w-10 h-10 rounded-full bg-teal-600 flex items-center justify-center text-white font-bold text-lg shadow-sm">
            <img src="https://ui-avatars.com/api/?name=Cansaas+Agency&background=0D9488&color=fff&rounded=true&bold=true" alt="Cansaas" className="w-full h-full rounded-full" />
          </div>
          <div className="hidden lg:block text-left mr-1">
            <p className="text-sm font-bold text-gray-100 group-hover:text-white transition leading-tight">Cansaas Agency</p>
            <p className="text-[11px] text-gray-400 font-medium">Platinum Account</p>
          </div>
          <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-white transition" />
        </div>
      </div>
    </div>
  )
}
