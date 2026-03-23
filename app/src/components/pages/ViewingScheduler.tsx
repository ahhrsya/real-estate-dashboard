import { Calendar, ChevronLeft, ChevronRight, Clock, MapPin, UserCheck, Video } from "lucide-react"
import { Button } from "../ui/button"
import { todaysViewings } from "../../data"
import { Avatar, AvatarFallback } from "../ui/avatar"

export function ViewingScheduler() {
  const hours = Array.from({ length: 9 }, (_, i) => i + 9) // 9 AM to 5 PM
  const days = ["Mon 23", "Tue 24", "Wed 25", "Thu 26", "Fri 27"]

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-6 animate-in fade-in duration-500 h-full flex flex-col">
      <div className="flex justify-between items-center bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
        <div>
          <h2 className="text-2xl font-bold font-sans text-brand-navy">Viewing Scheduler</h2>
          <p className="text-sm text-gray-500 mt-1">Manage and track property viewings</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center bg-gray-50 rounded-lg p-1 mr-4 border border-gray-100">
            <Button variant="ghost" size="icon" className="h-8 w-8"><ChevronLeft className="w-4 h-4" /></Button>
            <span className="px-4 text-sm font-semibold text-brand-navy">Week of Mar 23</span>
            <Button variant="ghost" size="icon" className="h-8 w-8"><ChevronRight className="w-4 h-4" /></Button>
          </div>
          <Button variant="outline" className="border-gray-200">Sync Calendar</Button>
          <Button className="bg-brand-navy hover:bg-brand-navy/90 text-white font-semibold shadow-md"><Calendar className="w-4 h-4 mr-2"/> Schedule Viewing</Button>
        </div>
      </div>

      <div className="flex-1 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
        {/* Calendar Header */}
        <div className="flex border-b border-gray-100">
          <div className="w-20 border-r border-gray-100 bg-gray-50/50"></div>
          {days.map((day, i) => (
            <div key={day} className={`flex-1 py-4 text-center border-r border-gray-100 last:border-r-0 ${i === 0 ? 'bg-brand-navy/5' : ''}`}>
              <p className={`text-sm font-bold ${i === 0 ? 'text-brand-navy' : 'text-gray-500'}`}>{day}</p>
            </div>
          ))}
        </div>
        
        {/* Calendar Grid */}
        <div className="flex-1 overflow-y-auto relative bg-[#FAFAFA]">
          <div className="flex flex-col">
            {hours.map(hour => (
              <div key={hour} className="flex h-24 border-b border-gray-100 last:border-b-0 w-full relative">
                <div className="w-20 border-r border-gray-100 bg-white flex justify-center py-2 shrink-0">
                  <span className="text-xs font-mono text-gray-400 font-medium">{hour > 12 ? `${hour-12}:00 PM` : `${hour}:00 ${hour===12?'PM':'AM'}`}</span>
                </div>
                {days.map((day, dIdx) => (
                  <div key={day} className={`flex-1 border-r border-gray-100 last:border-r-0 relative p-1 transition hover:bg-black/5 ${dIdx === 0 ? 'bg-white' : ''}`}>
                    {/* Render a viewing card if it matches day and hour manually for demo */}
                    {dIdx === 0 && hour === 10 && (
                      <div className="absolute top-2 left-2 right-2 h-20 bg-blue-50 border border-blue-200 rounded-lg p-2 shadow-sm z-10 hover:shadow-md cursor-pointer transition">
                        <div className="flex items-center justify-between mb-1">
                          <p className="text-xs font-bold text-blue-900 truncate">Ahmed Hassan</p>
                          <span className="text-[10px] font-mono text-blue-700 bg-blue-100 px-1 rounded">10:00 - 11:00</span>
                        </div>
                        <p className="text-[10px] text-blue-600 truncate flex items-center gap-1"><MapPin className="w-3 h-3"/> Villa 7, Palm Jumeirah</p>
                      </div>
                    )}
                    {dIdx === 0 && hour === 13 && (
                      <div className="absolute top-10 left-2 right-2 h-16 bg-green-50 border border-green-200 rounded-lg p-2 shadow-sm z-10 hover:shadow-md cursor-pointer transition">
                        <div className="flex items-center justify-between mb-1">
                          <p className="text-xs font-bold text-green-900 truncate">Sarah Mitchell</p>
                          <span className="text-[10px] font-mono text-green-700 bg-green-100 px-1 rounded">1:30 - 2:00</span>
                        </div>
                        <p className="text-[10px] text-green-600 truncate flex items-center gap-1"><Video className="w-3 h-3"/> Virtual Tour</p>
                      </div>
                    )}
                    {dIdx === 0 && hour === 15 && (
                      <div className="absolute top-2 left-2 right-2 h-20 bg-amber-50 border border-amber-200 rounded-lg p-2 shadow-sm z-10 hover:shadow-md cursor-pointer transition flex flex-col justify-center border-l-4 border-l-amber-500">
                        <div className="flex items-center justify-between">
                          <p className="text-xs font-bold text-amber-900">James Patel</p>
                          <span className="text-[10px] font-mono text-amber-700 bg-amber-100 px-1 rounded">3:00 - 4:00</span>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
          
          {/* Current Time Indicator Line for Today (Monday) */}
          <div className="absolute left-20 border-t-2 border-brand-gold w-[calc(20%)] z-20 flex items-center" style={{ top: 'calc(4 * 6rem + 2rem)' }}>
            <div className="w-2 h-2 rounded-full bg-brand-gold -ml-1 absolute"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
