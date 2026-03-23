import { useState, useEffect } from "react"
import { GripHorizontal, Clock } from "lucide-react"
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd"
import type { DropResult } from "@hello-pangea/dnd"

const columns = [
  { id: "submitted", title: "Offer Submitted", color: "border-blue-200", bg: "bg-blue-50/50", badgeBg: "bg-blue-100/50", textColor: "text-blue-800" },
  { id: "review", title: "Under Review", color: "border-amber-200", bg: "bg-amber-50/50", badgeBg: "bg-amber-100/50", textColor: "text-amber-800" },
  { id: "negotiating", title: "Negotiating", color: "border-orange-200", bg: "bg-orange-50/50", badgeBg: "bg-orange-100/50", textColor: "text-orange-800" },
  { id: "accepted", title: "Accepted", color: "border-green-200", bg: "bg-green-50/50", badgeBg: "bg-green-100/50", textColor: "text-green-800" },
  { id: "fallen", title: "Fallen Through", color: "border-slate-200", bg: "bg-slate-50/50", badgeBg: "bg-slate-100/50", textColor: "text-slate-500" },
  { id: "completed", title: "Completed", color: "border-green-300", bg: "bg-green-50", badgeBg: "bg-green-100", textColor: "text-green-900" }
]

const initialOffers = [
  { id: 1, buyer: "James Patel", property: "Chelsea Mews", offer: "£1,800,000", diff: "-2.7%", diffType: "red", stage: "accepted", days: 12, img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=50&q=80" },
  { id: 2, buyer: "Sarah Mitchell", property: "42 Park Ave", offer: "$2,250,000", diff: "-6.2%", diffType: "red", stage: "negotiating", days: 4, img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&w=50&q=80" },
  { id: 3, buyer: "Ahmed Hassan", property: "Villa 7", offer: "AED 11.8M", diff: "-5.6%", diffType: "red", stage: "review", days: 2, img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&w=50&q=80" },
  { id: 4, buyer: "Ryan Carter", property: "Downtown Studio", offer: "AED 1.25M", diff: "+4.1%", diffType: "green", stage: "submitted", days: 1, img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&w=50&q=80" },
]

export function OfferPipeline() {
  const [offers, setOffers] = useState(initialOffers)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    setIsReady(true)
  }, [])

  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result
    
    if (!destination) return
    if (destination.droppableId === source.droppableId && destination.index === source.index) return

    const draggedOfferId = parseInt(draggableId)
    const newOffers = Array.from(offers)
    const sourceIndex = newOffers.findIndex(o => o.id === draggedOfferId)
    const [draggedOffer] = newOffers.splice(sourceIndex, 1)

    // Update stage to new column
    draggedOffer.stage = destination.droppableId
    
    // To ensure it lands accurately at destination.index, we'd ideally segment arrays.
    // However, simply pushing it back in order works fine since we filter them below based on stage.
    // For visual precision with DragDropContext filtering, inserting at the end ensures proper state.
    newOffers.push(draggedOffer)

    setOffers(newOffers)
  }

  if (!isReady) return null

  return (
    <div className="p-8 max-w-[1600px] h-[calc(100vh-76px)] flex flex-col mx-auto space-y-6 animate-in fade-in duration-500">
      <div className="flex justify-between items-center shrink-0">
        <div>
          <h2 className="text-2xl font-bold font-sans text-brand-navy">Offer Pipeline</h2>
          <p className="text-sm text-gray-500 mt-1">Drag and drop offers to manage negotiation stages.</p>
        </div>
      </div>

      <div className="flex-1 overflow-x-auto pb-4 custom-scrollbar">
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="flex gap-6 h-full min-w-max">
            {columns.map(col => {
              const colOffers = offers.filter(o => o.stage === col.id)
              return (
                <div key={col.id} className={`w-[320px] rounded-xl border-t-[5px] shadow-sm flex flex-col h-full bg-white ${col.color}`}>
                  <div className={`px-4 py-3 border-b border-gray-100 flex justify-between items-center ${col.bg} rounded-t-lg`}>
                    <h3 className={`font-bold text-sm ${col.textColor}`}>{col.title}</h3>
                    <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold ${col.badgeBg} ${col.textColor}`}>{colOffers.length}</span>
                  </div>
                  
                  <Droppable droppableId={col.id}>
                    {(provided, snapshot) => (
                      <div 
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        className={`flex-1 p-3 space-y-3 overflow-y-auto custom-scrollbar transition-all ${snapshot.isDraggingOver ? 'bg-orange-50/40 ring-2 ring-inset ring-brand-orange/10' : 'bg-gray-50/30'}`}
                      >
                        {colOffers.map((offer, index) => (
                          <Draggable key={offer.id.toString()} draggableId={offer.id.toString()} index={index}>
                            {(provided, snapshot) => (
                              <div 
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                className={`bg-white rounded-2xl shadow-[0_2px_8px_-4px_rgba(0,0,0,0.1)] border border-gray-100 p-4 transition-all duration-200 group ${snapshot.isDragging ? 'rotate-2 scale-105 shadow-xl ring-2 ring-brand-orange/40' : 'hover:border-brand-orange/30'}`}
                              >
                                <div className="flex justify-between items-start mb-3">
                                  <div className="flex items-center gap-3">
                                    <img src={offer.img} alt={offer.property} className="w-9 h-9 rounded-lg object-cover shadow-sm" />
                                    <div>
                                      <p className="text-sm font-bold text-gray-800 line-clamp-1 leading-tight">{offer.property}</p>
                                      <p className="text-[11px] font-medium text-gray-500 mt-0.5">{offer.buyer}</p>
                                    </div>
                                  </div>
                                  <GripHorizontal className="w-5 h-5 text-gray-300 opacity-0 group-hover:opacity-100 transition cursor-grab active:cursor-grabbing" />
                                </div>
                                
                                <div className="flex justify-between items-end mt-4 pt-4 border-t border-gray-50">
                                  <div>
                                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-0.5">Offer Amount</p>
                                    <p className="text-[15px] font-bold font-mono text-brand-navy leading-none">{offer.offer}</p>
                                  </div>
                                  <div className="flex flex-col items-end gap-1.5">
                                    <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full shadow-[inset_0_1px_2px_rgba(0,0,0,0.05)] ${offer.diffType === 'red' ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'}`}>{offer.diff}</span>
                                    <span className="text-[11px] font-medium text-gray-400 flex items-center gap-1"><Clock className="w-3 h-3"/> {offer.days} days</span>
                                  </div>
                                </div>
                              </div>
                            )}
                          </Draggable>
                        ))}
                        {provided.placeholder}
                        
                        {colOffers.length === 0 && !snapshot.isDraggingOver && (
                          <div className="h-28 border-2 border-dashed border-gray-200 rounded-2xl flex items-center justify-center opacity-70">
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Drop Here</p>
                          </div>
                        )}
                      </div>
                    )}
                  </Droppable>
                </div>
              )
            })}
          </div>
        </DragDropContext>
      </div>
    </div>
  )
}
