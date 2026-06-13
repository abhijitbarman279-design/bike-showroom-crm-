import { WidgetSection } from "@/components/dashboard/WidgetSection";
import { Plus, Search, Filter, MoreHorizontal, X, ArrowLeft, DollarSign, CheckCircle, Clock } from "lucide-react";
import { useState } from "react";

interface FinanceProps {
  setCurrentPage: (page: string) => void;
}

export function Finance({ setCurrentPage }: FinanceProps) {
  const [showAddFinanceModal, setShowAddFinanceModal] = useState(false);

  const financeData = [
    { id: "FIN-9001", customer: "Rahul Sharma", bank: "HDFC Bank", amount: "₹ 1,50,000", emi: "₹ 4,500/mo", status: "Approved", date: "Today" },
    { id: "FIN-9002", customer: "Priya Singh", bank: "ICICI Bank", amount: "₹ 1,80,000", emi: "₹ 5,200/mo", status: "Pending", date: "Today" },
    { id: "FIN-9003", customer: "Amit Kumar", bank: "SBI", amount: "₹ 1,20,000", emi: "₹ 3,800/mo", status: "Approved", date: "Yesterday" },
    { id: "FIN-9004", customer: "Vikram Reddy", bank: "Axis Bank", amount: "₹ 2,00,000", emi: "₹ 6,000/mo", status: "Rejected", date: "Yesterday" },
    { id: "FIN-9005", customer: "Neha Gupta", bank: "HDFC Bank", amount: "₹ 1,40,000", emi: "₹ 4,200/mo", status: "Approved", date: "2 days ago" },
  ];

  return (
    <div className="h-full flex flex-col gap-2 relative">
      {/* Modal */}
      {showAddFinanceModal && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-[#020617]/80 backdrop-blur-sm">
          <div className="bg-[#0f172a] border border-[#1e293b] rounded-lg w-full max-w-md p-5 shadow-2xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-slate-100">Process New Finance</h2>
              <button onClick={() => setShowAddFinanceModal(false)} className="text-slate-400 hover:text-slate-200">
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
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Loan Amount (₹)</label>
                    <input type="text" className="w-full bg-slate-900 border border-slate-800 rounded-md py-2 px-3 text-sm text-slate-200 focus:border-blue-500 outline-none" placeholder="0.00" />
                </div>
                <div>
                   <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Financier / Bank</label>
                   <select className="w-full bg-slate-900 border border-slate-800 rounded-md py-2 px-3 text-sm text-slate-200 focus:border-blue-500 outline-none">
                     <option>HDFC Bank</option>
                     <option>ICICI Bank</option>
                     <option>SBI</option>
                     <option>Axis Bank</option>
                   </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Tenure (Months)</label>
                    <select className="w-full bg-slate-900 border border-slate-800 rounded-md py-2 px-3 text-sm text-slate-200 focus:border-blue-500 outline-none">
                        <option>12</option>
                        <option>24</option>
                        <option>36</option>
                        <option>48</option>
                        <option>60</option>
                    </select>
                </div>
                <div>
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Interest Rate (%)</label>
                    <input type="text" className="w-full bg-slate-900 border border-slate-800 rounded-md py-2 px-3 text-sm text-slate-200 focus:border-blue-500 outline-none" placeholder="e.g. 8.5" />
                </div>
              </div>
              <div className="pt-2 flex justify-end gap-2">
                <button onClick={() => setShowAddFinanceModal(false)} className="px-4 py-2 text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-md transition-colors">Cancel</button>
                <button onClick={() => setShowAddFinanceModal(false)} className="px-4 py-2 text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white rounded-md transition-colors">Submit Application</button>
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
          <h1 className="text-lg font-bold text-slate-100">Finance Processing</h1>
          <div className="relative">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-500" />
            <input
              type="text"
              placeholder="Search applications..."
              className="bg-slate-900 border border-slate-800 rounded-md py-1 pl-8 pr-3 text-xs text-slate-300 placeholder:text-slate-500 outline-none focus:border-blue-500 transition-colors w-64"
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
           <button className="bg-slate-800 hover:bg-slate-700 text-slate-300 px-3 py-1.5 rounded border border-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors">
            <Filter className="w-3.5 h-3.5" />
            Filter
          </button>
          <button onClick={() => setShowAddFinanceModal(true)} className="bg-blue-600 hover:bg-blue-500 text-white px-3 py-1.5 rounded border border-blue-500 text-xs font-semibold flex items-center gap-1.5 transition-colors">
            <Plus className="w-3.5 h-3.5" />
            New Application
          </button>
        </div>
      </div>

      <WidgetSection title="Finance Applications Dashboard" className="flex-1 overflow-hidden flex flex-col">
        <div className="overflow-auto flex-1 hide-scrollbar">
          <table className="w-full text-left text-xs">
            <thead className="text-slate-500 bg-[#020617] sticky top-0 uppercase tracking-widest text-[10px]">
              <tr>
                <th className="font-semibold p-3 border-b border-slate-800">Finance ID</th>
                <th className="font-semibold p-3 border-b border-slate-800">Customer Name</th>
                <th className="font-semibold p-3 border-b border-slate-800">Financier</th>
                <th className="font-semibold p-3 border-b border-slate-800">Loan Amount</th>
                <th className="font-semibold p-3 border-b border-slate-800">EMI</th>
                <th className="font-semibold p-3 border-b border-slate-800">Date</th>
                <th className="font-semibold p-3 border-b border-slate-800">Status</th>
                <th className="font-semibold p-3 border-b border-slate-800 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="text-slate-300">
              {financeData.map((finance) => (
                <tr key={finance.id} className="border-b border-slate-800/50 hover:bg-slate-800/20 transition-colors">
                  <td className="p-3 text-blue-400 font-medium flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-slate-500" />
                    {finance.id}
                  </td>
                  <td className="p-3 font-semibold text-slate-200">{finance.customer}</td>
                  <td className="p-3 text-slate-400">{finance.bank}</td>
                  <td className="p-3 font-medium text-slate-200">{finance.amount}</td>
                  <td className="p-3 text-slate-400">{finance.emi}</td>
                  <td className="p-3 text-slate-400">{finance.date}</td>
                  <td className="p-3">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold flex items-center w-max gap-1 ${
                      finance.status === 'Approved' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                      finance.status === 'Rejected' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
                      'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                    }`}>
                      {finance.status === 'Approved' && <CheckCircle className="w-3 h-3" />}
                      {finance.status === 'Pending' && <Clock className="w-3 h-3" />}
                      {finance.status === 'Rejected' && <X className="w-3 h-3" />}
                      {finance.status}
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
