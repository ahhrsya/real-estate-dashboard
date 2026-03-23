import { Download, Filter, TrendingUp, TrendingDown, RefreshCcw, Bell, Lock } from "lucide-react"
import { Button } from "../ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table"
import { Badge } from "../ui/badge"
import { Card } from "../ui/card"

const deals = [
  { id: 1, property: "Villa 7, Palm Jumeirah", buyer: "Ahmed Hassan", date: "Mar 20, 2026", price: "$3,400,000", commPct: "2.5%", commAmt: "$85,000", status: "Paid" },
  { id: 2, property: "42 Park Avenue, NYC", buyer: "Sarah Mitchell", date: "Mar 18, 2026", price: "$2,250,000", commPct: "3.0%", commAmt: "$67,500", status: "Pending" },
  { id: 3, property: "14 Chelsea Mews, London", buyer: "James Patel", date: "Mar 15, 2026", price: "£1,800,000", commPct: "2.0%", commAmt: "£36,000", status: "Paid" },
  { id: 4, property: "Studio 8A, Dubai", buyer: "Fatima Al Mansoori", date: "Mar 10, 2026", price: "$320,000", commPct: "2.0%", commAmt: "$6,400", status: "Paid" },
  { id: 5, property: "88 Riverside Drive", buyer: "Ryan Carter", date: "Mar 05, 2026", price: "$5,900,000", commPct: "2.5%", commAmt: "$147,500", status: "Pending" },
]

export function CommissionTracker() {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold font-sans text-brand-navy">Commission & Deals</h2>
          <p className="text-sm text-gray-500 mt-1">Track closed deals and commission payouts MTD.</p>
        </div>
        <div className="flex gap-4">
          <Button variant="outline"><Filter className="w-4 h-4 mr-2"/> Filter Range</Button>
          <Button className="bg-brand-navy hover:bg-brand-navy/90 text-white"><Download className="w-4 h-4 mr-2"/> Export Report</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 border-none shadow-sm shadow-gray-200/50 bg-brand-navy text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10"><TrendingUp className="w-24 h-24" /></div>
          <p className="text-sm font-medium text-white/70">Total Commission MTD</p>
          <h3 className="text-4xl font-bold font-mono text-brand-gold mt-2 mb-1">$342,400</h3>
          <p className="text-sm font-medium text-green-400 flex items-center gap-1">+12.5% vs Last Month</p>
        </Card>
        
        <Card className="p-6 border-none shadow-sm shadow-gray-200/50 bg-white">
          <p className="text-sm font-medium text-gray-500">Pending Payouts</p>
          <h3 className="text-3xl font-bold font-mono text-brand-navy mt-2 mb-1">$215,000</h3>
          <p className="text-sm font-medium text-gray-400 flex items-center gap-1">From 2 deals</p>
        </Card>

        <Card className="p-6 border-none shadow-sm shadow-gray-200/50 bg-white">
          <p className="text-sm font-medium text-gray-500">Total Volume Sold</p>
          <h3 className="text-3xl font-bold font-mono text-brand-navy mt-2 mb-1">$13.67M</h3>
          <p className="text-sm font-medium text-green-500 flex items-center gap-1">5 Properties Closed</p>
        </Card>
      </div>

      <Card className="border-none shadow-sm overflow-hidden bg-white">
        <div className="px-6 py-4 border-b border-gray-50 bg-white flex justify-between items-center">
          <h3 className="font-bold text-brand-navy">Recent Deals</h3>
          <Button variant="ghost" size="sm" className="text-brand-gold hover:text-brand-gold/80 hover:bg-brand-gold/5">View All</Button>
        </div>
        <Table>
          <TableHeader className="bg-gray-50/50">
            <TableRow className="border-gray-100 hover:bg-transparent">
              <TableHead className="font-bold text-gray-600">Property</TableHead>
              <TableHead className="font-bold text-gray-600">Buyer</TableHead>
              <TableHead className="font-bold text-gray-600">Closing Date</TableHead>
              <TableHead className="text-right font-bold text-gray-600">Sale Price</TableHead>
              <TableHead className="text-center font-bold text-gray-600">Comm %</TableHead>
              <TableHead className="text-right font-bold text-gray-600">Comm Amount</TableHead>
              <TableHead className="text-center font-bold text-gray-600">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {deals.map(deal => (
              <TableRow key={deal.id} className="border-gray-50 hover:bg-gray-50/50 cursor-pointer group">
                <TableCell className="font-bold text-brand-navy">{deal.property}</TableCell>
                <TableCell className="text-sm text-gray-600">{deal.buyer}</TableCell>
                <TableCell className="text-sm font-mono text-gray-500">{deal.date}</TableCell>
                <TableCell className="text-right font-mono font-bold text-brand-navy">{deal.price}</TableCell>
                <TableCell className="text-center font-mono font-medium text-gray-400 bg-gray-50/50">{deal.commPct}</TableCell>
                <TableCell className="text-right font-mono font-bold text-brand-gold bg-brand-gold/5">{deal.commAmt}</TableCell>
                <TableCell className="text-center">
                  <Badge variant="outline" className={`border-none ${deal.status === 'Paid' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                    {deal.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  )
}
