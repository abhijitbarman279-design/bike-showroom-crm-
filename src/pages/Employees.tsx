import { WidgetSection } from "@/components/dashboard/WidgetSection";
import { Plus, Search, Filter, MoreHorizontal, X, ArrowLeft, UserCheck, Briefcase, Mail, Phone, Calendar } from "lucide-react";
import { useState } from "react";

interface EmployeesProps {
  setCurrentPage: (page: string) => void;
}

export function Employees({ setCurrentPage }: EmployeesProps) {
  const [showAddEmployeeModal, setShowAddEmployeeModal] = useState(false);

  const employeesData = [
    { id: "EMP-001", name: "Ramesh Kumar", role: "Sales Manager", department: "Sales", phone: "+91 98765 43210", email: "ramesh.k@example.com", status: "Active" },
    { id: "EMP-002", name: "Suresh P.", role: "Senior Mechanic", department: "Service", phone: "+91 98765 43211", email: "suresh.p@example.com", status: "Active" },
    { id: "EMP-003", name: "Priya Singh", role: "CRM Executive", department: "CRM", phone: "+91 98765 43212", email: "priya.s@example.com", status: "On Leave" },
    { id: "EMP-004", name: "Amit Sharma", role: "Finance Manager", department: "Finance", phone: "+91 98765 43213", email: "amit.s@example.com", status: "Active" },
    { id: "EMP-005", name: "Raju B.", role: "Mechanic", department: "Service", phone: "+91 98765 43214", email: "raju.b@example.com", status: "Active" },
  ];

  return (
    <div className="h-full flex flex-col gap-2 relative">
      {/* Modal */}
      {showAddEmployeeModal && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-[#020617]/80 backdrop-blur-sm">
          <div className="bg-[#0f172a] border border-[#1e293b] rounded-lg w-full max-w-md p-5 shadow-2xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-slate-100">Add New Employee</h2>
              <button onClick={() => setShowAddEmployeeModal(false)} className="text-slate-400 hover:text-slate-200">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Full Name</label>
                <input type="text" className="w-full bg-slate-900 border border-slate-800 rounded-md py-2 px-3 text-sm text-slate-200 focus:border-blue-500 outline-none" placeholder="Enter employee name" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Employee ID</label>
                  <input type="text" className="w-full bg-slate-900 border border-slate-800 rounded-md py-2 px-3 text-sm text-slate-200 focus:border-blue-500 outline-none" placeholder="e.g. EMP-100" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Department</label>
                  <select className="w-full bg-slate-900 border border-slate-800 rounded-md py-2 px-3 text-sm text-slate-200 focus:border-blue-500 outline-none">
                     <option>Sales</option>
                     <option>Service</option>
                     <option>CRM</option>
                     <option>Finance</option>
                     <option>Management</option>
                   </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Role / Title</label>
                  <input type="text" className="w-full bg-slate-900 border border-slate-800 rounded-md py-2 px-3 text-sm text-slate-200 focus:border-blue-500 outline-none" placeholder="e.g. Mechanic" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Joining Date</label>
                  <input type="date" className="w-full bg-slate-900 border border-slate-800 rounded-md py-2 px-3 text-sm text-slate-200 focus:border-blue-500 outline-none" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Contact Number</label>
                <input type="tel" className="w-full bg-slate-900 border border-slate-800 rounded-md py-2 px-3 text-sm text-slate-200 focus:border-blue-500 outline-none" placeholder="Phone number" />
              </div>
              <div className="pt-2 flex justify-end gap-2">
                <button onClick={() => setShowAddEmployeeModal(false)} className="px-4 py-2 text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-md transition-colors">Cancel</button>
                <button onClick={() => setShowAddEmployeeModal(false)} className="px-4 py-2 text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white rounded-md transition-colors">Add Employee</button>
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
          <h1 className="text-lg font-bold text-slate-100">Employee Management</h1>
          <div className="relative">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-500" />
            <input
              type="text"
              placeholder="Search employees..."
              className="bg-slate-900 border border-slate-800 rounded-md py-1 pl-8 pr-3 text-xs text-slate-300 placeholder:text-slate-500 outline-none focus:border-blue-500 transition-colors w-64"
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
           <button className="bg-slate-800 hover:bg-slate-700 text-slate-300 px-3 py-1.5 rounded border border-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors">
            <Filter className="w-3.5 h-3.5" />
            Filter
          </button>
          <button onClick={() => setShowAddEmployeeModal(true)} className="bg-blue-600 hover:bg-blue-500 text-white px-3 py-1.5 rounded border border-blue-500 text-xs font-semibold flex items-center gap-1.5 transition-colors">
            <Plus className="w-3.5 h-3.5" />
            Add Employee
          </button>
        </div>
      </div>

      <WidgetSection title="HR Directory" className="flex-1 overflow-hidden flex flex-col">
        <div className="overflow-auto flex-1 hide-scrollbar">
          <table className="w-full text-left text-xs">
            <thead className="text-slate-500 bg-[#020617] sticky top-0 uppercase tracking-widest text-[10px]">
              <tr>
                <th className="font-semibold p-3 border-b border-slate-800">Employee ID</th>
                <th className="font-semibold p-3 border-b border-slate-800">Name & Role</th>
                <th className="font-semibold p-3 border-b border-slate-800">Department</th>
                <th className="font-semibold p-3 border-b border-slate-800">Contact</th>
                <th className="font-semibold p-3 border-b border-slate-800">Status</th>
                <th className="font-semibold p-3 border-b border-slate-800 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="text-slate-300">
              {employeesData.map((emp) => (
                <tr key={emp.id} className="border-b border-slate-800/50 hover:bg-slate-800/20 transition-colors">
                  <td className="p-3 text-blue-400 font-medium flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-slate-500" />
                    {emp.id}
                  </td>
                  <td className="p-3">
                    <div className="font-semibold text-slate-200">{emp.name}</div>
                    <div className="text-[10px] text-slate-500 flex items-center gap-1 mt-0.5">
                      <Briefcase className="w-3 h-3" />
                      {emp.role}
                    </div>
                  </td>
                  <td className="p-3 text-slate-400">{emp.department}</td>
                  <td className="p-3">
                    <div className="flex flex-col gap-1">
                      <span className="flex items-center gap-1 text-[10px] text-slate-400"><Phone className="w-3 h-3" /> {emp.phone}</span>
                      <span className="flex items-center gap-1 text-[10px] text-slate-400"><Mail className="w-3 h-3" /> {emp.email}</span>
                    </div>
                  </td>
                  <td className="p-3">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold flex items-center w-max gap-1 ${
                      emp.status === 'Active' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                      emp.status === 'On Leave' ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' :
                      'bg-slate-500/20 text-slate-400 border border-slate-500/30'
                    }`}>
                      {emp.status === 'Active' && <UserCheck className="w-3 h-3" />}
                      {emp.status === 'On Leave' && <Calendar className="w-3 h-3" />}
                      {emp.status}
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
