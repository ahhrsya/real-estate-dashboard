import React, { useState } from "react"
import { ChevronLeft, ChevronRight, SlidersHorizontal, MapPin, ChevronDown, CheckSquare, Square, Heart, Plus, Minus, Check } from "lucide-react"
import { Button } from "../ui/button"

export function MapSearch() {
  const [activeCategory, setActiveCategory] = useState("Large house")
  const categories = ["Large house", "Small House", "Residence", "Pool", "Cabin"]

  const properties = [
    {
      id: 1,
      title: "Four Season Residence",
      location: "Yogyakarta, ID",
      price: "$3120,00",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
      agent: "James Harden",
      agentImg: "https://i.pravatar.cc/150?u=a042581f4e290267041"
    },
    {
      id: 2,
      title: "Artotel Residence",
      location: "Yogyakarta, ID",
      price: "$2342,00",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800",
      agent: "Momon",
      agentImg: "https://i.pravatar.cc/150?u=a042581f4e290267042"
    },
    {
      id: 3,
      title: "Novo Real Estate",
      location: "Yogyakarta, ID",
      price: "$1530,00",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800",
      agent: "James Harden",
      agentImg: "https://i.pravatar.cc/150?u=a042581f4e290267041"
    },
    {
      id: 4,
      title: "Eco Green Lodge",
      location: "Yogyakarta, ID",
      price: "$1850,00",
      image: "https://images.unsplash.com/photo-1583608205712-bea724b7a2bb?auto=format&fit=crop&q=80&w=800",
      agent: "Sarah Li",
      agentImg: "https://i.pravatar.cc/150?u=a042581f4e290267043"
    }
  ]

  return (
    <div className="flex h-[calc(100vh-76px)] overflow-hidden w-full bg-white">
      {/* LEFT COLUMN: Filters & Grid */}
      <div className="w-[55%] flex flex-col h-full bg-white border-r border-gray-100">
        <div className="p-6 border-b border-gray-50 flex-shrink-0">
          
          {/* Top Pill Categories */}
          <div className="flex items-center gap-3 overflow-x-auto custom-scrollbar pb-2">
            {categories.map((cat) => (
              <button 
                key={cat} 
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-semibold transition border ${activeCategory === cat ? 'bg-blue-50/50 text-blue-600 border-blue-200' : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300'}`}
              >
                {cat}
              </button>
            ))}
            <button className="w-9 h-9 flex items-center justify-center border border-gray-200 rounded-full text-gray-500 hover:bg-gray-50 shrink-0">
              <ChevronRight className="w-4 h-4" />
            </button>
            <div className="flex-1"></div>
            <button className="flex items-center gap-2 px-6 py-2 rounded-full border border-blue-200 text-blue-600 font-semibold bg-blue-50/20 hover:bg-blue-50 shrink-0">
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>
          </div>

          {/* Form Filters */}
          <div className="mt-8 grid grid-cols-2 gap-8">
            <div>
              <label className="text-gray-500 text-sm font-semibold mb-2 block">Location</label>
              <div className="flex items-center justify-between border border-gray-200 rounded-2xl px-4 py-3 bg-white">
                <div className="flex items-center gap-3 text-gray-800 font-semibold text-sm">
                  <MapPin className="w-4 h-4 text-gray-400" /> Yogyakarta, Indonesia
                </div>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </div>
            </div>
            <div>
              <label className="text-gray-500 text-sm font-semibold mb-2 block">Range from you</label>
              <div className="flex items-center justify-between border border-gray-200 rounded-2xl px-4 py-3 bg-white">
                <div className="flex items-center gap-3 text-gray-800 font-semibold text-sm">
                  <MapPin className="w-4 h-4 text-gray-400" /> 24km
                </div>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Price Range */}
          <div className="mt-8">
            <label className="text-gray-500 text-sm font-semibold mb-6 block">Price Range</label>
            <div className="relative px-2 mb-8">
              <div className="h-1 bg-gray-100 rounded-full w-full"></div>
              <div className="absolute top-0 left-[20%] right-[30%] h-1 bg-blue-600 rounded-full"></div>
              <div className="absolute top-1/2 -translate-y-1/2 left-[20%] w-5 h-5 bg-white border border-gray-200 rounded-full shadow-md"></div>
              <div className="absolute top-1/2 -translate-y-1/2 right-[30%] w-5 h-5 bg-white border border-gray-200 rounded-full shadow-md"></div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex-1 border border-gray-200 rounded-2xl px-4 py-3 flex justify-between items-center bg-white">
                <div className="flex items-center gap-2 text-gray-800 font-semibold text-sm w-full">
                  <span className="text-gray-400">$</span> <input type="text" defaultValue="1450" className="w-full outline-none" />
                </div>
                <span className="text-gray-400 text-sm">min</span>
              </div>
              <div className="flex-1 border border-gray-200 rounded-2xl px-4 py-3 flex justify-between items-center bg-white">
                 <div className="flex items-center gap-2 text-gray-800 font-semibold text-sm w-full">
                  <span className="text-gray-400">$</span> <input type="text" defaultValue="2342,00" className="w-full outline-none" />
                </div>
                <span className="text-gray-400 text-sm">max</span>
              </div>
            </div>
          </div>

          {/* Architecture Types */}
          <div className="mt-8 mb-6">
            <label className="text-gray-500 text-sm font-semibold mb-4 block">Type of Architecture</label>
            <div className="grid grid-cols-3 gap-4">
              <label className="flex items-start gap-3 cursor-pointer">
                <div className="w-5 h-5 rounded border border-blue-600 bg-blue-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-gray-800 leading-tight">Modern</p>
                  <p className="text-[11px] text-gray-400 mt-0.5">Modern design with great view</p>
                </div>
              </label>
              <label className="flex items-start gap-3 cursor-pointer">
                <div className="w-5 h-5 rounded border border-gray-200 flex items-center justify-center shrink-0 mt-0.5 bg-white">
                </div>
                <div>
                  <p className="font-semibold text-sm text-gray-800 leading-tight">Minimalist</p>
                  <p className="text-[11px] text-gray-400 mt-0.5">Modern design with great view</p>
                </div>
              </label>
              <label className="flex items-start gap-3 cursor-pointer">
                <div className="w-5 h-5 rounded border border-gray-200 flex items-center justify-center shrink-0 mt-0.5 bg-white">
                </div>
                <div>
                  <p className="font-semibold text-sm text-gray-800 leading-tight">Luxury</p>
                  <p className="text-[11px] text-gray-400 mt-0.5">Modern design with great view</p>
                </div>
              </label>
            </div>
          </div>

          <div className="flex justify-between items-center pt-6 border-t border-gray-100">
            <button className="px-6 py-2.5 rounded-full border border-gray-200 text-gray-700 font-semibold text-sm hover:bg-gray-50 transition">
              Clear all filters
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2.5 rounded-full font-semibold text-sm transition shadow-md shadow-blue-600/20">
              Show (230) places
            </button>
          </div>
        </div>

        {/* Property Grid */}
        <div className="flex-1 overflow-y-auto p-6 bg-gray-50/50">
          <div className="grid grid-cols-2 gap-6">
            {properties.map(p => (
              <div key={p.id} className="bg-white rounded-[24px] overflow-hidden border border-gray-100 shadow-sm group">
                <div className="relative h-48 w-full p-3">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover rounded-2xl" />
                  <button className="absolute top-5 right-5 w-8 h-8 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center hover:bg-black/40 transition">
                    <Heart className="w-4 h-4 text-white" />
                  </button>
                  <div className="absolute bottom-5 left-5 flex items-center gap-2 bg-black/40 backdrop-blur-md rounded-full pr-3 pl-1 py-1">
                    <img src={p.agentImg} className="w-5 h-5 rounded-full border border-white/20" />
                    <span className="text-[10px] text-white font-medium">{p.agent} <Check className="w-2.5 h-2.5 inline text-blue-400 ml-0.5 bg-white rounded-full p-[1px]"/></span>
                  </div>
                  <div className="absolute bottom-5 right-5 flex gap-1">
                     <span className="w-4 h-1.5 rounded-full bg-white"></span>
                     <span className="w-1.5 h-1.5 rounded-full bg-white/50"></span>
                     <span className="w-1.5 h-1.5 rounded-full bg-white/50"></span>
                     <span className="w-1.5 h-1.5 rounded-full bg-white/50"></span>
                  </div>
                </div>
                <div className="p-4 pt-1">
                  <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition">{p.title}</h3>
                  <div className="flex justify-between items-end mt-1">
                    <p className="text-xs text-gray-400">{p.location}</p>
                    <p className="font-bold text-blue-600 text-[15px]">{p.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN: Map */}
      <div className="flex-1 relative bg-blue-50 overflow-hidden">
        {/* Placeholder Map Image */}
        <div className="absolute inset-0 w-full h-full opacity-60 mix-blend-multiply flex items-center justify-center">
            {/* Using a stylized map background similar to screenshot */}
            <div className="absolute w-[200%] h-[200%] bg-[url('https://maps.wikimedia.org/osm-intl/12/2074/1409.png')] bg-repeat bg-center mix-blend-luminosity opacity-40"></div>
            <div className="absolute inset-0 bg-blue-400/20 mix-blend-overlay"></div>
        </div>

        {/* Markers */}
        <div className="absolute top-[28%] left-[65%] flex items-center gap-1.5 bg-white rounded-full px-2 py-1 shadow-lg shadow-black/10 cursor-pointer hover:scale-105 transition-transform">
          <img src="https://i.pravatar.cc/150?u=a042581f4e290267041" className="w-6 h-6 rounded-full border-2 border-white" />
          <span className="text-[11px] font-bold text-gray-800 pr-1">$2331,24</span>
        </div>

        <div className="absolute top-[38%] left-[35%] flex items-center gap-1.5 bg-white rounded-full px-2 py-1 shadow-lg shadow-black/10 cursor-pointer hover:scale-105 transition-transform z-10">
          <img src="https://i.pravatar.cc/150?u=a042581f4e290267045" className="w-6 h-6 rounded-full border-2 border-white" />
          <span className="text-[11px] font-bold text-gray-800 pr-1">$1200,44</span>
        </div>

        <div className="absolute top-[35%] left-[75%] flex items-center gap-1.5 bg-white rounded-full px-2 py-1 shadow-lg shadow-black/10 cursor-pointer hover:scale-105 transition-transform">
          <img src="https://i.pravatar.cc/150?u=a042581f4e290267046" className="w-6 h-6 rounded-full border-2 border-white" />
          <span className="text-[11px] font-bold text-gray-800 pr-1">$2331,24</span>
        </div>

        <div className="absolute bottom-[25%] left-[25%] flex items-center gap-1.5 bg-white rounded-full px-2 py-1 shadow-lg shadow-black/10 cursor-pointer hover:scale-105 transition-transform">
          <img src="https://i.pravatar.cc/150?u=a042581f4e290267047" className="w-6 h-6 rounded-full border-2 border-white" />
          <span className="text-[11px] font-bold text-gray-800 pr-1">$4252,24</span>
        </div>

        <div className="absolute bottom-[18%] left-[45%] flex items-center gap-1.5 bg-white rounded-full px-2 py-1 shadow-lg shadow-black/10 cursor-pointer hover:scale-105 transition-transform">
          <img src="https://i.pravatar.cc/150?u=a042581f4e290267056" className="w-6 h-6 rounded-full border-2 border-white" />
          <span className="text-[11px] font-bold text-gray-800 pr-1">$1237,24</span>
        </div>

        {/* Selected Popup Card (Four Season Residence) */}
        <div className="absolute top-[35%] right-[20%] w-[300px] bg-white rounded-[24px] overflow-hidden shadow-2xl shadow-blue-900/10 z-20 transform -translate-x-1/4">
          <div className="relative h-[200px] w-full p-2.5">
            <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800" alt="Four Season Residence" className="w-full h-full object-cover rounded-2xl" />
            <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center hover:bg-black/40 transition">
               <Heart className="w-5 h-5 text-white" />
            </button>
            <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-black/40 backdrop-blur-md rounded-full pr-3 pl-1 py-1">
               <img src="https://i.pravatar.cc/150?u=a042581f4e290267044" className="w-6 h-6 rounded-full border-2 border-white/20" />
               <span className="text-xs text-white font-medium pl-1">Andi mugni <Check className="w-3 h-3 inline text-blue-400 bg-white rounded-full p-[1px] ml-1"/></span>
            </div>
            <div className="absolute bottom-5 right-4 flex gap-1.5">
               <span className="w-4 h-1.5 rounded-full bg-white"></span>
               <span className="w-1.5 h-1.5 rounded-full bg-white/50"></span>
               <span className="w-1.5 h-1.5 rounded-full bg-white/50"></span>
               <span className="w-1.5 h-1.5 rounded-full bg-white/50"></span>
            </div>
          </div>
          <div className="p-5 pt-1 relative">
            {/* The little tail pointing to marker */}
            <div className="absolute -left-[5px] top-[40%] w-3 h-3 bg-white rotate-45 hidden"></div>
            
            <h3 className="font-bold text-gray-900 text-lg mb-0.5">Four Season Residence</h3>
            <p className="text-sm text-gray-400 mb-6">Yogyakarta, ID</p>
            <p className="font-bold text-blue-600 text-[22px] text-right">$2342,00</p>
          </div>
        </div>

        {/* Back Button (top left on map) */}
        <button className="absolute top-6 left-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-700 hover:bg-gray-50 flex-shrink-0 z-10 transition">
          <ChevronLeft className="w-6 h-6 pr-0.5" />
        </button>

        {/* Zoom Controls (bottom right) */}
        <div className="absolute bottom-8 right-8 flex gap-3 z-10">
          <button className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-700 hover:bg-gray-50 transition">
            <Minus className="w-5 h-5" />
          </button>
          <button className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-700 hover:bg-gray-50 transition">
            <Plus className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
