import { WidgetSection } from "@/components/dashboard/WidgetSection";
import { Plus, Search, Filter, MoreHorizontal, X, ArrowLeft, CalendarPlus, CheckCircle, Clock } from "lucide-react";
import { useState } from "react";

interface TestRideProps {
  setCurrentPage: (page: string) => void;
}

export function TestRide({ setCurrentPage }: TestRideProps) {
  const [showAddRideModal, setShowAddRideModal] = useState(false);

  const testRidesData = [
    { id: "TR-5021", customer: "Vikram Reddy", phone: "+91 9876543213", bike: "Classic 350", date: "Today 10:30 AM", status: "Completed", exec: "Rahul V." },
    { id: "TR-5022", customer: "Neha Gupta", phone: "+91 9876543214", bike: "Meteor 350", date: "Today 02:00 PM", status: "Scheduled", exec: "Amit S." },
    { id: "TR-5023", customer: "Priya Singh", phone: "+91 9876543211", bike: "Hunter 350", date: "Today 04:30 PM", status: "Scheduled", exec: "Pooja M." },
    { id: "TR-5024", customer: "Amit Kumar", phone: "+91 9876543212", bike: "Himalayan", date: "Tomorrow 11:00 AM", status: "Scheduled", exec: "Rahul V." },
    { id: "TR-5025", customer: "Rahul Sharma", phone: "+91 9876543210", bike: "Bullet 350", date: "Yesterday", status: "Completed", exec: "Amit S." },
  ];

  return (
    <div className="h-full flex flex-col gap-2 relative">
      {/* Modal */}
      {showAddRideModal && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-[#020617]/80 backdrop-blur-sm">
          <div className="bg-[#0f172a] border border-[#1e293b] rounded-lg w-full max-w-md p-5 shadow-2xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-slate-100">Schedule Test Ride</h2>
              <button onClick={() => setShowAddRideModal(false)} className="text-slate-400 hover:text-slate-200">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Customer Name</label>
                <input type="text" className="w-full bg-slate-900 border border-slate-800 rounded-md py-2 px-3 text-sm text-slate-200 focus:border-blue-500 outline-none" placeholder="Search or enter name" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Model Required</label>
                    <select className="w-full bg-slate-900 border border-slate-800 rounded-md py-2 px-3 text-sm text-slate-200 focus:border-blue-500 outline-none">
                    <option>Classic 350</option>
                    <option>Meteor 350</option>
                    <option>Hunter 350</option>
                    <option>Himalayan</option>
                    </select>
                </div>
                <div>
                   <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Sales Exec</label>
                   <select className="w-full bg-slate-900 border border-slate-800 rounded-md py-2 px-3 text-sm text-slate-200 focus:border-blue-500 outline-none">
                     <option>Rahul V.</option>
                     <option>Amit S.</option>
                     <option>Pooja M.</option>
                   </select>
                </div>
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
              <div className="pt-2 flex justify-end gap-2">
                <button onClick={() => setShowAddRideModal(false)} className="px-4 py-2 text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-md transition-colors">Cancel</button>
                <button onClick={() => setShowAddRideModal(false)} className="px-4 py-2 text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white rounded-md transition-colors">Schedule Ride</button>
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
          <h1 className="text-lg font-bold text-slate-100">Test Rides</h1>
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
          <div className="flex bg-slate-900 border border-slate-800 p-0.5 rounded mr-2">
            <button className="px-3 py-1 text-xs font-semibold bg-slate-800 text-slate-200 rounded-sm">Today</button>
            <button className="px-3 py-1 text-xs font-semibold text-slate-500 hover:text-slate-300 rounded-sm transition-colors">Upcoming</button>
            <button className="px-3 py-1 text-xs font-semibold text-slate-500 hover:text-slate-300 rounded-sm transition-colors">Completed</button>
          </div>
          <button className="bg-slate-800 hover:bg-slate-700 text-slate-300 px-3 py-1.5 rounded border border-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors">
            <Filter className="w-3.5 h-3.5" />
            Filter
          </button>
          <button onClick={() => setShowAddRideModal(true)} className="bg-blue-600 hover:bg-blue-500 text-white px-3 py-1.5 rounded border border-blue-500 text-xs font-semibold flex items-center gap-1.5 transition-colors">
            <CalendarPlus className="w-3.5 h-3.5" />
            Schedule Ride
          </button>
        </div>
      </div>

      <WidgetSection title="Ride Schedule Dashboard" className="flex-1 overflow-hidden flex flex-col">
        <div className="overflow-auto flex-1 hide-scrollbar">
          <table className="w-full text-left text-xs">
            <thead className="text-slate-500 bg-[#020617] sticky top-0 uppercase tracking-widest text-[10px]">
              <tr>
                <th className="font-semibold p-3 border-b border-slate-800">Booking ID</th>
                <th className="font-semibold p-3 border-b border-slate-800">Customer Name</th>
                <th className="font-semibold p-3 border-b border-slate-800">Contact</th>
                <th className="font-semibold p-3 border-b border-slate-800">Model</th>
                <th className="font-semibold p-3 border-b border-slate-800">Date & Time</th>
                <th className="font-semibold p-3 border-b border-slate-800">Executive</th>
                <th className="font-semibold p-3 border-b border-slate-800">Status</th>
                <th className="font-semibold p-3 border-b border-slate-800 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="text-slate-300">
              {testRidesData.map((ride) => (
                <tr key={ride.id} className="border-b border-slate-800/50 hover:bg-slate-800/20 transition-colors">
                  <td className="p-3 text-blue-400 font-medium">{ride.id}</td>
                  <td className="p-3 font-semibold text-slate-200">{ride.customer}</td>
                  <td className="p-3 text-slate-400">{ride.phone}</td>
                  <td className="p-3 font-medium text-slate-300">{ride.bike}</td>
                  <td className="p-3 text-slate-300">{ride.date}</td>
                  <td className="p-3 text-slate-400">{ride.exec}</td>
                  <td className="p-3">
                    <span className={`px-2 py-1 rounded-sm text-[10px] font-bold flex items-center w-max gap-1.5 ${
                      ride.status === 'Completed' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                      'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                    }`}>
                      {ride.status === 'Completed' ? <CheckCircle className="w-3 h-3"/> : <Clock className="w-3 h-3"/>}
                      {ride.status}
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
