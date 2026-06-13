import { WidgetSection } from "@/components/dashboard/WidgetSection";
import { Search, Filter, MoreHorizontal, ArrowLeft, Network, MapPin, Users, DollarSign, Activity } from "lucide-react";

interface MultiBranchProps {
  setCurrentPage: (page: string) => void;
}

export function MultiBranch({ setCurrentPage }: MultiBranchProps) {
  const branchData = [
    { id: "BR-001", name: "Main Showroom", location: "Downtown", head: "Ramesh, Manager", employees: 25, revenue: "₹ 45L", status: "Active" },
    { id: "BR-002", name: "South Branch", location: "South District", head: "Suresh P.", employees: 12, revenue: "₹ 32L", status: "Active" },
    { id: "BR-003", name: "North Branch", location: "North District", head: "Amit Sharma", employees: 15, revenue: "₹ 28L", status: "Active" },
    { id: "BR-004", name: "East Service Center", location: "East Zone", head: "Raju B.", employees: 8, revenue: "₹ 15L", status: "Active" },
  ];

  return (
    <div className="h-full flex flex-col gap-2 relative">
      <div className="flex justify-between items-center bg-[#0f172a] border border-[#1e293b] p-3 rounded-lg shrink-0">
        <div className="flex items-center gap-4">
          <button onClick={() => setCurrentPage("Dashboard")} className="p-1 rounded-md text-slate-400 hover:text-slate-100 hover:bg-slate-800 transition-colors" title="Back to Dashboard">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-lg font-bold text-slate-100">Multi Branch Management</h1>
          <div className="relative">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-500" />
            <input
              type="text"
              placeholder="Search branches..."
              className="bg-slate-900 border border-slate-800 rounded-md py-1 pl-8 pr-3 text-xs text-slate-300 placeholder:text-slate-500 outline-none focus:border-blue-500 transition-colors w-64"
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
           <button className="bg-slate-800 hover:bg-slate-700 text-slate-300 px-3 py-1.5 rounded border border-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors">
            <Filter className="w-3.5 h-3.5" />
            Filter
          </button>
        </div>
      </div>

      <WidgetSection title="Branch Performance" className="flex-1 overflow-hidden flex flex-col">
        <div className="overflow-auto flex-1 hide-scrollbar">
          <table className="w-full text-left text-xs">
            <thead className="text-slate-500 bg-[#020617] sticky top-0 uppercase tracking-widest text-[10px]">
              <tr>
                <th className="font-semibold p-3 border-b border-slate-800">Branch Name & ID</th>
                <th className="font-semibold p-3 border-b border-slate-800">Location</th>
                <th className="font-semibold p-3 border-b border-slate-800">Branch Head</th>
                <th className="font-semibold p-3 border-b border-slate-800">Employees</th>
                <th className="font-semibold p-3 border-b border-slate-800">Total Revenue</th>
                <th className="font-semibold p-3 border-b border-slate-800">Status</th>
                <th className="font-semibold p-3 border-b border-slate-800 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="text-slate-300">
              {branchData.map((branch, idx) => (
                <tr key={idx} className="border-b border-slate-800/50 hover:bg-slate-800/20 transition-colors">
                  <td className="p-3 text-blue-400 font-medium">
                     <div className="font-semibold text-slate-200">{branch.name}</div>
                    <div className="text-[10px] text-slate-500 flex items-center gap-1 mt-0.5">
                      <Network className="w-3 h-3" />
                      {branch.id}
                    </div>
                  </td>
                  <td className="p-3 text-slate-400">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {branch.location}
                    </span>
                  </td>
                  <td className="p-3 font-medium text-slate-300">{branch.head}</td>
                  <td className="p-3 text-slate-400">
                    <span className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      {branch.employees}
                    </span>
                  </td>
                  <td className="p-3 font-bold text-green-400">
                    <span className="flex items-center gap-1">
                      <DollarSign className="w-3 h-3" />
                      {branch.revenue}
                    </span>
                  </td>
                  <td className="p-3">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold flex items-center w-max gap-1 ${
                      branch.status === 'Active' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                      'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                    }`}>
                      {branch.status === 'Active' && <Activity className="w-3 h-3" />}
                      {branch.status}
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
