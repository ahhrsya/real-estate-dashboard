import React, { useState, useEffect } from "react"
import { ChevronRight, SlidersHorizontal, MapPin, ChevronDown, Check, Search, Heart } from "lucide-react"
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

  useEffect(() => {
    setIsMapReady(true)
  }, [])

  const createCustomIcon = (price: string, image: string) => {
    return L.divIcon({
      className: 'bg-transparent border-none',
      html: `
        <div class="flex items-center gap-1.5 bg-white rounded-full px-2 py-1 shadow-[0_4px_16px_rgba(0,0,0,0.15)] border border-gray-100 transition-transform whitespace-nowrap min-w-max" style="transform: translate(-50%, -100%); margin-top: -10px;">
            <img src="${image}" class="w-6 h-6 rounded-full border border-gray-100 pointer-events-none" />
            <span class="text-[11px] font-bold text-gray-800 pr-1 select-none pointer-events-none">${price}</span>
        </div>
      `,
      iconSize: [0, 0],
      iconAnchor: [0, 0]
    })
  }

  const filteredProperties = propertiesData.filter(p => p.title.toLowerCase().includes(searchQuery.toLowerCase()) || p.location.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <div className="flex h-[calc(100vh-76px)] overflow-hidden w-full bg-white animate-in fade-in duration-500">
      {/* LEFT COLUMN: Filters & Grid */}
      <div className="w-[55%] flex flex-col h-full bg-white border-r border-gray-100 z-10 relative shadow-[4px_0_24px_rgba(0,0,0,0.02)]">
        <div className="p-6 border-b border-gray-50 flex-shrink-0">
          
          {/* Top Pill Categories */}
          <div className="flex items-center gap-3 overflow-x-auto custom-scrollbar pb-2">
            {categories.map((cat) => (
              <button 
                key={cat} 
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-semibold transition border shadow-sm ${activeCategory === cat ? 'bg-blue-50/50 text-blue-600 border-blue-200' : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300'}`}
              >
                {cat}
              </button>
            ))}
            <button className="w-10 h-10 flex items-center justify-center border border-gray-200 rounded-full text-gray-500 hover:bg-gray-50 shrink-0 shadow-sm">
              <ChevronRight className="w-4 h-4" />
            </button>
            <div className="flex-1"></div>
            <button className="flex items-center gap-2 px-6 py-2.5 rounded-full border border-blue-200 text-blue-600 font-semibold bg-blue-50/20 hover:bg-blue-50 shrink-0 shadow-sm transition">
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>
          </div>

          {/* Form Filters */}
          <div className="mt-8 grid grid-cols-2 gap-8">
            <div>
              <label className="text-gray-500 text-sm font-semibold mb-2 block uppercase tracking-widest text-[11px]">Location</label>
              <div className="flex items-center justify-between border border-gray-200 rounded-2xl px-4 py-3 bg-gray-50/50 hover:bg-white transition cursor-pointer">
                <div className="flex items-center gap-3 text-gray-800 font-bold text-[13px]">
                  <MapPin className="w-4 h-4 text-gray-400" /> Yogyakarta, Indonesia
                </div>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </div>
            </div>
            <div>
              <label className="text-gray-500 text-sm font-semibold mb-2 block uppercase tracking-widest text-[11px]">Range from you</label>
              <div className="flex items-center justify-between border border-gray-200 rounded-2xl px-4 py-3 bg-gray-50/50 hover:bg-white transition cursor-pointer">
                <div className="flex items-center gap-3 text-gray-800 font-bold text-[13px]">
                  <MapPin className="w-4 h-4 text-gray-400" /> 24km
                </div>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Price Range */}
          <div className="mt-8">
            <label className="text-gray-500 text-sm font-semibold mb-6 block uppercase tracking-widest text-[11px]">Price Range</label>
            <div className="relative px-2 mb-8 mt-2">
              <div className="h-1 bg-gray-100 rounded-full w-full"></div>
              <div className="absolute top-0 left-[20%] right-[30%] h-1 bg-blue-600 rounded-full"></div>
              <div className="absolute top-1/2 -translate-y-1/2 left-[20%] w-5 h-5 bg-white border border-gray-200 rounded-full shadow-md cursor-pointer hover:scale-110 transition"></div>
              <div className="absolute top-1/2 -translate-y-1/2 right-[30%] w-5 h-5 bg-white border border-gray-200 rounded-full shadow-md cursor-pointer hover:scale-110 transition"></div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex-1 border border-gray-200 rounded-2xl px-4 py-3 bg-gray-50/50 flex justify-between items-center transition focus-within:bg-white focus-within:border-blue-200 focus-within:ring-2 focus-within:ring-blue-100">
                <div className="flex items-center gap-2 text-gray-800 font-bold text-[13px] w-full">
                  <span className="text-gray-400">$</span> <input type="text" defaultValue="1450" className="w-full bg-transparent outline-none" />
                </div>
                <span className="text-gray-400 text-xs font-semibold uppercase tracking-wider">min</span>
              </div>
              <div className="flex-1 border border-gray-200 rounded-2xl px-4 py-3 bg-gray-50/50 flex justify-between items-center transition focus-within:bg-white focus-within:border-blue-200 focus-within:ring-2 focus-within:ring-blue-100">
                 <div className="flex items-center gap-2 text-gray-800 font-bold text-[13px] w-full">
                  <span className="text-gray-400">$</span> <input type="text" defaultValue="2342,00" className="w-full bg-transparent outline-none" />
                </div>
                <span className="text-gray-400 text-xs font-semibold uppercase tracking-wider">max</span>
              </div>
            </div>
          </div>

          {/* Architecture Types */}
          <div className="mt-10 mb-6">
            <label className="text-gray-500 text-sm font-semibold mb-5 block uppercase tracking-widest text-[11px]">Type of Architecture</label>
            <div className="grid grid-cols-3 gap-4">
              <label className="flex items-start gap-3 cursor-pointer group">
                <div className="w-5 h-5 rounded-md border border-blue-600 bg-blue-600 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm transition group-hover:bg-blue-700">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <p className="font-bold text-[13px] text-gray-800 leading-tight">Modern</p>
                  <p className="text-[10px] text-gray-400 mt-1 leading-snug pr-2">Modern design with great view</p>
                </div>
              </label>
              <label className="flex items-start gap-3 cursor-pointer group">
                <div className="w-5 h-5 rounded-md border border-gray-200 flex items-center justify-center shrink-0 mt-0.5 bg-gray-50 transition group-hover:border-blue-300">
                </div>
                <div>
                  <p className="font-bold text-[13px] text-gray-800 leading-tight">Minimalist</p>
                  <p className="text-[10px] text-gray-400 mt-1 leading-snug pr-2">Contemporary clean space</p>
                </div>
              </label>
              <label className="flex items-start gap-3 cursor-pointer group">
                <div className="w-5 h-5 rounded-md border border-gray-200 flex items-center justify-center shrink-0 mt-0.5 bg-gray-50 transition group-hover:border-blue-300">
                </div>
                <div>
                  <p className="font-bold text-[13px] text-gray-800 leading-tight">Luxury</p>
                  <p className="text-[10px] text-gray-400 mt-1 leading-snug pr-2">Premium amenities inside</p>
                </div>
              </label>
            </div>
          </div>

          <div className="flex justify-between items-center pt-8 border-t border-gray-100">
            <button className="px-6 py-3 rounded-full border border-gray-200 text-gray-600 font-bold text-sm hover:bg-gray-50 transition">
              Clear all filters
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-bold text-sm transition shadow-lg shadow-blue-600/30">
              Show ({filteredProperties.length}) places
            </button>
          </div>
        </div>

        {/* Property Grid */}
        <div className="flex-1 overflow-y-auto p-6 bg-gray-50/50 custom-scrollbar">
          <div className="grid grid-cols-2 gap-6">
            {filteredProperties.map(p => (
              <div key={p.id} className="bg-white rounded-[24px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition duration-500 group cursor-pointer">
                <div className="relative h-48 w-full p-3">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover rounded-2xl group-hover:scale-[1.03] transition duration-700" />
                  <button className="absolute top-5 right-5 w-8 h-8 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center hover:bg-black/40 transition">
                    <Heart className="w-4 h-4 text-white hover:text-red-500 transition" />
                  </button>
                  <div className="absolute bottom-5 left-5 flex items-center gap-2 bg-black/40 backdrop-blur-md rounded-full pr-3 pl-1 py-1 shadow-sm">
                    <img src={p.agentImg} className="w-5 h-5 rounded-full border border-white/20" />
                    <span className="text-[10px] text-white font-medium">{p.agent} <Check className="w-2.5 h-2.5 inline text-blue-400 ml-0.5 bg-white rounded-full p-[1px] shadow-sm"/></span>
                  </div>
                  <div className="absolute bottom-5 right-5 flex gap-1">
                     <span className="w-4 h-1.5 rounded-full bg-white shadow-sm"></span>
                     <span className="w-1.5 h-1.5 rounded-full bg-white/50"></span>
                     <span className="w-1.5 h-1.5 rounded-full bg-white/50"></span>
                  </div>
                </div>
                <div className="p-5 pt-2">
                  <h3 className="font-bold text-[15px] text-gray-900 group-hover:text-blue-600 transition truncate">{p.title}</h3>
                  <div className="flex justify-between items-end mt-1.5">
                    <p className="text-[11px] font-semibold text-gray-400">{p.location}</p>
                    <p className="font-bold font-mono text-blue-600 text-[18px] tracking-tight">{p.price}</p>
                  </div>
                </div>
              </div>
            ))}
            
            {filteredProperties.length === 0 && (
               <div className="col-span-2 flex flex-col items-center justify-center py-20 text-gray-400">
                  <Search className="w-12 h-12 mb-4 opacity-20" />
                  <p className="font-semibold text-sm">No properties found in this area.</p>
               </div>
            )}
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN: Map */}
      <div className="flex-1 relative bg-blue-50/50 overflow-hidden isolate">
        
        {/* Map Search Bar Layering over Map */}
        <div className="absolute top-6 inset-x-0 mx-auto w-3/4 z-[1000] drop-shadow-xl pointer-events-none">
          <div className="bg-white rounded-full p-2 flex items-center border border-gray-100 shadow-sm pointer-events-auto transition focus-within:ring-2 focus-within:ring-blue-100">
             <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center shrink-0">
               <Search className="w-4 h-4" />
             </div>
             <input 
                 type="text" 
                 placeholder="Search by area or property name..." 
                 className="flex-1 border-none outline-none font-semibold text-[13px] px-4 text-gray-700 bg-transparent"
                 value={searchQuery}
                 onChange={(e) => setSearchQuery(e.target.value)}
             />
             <div className="px-5 text-[10px] font-bold text-gray-400 border-l border-gray-100 uppercase tracking-widest hidden lg:block">Map Area</div>
          </div>
        </div>

        {/* Real Leaflet Map */}
        {isMapReady && (
          <MapContainer 
            center={[-7.7956, 110.3695]} 
            zoom={13} 
            zoomControl={false}
            scrollWheelZoom={true} // Now heavily requested scroll map functionality works
            style={{ width: '100%', height: '100%' }}
            className="z-0 mix-blend-multiply opacity-80"
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
                  <Popup className="custom-popup" closeButton={false}>
                      <div className="w-[260px] bg-white rounded-[20px] overflow-hidden shadow-2xl p-0 m-0 border-0">
                        <div className="relative h-[160px] w-full p-2">
                          <img src={prop.image} alt={prop.title} className="w-full h-full object-cover rounded-[14px]" />
                        </div>
                        <div className="p-4 pt-1 pb-5">
                          <h3 className="font-bold text-gray-900 text-[15px] mb-0.5 truncate">{prop.title}</h3>
                          <p className="text-[11px] font-semibold text-gray-400 mb-3 truncate">{prop.location}</p>
                          <p className="font-bold text-blue-600 text-xl tracking-tight text-right">{prop.price}</p>
                        </div>
                      </div>
                  </Popup>
              </Marker>
            ))}
          </MapContainer>
        )}
        {!isMapReady && <div className="absolute inset-0 bg-blue-50/50 animate-pulse"></div>}
      </div>
    </div>
  )
}
