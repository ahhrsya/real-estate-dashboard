import { useState } from "react"
import { 
  ChevronDown, MapPin, Star, Heart, BedDouble, Bath, Forward, Compass, 
  Map as MapIcon, Crosshair, Play, Home, PlusSquare, Briefcase, Store, Building, Flame, Trees, CheckCircle2,
  TreePine, Dumbbell, Waves, Camera, WashingMachine, Car
} from "lucide-react"

export function PropertyListings() {
  const [activePropertyType, setActivePropertyType] = useState("House")

  const properties = [
    { id: 1, title: "Emerald Park Estate 2", location: "Jl. Klan Aldebaran Ou, Jakarta", rooms: 8, beds: 9, baths: 6, price: "$19,999", type: "year", rating: 4.6, img: "https://images.unsplash.com/photo-1613490900233-141c556ade24?auto=format&w=600&q=80", isLiked: false },
    { id: 2, title: "Old Trafford Homies", location: "Jl. The Central Of Edelweis", rooms: 4, beds: 5, baths: 3, price: "$22,396", type: "year", rating: 5.0, img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&w=600&q=80", isLiked: false },
    { id: 3, title: "Maple Ridge Residence", location: "Jl. Pegangsaan Timur, Jakarta", rooms: 6, beds: 4, baths: 2, price: "$75,91", type: "month", rating: 4.9, img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=600&q=80", isLiked: true },
    { id: 4, title: "Bougenville House", location: "Jl. Mencari Cinta Sejati, Jakarta", rooms: 9, beds: 5, baths: 3, price: "$18,989", oldPrice: "$20,000", type: "year", rating: 4.8, img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&w=600&q=80", isLiked: false },
  ]

  return (
    <div className="flex h-full w-full">
      {/* LEFT COLUMN: FILTERS */}
      <div className="w-[300px] shrink-0 border-r border-gray-100 bg-white p-6 flex flex-col h-full overflow-y-auto no-scrollbar">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold font-sans">Filter</h2>
          <button className="text-brand-orange font-medium text-sm">Reset</button>
        </div>

        {/* Location */}
        <div className="mb-6">
          <h3 className="font-bold text-gray-800 mb-3 text-sm">Location</h3>
          <div className="relative border border-gray-200 rounded-full px-4 text-sm font-medium hover:border-brand-orange transition flex items-center h-11 bg-white">
            Jakarta, Indonesia
            <ChevronDown className="w-4 h-4 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2" />
          </div>
        </div>

        {/* Price Range */}
        <div className="mb-6">
          <h3 className="font-bold text-gray-800 mb-3 text-sm">Price Range</h3>
          <div className="space-y-3">
            <label className="flex items-center gap-3 text-sm font-medium text-gray-600 cursor-pointer group">
              <div className="w-5 h-5 rounded-full border-2 border-gray-200 group-hover:border-brand-orange transition"></div>
              $10,000 - $20,000
            </label>
            <label className="flex items-center gap-3 text-sm font-medium text-gray-600 cursor-pointer group">
              <div className="w-5 h-5 rounded-full border-2 border-gray-200 group-hover:border-brand-orange transition"></div>
              More Than $20,000
            </label>
            <div className="pt-2">
              <label className="flex items-center gap-3 text-sm font-medium text-gray-800 font-bold mb-4">
                <div className="w-5 h-5 rounded-full border-2 border-brand-orange flex items-center justify-center p-[3px]">
                   <div className="w-full h-full bg-brand-orange rounded-full"></div>
                </div>
                Custom
              </label>
              {/* Slider mock */}
              <div className="px-2">
                <div className="flex justify-between text-[11px] font-bold text-gray-500 mb-1 px-4">
                  <span>$8k</span>
                  <span>$40K</span>
                </div>
                <div className="relative h-1.5 bg-gray-100 rounded-full mx-1">
                  <div className="absolute left-[15%] right-[25%] h-full bg-brand-orange rounded-full"></div>
                  <div className="absolute left-[15%] top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-white border-4 border-brand-orange rounded-full shadow"></div>
                  <div className="absolute right-[25%] top-1/2 -translate-y-1/2 translate-x-1/2 w-4 h-4 bg-white border-4 border-brand-orange rounded-full shadow"></div>
                  <div className="absolute w-full flex justify-between px-0.5 top-1/2 -translate-y-1/2 z-0">
                    <div className="w-[1px] h-2 bg-gray-300"></div>
                    <div className="w-[1px] h-2 bg-gray-300"></div>
                    <div className="w-[1px] h-2 bg-gray-300"></div>
                    <div className="w-[1px] h-2 bg-gray-300"></div>
                    <div className="w-[1px] h-2 bg-gray-300"></div>
                    <div className="w-[1px] h-2 bg-gray-300"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Property Type */}
        <div className="mb-6">
          <h3 className="font-bold text-gray-800 mb-3 text-sm">Property Type</h3>
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'House', icon: <Home className="w-3.5 h-3.5 mr-1.5" /> },
              { id: 'Medical', icon: <PlusSquare className="w-3.5 h-3.5 mr-1.5" /> },
              { id: 'Office', icon: <Briefcase className="w-3.5 h-3.5 mr-1.5" /> },
              { id: 'Shophouse', icon: <Store className="w-3.5 h-3.5 mr-1.5" /> },
              { id: 'Apartment', icon: <Building className="w-3.5 h-3.5 mr-1.5" /> },
            ].map(pt => (
              <button 
                key={pt.id}
                onClick={() => setActivePropertyType(pt.id)}
                className={`flex items-center text-xs font-semibold px-4 py-2 rounded-full border transition ${
                  activePropertyType === pt.id 
                    ? 'bg-brand-orange text-white border-brand-orange' 
                    : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300'
                }`}
              >
                {pt.icon} {pt.id}
              </button>
            ))}
          </div>
        </div>

        {/* Room */}
        <div className="mb-6">
          <h3 className="font-bold text-gray-800 mb-3 text-sm">Room</h3>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <p className="text-xs text-gray-500 mb-1.5 font-medium">Bedroom</p>
              <div className="relative border border-gray-200 rounded-full px-3 py-2 text-xs font-medium hover:border-brand-orange transition flex items-center justify-between">
                <span>Any</span>
                <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
              </div>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1.5 font-medium">Bathroom</p>
              <div className="relative border border-gray-200 rounded-full px-3 py-2 text-xs font-medium hover:border-brand-orange transition flex items-center justify-between">
                <span>Any</span>
                <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Amenitis */}
        <div className="mb-8 flex-1">
          <h3 className="font-bold text-gray-800 mb-3 text-sm">Amenitis</h3>
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'Backyard', active: false },
              { id: 'Fireplace', active: false },
              { id: 'Garden', active: true },
              { id: 'Garage', active: false },
              { id: 'Gym', active: false },
              { id: 'Swimming Pool', active: false },
              { id: 'Surveillance Cameras', active: false },
              { id: 'Laundry', active: false },
            ].map(a => (
              <button 
                key={a.id}
                className={`text-[11px] font-semibold px-3 py-1.5 rounded-full border transition ${
                  a.active 
                    ? 'bg-brand-orange text-white border-brand-orange' 
                    : 'bg-white text-gray-500 border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                }`}
              >
                {a.id}
              </button>
            ))}
          </div>
        </div>

        <button className="w-full bg-brand-orange hover:bg-orange-600 text-white font-bold py-3.5 rounded-full shadow-lg shadow-brand-orange/20 transition mt-auto shrink-0 mb-4">
          Apply Now
        </button>
      </div>

      {/* CENTER COLUMN: GRID */}
      <div className="flex-1 bg-[#F9FAFB] p-8 flex flex-col h-full overflow-y-auto no-scrollbar relative min-w-0">
        <div className="flex justify-between items-center mb-6 shrink-0">
          <p className="text-sm font-bold text-gray-800">Showing Result: <span className="text-gray-500 bg-white border border-gray-200 px-3 py-1.5 rounded-full ml-2">1 - 8 of 240</span></p>
          <div className="flex items-center text-sm font-bold text-gray-800 gap-3">
            Short By:
            <div className="bg-white border border-gray-200 px-4 py-1.5 rounded-full flex items-center gap-2 cursor-pointer hover:border-brand-orange transition">
              Default Sorting <ChevronDown className="w-4 h-4 text-gray-400" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 2xl:grid-cols-2 gap-5 mb-8">
          {properties.map(p => (
            <div key={p.id} className="bg-white rounded-[24px] p-4 pb-5 flex flex-col hover:shadow-xl hover:shadow-brand-orange/5 transition duration-300 border border-gray-100 min-w-0">
              <div className="relative w-full aspect-[4/3] rounded-[16px] overflow-hidden mb-4 shrink-0 bg-gray-100">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
                <button className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center border border-white/20 hover:bg-brand-orange/90 group transition">
                  <Heart className={`w-4 h-4 ${p.isLiked ? 'fill-brand-orange text-brand-orange' : 'text-white'}`} />
                </button>
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                  <span className="w-5 h-1.5 bg-white rounded-full"></span>
                  <span className="w-1.5 h-1.5 bg-white/50 rounded-full"></span>
                  <span className="w-1.5 h-1.5 bg-white/50 rounded-full"></span>
                  <span className="w-1.5 h-1.5 bg-white/50 rounded-full"></span>
                </div>
              </div>

              <div className="px-1 flex flex-col flex-1">
                <h3 className="font-bold text-[17px] text-gray-800 truncate mb-1">{p.title}</h3>
                <p className="text-xs text-gray-500 font-medium mb-3 flex items-center gap-1.5 truncate">
                  <MapPin className="w-3.5 h-3.5 text-brand-orange shrink-0" /> {p.location}
                </p>

                <div className="flex items-center justify-between gap-2 max-w-full overflow-hidden whitespace-nowrap pt-1">
                  <span className="flex items-center px-1.5 xl:px-3 py-1.5 border border-gray-100 rounded-lg text-xs font-semibold text-gray-600 bg-gray-50 flex-1 justify-center gap-1.5 xl:gap-2 truncate">
                    <Home className="w-3.5 h-3.5 shrink-0" /> {p.rooms} <span className="hidden xl:inline">Rooms</span>
                  </span>
                  <span className="flex items-center px-1.5 xl:px-3 py-1.5 border border-gray-100 rounded-lg text-xs font-semibold text-gray-600 bg-gray-50 flex-1 justify-center gap-1.5 xl:gap-2 truncate">
                    <BedDouble className="w-3.5 h-3.5 shrink-0" /> {p.beds} <span className="hidden xl:inline">Beds</span>
                  </span>
                  <span className="flex items-center px-1.5 xl:px-3 py-1.5 border border-gray-100 rounded-lg text-xs font-semibold text-gray-600 bg-gray-50 flex-1 justify-center gap-1.5 xl:gap-2 truncate">
                    <Bath className="w-3.5 h-3.5 shrink-0" /> {p.baths} <span className="hidden xl:inline">Baths</span>
                  </span>
                </div>

                <div className="flex justify-between items-center mt-auto pt-5">
                  <div>
                    {p.oldPrice && <span className="text-[13px] text-gray-400 line-through mr-1.5 font-bold">{p.oldPrice}</span>}
                    <span className="text-xl font-bold font-sans tracking-tight text-gray-800">{p.price}</span>
                    <span className="text-xs text-gray-500 font-medium">/{p.type}</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-bold text-sm text-gray-700">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" /> {p.rating.toFixed(1)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-auto shrink-0 flex justify-center items-center gap-2 pt-2">
          <button className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:border-gray-300 transition">&lt;</button>
          <button className="w-8 h-8 rounded-full bg-brand-orange text-white font-bold text-xs flex items-center justify-center shadow-md">1</button>
          <button className="w-8 h-8 rounded-full bg-white font-bold text-xs text-gray-600 hover:bg-gray-50 transition border border-transparent">2</button>
          <button className="w-8 h-8 rounded-full bg-white font-bold text-xs text-gray-600 hover:bg-gray-50 transition border border-transparent">3</button>
          <span className="text-gray-400 tracking-widest text-xs px-1">...</span>
          <button className="w-8 h-8 rounded-full bg-white font-bold text-xs text-gray-600 hover:bg-gray-50 transition border border-transparent">8</button>
          <button className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:border-gray-300 transition">&gt;</button>
        </div>
      </div>

      {/* RIGHT COLUMN: DETAIL */}
      <div className="w-[390px] shrink-0 border-l border-gray-100 bg-white p-6 h-full overflow-y-auto no-scrollbar">
        {/* Images Mosaic */}
        <div className="flex gap-2 mb-6 w-full">
          <div className="flex-1 w-2/3">
            <img src="https://images.unsplash.com/photo-1613490900233-141c556ade24?auto=format&w=800&q=80" className="w-full h-[220px] object-cover rounded-l-2xl rounded-tr-sm rounded-br-sm" alt="Main" />
          </div>
          <div className="flex flex-col gap-2 w-1/3 shrink-0">
            <img src="https://images.unsplash.com/photo-1512915922686-57c11dde9c6b?auto=format&w=300&q=80" className="w-full h-[106px] object-cover rounded-r-2xl rounded-b-sm" alt="Pool" />
            <div className="relative w-full h-[106px]">
              <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&w=300&q=80" className="w-full h-[106px] object-cover rounded-r-2xl rounded-t-sm" alt="Room" />
              <div className="absolute inset-0 bg-black/40 rounded-r-2xl rounded-t-sm flex items-center justify-center">
                <span className="text-white font-bold text-base bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full">12+</span>
              </div>
            </div>
          </div>
        </div>

        {/* Title & Price */}
        <div className="flex justify-between items-start mb-2">
          <h2 className="text-[22px] font-bold text-gray-900 leading-tight pr-4">Maple Haven<br/>Residence</h2>
          <div className="text-right shrink-0 mt-1">
            <span className="text-[22px] font-bold tracking-tight text-gray-900">$75,91</span>
            <span className="text-[11px] font-medium text-gray-500">/month</span>
          </div>
        </div>
        <p className="text-[13px] text-gray-500 font-medium mb-6 flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5 text-brand-orange" /> Jl. Pegangsaan Timur, Jakarta
        </p>

        {/* Action Circles */}
        <div className="flex justify-between items-center mb-8 px-1">
          <div className="flex flex-col items-center gap-1.5 group cursor-pointer">
            <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 group-hover:border-gray-800 transition">
              <Compass className="w-5 h-5"/>
            </div>
            <span className="text-[10px] font-bold text-gray-700">Directions</span>
          </div>
          <div className="flex flex-col items-center gap-1.5 group cursor-pointer">
            <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 group-hover:border-gray-800 transition">
              <MapIcon className="w-5 h-5"/>
            </div>
            <span className="text-[10px] font-bold text-gray-700">Maps</span>
          </div>
          <div className="flex flex-col items-center gap-1.5 group cursor-pointer">
            <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 group-hover:border-gray-800 transition">
              <Crosshair className="w-5 h-5"/>
            </div>
            <span className="text-[10px] font-bold text-gray-700">Nearby</span>
          </div>
          <div className="flex flex-col items-center gap-1.5 group cursor-pointer">
            <div className="w-12 h-12 rounded-full bg-red-50 border border-transparent flex items-center justify-center text-red-500 hover:bg-red-100 transition shadow-[inset_0_2px_4px_rgba(239,68,68,0.1)]">
              <Heart className="w-5 h-5 fill-red-500 text-red-500"/>
            </div>
            <span className="text-[10px] font-bold text-gray-700">Favorites</span>
          </div>
          <div className="flex flex-col items-center gap-1.5 group cursor-pointer">
            <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 group-hover:border-gray-800 transition">
              <Forward className="w-5 h-5"/>
            </div>
            <span className="text-[10px] font-bold text-gray-700">Share</span>
          </div>
        </div>

        {/* Features Text */}
        <div className="mb-6">
          <h3 className="font-bold text-gray-900 mb-2 flex items-center text-sm gap-2">
            <div className="w-4 h-4 rounded-full bg-brand-orange text-white flex items-center justify-center"><CheckCircle2 className="w-3 h-3" /></div> Property Features
          </h3>
          <p className="text-[11px] text-gray-500 font-medium leading-[1.6]">
            Discover premium comfort and lifestyle with an array of top-notch amenities designed to meet your every need.This property offers exclusive features, making it an ideal city residence <a href="#" className="text-blue-600 underline">See details</a>
          </p>
        </div>

        {/* Features Tags */}
        <div className="grid grid-cols-3 gap-2 mb-8">
          <div className="border border-brand-orange/20 bg-brand-orange/5 text-gray-700 text-[11px] font-semibold flex items-center justify-center gap-1.5 py-2.5 rounded-xl">
            <Home className="w-3.5 h-3.5 text-brand-orange"/> 8 Rooms
          </div>
          <div className="border border-brand-orange/20 bg-brand-orange/5 text-gray-700 text-[11px] font-semibold flex items-center justify-center gap-1.5 py-2.5 rounded-xl">
            <BedDouble className="w-3.5 h-3.5 text-brand-orange"/> 9 Beds
          </div>
          <div className="border border-brand-orange/20 bg-brand-orange/5 text-gray-700 text-[11px] font-semibold flex items-center justify-center gap-1.5 py-2.5 rounded-xl">
            <Bath className="w-3.5 h-3.5 text-brand-orange"/> 6 Baths
          </div>
          <div className="border border-brand-orange/20 bg-brand-orange/5 text-gray-700 text-[11px] font-semibold flex items-center justify-center gap-1.5 py-2.5 rounded-xl">
            <Flame className="w-3.5 h-3.5 text-brand-orange"/> 1 Kitchen
          </div>
          <div className="border border-brand-orange/20 bg-brand-orange/5 text-gray-700 text-[11px] font-semibold flex items-center justify-center gap-1.5 py-2.5 rounded-xl">
            <Car className="w-3.5 h-3.5 text-brand-orange"/> 2 Garage
          </div>
          <div className="border border-brand-orange/20 bg-brand-orange/5 text-gray-700 text-[11px] font-semibold flex items-center justify-center gap-1.5 py-2.5 rounded-xl">
            <Home className="w-3.5 h-3.5 text-brand-orange"/> 3 Living Room
          </div>
        </div>

        {/* Property Video Tour */}
        <div className="mb-8">
          <h3 className="font-bold text-gray-900 mb-3 text-sm">Property Video Tour</h3>
          <div className="relative w-full h-[120px] rounded-[16px] overflow-hidden group cursor-pointer border border-gray-100">
            <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&w=600&q=80" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" alt="Video Tour" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/40"></div>
            <div className="absolute top-3 left-3 text-white">
              <p className="font-bold text-sm tracking-tight">Maple Haven Residence</p>
              <p className="text-[10px] font-medium text-white/80">Video Tour</p>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white/30 backdrop-blur border border-white/50 rounded-full flex items-center justify-center group-hover:bg-white/40 transition">
              <Play className="w-4 h-4 fill-white text-white ml-0.5" />
            </div>
          </div>
        </div>

        {/* Agent Contact */}
        <div className="flex items-center justify-between border-t border-gray-100 pt-6 mt-auto">
          <div className="flex items-center gap-3">
            <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d2" alt="Soke Bahtera" className="w-10 h-10 rounded-full object-cover border border-gray-200" />
            <div>
              <p className="text-[13px] font-bold text-gray-900">Soke Bahtera</p>
              <p className="text-[10px] font-medium text-gray-500">Agent Maple Haven Residence</p>
            </div>
          </div>
          <button className="bg-brand-orange hover:bg-orange-600 text-white text-[11px] font-bold px-4 py-2.5 rounded-full shadow-lg shadow-brand-orange/20 transition">
            Contact Agent
          </button>
        </div>
      </div>
    </div>
  )
}
