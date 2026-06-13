import { WidgetSection } from "@/components/dashboard/WidgetSection";
import { Plus, Search, Filter, MoreHorizontal, X, ArrowLeft, Bike } from "lucide-react";
import { useState } from "react";

interface BikeModelsProps {
  setCurrentPage: (page: string) => void;
}

export function BikeModels({ setCurrentPage }: BikeModelsProps) {
  const [showAddModelModal, setShowAddModelModal] = useState(false);

  const modelsData = [
    { id: "MOD-001", name: "Classic 350", category: "Classic", startingPrice: "₹ 1,93,080", variants: 5, colors: 10, status: "Active" },
    { id: "MOD-002", name: "Meteor 350", category: "Cruiser", startingPrice: "₹ 2,05,900", variants: 3, colors: 7, status: "Active" },
    { id: "MOD-003", name: "Hunter 350", category: "Roadster", startingPrice: "₹ 1,49,900", variants: 2, colors: 6, status: "Active" },
    { id: "MOD-004", name: "Himalayan 450", category: "Adventure", startingPrice: "₹ 2,85,000", variants: 3, colors: 5, status: "Active" },
    { id: "MOD-005", name: "Bullet 350", category: "Classic", startingPrice: "₹ 1,73,562", variants: 3, colors: 5, status: "Active" },
    { id: "MOD-006", name: "Continental GT 650", category: "Cafe Racer", startingPrice: "₹ 3,19,000", variants: 4, colors: 6, status: "Active" },
    { id: "MOD-007", name: "Super Meteor 650", category: "Cruiser", startingPrice: "₹ 3,63,900", variants: 3, colors: 7, status: "Active" },
  ];

  return (
    <div className="h-full flex flex-col gap-2 relative">
      {/* Modal */}
      {showAddModelModal && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-[#020617]/80 backdrop-blur-sm">
          <div className="bg-[#0f172a] border border-[#1e293b] rounded-lg w-full max-w-md p-5 shadow-2xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-slate-100">Add New Bike Model</h2>
              <button onClick={() => setShowAddModelModal(false)} className="text-slate-400 hover:text-slate-200">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Model Name</label>
                <input type="text" className="w-full bg-slate-900 border border-slate-800 rounded-md py-2 px-3 text-sm text-slate-200 focus:border-blue-500 outline-none" placeholder="e.g., Shotgun 650" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Category</label>
                  <select className="w-full bg-slate-900 border border-slate-800 rounded-md py-2 px-3 text-sm text-slate-200 focus:border-blue-500 outline-none">
                    <option>Classic</option>
                    <option>Cruiser</option>
                    <option>Adventure</option>
                    <option>Roadster</option>
                    <option>Cafe Racer</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Starting Price (₹)</label>
                  <input type="text" className="w-full bg-slate-900 border border-slate-800 rounded-md py-2 px-3 text-sm text-slate-200 focus:border-blue-500 outline-none" placeholder="0.00" />
                </div>
              </div>
              <div className="pt-2 flex justify-end gap-2">
                <button onClick={() => setShowAddModelModal(false)} className="px-4 py-2 text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-md transition-colors">Cancel</button>
                <button onClick={() => setShowAddModelModal(false)} className="px-4 py-2 text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white rounded-md transition-colors">Save Model</button>
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
          <h1 className="text-lg font-bold text-slate-100">Bike Models Catalog</h1>
          <div className="relative">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-500" />
            <input
              type="text"
              placeholder="Search models..."
              className="bg-slate-900 border border-slate-800 rounded-md py-1 pl-8 pr-3 text-xs text-slate-300 placeholder:text-slate-500 outline-none focus:border-blue-500 transition-colors w-64"
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
           <button className="bg-slate-800 hover:bg-slate-700 text-slate-300 px-3 py-1.5 rounded border border-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors">
            <Filter className="w-3.5 h-3.5" />
            Category Filter
          </button>
          <button onClick={() => setShowAddModelModal(true)} className="bg-blue-600 hover:bg-blue-500 text-white px-3 py-1.5 rounded border border-blue-500 text-xs font-semibold flex items-center gap-1.5 transition-colors">
            <Plus className="w-3.5 h-3.5" />
            New Model
          </button>
        </div>
      </div>

      <WidgetSection title="Available Models" className="flex-1 overflow-hidden flex flex-col">
        <div className="overflow-auto flex-1 hide-scrollbar">
          <table className="w-full text-left text-xs">
            <thead className="text-slate-500 bg-[#020617] sticky top-0 uppercase tracking-widest text-[10px]">
              <tr>
                <th className="font-semibold p-3 border-b border-slate-800">Model ID</th>
                <th className="font-semibold p-3 border-b border-slate-800">Model Name</th>
                <th className="font-semibold p-3 border-b border-slate-800">Category</th>
                <th className="font-semibold p-3 border-b border-slate-800">Starting Price</th>
                <th className="font-semibold p-3 border-b border-slate-800 text-center">Variants</th>
                <th className="font-semibold p-3 border-b border-slate-800 text-center">Colours</th>
                <th className="font-semibold p-3 border-b border-slate-800">Status</th>
                <th className="font-semibold p-3 border-b border-slate-800 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="text-slate-300">
              {modelsData.map((item) => (
                <tr key={item.id} className="border-b border-slate-800/50 hover:bg-slate-800/20 transition-colors">
                  <td className="p-3 text-blue-400 font-medium">{item.id}</td>
                  <td className="p-3 font-semibold text-slate-200 flex items-center gap-2">
                    <Bike className="w-4 h-4 text-slate-500" />
                    {item.name}
                  </td>
                  <td className="p-3 text-slate-400">{item.category}</td>
                  <td className="p-3 font-medium text-slate-200">{item.startingPrice}</td>
                  <td className="p-3 text-center">{item.variants}</td>
                  <td className="p-3 text-center">{item.colors}</td>
                  <td className="p-3">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold flex items-center w-max gap-1 ${
                      item.status === 'Active' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                      'bg-slate-700 text-slate-300 border border-slate-600'
                    }`}>
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
