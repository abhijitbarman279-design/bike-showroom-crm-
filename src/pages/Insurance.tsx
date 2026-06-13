import { WidgetSection } from "@/components/dashboard/WidgetSection";
import { Plus, Search, Filter, MoreHorizontal, X, ArrowLeft, Shield, CheckCircle, Clock } from "lucide-react";
import { useState } from "react";

interface InsuranceProps {
  setCurrentPage: (page: string) => void;
}

export function Insurance({ setCurrentPage }: InsuranceProps) {
  const [showAddInsuranceModal, setShowAddInsuranceModal] = useState(false);

  const insuranceData = [
    { id: "INS-7701", customer: "Rahul Sharma", provider: "HDFC Ergo", type: "Comprehensive", premium: "₹ 5,800", expiry: "Today", status: "Active" },
    { id: "INS-7702", customer: "Priya Singh", provider: "ICICI Lombard", type: "Zero Dep", premium: "₹ 7,200", expiry: "In 5 Days", status: "Pending" },
    { id: "INS-7703", customer: "Amit Kumar", provider: "Digit", type: "Third Party", premium: "₹ 2,400", expiry: "In 10 Days", status: "Active" },
    { id: "INS-7704", customer: "Vikram Reddy", provider: "HDFC Ergo", type: "Comprehensive", premium: "₹ 6,100", expiry: "Yesterday", status: "Expired" },
    { id: "INS-7705", customer: "Neha Gupta", provider: "Reliance General", type: "Zero Dep", premium: "₹ 7,500", expiry: "In 12 Days", status: "Active" },
  ];

  return (
    <div className="h-full flex flex-col gap-2 relative">
      {/* Modal */}
      {showAddInsuranceModal && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-[#020617]/80 backdrop-blur-sm">
          <div className="bg-[#0f172a] border border-[#1e293b] rounded-lg w-full max-w-md p-5 shadow-2xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-slate-100">Issue Insurance Policy</h2>
              <button onClick={() => setShowAddInsuranceModal(false)} className="text-slate-400 hover:text-slate-200">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Customer Name / Engine No.</label>
                <input type="text" className="w-full bg-slate-900 border border-slate-800 rounded-md py-2 px-3 text-sm text-slate-200 focus:border-blue-500 outline-none" placeholder="Search customer or vehicle" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                   <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Provider</label>
                   <select className="w-full bg-slate-900 border border-slate-800 rounded-md py-2 px-3 text-sm text-slate-200 focus:border-blue-500 outline-none">
                     <option>HDFC Ergo</option>
                     <option>ICICI Lombard</option>
                     <option>Digit</option>
                     <option>Reliance General</option>
                   </select>
                </div>
                <div>
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Policy Type</label>
                    <select className="w-full bg-slate-900 border border-slate-800 rounded-md py-2 px-3 text-sm text-slate-200 focus:border-blue-500 outline-none">
                        <option>Comprehensive</option>
                        <option>Zero Depreciation</option>
                        <option>Third Party</option>
                    </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Premium Amount (₹)</label>
                  <input type="text" className="w-full bg-slate-900 border border-slate-800 rounded-md py-2 px-3 text-sm text-slate-200 focus:border-blue-500 outline-none" placeholder="0.00" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Coverage Valid Till</label>
                  <input type="date" className="w-full bg-slate-900 border border-slate-800 rounded-md py-2 px-3 text-sm text-slate-200 focus:border-blue-500 outline-none" />
                </div>
              </div>
              <div className="pt-2 flex justify-end gap-2">
                <button onClick={() => setShowAddInsuranceModal(false)} className="px-4 py-2 text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-md transition-colors">Cancel</button>
                <button onClick={() => setShowAddInsuranceModal(false)} className="px-4 py-2 text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white rounded-md transition-colors">Issue Policy</button>
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
          <h1 className="text-lg font-bold text-slate-100">Insurance Policies</h1>
          <div className="relative">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-500" />
            <input
              type="text"
              placeholder="Search policies..."
              className="bg-slate-900 border border-slate-800 rounded-md py-1 pl-8 pr-3 text-xs text-slate-300 placeholder:text-slate-500 outline-none focus:border-blue-500 transition-colors w-64"
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
           <button className="bg-slate-800 hover:bg-slate-700 text-slate-300 px-3 py-1.5 rounded border border-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors">
            <Filter className="w-3.5 h-3.5" />
            Filter
          </button>
          <button onClick={() => setShowAddInsuranceModal(true)} className="bg-blue-600 hover:bg-blue-500 text-white px-3 py-1.5 rounded border border-blue-500 text-xs font-semibold flex items-center gap-1.5 transition-colors">
            <Plus className="w-3.5 h-3.5" />
            Issue Policy
          </button>
        </div>
      </div>

      <WidgetSection title="Active & Pending Policies" className="flex-1 overflow-hidden flex flex-col">
        <div className="overflow-auto flex-1 hide-scrollbar">
          <table className="w-full text-left text-xs">
            <thead className="text-slate-500 bg-[#020617] sticky top-0 uppercase tracking-widest text-[10px]">
              <tr>
                <th className="font-semibold p-3 border-b border-slate-800">Policy ID</th>
                <th className="font-semibold p-3 border-b border-slate-800">Customer Name</th>
                <th className="font-semibold p-3 border-b border-slate-800">Provider</th>
                <th className="font-semibold p-3 border-b border-slate-800">Type</th>
                <th className="font-semibold p-3 border-b border-slate-800">Premium</th>
                <th className="font-semibold p-3 border-b border-slate-800">Expiry</th>
                <th className="font-semibold p-3 border-b border-slate-800">Status</th>
                <th className="font-semibold p-3 border-b border-slate-800 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="text-slate-300">
              {insuranceData.map((insurance) => (
                <tr key={insurance.id} className="border-b border-slate-800/50 hover:bg-slate-800/20 transition-colors">
                  <td className="p-3 text-blue-400 font-medium flex items-center gap-2">
                    <Shield className="w-4 h-4 text-slate-500" />
                    {insurance.id}
                  </td>
                  <td className="p-3 font-semibold text-slate-200">{insurance.customer}</td>
                  <td className="p-3 text-slate-400">{insurance.provider}</td>
                  <td className="p-3 font-medium text-slate-300">{insurance.type}</td>
                  <td className="p-3 text-slate-200 font-medium">{insurance.premium}</td>
                  <td className="p-3 text-slate-400">{insurance.expiry}</td>
                  <td className="p-3">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold flex items-center w-max gap-1 ${
                      insurance.status === 'Active' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                      insurance.status === 'Expired' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
                      'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                    }`}>
                      {insurance.status === 'Active' && <CheckCircle className="w-3 h-3" />}
                      {insurance.status === 'Pending' && <Clock className="w-3 h-3" />}
                      {insurance.status === 'Expired' && <X className="w-3 h-3" />}
                      {insurance.status}
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
