import { WidgetSection } from "@/components/dashboard/WidgetSection";
import { Plus, Search, Filter, MoreHorizontal, X, ArrowLeft, FileSpreadsheet, CheckCircle, Clock } from "lucide-react";
import { useState } from "react";

interface PayrollProps {
  setCurrentPage: (page: string) => void;
}

export function Payroll({ setCurrentPage }: PayrollProps) {
  const [showProcessPayrollModal, setShowProcessPayrollModal] = useState(false);

  const payrollData = [
    { id: "PAY-001", empId: "EMP-001", name: "Ramesh Kumar", month: "May 2026", basic: "₹ 45,000", total: "₹ 42,500", status: "Paid" },
    { id: "PAY-002", empId: "EMP-002", name: "Suresh P.", month: "May 2026", basic: "₹ 30,000", total: "₹ 31,500", status: "Paid" },
    { id: "PAY-003", empId: "EMP-003", name: "Priya Singh", month: "May 2026", basic: "₹ 25,000", total: "₹ 25,000", status: "Pending" },
    { id: "PAY-004", empId: "EMP-004", name: "Amit Sharma", month: "May 2026", basic: "₹ 40,000", total: "₹ 38,200", status: "Pending" },
    { id: "PAY-005", empId: "EMP-005", name: "Raju B.", month: "May 2026", basic: "₹ 20,000", total: "₹ 22,000", status: "Paid" },
  ];

  return (
    <div className="h-full flex flex-col gap-2 relative">
      {/* Modal */}
      {showProcessPayrollModal && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-[#020617]/80 backdrop-blur-sm">
          <div className="bg-[#0f172a] border border-[#1e293b] rounded-lg w-full max-w-md p-5 shadow-2xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-slate-100">Process Payroll</h2>
              <button onClick={() => setShowProcessPayrollModal(false)} className="text-slate-400 hover:text-slate-200">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Select Month</label>
                  <select className="w-full bg-slate-900 border border-slate-800 rounded-md py-2 px-3 text-sm text-slate-200 focus:border-blue-500 outline-none">
                     <option>January 2026</option>
                     <option>February 2026</option>
                     <option>March 2026</option>
                     <option>April 2026</option>
                     <option>May 2026</option>
                     <option>June 2026</option>
                   </select>
                </div>
                <div>
                   <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Department</label>
                   <select className="w-full bg-slate-900 border border-slate-800 rounded-md py-2 px-3 text-sm text-slate-200 focus:border-blue-500 outline-none">
                     <option>All Departments</option>
                     <option>Sales</option>
                     <option>Service</option>
                     <option>CRM</option>
                     <option>Finance</option>
                   </select>
                </div>
              </div>
              <p className="text-xs text-slate-400">This will calculate the payroll based on attendance and leaves for the selected month.</p>
              <div className="pt-2 flex justify-end gap-2">
                <button onClick={() => setShowProcessPayrollModal(false)} className="px-4 py-2 text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-md transition-colors">Cancel</button>
                <button onClick={() => setShowProcessPayrollModal(false)} className="px-4 py-2 text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white rounded-md transition-colors">Process Payroll</button>
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
          <h1 className="text-lg font-bold text-slate-100">Payroll Processing</h1>
          <div className="relative">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-500" />
            <input
              type="text"
              placeholder="Search employee..."
              className="bg-slate-900 border border-slate-800 rounded-md py-1 pl-8 pr-3 text-xs text-slate-300 placeholder:text-slate-500 outline-none focus:border-blue-500 transition-colors w-64"
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
           <button className="bg-slate-800 hover:bg-slate-700 text-slate-300 px-3 py-1.5 rounded border border-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors">
            <Filter className="w-3.5 h-3.5" />
            Filter Month
          </button>
          <button onClick={() => setShowProcessPayrollModal(true)} className="bg-blue-600 hover:bg-blue-500 text-white px-3 py-1.5 rounded border border-blue-500 text-xs font-semibold flex items-center gap-1.5 transition-colors">
            <Plus className="w-3.5 h-3.5" />
            Run Payroll
          </button>
        </div>
      </div>

      <WidgetSection title="Payroll Records" className="flex-1 overflow-hidden flex flex-col">
        <div className="overflow-auto flex-1 hide-scrollbar">
          <table className="w-full text-left text-xs">
            <thead className="text-slate-500 bg-[#020617] sticky top-0 uppercase tracking-widest text-[10px]">
              <tr>
                <th className="font-semibold p-3 border-b border-slate-800">Payslip ID</th>
                <th className="font-semibold p-3 border-b border-slate-800">Employee Info</th>
                <th className="font-semibold p-3 border-b border-slate-800">Month</th>
                <th className="font-semibold p-3 border-b border-slate-800">Basic Salary</th>
                <th className="font-semibold p-3 border-b border-slate-800">Net Payable</th>
                <th className="font-semibold p-3 border-b border-slate-800">Payment Status</th>
                <th className="font-semibold p-3 border-b border-slate-800 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="text-slate-300">
              {payrollData.map((record, index) => (
                <tr key={index} className="border-b border-slate-800/50 hover:bg-slate-800/20 transition-colors">
                  <td className="p-3 text-blue-400 font-medium flex items-center gap-2">
                    <FileSpreadsheet className="w-4 h-4 text-slate-500" />
                    {record.id}
                  </td>
                  <td className="p-3">
                    <div className="font-semibold text-slate-200">{record.name}</div>
                    <div className="text-[10px] text-slate-500">{record.empId}</div>
                  </td>
                  <td className="p-3 font-medium text-slate-400">{record.month}</td>
                  <td className="p-3 font-medium text-slate-300">{record.basic}</td>
                  <td className="p-3 font-medium text-slate-200">{record.total}</td>
                  <td className="p-3">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold flex items-center w-max gap-1 ${
                      record.status === 'Paid' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                      'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                    }`}>
                      {record.status === 'Paid' && <CheckCircle className="w-3 h-3" />}
                      {record.status === 'Pending' && <Clock className="w-3 h-3" />}
                      {record.status}
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
