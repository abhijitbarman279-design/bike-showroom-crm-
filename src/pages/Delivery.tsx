import { WidgetSection } from "@/components/dashboard/WidgetSection";
import { Plus, Search, Filter, MoreHorizontal, X, ArrowLeft, Send, CheckCircle, Clock } from "lucide-react";
import { useState } from "react";

interface DeliveryProps {
  setCurrentPage: (page: string) => void;
}

export function Delivery({ setCurrentPage }: DeliveryProps) {
  const [showAddDeliveryModal, setShowAddDeliveryModal] = useState(false);

  const deliveryData = [
    { id: "DEL-8091", customer: "Rahul Sharma", bike: "Classic 350", variant: "Dark Stealth", date: "Today, 11:30 AM", status: "Ready", exec: "Amit S." },
    { id: "DEL-8092", customer: "Priya Singh", bike: "Meteor 350", variant: "Stellar Black", date: "Today, 04:00 PM", status: "In Prep", exec: "Pooja M." },
    { id: "DEL-8093", customer: "Amit Kumar", bike: "Hunter 350", variant: "Rebel Blue", date: "Tomorrow, 10:00 AM", status: "Scheduled", exec: "Rahul V." },
    { id: "DEL-8094", customer: "Vikram Reddy", bike: "Himalayan", variant: "Hanle Black", date: "Yesterday", status: "Delivered", exec: "Amit S." },
    { id: "DEL-8095", customer: "Neha Gupta", bike: "Bullet 350", variant: "Standard Black", date: "Yesterday", status: "Delivered", exec: "Pooja M." },
  ];

  return (
    <div className="h-full flex flex-col gap-2 relative">
      {/* Modal */}
      {showAddDeliveryModal && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-[#020617]/80 backdrop-blur-sm">
          <div className="bg-[#0f172a] border border-[#1e293b] rounded-lg w-full max-w-md p-5 shadow-2xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-slate-100">Schedule Delivery</h2>
              <button onClick={() => setShowAddDeliveryModal(false)} className="text-slate-400 hover:text-slate-200">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Booking Reference</label>
                <input type="text" className="w-full bg-slate-900 border border-slate-800 rounded-md py-2 px-3 text-sm text-slate-200 focus:border-blue-500 outline-none" placeholder="Enter Booking ID (e.g., BKG-2051)" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Date</label>
                  <input type="date" className="w-full bg-slate-900 border border-slate-800 rounded-md py-2 px-3 text-sm text-slate-200 focus:border-blue-500 outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Time</label>
                  <input type="time" className="w-full bg-slate-900 border border-slate-800 rounded-md py-2 px-3 text-sm text-slate-200 focus:border-blue-500 outline-none" />
                </div>
              </div>
              <div>
                 <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Executive</label>
                 <select className="w-full bg-slate-900 border border-slate-800 rounded-md py-2 px-3 text-sm text-slate-200 focus:border-blue-500 outline-none">
                   <option>Amit S.</option>
                   <option>Pooja M.</option>
                   <option>Rahul V.</option>
                 </select>
              </div>
              <div className="pt-2 flex justify-end gap-2">
                <button onClick={() => setShowAddDeliveryModal(false)} className="px-4 py-2 text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-md transition-colors">Cancel</button>
                <button onClick={() => setShowAddDeliveryModal(false)} className="px-4 py-2 text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white rounded-md transition-colors">Schedule</button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-between items-center bg-[#0f172a] border border-[#1e293b] p-3 rounded-lg shrink-0">
        <div className="flex items-center gap-4">
          <button onClick={() => setCurrentPage("Dashboard")} className="p-1 rounded-md text-slate-400 hover:text-slate-100 hover:bg-slate-800 transition-colors" title="Back to Dashboard">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-lg font-bold text-slate-100">Vehicle Deliveries</h1>
          <div className="relative">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-500" />
            <input
              type="text"
              placeholder="Search deliveries..."
              className="bg-slate-900 border border-slate-800 rounded-md py-1 pl-8 pr-3 text-xs text-slate-300 placeholder:text-slate-500 outline-none focus:border-blue-500 transition-colors w-64"
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
           <button className="bg-slate-800 hover:bg-slate-700 text-slate-300 px-3 py-1.5 rounded border border-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors">
            <Filter className="w-3.5 h-3.5" />
            Filter
          </button>
          <button onClick={() => setShowAddDeliveryModal(true)} className="bg-blue-600 hover:bg-blue-500 text-white px-3 py-1.5 rounded border border-blue-500 text-xs font-semibold flex items-center gap-1.5 transition-colors">
            <Plus className="w-3.5 h-3.5" />
            Schedule Delivery
          </button>
        </div>
      </div>

      <WidgetSection title="Delivery Schedule" className="flex-1 overflow-hidden flex flex-col">
        <div className="overflow-auto flex-1 hide-scrollbar">
          <table className="w-full text-left text-xs">
            <thead className="text-slate-500 bg-[#020617] sticky top-0 uppercase tracking-widest text-[10px]">
              <tr>
                <th className="font-semibold p-3 border-b border-slate-800">Delivery ID</th>
                <th className="font-semibold p-3 border-b border-slate-800">Customer Name</th>
                <th className="font-semibold p-3 border-b border-slate-800">Model & Variant</th>
                <th className="font-semibold p-3 border-b border-slate-800">Scheduled Time</th>
                <th className="font-semibold p-3 border-b border-slate-800">Executive</th>
                <th className="font-semibold p-3 border-b border-slate-800">Status</th>
                <th className="font-semibold p-3 border-b border-slate-800 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="text-slate-300">
              {deliveryData.map((delivery) => (
                <tr key={delivery.id} className="border-b border-slate-800/50 hover:bg-slate-800/20 transition-colors">
                  <td className="p-3 text-blue-400 font-medium flex items-center gap-2">
                    <Send className="w-4 h-4 text-slate-500" />
                    {delivery.id}
                  </td>
                  <td className="p-3 font-semibold text-slate-200">{delivery.customer}</td>
                  <td className="p-3">
                    <div className="font-medium text-slate-300">{delivery.bike}</div>
                    <div className="text-[10px] text-slate-500">{delivery.variant}</div>
                  </td>
                  <td className="p-3 text-slate-400">{delivery.date}</td>
                  <td className="p-3 text-slate-400">{delivery.exec}</td>
                  <td className="p-3">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold flex items-center w-max gap-1 ${
                      delivery.status === 'Delivered' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                      delivery.status === 'Ready' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                      'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                    }`}>
                      {delivery.status === 'Delivered' && <CheckCircle className="w-3 h-3" />}
                      {(delivery.status === 'In Prep' || delivery.status === 'Scheduled') && <Clock className="w-3 h-3" />}
                      {delivery.status === 'Ready' && <Send className="w-3 h-3" />}
                      {delivery.status}
                    </span>
                  </td>
                  <td className="p-3 text-right">
                    <button className="text-slate-500 hover:text-slate-300 transition-colors">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </WidgetSection>
    </div>
  );
}
