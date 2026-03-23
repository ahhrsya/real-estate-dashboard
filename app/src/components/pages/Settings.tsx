import { Settings as SettingsIcon, Bell, Lock, Key, Mail, Globe, CheckCircle2 } from "lucide-react"
import { Button } from "../ui/button"
import { Card } from "../ui/card"

export function Settings() {
  const portals = [
    { name: "Zillow", status: "Connected", color: "bg-blue-600", active: true },
    { name: "Rightmove", status: "Connected", color: "bg-green-700", active: true },
    { name: "Property Finder", status: "Connected", color: "bg-teal-600", active: true },
    { name: "Bayut", status: "Disconnected", color: "bg-orange-500", active: false },
    { name: "Realtor.com", status: "Needs Auth", color: "bg-red-600", active: false },
  ]

  return (
    <div className="p-8 max-w-5xl mx-auto space-y-8 animate-in fade-in duration-500">
      <div>
        <h2 className="text-2xl font-bold font-sans text-brand-navy">Integrations & Settings</h2>
        <p className="text-sm text-gray-500 mt-1">Manage portal connections, lead rules, and alerts.</p>
      </div>

      <div className="flex gap-8">
        <div className="w-64 shrink-0 border-r border-gray-100 pr-6 space-y-2">
          <Button variant="ghost" className="w-full justify-start text-brand-navy bg-brand-navy/5 font-semibold"><Globe className="w-4 h-4 mr-3" /> Portals & APIs</Button>
          <Button variant="ghost" className="w-full justify-start text-gray-500 hover:text-brand-navy"><Key className="w-4 h-4 mr-3" /> Lead Routing Rules</Button>
          <Button variant="ghost" className="w-full justify-start text-gray-500 hover:text-brand-navy"><Bell className="w-4 h-4 mr-3" /> Notifications</Button>
          <Button variant="ghost" className="w-full justify-start text-gray-500 hover:text-brand-navy"><Lock className="w-4 h-4 mr-3" /> Security</Button>
        </div>

        <div className="flex-1 space-y-8">
          <Card className="p-8 bg-white shadow-sm border-none">
            <h3 className="text-lg font-bold text-brand-navy mb-2">Portal Integrations</h3>
            <p className="text-sm text-gray-500 mb-6">Connect your property portals to sync leads automatically into PropTrack.</p>
            
            <div className="space-y-4">
              {portals.map(portal => (
                <div key={portal.name} className={`flex items-center justify-between p-4 rounded-xl border ${portal.active ? 'border-gray-200 bg-white' : 'border-gray-100 bg-gray-50'} transition hover:border-brand-navy/30`}>
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-xl ${portal.color}`}>
                      {portal.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">{portal.name}</h4>
                      <p className="text-xs text-gray-500 flex items-center gap-1">
                        {portal.active ? <CheckCircle2 className="w-3 h-3 text-green-500"/> : null} 
                        {portal.status}
                      </p>
                    </div>
                  </div>
                  <div>
                    {portal.active ? (
                      <Button variant="outline" size="sm" className="text-red-500 hover:text-red-600 border-gray-200">Disconnect</Button>
                    ) : (
                      <Button variant="default" size="sm" className="bg-brand-navy hover:bg-brand-navy/90 text-white">Connect</Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-100">
              <h4 className="font-bold text-gray-800 mb-2">Custom API Webhook</h4>
              <div className="flex gap-3">
                <input type="text" value="https://api.proptrack.com/webhook/v1/leads/req_8f72he" readOnly className="flex-1 bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-sm font-mono text-gray-500 focus:outline-none" />
                <Button variant="outline" className="text-brand-navy">Copy</Button>
                <Button className="bg-brand-gold hover:bg-brand-gold/90 text-white">Regenerate</Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
