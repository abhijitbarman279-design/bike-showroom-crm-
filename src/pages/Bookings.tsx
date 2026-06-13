import { WidgetSection } from "@/components/dashboard/WidgetSection";
import { Plus, Search, Filter, MoreHorizontal, X, ArrowLeft, FileText, CheckCircle, Clock } from "lucide-react";
import { useState } from "react";

interface BookingsProps {
  setCurrentPage: (page: string) => void;
}

export function Bookings({ setCurrentPage }: BookingsProps) {
  const [showAddBookingModal, setShowAddBookingModal] = useState(false);

  const bookingsData = [
    { id: "BKG-2051", customer: "Rahul Sharma", bike: "Classic 350", variant: "Dark Stealth", amount: "₹ 10,000", date: "Today", status: "Confirmed", exShowroom: "₹ 1,93,080" },
    { id: "BKG-2052", customer: "Priya Singh", bike: "Meteor 350", variant: "Stellar Black", amount: "₹ 10,000", date: "Today", status: "Pending", exShowroom: "₹ 2,05,900" },
    { id: "BKG-2053", customer: "Amit Kumar", bike: "Hunter 350", variant: "Rebel Blue", amount: "₹ 5,000", date: "Yesterday", status: "Confirmed", exShowroom: "₹ 1,49,900" },
    { id: "BKG-2054", customer: "Vikram Reddy", bike: "Himalayan", variant: "Hanle Black", amount: "₹ 15,000", date: "yesterday", status: "Cancelled", exShowroom: "₹ 2,85,000" },
    { id: "BKG-2055", customer: "Neha Gupta", bike: "Bullet 350", variant: "Standard Black", amount: "₹ 10,000", date: "2 days ago", status: "Confirmed", exShowroom: "₹ 1,73,562" },
  ];

  return (
    <div className="h-full flex flex-col gap-2 relative">
      {/* Modal */}
      {showAddBookingModal && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-[#020617]/80 backdrop-blur-sm">
          <div className="bg-[#0f172a] border border-[#1e293b] rounded-lg w-full max-w-md p-5 shadow-2xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-slate-100">New Booking</h2>
              <button onClick={() => setShowAddBookingModal(false)} className="text-slate-400 hover:text-slate-200">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Customer Name</label>
                <input type="text" className="w-full bg-slate-900 border border-slate-800 rounded-md py-2 px-3 text-sm text-slate-200 focus:border-blue-500 outline-none" placeholder="Search or select customer" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Bike Model</label>
                  <select className="w-full bg-slate-900 border border-slate-800 rounded-md py-2 px-3 text-sm text-slate-200 focus:border-blue-500 outline-none">
                    <option>Classic 350</option>
                    <option>Meteor 350</option>
                    <option>Hunter 350</option>
                    <option>Himalayan</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Variant/Color</label>
                  <input type="text" className="w-full bg-slate-900 border border-slate-800 rounded-md py-2 px-3 text-sm text-slate-200 focus:border-blue-500 outline-none" placeholder="e.g. Dark Stealth" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Booking Amount (₹)</label>
                  <input type="text" className="w-full bg-slate-900 border border-slate-800 rounded-md py-2 px-3 text-sm text-slate-200 focus:border-blue-500 outline-none" placeholder="10000" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Payment Method</label>
                  <select className="w-full bg-slate-900 border border-slate-800 rounded-md py-2 px-3 text-sm text-slate-200 focus:border-blue-500 outline-none">
                    <option>UPI</option>
                    <option>Credit Card</option>
                    <option>Bank Transfer</option>
                    <option>Cash</option>
                  </select>
                </div>
              </div>
              <div className="pt-2 flex justify-end gap-2">
                <button onClick={() => setShowAddBookingModal(false)} className="px-4 py-2 text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-md transition-colors">Cancel</button>
                <button onClick={() => setShowAddBookingModal(false)} className="px-4 py-2 text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white rounded-md transition-colors">Confirm Booking</button>
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
          <h1 className="text-lg font-bold text-slate-100">Vehicle Bookings</h1>
          <div className="relative">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-500" />
            <input
              type="text"
              placeholder="Search bookings..."
              className="bg-slate-900 border border-slate-800 rounded-md py-1 pl-8 pr-3 text-xs text-slate-300 placeholder:text-slate-500 outline-none focus:border-blue-500 transition-colors w-64"
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
           <button className="bg-slate-800 hover:bg-slate-700 text-slate-300 px-3 py-1.5 rounded border border-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors">
            <Filter className="w-3.5 h-3.5" />
            Filter
          </button>
          <button onClick={() => setShowAddBookingModal(true)} className="bg-blue-600 hover:bg-blue-500 text-white px-3 py-1.5 rounded border border-blue-500 text-xs font-semibold flex items-center gap-1.5 transition-colors">
            <Plus className="w-3.5 h-3.5" />
            New Booking
          </button>
        </div>
      </div>

      <WidgetSection title="Recent Bookings" className="flex-1 overflow-hidden flex flex-col">
        <div className="overflow-auto flex-1 hide-scrollbar">
          <table className="w-full text-left text-xs">
            <thead className="text-slate-500 bg-[#020617] sticky top-0 uppercase tracking-widest text-[10px]">
              <tr>
                <th className="font-semibold p-3 border-b border-slate-800">Booking ID</th>
                <th className="font-semibold p-3 border-b border-slate-800">Customer Name</th>
                <th className="font-semibold p-3 border-b border-slate-800">Model & Variant</th>
                <th className="font-semibold p-3 border-b border-slate-800">Ex-Showroom</th>
                <th className="font-semibold p-3 border-b border-slate-800">Booking Amount</th>
                <th className="font-semibold p-3 border-b border-slate-800">Date</th>
                <th className="font-semibold p-3 border-b border-slate-800">Status</th>
                <th className="font-semibold p-3 border-b border-slate-800 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="text-slate-300">
              {bookingsData.map((booking) => (
                <tr key={booking.id} className="border-b border-slate-800/50 hover:bg-slate-800/20 transition-colors">
                  <td className="p-3 text-blue-400 font-medium flex items-center gap-2">
                    <FileText className="w-4 h-4 text-slate-500" />
                    {booking.id}
                  </td>
                  <td className="p-3 font-semibold text-slate-200">{booking.customer}</td>
                  <td className="p-3">
                    <div className="font-medium text-slate-300">{booking.bike}</div>
                    <div className="text-[10px] text-slate-500">{booking.variant}</div>
                  </td>
                  <td className="p-3 text-slate-400">{booking.exShowroom}</td>
                  <td className="p-3 font-medium text-slate-200">{booking.amount}</td>
                  <td className="p-3 text-slate-400">{booking.date}</td>
                  <td className="p-3">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold flex items-center w-max gap-1 ${
                      booking.status === 'Confirmed' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                      booking.status === 'Cancelled' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
                      'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                    }`}>
                      {booking.status === 'Confirmed' && <CheckCircle className="w-3 h-3" />}
                      {booking.status === 'Pending' && <Clock className="w-3 h-3" />}
                      {booking.status === 'Cancelled' && <X className="w-3 h-3" />}
                      {booking.status}
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
