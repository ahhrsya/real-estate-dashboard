import React from "react"
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card"
import { Badge } from "./ui/badge"
import { ScrollArea } from "./ui/scroll-area"
import { Avatar, AvatarFallback } from "./ui/avatar"
import { kpiData, funnelData, todaysViewings, recentActivities, topListings } from "../data"
import { Clock, TrendingUp, MapPin, BedDouble, Bath, PlusCircle, Calendar as CalIcon, Award } from "lucide-react"

export function Dashboard() {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold text-brand-navy font-sans tracking-tight">Agent Home</h2>
          <p className="text-gray-500 mt-1">Here's your performance snapshot for today, Jessica.</p>
        </div>
        <p className="text-sm font-semibold text-gray-400">Tuesday, Mar 23</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpiData.map((kpi, i) => (
          <Card key={i} className="border-none shadow-sm shadow-gray-200/50 hover:shadow-md transition bg-white group">
            <CardContent className="p-6">
              <p className="text-sm font-medium text-gray-500">{kpi.label}</p>
              <div className="flex items-baseline gap-3 mt-3">
                <h3 className="text-3xl font-bold font-mono text-brand-navy group-hover:text-brand-gold transition">{kpi.value}</h3>
                <span className={`text-xs font-semibold px-2 py-1 rounded-full ${kpi.trendUp ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                  {kpi.trend}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="col-span-1 lg:col-span-2 shadow-sm border-none bg-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-bold">Pipeline Conversion</CardTitle>
            <CardDescription>MTD progression from lead to deal closed</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={funnelData} layout="vertical" margin={{ top: 0, right: 30, left: 20, bottom: 5 }}>
                  <XAxis type="number" hide />
                  <YAxis dataKey="stage" type="category" axisLine={false} tickLine={false} tick={{fill: '#6b7280', fontWeight: 500}} width={90} />
                  <Tooltip cursor={{fill: 'transparent'}} contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)'}} />
                  <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={28}>
                    {funnelData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-1 shadow-sm border-none bg-white flex flex-col">
          <CardHeader className="pb-0">
            <div className="flex justify-between items-center bg-gray-50/50 rounded-xl px-4 py-2 border border-gray-100 mb-2">
              <span className="font-semibold text-brand-navy">Today's Viewings</span>
              <Badge variant="secondary" className="bg-brand-gold/10 text-brand-gold font-bold">{todaysViewings.length}</Badge>
            </div>
          </CardHeader>
          <CardContent className="flex-1 p-0 mt-4 overflow-hidden">
            <ScrollArea className="h-[280px] px-6">
              <div className="space-y-6">
                {todaysViewings.map((viewing: any, i: number) => (
                  <div key={i} className="flex gap-4 relative">
                    {i !== todaysViewings.length - 1 && <div className="absolute left-[3.5px] top-6 bottom-[-24px] w-0.5 bg-gray-100"></div>}
                    <div className="flex flex-col items-center z-10">
                      <div className="w-2 h-2 rounded-full mt-1.5 bg-brand-gold shadow-[0_0_0_4px_rgba(201,168,76,0.15)]"></div>
                    </div>
                    <div className="flex-1 bg-white border border-gray-100 p-4 rounded-xl shadow-[0_2px_8px_-4px_rgba(0,0,0,0.05)] group hover:border-brand-navy/20 transition cursor-pointer">
                      <div className="flex justify-between items-start mb-2">
                        <p className="font-bold text-sm text-brand-navy group-hover:text-brand-gold">{viewing.leadName}</p>
                        <span className="text-xs font-mono font-medium text-gray-400 bg-gray-50 px-2 py-0.5 rounded">{viewing.time}</span>
                      </div>
                      <p className="text-xs text-gray-500 flex items-center gap-1.5 mb-3"><MapPin className="w-3 h-3" /> {viewing.property}</p>
                      <div className="flex justify-between items-center">
                        <Badge variant="outline" className="text-[10px] h-5 rounded-full uppercase tracking-wider">{viewing.status}</Badge>
                        <div className="flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                          <span className="text-[10px] font-bold text-gray-400">HOT</span>
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
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2"><TrendingUp className="w-5 h-5 text-gray-400" /> Recent Activity</h3>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-50">
            <div className="space-y-5">
              {recentActivities.map((act) => (
                <div key={act.id} className="flex gap-4 items-start group">
                  <Avatar className="w-10 h-10 border border-gray-100">
                    <AvatarFallback className={`${act.type === 'offer' ? 'bg-orange-100 text-orange-600' : act.type === 'lead' ? 'bg-blue-100 text-blue-600' : act.type === 'close' ? 'bg-brand-gold/20 text-brand-gold' : 'bg-green-100 text-green-600'}`}>
                      {act.type === 'offer' ? '$' : act.type === 'lead' ? <PlusCircle className="w-4 h-4"/> : act.type === 'close' ? <Award className="w-4 h-4" /> : <CalIcon className="w-4 h-4"/> }
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 border-b border-gray-50 pb-4 group-last:border-0 group-last:pb-0">
                    <p className="text-sm font-medium text-gray-800 leading-snug">{act.message}</p>
                    <div className="flex items-center gap-2 mt-1.5">
                      <span className="text-xs text-gray-400 flex items-center gap-1"><Clock className="w-3 h-3" /> {act.time}</span>
                      <span className="text-[10px] text-gray-300">•</span>
                      <span className="text-xs text-gray-500 font-medium">{act.agent}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 py-2.5 text-sm font-semibold text-brand-navy hover:text-brand-gold bg-gray-50 hover:bg-brand-gold/5 rounded-xl transition">
              View All Activity
            </button>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2"><Award className="w-5 h-5 text-gray-400" /> Hot Listings</h3>
          <div className="space-y-4">
            {topListings.map((listing) => (
              <Card key={listing.id} className="border-none shadow-sm hover:shadow-md transition overflow-hidden bg-white p-3 cursor-pointer group">
                <div className="flex gap-4 h-28">
                  <div className="w-32 h-full rounded-xl overflow-hidden relative shrink-0">
                    <img src={listing.image} alt={listing.address} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    <Badge className="absolute bottom-2 left-2 bg-white/90 text-[10px] text-brand-navy font-bold py-0 hover:bg-white">{listing.enquiries} Inquiries</Badge>
                  </div>
                  <div className="flex-1 flex flex-col justify-center py-1">
                    <h4 className="font-bold text-gray-800 group-hover:text-brand-navy line-clamp-1">{listing.address}</h4>
                    <p className="font-mono text-brand-navy font-bold text-lg leading-none mt-1 group-hover:text-brand-gold transition duration-300">{listing.price}</p>
                    
                    <div className="flex items-center gap-3 mt-3">
                      <span className="flex items-center gap-1 text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded-md"><BedDouble className="w-3.5 h-3.5"/> {listing.beds}</span>
                      <span className="flex items-center gap-1 text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded-md"><Bath className="w-3.5 h-3.5"/> {listing.baths}</span>
                      <span className="text-xs text-gray-400 font-mono ml-auto">{listing.status}</span>
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
