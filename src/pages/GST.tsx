import { WidgetSection } from "@/components/dashboard/WidgetSection";
import { Plus, Search, Filter, MoreHorizontal, X, ArrowLeft, Percent, FileText, ArrowDownRight, ArrowUpRight } from "lucide-react";
import { useState } from "react";

interface GSTProps {
  setCurrentPage: (page: string) => void;
}

export function GST({ setCurrentPage }: GSTProps) {
  const [showGenerateReportModal, setShowGenerateReportModal] = useState(false);

  const gstData = [
    { id: "INV-2026-001", date: "Today", description: "Bike Sale - Model X", type: "Output GST (Collected)", amount: "₹ 15,000", rate: "28%", status: "Filed" },
    { id: "PUR-2026-050", date: "Yesterday", description: "Spare Parts Purchase", type: "Input GST (Paid)", amount: "₹ 8,100", rate: "18%", status: "Pending" },
    { id: "INV-2026-002", date: "3 days ago", description: "Service Bill - JC10023", type: "Output GST (Collected)", amount: "₹ 450", rate: "18%", status: "Pending" },
    { id: "PUR-2026-051", date: "1 week ago", description: "Showroom Furniture", type: "Input GST (Paid)", amount: "₹ 12,000", rate: "18%", status: "Filed" },
    { id: "INV-2026-003", date: "2 weeks ago", description: "Accessories Sale", type: "Output GST (Collected)", amount: "₹ 1,200", rate: "28%", status: "Filed" },
  ];

  return (
    <div className="h-full flex flex-col gap-2 relative">
      {/* Modal */}
      {showGenerateReportModal && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-[#020617]/80 backdrop-blur-sm">
          <div className="bg-[#0f172a] border border-[#1e293b] rounded-lg w-full max-w-md p-5 shadow-2xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-slate-100">Generate GST Report</h2>
              <button onClick={() => setShowGenerateReportModal(false)} className="text-slate-400 hover:text-slate-200">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">From Date</label>
                  <input type="date" className="w-full bg-slate-900 border border-slate-800 rounded-md py-2 px-3 text-sm text-slate-200 focus:border-blue-500 outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">To Date</label>
                  <input type="date" className="w-full bg-slate-900 border border-slate-800 rounded-md py-2 px-3 text-sm text-slate-200 focus:border-blue-500 outline-none" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Report Type</label>
                <select className="w-full bg-slate-900 border border-slate-800 rounded-md py-2 px-3 text-sm text-slate-200 focus:border-blue-500 outline-none">
                  <option>GSTR-1 (Outward Supplies)</option>
                  <option>GSTR-2 (Inward Supplies)</option>
                  <option>GSTR-3B (Summary Return)</option>
                  <option>Comprehensive GST Report</option>
                </select>
              </div>
              <p className="text-xs text-slate-400">Generate a comprehensive summary for your tax consultant or direct GST portal filing.</p>
              <div className="pt-2 flex justify-end gap-2">
                <button onClick={() => setShowGenerateReportModal(false)} className="px-4 py-2 text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-md transition-colors">Cancel</button>
                <button onClick={() => setShowGenerateReportModal(false)} className="px-4 py-2 text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white rounded-md transition-colors">Download PDF</button>
                <button onClick={() => setShowGenerateReportModal(false)} className="px-4 py-2 text-xs font-bold bg-green-600 hover:bg-green-500 text-white rounded-md transition-colors">Download Excel</button>
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
          <h1 className="text-lg font-bold text-slate-100">GST Management</h1>
          <div className="relative">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-500" />
            <input
              type="text"
              placeholder="Search invoice..."
              className="bg-slate-900 border border-slate-800 rounded-md py-1 pl-8 pr-3 text-xs text-slate-300 placeholder:text-slate-500 outline-none focus:border-blue-500 transition-colors w-64"
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
           <button className="bg-slate-800 hover:bg-slate-700 text-slate-300 px-3 py-1.5 rounded border border-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors">
            <Filter className="w-3.5 h-3.5" />
            Filter Month
          </button>
          <button onClick={() => setShowGenerateReportModal(true)} className="bg-blue-600 hover:bg-blue-500 text-white px-3 py-1.5 rounded border border-blue-500 text-xs font-semibold flex items-center gap-1.5 transition-colors">
            <FileText className="w-3.5 h-3.5" />
            Generate Report
          </button>
        </div>
      </div>

      <WidgetSection title="GST Transactions & Filing Status" className="flex-1 overflow-hidden flex flex-col">
        <div className="overflow-auto flex-1 hide-scrollbar">
          <table className="w-full text-left text-xs">
            <thead className="text-slate-500 bg-[#020617] sticky top-0 uppercase tracking-widest text-[10px]">
              <tr>
                <th className="font-semibold p-3 border-b border-slate-800">Invoice ID & Date</th>
                <th className="font-semibold p-3 border-b border-slate-800">Description</th>
                <th className="font-semibold p-3 border-b border-slate-800">GST Type</th>
                <th className="font-semibold p-3 border-b border-slate-800">Tax Rate</th>
                <th className="font-semibold p-3 border-b border-slate-800">Tax Amount</th>
                <th className="font-semibold p-3 border-b border-slate-800">Filing Status</th>
                <th className="font-semibold p-3 border-b border-slate-800 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="text-slate-300">
              {gstData.map((record, idx) => (
                <tr key={idx} className="border-b border-slate-800/50 hover:bg-slate-800/20 transition-colors">
                  <td className="p-3 text-blue-400 font-medium">
                     <div className="font-semibold text-slate-200">{record.id}</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">
                      {record.date}
                    </div>
                  </td>
                  <td className="p-3 font-medium text-slate-300">{record.description}</td>
                  <td className="p-3">
                    <span className={`flex items-center gap-1 w-max font-semibold ${record.type.includes('Output') ? 'text-green-400' : 'text-orange-400'}`}>
                      {record.type.includes('Output') ? <ArrowUpRight className="w-3.5 h-3.5" /> : <ArrowDownRight className="w-3.5 h-3.5" />}
                      {record.type}
                    </span>
                  </td>
                  <td className="p-3 text-slate-400">{record.rate}</td>
                  <td className={`p-3 font-bold ${record.type.includes('Output') ? 'text-green-400' : 'text-slate-200'}`}>{record.amount}</td>
                  <td className="p-3">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold flex items-center w-max gap-1 ${
                      record.status === 'Filed' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                      'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                    }`}>
                      {record.status}
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
