import React from "react"
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, AreaChart, Area, CartesianGrid } from "recharts"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card"
import { Badge } from "./ui/badge"
import { ScrollArea } from "./ui/scroll-area"
import { Avatar, AvatarFallback } from "./ui/avatar"
import { kpiData, funnelData, todaysViewings, recentActivities, topListings } from "../data"
import { Clock, TrendingUp, MapPin, BedDouble, Bath, PlusCircle, Calendar as CalIcon, Award } from "lucide-react"

export function Dashboard() {
  const chartColors = ['#21212B', '#ED5A3B', '#F59E0B', '#10B981']

  return (
    <div className="p-8 max-w-[1600px] mx-auto space-y-8 animate-in fade-in duration-700 min-w-0">
      
      {/* Top Banner */}
      <div className="bg-[#21212B] rounded-[32px] p-10 text-white relative overflow-hidden shadow-2xl mb-8 border border-white/5 mx-auto">
        <div className="absolute -top-10 -right-10 p-8 opacity-[0.03]">
          <TrendingUp className="w-96 h-96 rotate-12" />
        </div>
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end w-full gap-8">
          <div>
            <span className="text-brand-orange font-bold tracking-[0.2em] text-[11px] uppercase mb-4 block">Dashboard Overview</span>
            <h2 className="text-4xl lg:text-5xl font-bold font-sans tracking-tight mb-2">Welcome back, Jessica!</h2>
            <p className="text-gray-400 font-medium text-sm">Here's your performance snapshot for Tuesday, Mar 23.</p>
          </div>
          <div className="flex bg-white/5 rounded-3xl p-5 gap-8 backdrop-blur-md border border-white/10 shadow-[inset_0_1px_2px_rgba(255,255,255,0.1)]">
            <div>
              <p className="text-gray-400 text-[10px] font-bold mb-1 uppercase tracking-widest">Pipeline Value</p>
              <p className="text-3xl font-mono font-bold text-brand-orange">$4.2M</p>
            </div>
            <div className="w-px bg-white/10 hidden md:block"></div>
            <div>
              <p className="text-gray-400 text-[10px] font-bold mb-1 uppercase tracking-widest">Closing Deals</p>
              <p className="text-3xl font-mono font-bold text-white">12</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpiData.map((kpi, i) => (
          <Card key={i} className="border-none shadow-[0_2px_12px_-4px_rgba(0,0,0,0.05)] hover:shadow-xl hover:shadow-brand-orange/5 transition duration-500 bg-white group rounded-[28px] overflow-hidden relative cursor-default">
            <div className="absolute -top-4 -right-4 p-4 opacity-[0.02] group-hover:scale-110 transition duration-700">
               <Award className="w-32 h-32 text-brand-navy" />
            </div>
            <CardContent className="p-7 relative z-10">
              <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">{kpi.label}</p>
              <div className="flex items-center justify-between mt-4">
                <h3 className="text-4xl font-bold font-mono text-gray-900 group-hover:text-brand-orange transition duration-300 tracking-tight">{kpi.value}</h3>
                <span className={`text-[11px] font-bold px-3 py-1.5 rounded-full shadow-sm ${kpi.trendUp ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                  {kpi.trend}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="col-span-1 lg:col-span-2 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.05)] border-none bg-white rounded-[32px] overflow-hidden">
          <CardHeader className="px-8 pt-8 pb-4">
            <CardTitle className="text-xl font-bold text-gray-900">Pipeline Conversion</CardTitle>
            <CardDescription className="font-medium text-gray-500">MTD progression from lead to deal closed</CardDescription>
          </CardHeader>
          <CardContent className="px-6 pb-8">
            <div className="h-[320px] w-full mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={funnelData} layout="vertical" margin={{ top: 0, right: 30, left: 20, bottom: 5 }}>
                  <XAxis type="number" hide />
                  <YAxis dataKey="stage" type="category" axisLine={false} tickLine={false} tick={{fill: '#4B5563', fontWeight: 600, fontSize: 12}} width={100} />
                  <Tooltip cursor={{fill: '#F3F4F6', opacity: 0.5}} contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 8px 24px rgba(0,0,0,0.12)', fontWeight: 'bold'}} />
                  <Bar dataKey="value" radius={[0, 12, 12, 0]} barSize={36}>
                    {funnelData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={chartColors[index % chartColors.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-1 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.05)] border-none bg-white flex flex-col rounded-[32px] overflow-hidden">
          <CardHeader className="px-8 pt-8 pb-0">
            <div className="flex justify-between items-center bg-gray-50 rounded-2xl px-5 py-3 border border-gray-100 mb-4 shadow-inner">
              <span className="font-bold text-gray-800 text-sm">Today's Viewings</span>
              <Badge variant="secondary" className="bg-brand-orange text-white font-bold rounded-full">{todaysViewings.length}</Badge>
            </div>
          </CardHeader>
          <CardContent className="flex-1 p-0 mt-4 overflow-hidden">
            <ScrollArea className="h-[320px] px-8 pb-8">
              <div className="space-y-6">
                {todaysViewings.map((viewing: any, i: number) => (
                  <div key={i} className="flex gap-5 relative">
                    {i !== todaysViewings.length - 1 && <div className="absolute left-[5px] top-6 bottom-[-24px] w-[2px] bg-gray-100"></div>}
                    <div className="flex flex-col items-center z-10 shrink-0">
                      <div className="w-3 h-3 rounded-full mt-1.5 bg-brand-orange shadow-[0_0_0_4px_rgba(237,90,59,0.15)]"></div>
                    </div>
                    <div className="flex-1 bg-white border border-gray-100 p-5 rounded-2xl shadow-[0_2px_8px_-4px_rgba(0,0,0,0.04)] group hover:border-brand-orange/30 transition cursor-pointer">
                      <div className="flex justify-between items-start mb-3">
                        <p className="font-bold text-sm text-gray-900 group-hover:text-brand-orange transition truncate pr-2">{viewing.leadName}</p>
                        <span className="text-[11px] font-mono font-bold text-brand-orange bg-brand-orange/5 px-2 py-1 rounded-md shrink-0">{viewing.time}</span>
                      </div>
                      <p className="text-[11px] font-semibold text-gray-500 flex items-center gap-1.5 mb-4 truncate"><MapPin className="w-3.5 h-3.5 shrink-0" /> {viewing.property}</p>
                      <div className="flex justify-between items-center mt-auto border-t border-gray-50 pt-3">
                        <Badge variant="outline" className="text-[9px] h-5 rounded-md uppercase tracking-widest font-bold border-gray-200 text-gray-500">{viewing.status}</Badge>
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                          <span className="text-[9px] font-bold tracking-wider text-gray-400">HOT</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pb-8">
        <div>
          <h3 className="text-xl font-bold font-sans text-brand-navy mb-5 flex items-center gap-2"><TrendingUp className="w-5 h-5 text-brand-orange" /> Recent Activity</h3>
          <div className="bg-white rounded-[32px] p-8 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.05)] border border-transparent">
            <div className="space-y-6">
              {recentActivities.map((act) => (
                <div key={act.id} className="flex gap-5 items-start group">
                  <Avatar className="w-12 h-12 border border-gray-100 shadow-sm shrink-0">
                    <AvatarFallback className={`${act.type === 'offer' ? 'bg-orange-50 text-orange-600' : act.type === 'lead' ? 'bg-blue-50 text-blue-600' : act.type === 'close' ? 'bg-green-50 text-green-600' : 'bg-indigo-50 text-indigo-600'} font-bold`}>
                      {act.type === 'offer' ? '$' : act.type === 'lead' ? <PlusCircle className="w-5 h-5"/> : act.type === 'close' ? <Award className="w-5 h-5" /> : <CalIcon className="w-5 h-5"/> }
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 border-b border-gray-50 pb-5 group-last:border-0 group-last:pb-0">
                    <p className="text-[13px] font-semibold text-gray-800 leading-snug">{act.message}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <span className="text-[11px] font-bold text-gray-400 flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {act.time}</span>
                      <span className="text-[10px] text-gray-300">•</span>
                      <span className="text-[11px] text-brand-orange font-bold px-2 py-0.5 bg-brand-orange/5 rounded-full">{act.agent}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 py-3.5 text-xs font-bold uppercase tracking-widest text-gray-600 hover:text-brand-orange bg-gray-50 hover:bg-brand-orange/5 rounded-2xl transition border border-gray-100">
              View All Activity
            </button>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold font-sans text-brand-navy mb-5 flex items-center gap-2"><Award className="w-5 h-5 text-brand-orange" /> Hot Listings</h3>
          <div className="space-y-4">
            {topListings.map((listing) => (
              <Card key={listing.id} className="border-none shadow-[0_2px_12px_-4px_rgba(0,0,0,0.05)] hover:shadow-xl hover:shadow-brand-orange/5 transition duration-300 overflow-hidden bg-white p-3 cursor-pointer group rounded-[24px]">
                <div className="flex gap-5 h-32">
                  <div className="w-36 h-full rounded-[16px] overflow-hidden relative shrink-0">
                    <img src={listing.image} alt={listing.address} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <Badge className="absolute bottom-2 left-2 bg-white/95 text-[10px] text-gray-900 font-bold py-0.5 rounded-md hover:bg-white shadow-sm border-none backdrop-blur-sm">{listing.enquiries} Inquiries</Badge>
                  </div>
                  <div className="flex-1 flex flex-col justify-center py-2 pr-2">
                    <h4 className="font-bold text-[15px] text-gray-800 group-hover:text-brand-orange transition line-clamp-1 mb-1">{listing.address}</h4>
                    <p className="font-mono text-gray-900 font-bold text-xl leading-none mt-1 tracking-tight">{listing.price}</p>
                    
                    <div className="flex items-center gap-3 mt-auto pt-3 border-t border-gray-50">
                      <span className="flex items-center gap-1.5 text-[11px] font-bold text-gray-500 bg-gray-50 px-2.5 py-1.5 rounded-lg border border-gray-100"><BedDouble className="w-3.5 h-3.5 text-brand-orange"/> {listing.beds}</span>
                      <span className="flex items-center gap-1.5 text-[11px] font-bold text-gray-500 bg-gray-50 px-2.5 py-1.5 rounded-lg border border-gray-100"><Bath className="w-3.5 h-3.5 text-brand-orange"/> {listing.baths}</span>
                      <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest ml-auto">{listing.status}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
