import { WidgetSection } from "@/components/dashboard/WidgetSection";
import { Plus, Search, Filter, MoreHorizontal, X, ArrowLeft, ClipboardList, CheckCircle, Clock, AlertTriangle } from "lucide-react";
import { useState } from "react";

interface JobCardsProps {
  setCurrentPage: (page: string) => void;
}

export function JobCards({ setCurrentPage }: JobCardsProps) {
  const [showAddJobCardModal, setShowAddJobCardModal] = useState(false);

  const jobCardsData = [
    { id: "JC-10021", serviceId: "SRV-5001", customer: "Rahul Sharma", bike: "Classic 350", regNo: "MH 12 AB 1234", amount: "₹ 2,450", status: "In Progress", mechanic: "Raju", date: "Today" },
    { id: "JC-10022", serviceId: "SRV-5002", customer: "Priya Singh", bike: "Meteor 350", regNo: "MH 12 XY 9876", amount: "₹ 0", status: "Pending", mechanic: "Unassigned", date: "Today" },
    { id: "JC-10023", serviceId: "SRV-5003", customer: "Amit Kumar", bike: "Hunter 350", regNo: "MH 14 CD 5678", amount: "₹ 850", status: "Completed", mechanic: "Suresh", date: "Yesterday" },
    { id: "JC-10024", serviceId: "SRV-5004", customer: "Vikram Reddy", bike: "Himalayan", regNo: "MH 12 PQ 1122", amount: "₹ 15,200", status: "Parts Pending", mechanic: "Raju", date: "Yesterday" },
    { id: "JC-10025", serviceId: "SRV-5005", customer: "Neha Gupta", bike: "Bullet 350", regNo: "MH 14 KL 3344", amount: "₹ 0", status: "Completed", mechanic: "Suresh", date: "2 days ago" },
  ];

  return (
    <div className="h-full flex flex-col gap-2 relative">
      {/* Modal */}
      {showAddJobCardModal && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-[#020617]/80 backdrop-blur-sm">
          <div className="bg-[#0f172a] border border-[#1e293b] rounded-lg w-full max-w-md p-5 shadow-2xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-slate-100">Create New Job Card</h2>
              <button onClick={() => setShowAddJobCardModal(false)} className="text-slate-400 hover:text-slate-200">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Service appointment ID</label>
                <input type="text" className="w-full bg-slate-900 border border-slate-800 rounded-md py-2 px-3 text-sm text-slate-200 focus:border-blue-500 outline-none" placeholder="e.g. SRV-5000" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                   <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Assign Mechanic</label>
                   <select className="w-full bg-slate-900 border border-slate-800 rounded-md py-2 px-3 text-sm text-slate-200 focus:border-blue-500 outline-none">
                     <option>Raju</option>
                     <option>Suresh</option>
                     <option>Mahesh</option>
                   </select>
                </div>
                 <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Estimated Cost (₹)</label>
                  <input type="text" className="w-full bg-slate-900 border border-slate-800 rounded-md py-2 px-3 text-sm text-slate-200 focus:border-blue-500 outline-none" placeholder="0.00" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Required Parts</label>
                <textarea className="w-full bg-slate-900 border border-slate-800 rounded-md py-2 px-3 text-sm text-slate-200 focus:border-blue-500 outline-none h-20 resize-none" placeholder="E.g., Engine oil, Air filter..."></textarea>
              </div>
              <div className="pt-2 flex justify-end gap-2">
                <button onClick={() => setShowAddJobCardModal(false)} className="px-4 py-2 text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-md transition-colors">Cancel</button>
                <button onClick={() => setShowAddJobCardModal(false)} className="px-4 py-2 text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white rounded-md transition-colors">Create Job Card</button>
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
          <h1 className="text-lg font-bold text-slate-100">Job Cards Processing</h1>
          <div className="relative">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-500" />
            <input
              type="text"
              placeholder="Search by ID or Vehicle..."
              className="bg-slate-900 border border-slate-800 rounded-md py-1 pl-8 pr-3 text-xs text-slate-300 placeholder:text-slate-500 outline-none focus:border-blue-500 transition-colors w-64"
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
           <button className="bg-slate-800 hover:bg-slate-700 text-slate-300 px-3 py-1.5 rounded border border-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors">
            <Filter className="w-3.5 h-3.5" />
            Filter
          </button>
          <button onClick={() => setShowAddJobCardModal(true)} className="bg-blue-600 hover:bg-blue-500 text-white px-3 py-1.5 rounded border border-blue-500 text-xs font-semibold flex items-center gap-1.5 transition-colors">
            <Plus className="w-3.5 h-3.5" />
            New Job Card
          </button>
        </div>
      </div>

      <WidgetSection title="Open & Recent Job Cards" className="flex-1 overflow-hidden flex flex-col">
        <div className="overflow-auto flex-1 hide-scrollbar">
          <table className="w-full text-left text-xs">
            <thead className="text-slate-500 bg-[#020617] sticky top-0 uppercase tracking-widest text-[10px]">
              <tr>
                <th className="font-semibold p-3 border-b border-slate-800">Job Card ID</th>
                <th className="font-semibold p-3 border-b border-slate-800">Assignee</th>
                <th className="font-semibold p-3 border-b border-slate-800">Vehicle Info</th>
                <th className="font-semibold p-3 border-b border-slate-800">Total Amount</th>
                <th className="font-semibold p-3 border-b border-slate-800">Status</th>
                <th className="font-semibold p-3 border-b border-slate-800">Created</th>
                <th className="font-semibold p-3 border-b border-slate-800 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="text-slate-300">
              {jobCardsData.map((job) => (
                <tr key={job.id} className="border-b border-slate-800/50 hover:bg-slate-800/20 transition-colors">
                  <td className="p-3 text-blue-400 font-medium">
                    <div className="flex items-center gap-2 mb-1">
                        <ClipboardList className="w-4 h-4 text-slate-500" />
                        {job.id}
                    </div>
                    <div className="text-[10px] text-slate-500 pl-6">Ref: {job.serviceId}</div>
                  </td>
                  <td className="p-3 font-semibold text-slate-200">
                    <div>{job.mechanic}</div>
                    <div className="text-[10px] font-normal text-slate-500">{job.customer}</div>
                  </td>
                  <td className="p-3">
                    <div className="font-medium text-slate-300">{job.bike}</div>
                    <div className="text-[10px] text-slate-500">{job.regNo}</div>
                  </td>
                  <td className="p-3 font-medium text-slate-200">{job.amount}</td>
                  <td className="p-3">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold flex items-center w-max gap-1 ${
                      job.status === 'Completed' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                      job.status === 'In Progress' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                      job.status === 'Parts Pending' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
                      'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                    }`}>
                      {job.status === 'Completed' && <CheckCircle className="w-3 h-3" />}
                      {(job.status === 'Pending' || job.status === 'In Progress') && <Clock className="w-3 h-3" />}
                      {job.status === 'Parts Pending' && <AlertTriangle className="w-3 h-3" />}
                      {job.status}
                    </span>
                  </td>
                  <td className="p-3 text-slate-400">{job.date}</td>
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
