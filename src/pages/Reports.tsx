import { WidgetSection } from "@/components/dashboard/WidgetSection";
import { ArrowLeft, FileText, PieChart, BarChart2, Download, Filter, Search } from "lucide-react";

interface ReportsProps {
  setCurrentPage: (page: string) => void;
}

export function Reports({ setCurrentPage }: ReportsProps) {
  const reportsList = [
    { id: "REP-01", name: "Monthly Sales Report", category: "Sales", date: "Jun 01, 2026", type: "PDF" },
    { id: "REP-02", name: "Inventory Valuation", category: "Inventory", date: "May 31, 2026", type: "Excel" },
    { id: "REP-03", name: "Service Revenue Analysis", category: "Service", date: "May 31, 2026", type: "PDF" },
    { id: "REP-04", name: "Employee Performance", category: "HR", date: "May 28, 2026", type: "PDF" },
    { id: "REP-05", name: "Lead Conversion Rates", category: "Marketing", date: "May 25, 2026", type: "Excel" },
  ];

  return (
    <div className="h-full flex flex-col gap-2 relative">
      <div className="flex justify-between items-center bg-[#0f172a] border border-[#1e293b] p-3 rounded-lg shrink-0">
        <div className="flex items-center gap-4">
          <button onClick={() => setCurrentPage("Dashboard")} className="p-1 rounded-md text-slate-400 hover:text-slate-100 hover:bg-slate-800 transition-colors" title="Back to Dashboard">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-lg font-bold text-slate-100">Analytics & Reports</h1>
          <div className="relative">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-500" />
            <input
              type="text"
              placeholder="Search reports..."
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

      <div className="grid grid-cols-3 gap-2 shrink-0">
         <WidgetSection title="Sales Overview" className="h-48 flex flex-col items-center justify-center">
            <PieChart className="w-12 h-12 text-slate-600 mb-2" />
            <p className="text-slate-400 text-sm">Visual reports generated here</p>
         </WidgetSection>
         <WidgetSection title="Revenue Trends" className="h-48 flex flex-col items-center justify-center">
             <BarChart2 className="w-12 h-12 text-slate-600 mb-2" />
             <p className="text-slate-400 text-sm">Monthly growth metrics</p>
         </WidgetSection>
         <WidgetSection title="Inventory Stats" className="h-48 flex flex-col items-center justify-center">
             <PieChart className="w-12 h-12 text-slate-600 mb-2" />
             <p className="text-slate-400 text-sm">Stock distribution</p>
         </WidgetSection>
      </div>

      <WidgetSection title="Saved & Automated Reports" className="flex-1 overflow-hidden flex flex-col">
        <div className="overflow-auto flex-1 hide-scrollbar">
          <table className="w-full text-left text-xs">
            <thead className="text-slate-500 bg-[#020617] sticky top-0 uppercase tracking-widest text-[10px]">
              <tr>
                <th className="font-semibold p-3 border-b border-slate-800">Report ID</th>
                <th className="font-semibold p-3 border-b border-slate-800">Report Name</th>
                <th className="font-semibold p-3 border-b border-slate-800">Category</th>
                <th className="font-semibold p-3 border-b border-slate-800">Generated Date</th>
                <th className="font-semibold p-3 border-b border-slate-800">Format</th>
                <th className="font-semibold p-3 border-b border-slate-800 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="text-slate-300">
              {reportsList.map((report) => (
                <tr key={report.id} className="border-b border-slate-800/50 hover:bg-slate-800/20 transition-colors">
                  <td className="p-3 text-slate-400 font-medium">
                     {report.id}
                  </td>
                  <td className="p-3 font-semibold text-slate-200">
                    <span className="flex items-center gap-2">
                       <FileText className="w-4 h-4 text-blue-400" />
                       {report.name}
                    </span>
                  </td>
                  <td className="p-3 text-slate-400">{report.category}</td>
                  <td className="p-3 text-slate-400">{report.date}</td>
                  <td className="p-3">
                     <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${report.type === 'PDF' ? 'bg-red-500/20 text-red-400' : 'bg-green-500/20 text-green-400'}`}>
                        {report.type}
                     </span>
                  </td>
                  <td className="p-3 text-right">
                    <button className="text-blue-400 hover:text-blue-300 transition-colors flex items-center justify-end gap-1 w-full text-xs font-semibold">
                      <Download className="w-3.5 h-3.5" />
                      Download
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
