import { WidgetSection } from "@/components/dashboard/WidgetSection";
import { Plus, Search, Filter, MoreHorizontal, X, ArrowLeft, CalendarCheck, CheckCircle, Clock, AlertTriangle, User } from "lucide-react";
import { useState } from "react";

interface AttendanceProps {
  setCurrentPage: (page: string) => void;
}

export function Attendance({ setCurrentPage }: AttendanceProps) {
  const [showMarkAttendanceModal, setShowMarkAttendanceModal] = useState(false);

  const attendanceData = [
    { id: "EMP-001", name: "Ramesh Kumar", department: "Sales", punchIn: "09:00 AM", punchOut: "06:00 PM", status: "Present", date: "Today" },
    { id: "EMP-002", name: "Suresh P.", department: "Service", punchIn: "08:45 AM", punchOut: "05:50 PM", status: "Present", date: "Today" },
    { id: "EMP-003", name: "Priya Singh", department: "CRM", punchIn: "-", punchOut: "-", status: "Absent", date: "Today" },
    { id: "EMP-004", name: "Amit Sharma", department: "Finance", punchIn: "09:15 AM", punchOut: "06:30 PM", status: "Half Day", date: "Today" },
    { id: "EMP-005", name: "Raju B.", department: "Service", punchIn: "09:05 AM", punchOut: "06:10 PM", status: "Present", date: "Today" },
  ];

  return (
    <div className="h-full flex flex-col gap-2 relative">
      {/* Modal */}
      {showMarkAttendanceModal && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-[#020617]/80 backdrop-blur-sm">
          <div className="bg-[#0f172a] border border-[#1e293b] rounded-lg w-full max-w-md p-5 shadow-2xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-slate-100">Mark Attendance</h2>
              <button onClick={() => setShowMarkAttendanceModal(false)} className="text-slate-400 hover:text-slate-200">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Employee ID / Name</label>
                <input type="text" className="w-full bg-slate-900 border border-slate-800 rounded-md py-2 px-3 text-sm text-slate-200 focus:border-blue-500 outline-none" placeholder="Search employee" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                   <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Status</label>
                   <select className="w-full bg-slate-900 border border-slate-800 rounded-md py-2 px-3 text-sm text-slate-200 focus:border-blue-500 outline-none">
                     <option>Present</option>
                     <option>Absent</option>
                     <option>Half Day</option>
                     <option>On Leave</option>
                   </select>
                </div>
                 <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Date</label>
                  <input type="date" className="w-full bg-slate-900 border border-slate-800 rounded-md py-2 px-3 text-sm text-slate-200 focus:border-blue-500 outline-none" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Punch In Time</label>
                  <input type="time" className="w-full bg-slate-900 border border-slate-800 rounded-md py-2 px-3 text-sm text-slate-200 focus:border-blue-500 outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Punch Out Time</label>
                  <input type="time" className="w-full bg-slate-900 border border-slate-800 rounded-md py-2 px-3 text-sm text-slate-200 focus:border-blue-500 outline-none" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Notes (Optional)</label>
                <textarea className="w-full bg-slate-900 border border-slate-800 rounded-md py-2 px-3 text-sm text-slate-200 focus:border-blue-500 outline-none h-16 resize-none" placeholder="Add remarks..."></textarea>
              </div>
              <div className="pt-2 flex justify-end gap-2">
                <button onClick={() => setShowMarkAttendanceModal(false)} className="px-4 py-2 text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-md transition-colors">Cancel</button>
                <button onClick={() => setShowMarkAttendanceModal(false)} className="px-4 py-2 text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white rounded-md transition-colors">Save Attendance</button>
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
          <h1 className="text-lg font-bold text-slate-100">Attendance Log</h1>
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
            Filter Date
          </button>
          <button onClick={() => setShowMarkAttendanceModal(true)} className="bg-blue-600 hover:bg-blue-500 text-white px-3 py-1.5 rounded border border-blue-500 text-xs font-semibold flex items-center gap-1.5 transition-colors">
            <Plus className="w-3.5 h-3.5" />
            Mark Attendance
          </button>
        </div>
      </div>

      <WidgetSection title="Daily Attendance Records" className="flex-1 overflow-hidden flex flex-col">
        <div className="overflow-auto flex-1 hide-scrollbar">
          <table className="w-full text-left text-xs">
            <thead className="text-slate-500 bg-[#020617] sticky top-0 uppercase tracking-widest text-[10px]">
              <tr>
                <th className="font-semibold p-3 border-b border-slate-800">Date</th>
                <th className="font-semibold p-3 border-b border-slate-800">Employee ID</th>
                <th className="font-semibold p-3 border-b border-slate-800">Name & Dept</th>
                <th className="font-semibold p-3 border-b border-slate-800">Punch In</th>
                <th className="font-semibold p-3 border-b border-slate-800">Punch Out</th>
                <th className="font-semibold p-3 border-b border-slate-800">Status</th>
                <th className="font-semibold p-3 border-b border-slate-800 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="text-slate-300">
              {attendanceData.map((record, index) => (
                <tr key={index} className="border-b border-slate-800/50 hover:bg-slate-800/20 transition-colors">
                  <td className="p-3 text-slate-400 font-medium">{record.date}</td>
                  <td className="p-3 text-slate-400 font-medium">{record.id}</td>
                  <td className="p-3">
                    <div className="font-semibold text-slate-200">{record.name}</div>
                    <div className="text-[10px] text-slate-500">{record.department}</div>
                  </td>
                  <td className="p-3 font-medium text-slate-300">{record.punchIn}</td>
                  <td className="p-3 font-medium text-slate-300">{record.punchOut}</td>
                  <td className="p-3">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold flex items-center w-max gap-1 ${
                      record.status === 'Present' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                      record.status === 'Absent' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
                      record.status === 'Half Day' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                      'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                    }`}>
                      {record.status === 'Present' && <CheckCircle className="w-3 h-3" />}
                      {record.status === 'Absent' && <AlertTriangle className="w-3 h-3" />}
                      {(record.status === 'Half Day' || record.status === 'On Leave') && <Clock className="w-3 h-3" />}
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
