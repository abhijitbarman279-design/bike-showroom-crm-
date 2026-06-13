import { WidgetSection } from "@/components/dashboard/WidgetSection";
import { Plus, Search, Filter, MoreHorizontal, X, ArrowLeft } from "lucide-react";
import { useState } from "react";

interface CustomersProps {
  setCurrentPage: (page: string) => void;
}

export function Customers({ setCurrentPage }: CustomersProps) {
  const [showAddCustomerModal, setShowAddCustomerModal] = useState(false);

  const customersData = [
    { id: "CUST-8042", name: "Rahul Sharma", phone: "+91 9876543210", email: "rahul.s@example.com", type: "VIP", joined: "Jan 12, 2024" },
    { id: "CUST-8043", name: "Priya Singh", phone: "+91 9876543211", email: "priya.s@example.com", type: "Repeat", joined: "Feb 05, 2024" },
    { id: "CUST-8044", name: "Amit Kumar", phone: "+91 9876543212", email: "amit.k@example.com", type: "New", joined: "Today" },
    { id: "CUST-8045", name: "Vikram Reddy", phone: "+91 9876543213", email: "vikram.r@example.com", type: "Repeat", joined: "Mar 20, 2024" },
    { id: "CUST-8046", name: "Neha Gupta", phone: "+91 9876543214", email: "neha.g@example.com", type: "VIP", joined: "Apr 02, 2024" },
  ];

  return (
    <div className="h-full flex flex-col gap-2 relative">
      {/* Modal */}
      {showAddCustomerModal && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-[#020617]/80 backdrop-blur-sm">
          <div className="bg-[#0f172a] border border-[#1e293b] rounded-lg w-full max-w-md p-5 shadow-2xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-slate-100">Add New Customer</h2>
              <button onClick={() => setShowAddCustomerModal(false)} className="text-slate-400 hover:text-slate-200">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Full Name</label>
                <input type="text" className="w-full bg-slate-900 border border-slate-800 rounded-md py-2 px-3 text-sm text-slate-200 focus:border-blue-500 outline-none" placeholder="Enter name" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Phone Number</label>
                <input type="tel" className="w-full bg-slate-900 border border-slate-800 rounded-md py-2 px-3 text-sm text-slate-200 focus:border-blue-500 outline-none" placeholder="+91" />
              </div>
               <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Email</label>
                <input type="email" className="w-full bg-slate-900 border border-slate-800 rounded-md py-2 px-3 text-sm text-slate-200 focus:border-blue-500 outline-none" placeholder="customer@example.com" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Customer Type</label>
                <select className="w-full bg-slate-900 border border-slate-800 rounded-md py-2 px-3 text-sm text-slate-200 focus:border-blue-500 outline-none">
                  <option>New</option>
                  <option>Repeat</option>
                  <option>VIP</option>
                </select>
              </div>
              <div className="pt-2 flex justify-end gap-2">
                <button onClick={() => setShowAddCustomerModal(false)} className="px-4 py-2 text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-md transition-colors">Cancel</button>
                <button onClick={() => setShowAddCustomerModal(false)} className="px-4 py-2 text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white rounded-md transition-colors">Save Customer</button>
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
          <h1 className="text-lg font-bold text-slate-100">Customer Directory</h1>
          <div className="relative">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-500" />
            <input
              type="text"
              placeholder="Search customers..."
              className="bg-slate-900 border border-slate-800 rounded-md py-1 pl-8 pr-3 text-xs text-slate-300 placeholder:text-slate-500 outline-none focus:border-blue-500 transition-colors w-64"
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="bg-slate-800 hover:bg-slate-700 text-slate-300 px-3 py-1.5 rounded border border-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors">
            <Filter className="w-3.5 h-3.5" />
            Filter
          </button>
          <button onClick={() => setShowAddCustomerModal(true)} className="bg-blue-600 hover:bg-blue-500 text-white px-3 py-1.5 rounded border border-blue-500 text-xs font-semibold flex items-center gap-1.5 transition-colors">
            <Plus className="w-3.5 h-3.5" />
            Add Customer
          </button>
        </div>
      </div>

      <WidgetSection title="All Customers" className="flex-1 overflow-hidden flex flex-col">
        <div className="overflow-auto flex-1 hide-scrollbar">
          <table className="w-full text-left text-xs">
            <thead className="text-slate-500 bg-[#020617] sticky top-0 uppercase tracking-widest text-[10px]">
              <tr>
                <th className="font-semibold p-3 border-b border-slate-800">Customer ID</th>
                <th className="font-semibold p-3 border-b border-slate-800">Full Name</th>
                <th className="font-semibold p-3 border-b border-slate-800">Phone</th>
                <th className="font-semibold p-3 border-b border-slate-800">Email</th>
                <th className="font-semibold p-3 border-b border-slate-800">Type</th>
                <th className="font-semibold p-3 border-b border-slate-800">Joined</th>
                <th className="font-semibold p-3 border-b border-slate-800 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="text-slate-300">
              {customersData.map((customer) => (
                <tr key={customer.id} className="border-b border-slate-800/50 hover:bg-slate-800/20 transition-colors">
                  <td className="p-3 text-blue-400 font-medium">{customer.id}</td>
                  <td className="p-3 font-semibold text-slate-200">{customer.name}</td>
                  <td className="p-3 text-slate-400">{customer.phone}</td>
                  <td className="p-3 text-slate-400">{customer.email}</td>
                  <td className="p-3">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                      customer.type === 'VIP' ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' :
                      customer.type === 'Repeat' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                      'bg-slate-700 text-slate-300 border border-slate-600'
                    }`}>
                      {customer.type}
                    </span>
                  </td>
                  <td className="p-3 text-slate-400">{customer.joined}</td>
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
