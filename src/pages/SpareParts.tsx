import { WidgetSection } from "@/components/dashboard/WidgetSection";
import { Plus, Search, Filter, MoreHorizontal, X, ArrowLeft, Box, AlertTriangle, PackageCheck } from "lucide-react";
import { useState } from "react";

interface SparePartsProps {
  setCurrentPage: (page: string) => void;
}

export function SpareParts({ setCurrentPage }: SparePartsProps) {
  const [showAddPartModal, setShowAddPartModal] = useState(false);

  const partsData = [
    { id: "PRT-100", name: "Engine Oil (15W50)", category: "Lubricants", price: "₹ 850", stock: 45, status: "In Stock" },
    { id: "PRT-101", name: "Air Filter Element", category: "Engine", price: "₹ 350", stock: 12, status: "In Stock" },
    { id: "PRT-102", name: "Front Brake Pad", category: "Brakes", price: "₹ 1,200", stock: 4, status: "Low Stock" },
    { id: "PRT-103", name: "Clutch Cable", category: "Control Cable", price: "₹ 450", stock: 0, status: "Out of Stock" },
    { id: "PRT-104", name: "Spark Plug", category: "Electrical", price: "₹ 250", stock: 25, status: "In Stock" },
    { id: "PRT-105", name: "Rear Brake Drum", category: "Brakes", price: "₹ 1,800", stock: 2, status: "Low Stock" },
  ];

  return (
    <div className="h-full flex flex-col gap-2 relative">
      {/* Modal */}
      {showAddPartModal && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-[#020617]/80 backdrop-blur-sm">
          <div className="bg-[#0f172a] border border-[#1e293b] rounded-lg w-full max-w-md p-5 shadow-2xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-slate-100">Add Spare Part</h2>
              <button onClick={() => setShowAddPartModal(false)} className="text-slate-400 hover:text-slate-200">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Part Name</label>
                <input type="text" className="w-full bg-slate-900 border border-slate-800 rounded-md py-2 px-3 text-sm text-slate-200 focus:border-blue-500 outline-none" placeholder="Enter part name" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                   <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Part Number (ID)</label>
                   <input type="text" className="w-full bg-slate-900 border border-slate-800 rounded-md py-2 px-3 text-sm text-slate-200 focus:border-blue-500 outline-none" placeholder="e.g. PRT-100" />
                </div>
                 <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Category</label>
                  <select className="w-full bg-slate-900 border border-slate-800 rounded-md py-2 px-3 text-sm text-slate-200 focus:border-blue-500 outline-none">
                     <option>Engine</option>
                     <option>Brakes</option>
                     <option>Lubricants</option>
                     <option>Electrical</option>
                     <option>Control Cable</option>
                   </select>
                </div>
              </div>
               <div className="grid grid-cols-2 gap-4">
                <div>
                   <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Selling Price (₹)</label>
                   <input type="text" className="w-full bg-slate-900 border border-slate-800 rounded-md py-2 px-3 text-sm text-slate-200 focus:border-blue-500 outline-none" placeholder="0.00" />
                </div>
                 <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Initial Stock Quantity</label>
                  <input type="number" className="w-full bg-slate-900 border border-slate-800 rounded-md py-2 px-3 text-sm text-slate-200 focus:border-blue-500 outline-none" placeholder="0" min="0" />
                </div>
              </div>
              <div className="pt-2 flex justify-end gap-2">
                <button onClick={() => setShowAddPartModal(false)} className="px-4 py-2 text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-md transition-colors">Cancel</button>
                <button onClick={() => setShowAddPartModal(false)} className="px-4 py-2 text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white rounded-md transition-colors">Save Part</button>
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
          <h1 className="text-lg font-bold text-slate-100">Spare Parts Inventory</h1>
          <div className="relative">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-500" />
            <input
              type="text"
              placeholder="Search parts by name or ID..."
              className="bg-slate-900 border border-slate-800 rounded-md py-1 pl-8 pr-3 text-xs text-slate-300 placeholder:text-slate-500 outline-none focus:border-blue-500 transition-colors w-64"
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
           <button className="bg-slate-800 hover:bg-slate-700 text-slate-300 px-3 py-1.5 rounded border border-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors">
            <Filter className="w-3.5 h-3.5" />
            Category Filter
          </button>
          <button onClick={() => setShowAddPartModal(true)} className="bg-blue-600 hover:bg-blue-500 text-white px-3 py-1.5 rounded border border-blue-500 text-xs font-semibold flex items-center gap-1.5 transition-colors">
            <Plus className="w-3.5 h-3.5" />
            Add Part
          </button>
        </div>
      </div>

      <WidgetSection title="Parts Stock Status" className="flex-1 overflow-hidden flex flex-col">
        <div className="overflow-auto flex-1 hide-scrollbar">
          <table className="w-full text-left text-xs">
            <thead className="text-slate-500 bg-[#020617] sticky top-0 uppercase tracking-widest text-[10px]">
              <tr>
                <th className="font-semibold p-3 border-b border-slate-800">Part Number</th>
                <th className="font-semibold p-3 border-b border-slate-800">Part Name</th>
                <th className="font-semibold p-3 border-b border-slate-800">Category</th>
                <th className="font-semibold p-3 border-b border-slate-800">Price</th>
                <th className="font-semibold p-3 border-b border-slate-800">Stock Qty</th>
                <th className="font-semibold p-3 border-b border-slate-800">Status</th>
                <th className="font-semibold p-3 border-b border-slate-800 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="text-slate-300">
              {partsData.map((part) => (
                <tr key={part.id} className="border-b border-slate-800/50 hover:bg-slate-800/20 transition-colors">
                  <td className="p-3 text-blue-400 font-medium">
                    <div className="flex items-center gap-2">
                        <Box className="w-4 h-4 text-slate-500" />
                        {part.id}
                    </div>
                  </td>
                  <td className="p-3 font-semibold text-slate-200">{part.name}</td>
                  <td className="p-3 text-slate-400">{part.category}</td>
                  <td className="p-3 font-medium text-slate-200">{part.price}</td>
                  <td className="p-3 text-slate-200 font-medium">{part.stock}</td>
                  <td className="p-3">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold flex items-center w-max gap-1 ${
                      part.status === 'In Stock' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                      part.status === 'Out of Stock' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
                      'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                    }`}>
                      {part.status === 'In Stock' && <PackageCheck className="w-3 h-3" />}
                      {(part.status === 'Low Stock' || part.status === 'Out of Stock') && <AlertTriangle className="w-3 h-3" />}
                      {part.status}
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
