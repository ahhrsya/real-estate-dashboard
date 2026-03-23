import { useState } from "react"
import { BedDouble, Bath, Link as LinkIcon, Heart, Share, ChevronRight, CheckCircle, Mail, MapPin } from "lucide-react"
import { Button } from "../ui/button"
import { Badge } from "../ui/badge"
import { Link, useParams } from "react-router-dom"
import { topListings } from "../../data"

export function PropertyDetail() {
  const { id } = useParams()
  // Generate a dummy property profile
  const property = topListings[0] || {
    address: "42 Park Avenue, NYC", price: "$2,400,000", beds: 3, baths: 2, sqft: 2100, status: "Available", enquiries: 18, image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&w=1200&q=80"
  }

  return (
    <div className="max-w-[1600px] mx-auto animate-in fade-in duration-500 bg-white min-h-[calc(100vh-76px)] flex flex-col">
      <div className="border-b border-gray-100 p-4 px-8 flex justify-between items-center bg-white sticky top-0 z-20 shadow-sm">
        <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
          <Link to="/listings" className="hover:text-brand-navy transition">Listings</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-brand-navy font-bold">{property.address}</span>
        </div>
        <div className="flex gap-3">
          <Button variant="outline"><Share className="w-4 h-4 mr-2"/> Share</Button>
          <Button variant="outline" className="border-brand-navy text-brand-navy"><LinkIcon className="w-4 h-4 mr-2"/> Edit Listing</Button>
          <Button className="bg-brand-gold hover:bg-brand-gold/90 text-white"><CheckCircle className="w-4 h-4 mr-2"/> Mark Sold</Button>
        </div>
      </div>

      <div className="flex-1 flex flex-col md:flex-row">
        <div className="md:w-3/5 border-r border-gray-100 p-8 space-y-8">
          <div className="w-full h-[500px] rounded-2xl overflow-hidden relative shadow-md">
            <img src={property.image} alt={property.address} className="w-full h-full object-cover hover:scale-105 transition duration-700" />
            <div className="absolute top-4 left-4 flex gap-2">
              <Badge className="bg-brand-navy text-white text-xs px-3 py-1 uppercase tracking-wider shadow-sm">{property.status}</Badge>
              <Badge className="bg-white/90 text-brand-navy hover:bg-white text-xs px-3 py-1 shadow-sm">Premium Listing</Badge>
            </div>
          </div>
          
          <div className="flex gap-4 overflow-x-auto pb-4 custom-scrollbar">
            <img src={property.image} className="w-32 h-24 object-cover rounded-xl border-2 border-brand-navy cursor-pointer opacity-100" />
            <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=200&q=80" className="w-32 h-24 object-cover rounded-xl cursor-pointer opacity-60 hover:opacity-100 transition" />
            <img src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&w=200&q=80" className="w-32 h-24 object-cover rounded-xl cursor-pointer opacity-60 hover:opacity-100 transition" />
            <img src="https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&w=200&q=80" className="w-32 h-24 object-cover rounded-xl cursor-pointer opacity-60 hover:opacity-100 transition" />
          </div>

          <div>
            <h1 className="text-4xl font-serif font-bold text-brand-navy mb-2">{property.address}</h1>
            <p className="flex items-center gap-1.5 text-gray-500 font-medium mb-6"><MapPin className="w-4 h-4 text-brand-gold" /> Manhattan, New York</p>
            <div className="flex flex-wrap gap-8 text-brand-navy bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <div><p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Price</p><p className="font-mono text-3xl font-bold">{property.price}</p></div>
              <div className="w-px bg-gray-200"></div>
              <div className="flex items-center gap-2"><div className="bg-white p-3 rounded-full shadow-sm"><BedDouble className="w-5 h-5 text-brand-navy"/></div><div><p className="text-2xl font-bold">{property.beds}</p><p className="text-xs text-brand-navy font-semibold uppercase">Beds</p></div></div>
              <div className="w-px bg-gray-200"></div>
              <div className="flex items-center gap-2"><div className="bg-white p-3 rounded-full shadow-sm"><Bath className="w-5 h-5 text-brand-navy"/></div><div><p className="text-2xl font-bold">{property.baths}</p><p className="text-xs text-brand-navy font-semibold uppercase">Baths</p></div></div>
              <div className="w-px bg-gray-200"></div>
              <div><p className="text-2xl font-bold">{property.sqft.toLocaleString()}</p><p className="text-xs text-brand-navy font-semibold uppercase">Sq Ft</p></div>
            </div>
          </div>
          
          <div className="pt-4">
            <h3 className="text-xl font-bold text-brand-navy mb-4">Description</h3>
            <p className="text-gray-600 leading-relaxed">
              Exquisite and rarely available high-floor residence at 42 Park Avenue. This sun-drenched architectural masterpiece features panoramic exposures, soaring ceilings, and bespoke modern finishes throughout its {property.sqft.toLocaleString()} sq ft layout. 
            </p>
            <br />
            <p className="text-gray-600 leading-relaxed">
              The expansive corner great room provides an unparalleled setting for luxury entertaining, with sweeping vistas of the Manhattan skyline.
            </p>
          </div>
        </div>
        
        <div className="md:w-2/5 bg-gray-50/50 p-8 flex flex-col relative before:absolute before:inset-y-0 before:left-0 before:w-px before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
            <h3 className="font-bold text-brand-navy mb-4 border-b border-gray-50 pb-2 flex justify-between items-center">Performance <Badge className="bg-brand-navy/10 text-brand-navy border-none">{property.enquiries} Enquiries</Badge></h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-xl">
                <p className="text-xs text-gray-500 font-bold uppercase mb-1">Viewings</p>
                <p className="text-2xl font-mono font-bold text-brand-navy">12</p>
                <p className="text-xs text-green-500 mt-1 font-semibold">+2 this week</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl">
                <p className="text-xs text-gray-500 font-bold uppercase mb-1">Offers</p>
                <p className="text-2xl font-mono font-bold text-brand-gold">3</p>
                <p className="text-xs text-gray-400 mt-1 font-medium">1 Negotiating</p>
              </div>
            </div>
          </div>

          <h3 className="font-bold text-brand-navy mb-4">Portals Published To</h3>
          <div className="space-y-3 mb-8">
            <div className="flex justify-between items-center bg-white border border-gray-100 p-3 rounded-lg"><span className="text-sm font-bold text-gray-800 flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-blue-600"></div> Zillow</span><span className="text-xs text-green-500 font-semibold bg-green-50 px-2 py-0.5 rounded">Live</span></div>
            <div className="flex justify-between items-center bg-white border border-gray-100 p-3 rounded-lg"><span className="text-sm font-bold text-gray-800 flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-red-600"></div> Realtor.com</span><span className="text-xs text-green-500 font-semibold bg-green-50 px-2 py-0.5 rounded">Live</span></div>
            <div className="flex justify-between items-center bg-white border border-gray-100 p-3 rounded-lg"><span className="text-sm font-bold text-gray-800 flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-green-700"></div> Rightmove</span><span className="text-xs text-gray-400 font-semibold bg-gray-100 px-2 py-0.5 rounded">Paused</span></div>
          </div>

          <h3 className="font-bold text-brand-navy mb-4">Upcoming Viewings</h3>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 divide-y divide-gray-50">
            <div className="p-4 flex justify-between items-center group cursor-pointer hover:bg-gray-50 transition">
              <div><p className="text-sm font-bold text-brand-navy">Sarah Mitchell</p><p className="text-xs text-gray-500">Tomorrow, 1:30 PM</p></div>
              <Button size="icon" variant="ghost" className="h-8 w-8 text-brand-navy bg-brand-navy/5"><Mail className="w-3.5 h-3.5"/></Button>
            </div>
            <div className="p-4 flex justify-between items-center group cursor-pointer hover:bg-gray-50 transition">
              <div><p className="text-sm font-bold text-brand-navy">David Chen</p><p className="text-xs text-gray-500">Thu, 4:00 PM</p></div>
              <Button size="icon" variant="ghost" className="h-8 w-8 text-brand-navy bg-brand-navy/5"><Mail className="w-3.5 h-3.5"/></Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
