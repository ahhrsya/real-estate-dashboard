import { useState } from "react"
import { Search, Filter, Phone, Mail, MessageSquare, Calendar as CalIcon, MapPin, MoreHorizontal, Clock, TrendingUp, CheckCircle, FileText } from "lucide-react"
import { Badge } from "../ui/badge"
import { Avatar, AvatarFallback } from "../ui/avatar"
import { Card } from "../ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs"
import { Button } from "../ui/button"

const leads = [
  { id: 1, name: "Ahmed Hassan", source: "Bayut", interest: "Palm Jumeirah Villa, 5BR", score: "Hot 🔥", status: "Viewing Scheduled", time: "5 min ago", avatar: "AH" },
  { id: 2, name: "Sarah Mitchell", source: "Zillow", interest: "Upper West Side, 3BR", score: "Warm", status: "New", time: "1 hr ago", avatar: "SM" },
  { id: 3, name: "James & Priya Patel", source: "Rightmove", interest: "Chelsea, period property", score: "Hot 🔥", status: "Offer Submitted", time: "3 hrs ago", avatar: "JP" },
  { id: 4, name: "Ryan Carter", source: "Realtor.com", interest: "Brooklyn, under $900k", score: "Cold", status: "Followed Up", time: "Yesterday", avatar: "RC" },
  { id: 5, name: "Fatima Al Mansoori", source: "Property Finder", interest: "Downtown Dubai Apartment", score: "Warm", status: "New", time: "Yesterday", avatar: "FM" },
]

const sourceColors: Record<string, string> = {
  "Zillow": "bg-blue-600 text-white",
  "Realtor.com": "bg-red-600 text-white",
  "Rightmove": "bg-green-700 text-white",
  "Property Finder": "bg-teal-600 text-white",
  "Bayut": "bg-orange-500 text-white"
}

const scoreStyles: Record<string, string> = {
  "Hot 🔥": "bg-red-500 text-white",
  "Warm": "bg-amber-500 text-white",
  "Cold": "border border-gray-300 text-gray-500 bg-transparent"
}

export function LeadInbox() {
  const [selectedLead, setSelectedLead] = useState(leads[0])

  return (
    <div className="flex h-full w-full animate-in fade-in duration-500">
      {/* Left Column: Inbox List */}
      <div className="w-1/3 border-r border-gray-100 bg-white flex flex-col">
        <div className="p-6 border-b border-gray-100">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold font-sans">Lead Inbox</h2>
            <Button variant="outline" size="icon" className="h-8 w-8"><Filter className="w-4 h-4" /></Button>
          </div>
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search leads..." 
              className="w-full bg-gray-50 border border-transparent focus:border-brand-navy rounded-lg py-2 pl-9 pr-4 text-sm outline-none transition"
            />
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {leads.map(lead => (
            <Card 
              key={lead.id} 
              className={`p-4 cursor-pointer transition-all border ${selectedLead.id === lead.id ? 'border-brand-navy shadow-md ring-1 ring-brand-navy/10' : 'border-gray-100 hover:border-brand-navy/30'}`}
              onClick={() => setSelectedLead(lead)}
            >
              <div className="flex gap-3 items-start">
                <Avatar className="w-10 h-10 mt-1 bg-brand-navy">
                  <AvatarFallback className="text-white bg-brand-navy font-bold text-sm tracking-wider">{lead.avatar}</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-bold text-brand-navy text-sm truncate">{lead.name}</h4>
                    <span className="text-xs text-gray-400 shrink-0 ml-2">{lead.time}</span>
                  </div>
                  <p className="text-xs text-gray-500 truncate mb-2">{lead.interest}</p>
                  <div className="flex justify-between items-center">
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${sourceColors[lead.source] || 'bg-gray-500 text-white'}`}>{lead.source}</span>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold shadow-sm ${scoreStyles[lead.score]}`}>{lead.score}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Right Column: CRM Profile */}
      <div className="w-2/3 flex flex-col bg-bg-page overflow-y-auto">
        <div className="bg-white p-8 border-b border-gray-100 flex justify-between items-start">
          <div className="flex gap-6 items-center">
            <Avatar className="w-20 h-20 border-4 border-white shadow-sm bg-brand-navy">
              <AvatarFallback className="text-white bg-brand-navy text-2xl font-bold">{selectedLead.avatar}</AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h2 className="text-3xl font-bold font-sans">{selectedLead.name}</h2>
                <span className={`text-[11px] px-2.5 py-1 rounded-full font-bold shadow-sm ${scoreStyles[selectedLead.score]}`}>{selectedLead.score} Lead</span>
              </div>
              <p className="text-sm font-medium text-gray-500 mb-3 flex items-center gap-2">
                Source: <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${sourceColors[selectedLead.source] || 'bg-gray-500 text-white'}`}>{selectedLead.source}</span>
                <span className="text-gray-300">•</span>
                Assigned to <span className="text-brand-navy font-semibold">Jessica Park</span>
              </p>
              <div className="flex gap-3">
                <Button size="sm" variant="outline" className="h-8 gap-2 border-brand-navy/20 text-brand-navy"><Phone className="w-3.5 h-3.5" /> Call</Button>
                <Button size="sm" variant="outline" className="h-8 gap-2 border-brand-navy/20 text-brand-navy"><MessageSquare className="w-3.5 h-3.5" /> WhatsApp</Button>
                <Button size="sm" variant="outline" className="h-8 gap-2 border-brand-navy/20 text-brand-navy"><Mail className="w-3.5 h-3.5" /> Email</Button>
                <Button size="sm" className="h-8 gap-2 bg-brand-gold hover:bg-brand-gold/90 text-white"><CalIcon className="w-3.5 h-3.5" /> Schedule</Button>
              </div>
            </div>
          </div>
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-brand-navy"><MoreHorizontal /></Button>
        </div>

        <div className="p-8">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="bg-white border text-brand-navy border-gray-100 p-1 w-full flex justify-start mb-6">
              <TabsTrigger value="overview" className="px-6 data-[state=active]:bg-brand-navy data-[state=active]:text-white data-[state=active]:shadow-md">Overview</TabsTrigger>
              <TabsTrigger value="viewings" className="px-6 data-[state=active]:bg-brand-navy data-[state=active]:text-white data-[state=active]:shadow-md">Viewings</TabsTrigger>
              <TabsTrigger value="offers" className="px-6 data-[state=active]:bg-brand-navy data-[state=active]:text-white data-[state=active]:shadow-md">Offers</TabsTrigger>
              <TabsTrigger value="notes" className="px-6 data-[state=active]:bg-brand-navy data-[state=active]:text-white data-[state=active]:shadow-md">Notes</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview">
              <div className="grid grid-cols-2 gap-6">
                <Card className="p-6 border-none shadow-sm shadow-gray-200/50 bg-white">
                  <h3 className="font-bold text-gray-800 mb-4 border-b border-gray-50 pb-2">Buyer Requirements</h3>
                  <div className="space-y-4 text-sm">
                    <div><span className="text-gray-400 block mb-1">Budget</span><p className="font-mono font-bold text-lg text-brand-navy">$2.0M - $2.5M</p></div>
                    <div><span className="text-gray-400 block mb-1">Looking For</span><p className="font-medium text-gray-700">3-4 Bedrooms, Private Garden, Modern Inter.</p></div>
                    <div><span className="text-gray-400 block mb-1">Timeline</span><p className="font-medium text-gray-700">ASAP (Pre-approved)</p></div>
                    <div><span className="text-gray-400 block mb-1">Locations</span><p className="font-medium text-gray-700 flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-brand-gold"/> Upper West Side, Chelsea</p></div>
                  </div>
                </Card>
                <div className="space-y-6">
                  <Card className="p-6 border-none shadow-sm shadow-gray-200/50 bg-white">
                    <h3 className="font-bold text-gray-800 mb-4 border-b border-gray-50 pb-2">Status & Journey</h3>
                    <div className="relative pl-6 space-y-6 before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                      <div className="relative flex items-center justify-between z-10">
                        <div className="flex items-center gap-3">
                          <div className="w-5 h-5 bg-brand-gold rounded-full flex items-center justify-center border-[3px] border-white shadow-sm ring-1 ring-brand-gold"><CheckCircle className="w-3 h-3 text-white"/></div>
                          <p className="text-sm font-bold text-brand-navy">Offer Submitted</p>
                        </div>
                        <span className="text-xs text-gray-400">3 hrs ago</span>
                      </div>
                      <div className="relative flex items-center justify-between z-10">
                        <div className="flex items-center gap-3">
                          <div className="w-5 h-5 bg-gray-200 rounded-full flex items-center justify-center border-[3px] border-white shadow-sm"></div>
                          <p className="text-sm font-medium text-gray-600">Viewing Completed</p>
                        </div>
                        <span className="text-xs text-gray-400">2 days ago</span>
                      </div>
                      <div className="relative flex items-center justify-between z-10">
                        <div className="flex items-center gap-3">
                          <div className="w-5 h-5 bg-gray-200 rounded-full flex items-center justify-center border-[3px] border-white shadow-sm"></div>
                          <p className="text-sm font-medium text-gray-600">Enquiry Received</p>
                        </div>
                        <span className="text-xs text-gray-400">5 days ago</span>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="viewings">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-12 text-center">
                <CalIcon className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-bold">No upcoming viewings</h3>
                <p className="text-gray-500 mb-6 max-w-sm mx-auto">This lead has no scheduled viewings right now.</p>
                <Button className="bg-brand-navy text-white hover:bg-brand-navy/90">Schedule a Viewing</Button>
              </div>
            </TabsContent>
            <TabsContent value="offers"><div className="p-8 text-center text-gray-500">Offers history placeholder</div></TabsContent>
            <TabsContent value="notes"><div className="p-8 text-center text-gray-500">Agent notes placeholder</div></TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
