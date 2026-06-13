import { WidgetSection } from "@/components/dashboard/WidgetSection";
import { Plus, Search, Filter, MoreHorizontal, X, ArrowLeft, Package, AlertTriangle } from "lucide-react";
import { useState } from "react";

interface InventoryProps {
  setCurrentPage: (page: string) => void;
}

export function Inventory({ setCurrentPage }: InventoryProps) {
  const [showAddStockModal, setShowAddStockModal] = useState(false);

  const inventoryData = [
    { id: "INV-1001", model: "Classic 350", variant: "Dark Stealth", stock: 12, status: "In Stock" },
    { id: "INV-1002", model: "Meteor 350", variant: "Stellar Black", stock: 2, status: "Low Stock" },
    { id: "INV-1003", model: "Hunter 350", variant: "Rebel Blue", stock: 8, status: "In Stock" },
    { id: "INV-1004", model: "Himalayan 450", variant: "Hanle Black", stock: 0, status: "Out of Stock" },
    { id: "INV-1005", model: "Bullet 350", variant: "Standard Black", stock: 15, status: "In Stock" },
    { id: "INV-1006", model: "Continental GT", variant: "Mr Clean", stock: 3, status: "Low Stock" },
  ];

  return (
    <div className="h-full flex flex-col gap-2 relative">
      {/* Modal */}
      {showAddStockModal && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-[#020617]/80 backdrop-blur-sm">
          <div className="bg-[#0f172a] border border-[#1e293b] rounded-lg w-full max-w-md p-5 shadow-2xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-slate-100">Add Vehicle Stock</h2>
              <button onClick={() => setShowAddStockModal(false)} className="text-slate-400 hover:text-slate-200">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Model Name</label>
                  <select className="w-full bg-slate-900 border border-slate-800 rounded-md py-2 px-3 text-sm text-slate-200 focus:border-blue-500 outline-none">
                    <option>Classic 350</option>
                    <option>Meteor 350</option>
                    <option>Hunter 350</option>
                    <option>Himalayan</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Variant / Color</label>
                  <input type="text" className="w-full bg-slate-900 border border-slate-800 rounded-md py-2 px-3 text-sm text-slate-200 focus:border-blue-500 outline-none" placeholder="e.g. Dark Stealth" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                 <div>
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Quantity</label>
                    <input type="number" className="w-full bg-slate-900 border border-slate-800 rounded-md py-2 px-3 text-sm text-slate-200 focus:border-blue-500 outline-none" placeholder="0" min="1" />
                 </div>
                 <div>
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Chassis Prefix</label>
                    <input type="text" className="w-full bg-slate-900 border border-slate-800 rounded-md py-2 px-3 text-sm text-slate-200 focus:border-blue-500 outline-none" placeholder="Optional" />
                 </div>
              </div>
              <div className="pt-2 flex justify-end gap-2">
                <button onClick={() => setShowAddStockModal(false)} className="px-4 py-2 text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-md transition-colors">Cancel</button>
                <button onClick={() => setShowAddStockModal(false)} className="px-4 py-2 text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white rounded-md transition-colors">Add to Inventory</button>
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
          <h1 className="text-lg font-bold text-slate-100">Vehicle Inventory</h1>
          <div className="relative">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-500" />
            <input
              type="text"
              placeholder="Search by model or variant..."
              className="bg-slate-900 border border-slate-800 rounded-md py-1 pl-8 pr-3 text-xs text-slate-300 placeholder:text-slate-500 outline-none focus:border-blue-500 transition-colors w-64"
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
           <button className="bg-slate-800 hover:bg-slate-700 text-slate-300 px-3 py-1.5 rounded border border-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors">
            <Filter className="w-3.5 h-3.5" />
            Stock Filter
          </button>
          <button onClick={() => setShowAddStockModal(true)} className="bg-blue-600 hover:bg-blue-500 text-white px-3 py-1.5 rounded border border-blue-500 text-xs font-semibold flex items-center gap-1.5 transition-colors">
            <Plus className="w-3.5 h-3.5" />
            Add Stock
          </button>
        </div>
      </div>

      <WidgetSection title="Current Stock Levels" className="flex-1 overflow-hidden flex flex-col">
        <div className="overflow-auto flex-1 hide-scrollbar">
          <table className="w-full text-left text-xs">
            <thead className="text-slate-500 bg-[#020617] sticky top-0 uppercase tracking-widest text-[10px]">
              <tr>
                <th className="font-semibold p-3 border-b border-slate-800">Inventory ID</th>
                <th className="font-semibold p-3 border-b border-slate-800">Model Series</th>
                <th className="font-semibold p-3 border-b border-slate-800">Variant / Color</th>
                <th className="font-semibold p-3 border-b border-slate-800 text-center">Current Stock</th>
                <th className="font-semibold p-3 border-b border-slate-800">Status</th>
                <th className="font-semibold p-3 border-b border-slate-800 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="text-slate-300">
              {inventoryData.map((item) => (
                <tr key={item.id} className="border-b border-slate-800/50 hover:bg-slate-800/20 transition-colors">
                  <td className="p-3 text-blue-400 font-medium">{item.id}</td>
                  <td className="p-3 font-semibold text-slate-200">{item.model}</td>
                  <td className="p-3 text-slate-400">{item.variant}</td>
                  <td className="p-3 text-center font-bold text-slate-200">{item.stock} Units</td>
                  <td className="p-3">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold flex items-center w-max gap-1 ${
                      item.status === 'Low Stock' ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' :
                      item.status === 'Out of Stock' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
                      'bg-green-500/20 text-green-400 border border-green-500/30'
                    }`}>
                      {(item.status === 'Low Stock' || item.status === 'Out of Stock') && <AlertTriangle className="w-3 h-3" />}
                      {item.status === 'In Stock' && <Package className="w-3 h-3" />}
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
