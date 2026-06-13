import { WidgetSection } from "@/components/dashboard/WidgetSection";
import { Plus, Search, Filter, MoreHorizontal, X, ArrowLeft, DollarSign, ArrowUpRight, ArrowDownRight, FileText } from "lucide-react";
import { useState } from "react";

interface AccountsProps {
  setCurrentPage: (page: string) => void;
}

export function Accounts({ setCurrentPage }: AccountsProps) {
  const [showAddTransactionModal, setShowAddTransactionModal] = useState(false);

  const transactionsData = [
    { id: "TRX-101", date: "Today", description: "Payment for Bike Sales (Model X)", type: "Income", amount: "₹ 1,85,000", method: "Bank Transfer", status: "Completed" },
    { id: "TRX-102", date: "Today", description: "Spare Parts Purchase (Supplier A)", type: "Expense", amount: "₹ 45,000", method: "Credit Card", status: "Completed" },
    { id: "TRX-103", date: "Yesterday", description: "Service Charge (Job Card JC-10023)", type: "Income", amount: "₹ 850", method: "UPI", status: "Completed" },
    { id: "TRX-104", date: "Yesterday", description: "Electricity Bill (Showroom)", type: "Expense", amount: "₹ 12,500", method: "Bank Transfer", status: "Pending" },
    { id: "TRX-105", date: "2 days ago", description: "Advance Payment (Booking BK-005)", type: "Income", amount: "₹ 5,000", method: "Cash", status: "Completed" },
  ];

  return (
    <div className="h-full flex flex-col gap-2 relative">
      {/* Modal */}
      {showAddTransactionModal && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-[#020617]/80 backdrop-blur-sm">
          <div className="bg-[#0f172a] border border-[#1e293b] rounded-lg w-full max-w-md p-5 shadow-2xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-slate-100">Add Transaction</h2>
              <button onClick={() => setShowAddTransactionModal(false)} className="text-slate-400 hover:text-slate-200">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                   <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Transaction Type</label>
                   <select className="w-full bg-slate-900 border border-slate-800 rounded-md py-2 px-3 text-sm text-slate-200 focus:border-blue-500 outline-none">
                     <option>Income</option>
                     <option>Expense</option>
                   </select>
                </div>
                 <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Amount (₹)</label>
                  <input type="text" className="w-full bg-slate-900 border border-slate-800 rounded-md py-2 px-3 text-sm text-slate-200 focus:border-blue-500 outline-none" placeholder="0.00" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Description / Particulars</label>
                <input type="text" className="w-full bg-slate-900 border border-slate-800 rounded-md py-2 px-3 text-sm text-slate-200 focus:border-blue-500 outline-none" placeholder="Enter transaction details..." />
              </div>
               <div className="grid grid-cols-2 gap-4">
                <div>
                   <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Payment Method</label>
                   <select className="w-full bg-slate-900 border border-slate-800 rounded-md py-2 px-3 text-sm text-slate-200 focus:border-blue-500 outline-none">
                     <option>Cash</option>
                     <option>Bank Transfer</option>
                     <option>UPI</option>
                     <option>Credit Card</option>
                     <option>Cheque</option>
                   </select>
                </div>
                 <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Date</label>
                  <input type="date" className="w-full bg-slate-900 border border-slate-800 rounded-md py-2 px-3 text-sm text-slate-200 focus:border-blue-500 outline-none" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Reference No. (Optional)</label>
                <input type="text" className="w-full bg-slate-900 border border-slate-800 rounded-md py-2 px-3 text-sm text-slate-200 focus:border-blue-500 outline-none" placeholder="e.g. Invoice / Receipt No." />
              </div>
              <div className="pt-2 flex justify-end gap-2">
                <button onClick={() => setShowAddTransactionModal(false)} className="px-4 py-2 text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-md transition-colors">Cancel</button>
                <button onClick={() => setShowAddTransactionModal(false)} className="px-4 py-2 text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white rounded-md transition-colors">Save Transaction</button>
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
          <h1 className="text-lg font-bold text-slate-100">Accounts & Ledger</h1>
          <div className="relative">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-500" />
            <input
              type="text"
              placeholder="Search transactions..."
              className="bg-slate-900 border border-slate-800 rounded-md py-1 pl-8 pr-3 text-xs text-slate-300 placeholder:text-slate-500 outline-none focus:border-blue-500 transition-colors w-64"
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
           <button className="bg-slate-800 hover:bg-slate-700 text-slate-300 px-3 py-1.5 rounded border border-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors">
            <Filter className="w-3.5 h-3.5" />
            Filter
          </button>
          <button onClick={() => setShowAddTransactionModal(true)} className="bg-blue-600 hover:bg-blue-500 text-white px-3 py-1.5 rounded border border-blue-500 text-xs font-semibold flex items-center gap-1.5 transition-colors">
            <Plus className="w-3.5 h-3.5" />
            Add Entry
          </button>
        </div>
      </div>

      <WidgetSection title="Recent Transactions" className="flex-1 overflow-hidden flex flex-col">
        <div className="overflow-auto flex-1 hide-scrollbar">
          <table className="w-full text-left text-xs">
            <thead className="text-slate-500 bg-[#020617] sticky top-0 uppercase tracking-widest text-[10px]">
              <tr>
                <th className="font-semibold p-3 border-b border-slate-800">Date & ID</th>
                <th className="font-semibold p-3 border-b border-slate-800">Description</th>
                <th className="font-semibold p-3 border-b border-slate-800">Type</th>
                <th className="font-semibold p-3 border-b border-slate-800">Amount</th>
                <th className="font-semibold p-3 border-b border-slate-800">Method</th>
                <th className="font-semibold p-3 border-b border-slate-800">Status</th>
                <th className="font-semibold p-3 border-b border-slate-800 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="text-slate-300">
              {transactionsData.map((trx) => (
                <tr key={trx.id} className="border-b border-slate-800/50 hover:bg-slate-800/20 transition-colors">
                  <td className="p-3 text-blue-400 font-medium">
                     <div className="font-semibold text-slate-200">{trx.date}</div>
                    <div className="text-[10px] text-slate-500 flex items-center gap-1 mt-0.5">
                      <FileText className="w-3 h-3" />
                      {trx.id}
                    </div>
                  </td>
                  <td className="p-3 font-medium text-slate-300">{trx.description}</td>
                  <td className="p-3">
                    <span className={`flex items-center gap-1 w-max font-semibold ${trx.type === 'Income' ? 'text-green-400' : 'text-red-400'}`}>
                      {trx.type === 'Income' ? <ArrowDownRight className="w-3.5 h-3.5" /> : <ArrowUpRight className="w-3.5 h-3.5" />}
                      {trx.type}
                    </span>
                  </td>
                  <td className={`p-3 font-bold ${trx.type === 'Income' ? 'text-green-400' : 'text-slate-200'}`}>{trx.amount}</td>
                  <td className="p-3 text-slate-400">{trx.method}</td>
                  <td className="p-3">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold flex items-center w-max gap-1 ${
                      trx.status === 'Completed' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                      'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                    }`}>
                      {trx.status}
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
