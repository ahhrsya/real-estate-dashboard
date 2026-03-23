import React, { useState, useEffect } from "react"
import { ChevronRight, SlidersHorizontal, MapPin, ChevronDown, Check, Search, Heart, Plus } from "lucide-react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import L from "leaflet"
import "leaflet/dist/leaflet.css"

const categories = ["Large house", "Small House", "Residence", "Pool", "Cabin"]

const propertiesData = [
  {
    id: 1,
    title: "Four Season Residence",
    location: "Yogyakarta, ID",
    price: "$3120,00",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
    agent: "James Harden",
    agentImg: "https://i.pravatar.cc/150?u=a042581f4e290267041",
    coords: [-7.7956, 110.3695] as [number, number]
  },
  {
    id: 2,
    title: "Artotel Residence",
    location: "Kotabaru, ID",
    price: "$2342,00",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800",
    agent: "Momon",
    agentImg: "https://i.pravatar.cc/150?u=a042581f4e290267042",
    coords: [-7.7856, 110.3795] as [number, number]
  },
  {
    id: 3,
    title: "Novo Real Estate",
    location: "Malioboro, ID",
    price: "$1530,00",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800",
    agent: "James Harden",
    agentImg: "https://i.pravatar.cc/150?u=a042581f4e290267041",
    coords: [-7.8000, 110.3550] as [number, number]
  },
  {
    id: 4,
    title: "Eco Green Lodge",
    location: "Mantrijeron, ID",
    price: "$1850,00",
    image: "https://images.unsplash.com/photo-1583608205712-bea724b7a2bb?auto=format&fit=crop&q=80&w=800",
    agent: "Sarah Li",
    agentImg: "https://i.pravatar.cc/150?u=a042581f4e290267043",
    coords: [-7.8100, 110.3650] as [number, number]
  },
  {
    id: 5,
    title: "Tugu Penthouse",
    location: "Tugu, ID",
    price: "$4250,00",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800",
    agent: "Bryan Kent",
    agentImg: "https://i.pravatar.cc/150?u=a042581f4e290267055",
    coords: [-7.7800, 110.3650] as [number, number]
  }
]

export function PropertyListings() {
  const [activeCategory, setActiveCategory] = useState("Large house")
  const [searchQuery, setSearchQuery] = useState("")
  const [isMapReady, setIsMapReady] = useState(false)
  const [showFilters, setShowFilters] = useState(true)

  useEffect(() => {
    setIsMapReady(true)
  }, [])

  const createCustomIcon = (price: string, image: string) => {
    return L.divIcon({
      className: 'bg-transparent border-none',
      html: `
        <div class="flex items-center gap-1.5 bg-white rounded-lg px-2 py-1 shadow-[0_4px_16px_rgba(0,0,0,0.15)] border border-gray-200 transition-transform whitespace-nowrap min-w-max hover:scale-110 hover:border-blue-400 hover:text-blue-600 cursor-pointer" style="transform: translate(-50%, -100%); margin-top: -5px;">
            <img src="${image}" class="w-6 h-6 rounded-md border border-gray-100 pointer-events-none" />
            <span class="text-[12px] font-bold pr-1 select-none pointer-events-none text-inherit">${price}</span>
        </div>
      `,
      iconSize: [0, 0],
      iconAnchor: [0, 0]
    })
  }

  const filteredProperties = propertiesData.filter(p => p.title.toLowerCase().includes(searchQuery.toLowerCase()) || p.location.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <div className="flex h-[calc(100vh-76px)] overflow-hidden w-full bg-white animate-in fade-in duration-500">
      
      {/* LEFT COLUMN: Filters & Grid (50:50 Layout) */}
      <div className="w-1/2 flex flex-col h-full bg-white border-r border-gray-100 z-10 relative shadow-[4px_0_24px_rgba(0,0,0,0.02)]">
        
        {/* Categories Header */}
        <div className="p-5 border-b border-gray-100 flex-shrink-0 bg-white">
          <div className="flex items-center gap-3 overflow-x-auto custom-scrollbar">
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl border font-semibold text-sm shrink-0 shadow-sm transition-all focus:ring-2 focus:ring-blue-100 ${showFilters ? 'bg-blue-600 text-white border-blue-600 hover:bg-blue-700' : 'border-blue-200 text-blue-600 bg-blue-50/40 hover:bg-blue-50'}`}
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>
            
            <div className="w-[1px] h-8 bg-gray-200 mx-1 shrink-0"></div>

            {categories.map((cat) => (
              <button 
                key={cat} 
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-4 py-2.5 rounded-xl text-sm font-semibold transition-all border shadow-sm ${activeCategory === cat ? 'bg-blue-50/80 text-blue-600 border-blue-200 shadow-blue-100' : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:bg-gray-50'}`}
              >
                {cat}
              </button>
            ))}
            <button className="w-10 h-10 flex items-center justify-center border border-gray-200 rounded-xl text-gray-500 hover:bg-gray-100 shrink-0 shadow-sm transition">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Form Filters (Slide-out Sidebar) */}
        {/* Overlay background */}
        {showFilters && (
          <div className="absolute inset-0 bg-gray-900/20 backdrop-blur-[1px] z-20 transition-opacity" onClick={() => setShowFilters(false)}></div>
        )}
        
        {/* Filter Sidebar Panel */}
        <div className={`absolute top-[73px] bottom-0 left-0 w-[360px] bg-white shadow-2xl z-30 transform transition-transform duration-300 ease-out border-r border-gray-100 flex flex-col ${showFilters ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="p-5 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
            <h3 className="font-bold text-gray-900 flex items-center gap-2"><SlidersHorizontal className="w-4 h-4 text-blue-600" /> Advanced Filters</h3>
            <button onClick={() => setShowFilters(false)} className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-200 text-gray-500 transition">
              <Plus className="w-5 h-5 rotate-45" />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
            {/* Form Filters Grid */}
            <div className="space-y-6">
              <div>
                <label className="text-gray-500 text-sm font-bold mb-2 block uppercase tracking-widest text-[10px]">Location</label>
                <div className="flex items-center justify-between border border-gray-200 rounded-xl px-4 py-3 bg-white hover:border-gray-300 transition cursor-pointer shadow-sm">
                  <div className="flex items-center gap-3 text-gray-800 font-bold text-[13px]">
                    <MapPin className="w-4 h-4 text-gray-400" /> Yogyakarta, Indonesia
                  </div>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </div>
              </div>
              
              <div>
                <label className="text-gray-500 text-sm font-bold mb-2 block uppercase tracking-widest text-[10px]">Range from you</label>
                <div className="flex items-center justify-between border border-gray-200 rounded-xl px-4 py-3 bg-white hover:border-gray-300 transition cursor-pointer shadow-sm">
                  <div className="flex items-center gap-3 text-gray-800 font-bold text-[13px]">
                    <MapPin className="w-4 h-4 text-gray-400" /> 24km
                  </div>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </div>
              </div>

              {/* Price Range */}
              <div className="pt-4 border-t border-gray-100">
                <label className="text-gray-500 text-sm font-bold mb-5 block uppercase tracking-widest text-[10px]">Price Range</label>
                <div className="relative px-2 mb-6">
                  <div className="h-1.5 bg-gray-200 rounded-full w-full"></div>
                  <div className="absolute top-0 left-[20%] right-[30%] h-1.5 bg-blue-600 rounded-full shadow-[0_0_8px_rgba(37,99,235,0.4)]"></div>
                  <div className="absolute top-1/2 -translate-y-1/2 left-[20%] w-6 h-6 bg-white border-2 border-blue-600 rounded-full shadow-md cursor-grab active:cursor-grabbing hover:scale-110 transition"></div>
                  <div className="absolute top-1/2 -translate-y-1/2 right-[30%] w-6 h-6 bg-white border-2 border-blue-600 rounded-full shadow-md cursor-grab active:cursor-grabbing hover:scale-110 transition"></div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-1 border border-gray-200 rounded-xl px-3 py-2.5 bg-gray-50/50 shadow-sm flex justify-between items-center transition focus-within:border-blue-300 focus-within:ring-2 focus-within:ring-blue-100">
                    <div className="flex items-center gap-1.5 text-gray-800 font-bold text-[13px] w-full">
                      <span className="text-gray-400">$</span> <input type="text" defaultValue="1450" className="w-full bg-transparent outline-none font-mono" />
                    </div>
                  </div>
                  <span className="text-gray-400 text-xs font-bold">-</span>
                  <div className="flex-1 border border-gray-200 rounded-xl px-3 py-2.5 bg-gray-50/50 shadow-sm flex justify-between items-center transition focus-within:border-blue-300 focus-within:ring-2 focus-within:ring-blue-100">
                    <div className="flex items-center gap-1.5 text-gray-800 font-bold text-[13px] w-full">
                      <span className="text-gray-400">$</span> <input type="text" defaultValue="2342,00" className="w-full bg-transparent outline-none font-mono" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Architecture Types Grid */}
              <div className="pt-4 border-t border-gray-100">
                <label className="text-gray-500 text-sm font-bold mb-4 block uppercase tracking-widest text-[10px]">Architecture Design</label>
                <div className="grid grid-cols-1 gap-3">
                  <label className="flex items-center gap-4 cursor-pointer group bg-white border border-blue-200 rounded-xl p-3 shadow-sm shadow-blue-50 transition hover:border-blue-300">
                    <div className="w-5 h-5 rounded border border-blue-600 bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-sm transition">
                      <Check className="w-3 h-3" />
                    </div>
                    <div>
                      <p className="font-bold text-[13px] text-gray-900 leading-none">Modern</p>
                      <p className="text-[11px] text-gray-400 mt-1 leading-none">Glass & steel views</p>
                    </div>
                  </label>
                  <label className="flex items-center gap-4 cursor-pointer group bg-white border border-gray-200 rounded-xl p-3 shadow-sm transition hover:border-gray-300 hover:bg-gray-50">
                    <div className="w-5 h-5 rounded border border-gray-300 flex items-center justify-center shrink-0 bg-white transition group-hover:border-blue-400">
                    </div>
                    <div>
                      <p className="font-bold text-[13px] text-gray-900 leading-none">Minimalist</p>
                      <p className="text-[11px] text-gray-400 mt-1 leading-none">Contemporary clean space</p>
                    </div>
                  </label>
                  <label className="flex items-center gap-4 cursor-pointer group bg-white border border-gray-200 rounded-xl p-3 shadow-sm transition hover:border-gray-300 hover:bg-gray-50">
                    <div className="w-5 h-5 rounded border border-gray-300 flex items-center justify-center shrink-0 bg-white transition group-hover:border-blue-400">
                    </div>
                    <div>
                      <p className="font-bold text-[13px] text-gray-900 leading-none">Luxury</p>
                      <p className="text-[11px] text-gray-400 mt-1 leading-none">Premium build quality</p>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-5 border-t border-gray-100 bg-gray-50 flex gap-4">
            <button 
               onClick={() => setShowFilters(false)}
               className="flex-1 px-4 py-3 rounded-xl text-gray-700 font-bold text-sm bg-white border border-gray-200 hover:bg-gray-100 transition shadow-sm">
              Clear
            </button>
            <button 
               onClick={() => setShowFilters(false)}
               className="flex-[2] bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-xl font-bold text-sm transition shadow-lg shadow-blue-600/30">
              Apply ({filteredProperties.length})
            </button>
          </div>
        </div>

        {/* Property Grid (Auto fills rest of height) */}
        <div className="flex-1 overflow-y-auto p-6 bg-gray-50/50 custom-scrollbar">
          <div className="grid grid-cols-2 gap-5">
            {filteredProperties.map(p => (
              <div key={p.id} className="bg-white rounded-[16px] overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition duration-300 group cursor-pointer flex flex-col hover:border-blue-200 hover:ring-1 hover:ring-blue-100">
                <div className="relative h-44 w-full p-2.5">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover rounded-xl group-hover:scale-[1.02] transition duration-700" />
                  <button className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/40 transition">
                    <Heart className="w-4 h-4 text-white hover:text-red-500 transition hover:fill-red-500" />
                  </button>
                  <div className="absolute bottom-4 left-4 flex items-center gap-1.5 bg-black/50 backdrop-blur-md rounded-lg pr-2 min-w-0 max-w-[80%] shadow-sm">
                    <img src={p.agentImg} className="w-6 h-6 rounded-l-lg object-cover" />
                    <span className="text-[10px] text-white font-medium truncate pr-1">{p.agent}</span>
                  </div>
                </div>
                <div className="p-4 pt-1 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-[14px] text-gray-900 group-hover:text-blue-600 transition line-clamp-1">{p.title}</h3>
                    <p className="text-[11px] font-semibold text-gray-500 mt-0.5 flex items-center gap-1"><MapPin className="w-3 h-3" />{p.location}</p>
                  </div>
                  <div className="flex justify-between items-end mt-3 border-t border-gray-50 pt-2">
                    <p className="font-bold font-mono text-blue-600 text-lg tracking-tight leading-none">{p.price}</p>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest bg-gray-50 px-2 py-0.5 rounded">Sale</span>
                  </div>
                </div>
              </div>
            ))}
            
            {filteredProperties.length === 0 && (
               <div className="col-span-2 flex flex-col items-center justify-center py-24 text-gray-400">
                  <Search className="w-12 h-12 mb-4 opacity-20" />
                  <p className="font-semibold text-sm">No properties found.</p>
               </div>
            )}
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN: Map (50:50 Layout) */}
      <div className="w-1/2 relative bg-blue-50/50 overflow-hidden border-l border-gray-200">
        
        {/* Map Search Bar Layering over Map */}
        <div className="absolute top-6 inset-x-0 mx-auto w-3/4 max-w-md z-[1000] drop-shadow-[0_8px_24px_rgba(0,0,0,0.12)]">
          <div className="bg-white rounded-xl p-1.5 flex items-center border border-gray-200 shadow-sm transition focus-within:ring-4 focus-within:ring-blue-100 focus-within:border-blue-300">
             <div className="w-9 h-9 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center shrink-0">
               <Search className="w-4 h-4" />
             </div>
             <input 
                 type="text" 
                 placeholder="Search area..." 
                 className="flex-1 border-none outline-none font-semibold text-[13px] px-3 text-gray-800 bg-transparent placeholder:text-gray-400"
                 value={searchQuery}
                 onChange={(e) => setSearchQuery(e.target.value)}
             />
             <button className="px-4 py-1.5 bg-gray-900 text-white rounded-lg text-xs font-bold hover:bg-black transition shadow-sm ml-1">
               Find
             </button>
          </div>
        </div>

        {/* Real Leaflet Map */}
        {isMapReady && (
          <MapContainer 
            center={[-7.7956, 110.3695]} 
            zoom={13} 
            zoomControl={false}
            scrollWheelZoom={true}
            style={{ width: '100%', height: '100%' }}
            className="z-0 mix-blend-multiply opacity-90"
          >
            <TileLayer
              attribution='&copy; <a href="https://carto.com/">CartoDB</a>'
              url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
            />
            {filteredProperties.map(prop => (
              <Marker 
                 key={prop.id} 
                 position={prop.coords} 
                 icon={createCustomIcon(prop.price, prop.agentImg)}
              >
                  {/* Clean Popup with overriding CSS hiding the gray boxes */}
                  <Popup closeButton={false} offset={[0, -25]}>
                      <div className="w-[240px] bg-white rounded-xl shadow-[0_12px_32px_rgba(0,0,0,0.2)] border border-gray-200 p-1 cursor-pointer hover:border-blue-300 transition-colors">
                        <div className="relative h-[130px] w-full">
                          <img src={prop.image} alt={prop.title} className="w-full h-full object-cover rounded-lg" />
                          <div className="absolute top-2 right-2 flex gap-1 bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded shadow-sm">
                             <Heart className="w-3 h-3 text-white fill-white" />
                          </div>
                        </div>
                        <div className="p-3">
                          <h3 className="font-bold text-gray-900 text-[14px] leading-tight mb-1 truncate">{prop.title}</h3>
                          <div className="flex justify-between items-end mt-2">
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest truncate max-w-[50%]">{prop.location}</p>
                            <p className="font-bold text-blue-600 text-lg tracking-tight font-mono">{prop.price}</p>
                          </div>
                        </div>
                      </div>
                  </Popup>
              </Marker>
            ))}
          </MapContainer>
        )}
      </div>
    </div>
  )
}
