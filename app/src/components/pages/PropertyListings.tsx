import { topListings } from "../../data"
import { Search, Filter, Plus, LayoutGrid, List, BedDouble, Bath, Link as LinkIcon, MoreVertical } from "lucide-react"
import { Button } from "../ui/button"
import { Badge } from "../ui/badge"
import { Link } from "react-router-dom"

export function PropertyListings() {
  const listings = [
    ...topListings,
    { id: 3, address: "14 Chelsea Mews, London", price: "£1,850,000", beds: 4, baths: 3, sqft: 2800, status: "Available", enquiries: 9, image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=500&q=80" },
    { id: 4, address: "Studio 8A, Downtown Dubai", price: "AED 1,200,000", beds: 1, baths: 1, sqft: 850, status: "Let", enquiries: 31, image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&w=500&q=80" },
    { id: 5, address: "88 Riverside Drive, NYC", price: "$5,900,000", beds: 4, baths: 5, sqft: 4200, status: "Available", enquiries: 7, image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&w=500&q=80" },
  ]

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-6 animate-in fade-in duration-500">
      <div className="flex justify-between items-center bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
        <h2 className="text-2xl font-bold font-sans text-brand-navy leading-none">Property Portfolio</h2>
        <div className="flex items-center gap-4">
          <div className="bg-gray-50 rounded-lg p-1 flex">
            <Button variant="ghost" size="sm" className="h-8 shadow-sm bg-white hover:bg-white text-brand-navy px-3"><LayoutGrid className="w-4 h-4 mr-2"/> Grid</Button>
            <Button variant="ghost" size="sm" className="h-8 text-gray-500 hover:text-brand-navy px-3"><List className="w-4 h-4 mr-2"/> List</Button>
          </div>
          <Button variant="outline" className="border-gray-200"><Filter className="w-4 h-4 mr-2"/> Filters</Button>
          <Button className="bg-brand-gold hover:bg-brand-gold/90 text-white font-semibold"><Plus className="w-4 h-4 mr-2"/> Add Listing</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {listings.map(listing => (
          <div key={listing.id} className="rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 bg-white cursor-pointer group border border-gray-100 flex flex-col">
            <div className="relative h-56 w-full overflow-hidden shrink-0">
              <img src={listing.image} alt={listing.address} className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-out" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <Badge className={`absolute top-4 left-4 font-bold text-xs px-2.5 py-1 ${listing.status === 'Available' ? 'bg-green-500 text-white border-none' : listing.status === 'Under Offer' ? 'bg-amber-500 text-white border-none' : 'bg-gray-800 text-white border-none'}`}>
                {listing.status}
              </Badge>
              <Badge variant="secondary" className="absolute top-4 right-4 bg-white/90 text-brand-navy font-bold hover:bg-white">{listing.enquiries} Inquiries</Badge>
            </div>
            
            <div className="p-5 flex flex-col flex-1">
              <div className="flex justify-between items-start mb-2">
                <Link to={`/properties/${listing.id}`} className="font-bold text-lg text-brand-navy group-hover:text-brand-gold transition-colors line-clamp-1">{listing.address}</Link>
                <Button variant="ghost" size="icon" className="h-6 w-6 text-gray-400 hover:text-brand-navy shrink-0 -mr-2"><MoreVertical className="w-4 h-4" /></Button>
              </div>
              <p className="font-mono text-xl font-bold text-brand-navy mt-auto mb-4">{listing.price}</p>
              
              <div className="flex items-center gap-4 text-sm text-gray-500 font-medium py-3 border-t border-gray-50 mt-auto">
                <span className="flex items-center gap-1.5"><BedDouble className="w-4 h-4 text-gray-400"/> {listing.beds} <span className="hidden sm:inline">Beds</span></span>
                <span className="flex items-center gap-1.5"><Bath className="w-4 h-4 text-gray-400"/> {listing.baths} <span className="hidden sm:inline">Baths</span></span>
                <span className="flex items-center gap-1.5 ml-auto text-xs"><LinkIcon className="w-3.5 h-3.5"/> Portals (4)</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
