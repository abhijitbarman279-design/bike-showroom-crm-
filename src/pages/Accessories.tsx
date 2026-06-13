import { WidgetSection } from "@/components/dashboard/WidgetSection";
import { Plus, Search, Filter, MoreHorizontal, X, ArrowLeft, ShoppingBag, AlertTriangle, PackageCheck } from "lucide-react";
import { useState } from "react";

interface AccessoriesProps {
  setCurrentPage: (page: string) => void;
}

export function Accessories({ setCurrentPage }: AccessoriesProps) {
  const [showAddAccessoryModal, setShowAddAccessoryModal] = useState(false);

  const accessoriesData = [
    { id: "ACC-001", name: "Touring Seat", category: "Seats", price: "₹ 3,500", stock: 15, status: "In Stock" },
    { id: "ACC-002", name: "Engine Guard", category: "Protection", price: "₹ 2,200", stock: 8, status: "In Stock" },
    { id: "ACC-003", name: "Bar End Mirrors", category: "Mirrors", price: "₹ 1,800", stock: 3, status: "Low Stock" },
    { id: "ACC-004", name: "Pannier Mounting Kit", category: "Luggage", price: "₹ 4,500", stock: 0, status: "Out of Stock" },
    { id: "ACC-005", name: "Tall Windscreen", category: "Aero", price: "₹ 2,800", stock: 10, status: "In Stock" },
  ];

  return (
    <div className="h-full flex flex-col gap-2 relative">
      {/* Modal */}
      {showAddAccessoryModal && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-[#020617]/80 backdrop-blur-sm">
          <div className="bg-[#0f172a] border border-[#1e293b] rounded-lg w-full max-w-md p-5 shadow-2xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-slate-100">Add New Accessory</h2>
              <button onClick={() => setShowAddAccessoryModal(false)} className="text-slate-400 hover:text-slate-200">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Accessory Name</label>
                <input type="text" className="w-full bg-slate-900 border border-slate-800 rounded-md py-2 px-3 text-sm text-slate-200 focus:border-blue-500 outline-none" placeholder="Enter accessory name" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                   <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Accessory ID</label>
                   <input type="text" className="w-full bg-slate-900 border border-slate-800 rounded-md py-2 px-3 text-sm text-slate-200 focus:border-blue-500 outline-none" placeholder="e.g. ACC-100" />
                </div>
                 <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Category</label>
                  <select className="w-full bg-slate-900 border border-slate-800 rounded-md py-2 px-3 text-sm text-slate-200 focus:border-blue-500 outline-none">
                     <option>Seats</option>
                     <option>Protection</option>
                     <option>Mirrors</option>
                     <option>Luggage</option>
                     <option>Aero</option>
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
                <button onClick={() => setShowAddAccessoryModal(false)} className="px-4 py-2 text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-md transition-colors">Cancel</button>
                <button onClick={() => setShowAddAccessoryModal(false)} className="px-4 py-2 text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white rounded-md transition-colors">Save Accessory</button>
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
          <h1 className="text-lg font-bold text-slate-100">Genuine Accessories</h1>
          <div className="relative">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-500" />
            <input
              type="text"
              placeholder="Search accessories..."
              className="bg-slate-900 border border-slate-800 rounded-md py-1 pl-8 pr-3 text-xs text-slate-300 placeholder:text-slate-500 outline-none focus:border-blue-500 transition-colors w-64"
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
           <button className="bg-slate-800 hover:bg-slate-700 text-slate-300 px-3 py-1.5 rounded border border-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors">
            <Filter className="w-3.5 h-3.5" />
            Filter
          </button>
          <button onClick={() => setShowAddAccessoryModal(true)} className="bg-blue-600 hover:bg-blue-500 text-white px-3 py-1.5 rounded border border-blue-500 text-xs font-semibold flex items-center gap-1.5 transition-colors">
            <Plus className="w-3.5 h-3.5" />
            Add Accessory
          </button>
        </div>
      </div>

      <WidgetSection title="Accessories Stock" className="flex-1 overflow-hidden flex flex-col">
        <div className="overflow-auto flex-1 hide-scrollbar">
          <table className="w-full text-left text-xs">
            <thead className="text-slate-500 bg-[#020617] sticky top-0 uppercase tracking-widest text-[10px]">
              <tr>
                <th className="font-semibold p-3 border-b border-slate-800">ID</th>
                <th className="font-semibold p-3 border-b border-slate-800">Accessory Name</th>
                <th className="font-semibold p-3 border-b border-slate-800">Category</th>
                <th className="font-semibold p-3 border-b border-slate-800">Price</th>
                <th className="font-semibold p-3 border-b border-slate-800">Stock</th>
                <th className="font-semibold p-3 border-b border-slate-800">Status</th>
                <th className="font-semibold p-3 border-b border-slate-800 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="text-slate-300">
              {accessoriesData.map((item) => (
                <tr key={item.id} className="border-b border-slate-800/50 hover:bg-slate-800/20 transition-colors">
                  <td className="p-3 text-blue-400 font-medium flex items-center gap-2">
                    <ShoppingBag className="w-4 h-4 text-slate-500" />
                    {item.id}
                  </td>
                  <td className="p-3 font-semibold text-slate-200">{item.name}</td>
                  <td className="p-3 text-slate-400">{item.category}</td>
                  <td className="p-3 font-medium text-slate-200">{item.price}</td>
                  <td className="p-3 text-slate-200 font-medium">{item.stock}</td>
                  <td className="p-3">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold flex items-center w-max gap-1 ${
                      item.status === 'In Stock' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                      item.status === 'Out of Stock' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
                      'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                    }`}>
                      {item.status === 'In Stock' && <PackageCheck className="w-3 h-3" />}
                      {(item.status === 'Low Stock' || item.status === 'Out of Stock') && <AlertTriangle className="w-3 h-3" />}
                      {item.status}
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
