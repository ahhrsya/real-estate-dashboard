import { agents } from "../../data"
import { Award, Filter, Download } from "lucide-react"
import { Button } from "../ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table"
import { Badge } from "../ui/badge"
import { Card } from "../ui/card"

export function AgentPerformance() {
  const fullAgents = [
    ...agents,
    { id: 2, name: "Omar Al Farsi", title: "Partner", leads: 48, viewings: 31, offers: 12, closings: 5, commission: 42000, avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d2" },
    { id: 3, name: "Claire Beaumont", title: "Agent", leads: 27, viewings: 18, offers: 4, closings: 2, commission: 12200, avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d3" },
    { id: 4, name: "Tyler Rhodes", title: "Junior Agent", leads: 19, viewings: 12, offers: 2, closings: 1, commission: 6200, avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d4" },
  ].sort((a,b) => b.commission - a.commission)

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold font-sans text-brand-navy">Agent Performance</h2>
          <p className="text-sm text-gray-500 mt-1">Leaderboard and team conversion numbers.</p>
        </div>
        <div className="flex gap-4">
          <Button variant="outline"><Filter className="w-4 h-4 mr-2"/> Filter Range</Button>
          <Button variant="outline"><Download className="w-4 h-4 mr-2"/> Export</Button>
        </div>
      </div>

      <Card className="border-none shadow-sm overflow-hidden bg-white">
        <Table>
          <TableHeader className="bg-gray-50/50">
            <TableRow className="border-gray-100 hover:bg-transparent">
              <TableHead className="w-16 text-center font-bold text-gray-400">Rank</TableHead>
              <TableHead className="font-bold text-gray-600">Agent</TableHead>
              <TableHead className="text-center font-bold text-gray-600">Leads</TableHead>
              <TableHead className="text-center font-bold text-gray-600">Viewings</TableHead>
              <TableHead className="text-center font-bold text-gray-600">Offers</TableHead>
              <TableHead className="text-center font-bold text-gray-600">Closings</TableHead>
              <TableHead className="text-right font-bold text-gray-600">Commission MTD</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {fullAgents.map((agent, index) => (
              <TableRow key={agent.id} className={`border-gray-50 transition-colors ${index === 0 ? 'bg-brand-gold/5 hover:bg-brand-gold/10' : 'hover:bg-gray-50/50'}`}>
                <TableCell className="text-center border-l-4 border-transparent p-0 relative">
                  {index === 0 && <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-gold"></div>}
                  <span className={`text-xl font-bold font-mono ${index === 0 ? 'text-brand-gold' : 'text-gray-300'}`}>#{index + 1}</span>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-3 py-2">
                    <Avatar className="w-10 h-10 border border-gray-100 shadow-sm">
                      <AvatarImage src={agent.avatar} />
                      <AvatarFallback>{agent.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-bold text-brand-navy flex items-center gap-2">{agent.name} {index === 0 && <Award className="w-4 h-4 text-brand-gold"/>}</p>
                      <p className="text-xs text-gray-400">{agent.title}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-center font-mono font-medium text-gray-600">{agent.leads}</TableCell>
                <TableCell className="text-center font-mono font-medium text-gray-600">{agent.viewings}</TableCell>
                <TableCell className="text-center font-mono font-medium text-gray-600">{agent.offers}</TableCell>
                <TableCell className="text-center font-mono font-medium text-gray-600">{agent.closings}</TableCell>
                <TableCell className="text-right">
                  <span className={`font-mono font-bold text-lg ${index === 0 ? 'text-brand-gold' : 'text-brand-navy'}`}>
                    ${agent.commission.toLocaleString()}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
      
      <div className="grid grid-cols-2 gap-8">
        <Card className="p-6 shadow-sm border-none bg-white">
          <h3 className="font-bold text-gray-800 mb-4">Team Conversion Funnel</h3>
          <div className="flex items-center justify-between mt-8 relative">
            <div className="absolute top-1/2 -translate-y-1/2 left-10 right-10 h-1 bg-gray-100 z-0"></div>
            
            <div className="flex justify-between w-full z-10">
              <div className="flex flex-col items-center bg-white p-2">
                <div className="w-14 h-14 rounded-full bg-brand-navy flex items-center justify-center text-white font-bold text-lg mb-2 shadow-sm ring-4 ring-white">128</div>
                <p className="text-xs font-semibold text-gray-500 uppercase">Leads</p>
              </div>
              <div className="flex flex-col items-center bg-white p-2">
                <div className="w-14 h-14 rounded-full bg-[#1E3B70] flex items-center justify-center text-white font-bold text-lg mb-2 shadow-sm ring-4 ring-white">83</div>
                <p className="text-xs font-semibold text-gray-500 uppercase">Viewings</p>
              </div>
              <div className="flex flex-col items-center bg-white p-2">
                <div className="w-14 h-14 rounded-full bg-brand-gold flex items-center justify-center text-white font-bold text-lg mb-2 shadow-sm ring-4 ring-white">25</div>
                <p className="text-xs font-semibold text-gray-500 uppercase">Offers</p>
              </div>
              <div className="flex flex-col items-center bg-white p-2">
                <div className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-lg mb-2 shadow-sm ring-4 ring-white">11</div>
                <p className="text-xs font-semibold text-gray-500 uppercase">Closings</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
