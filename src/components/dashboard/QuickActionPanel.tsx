import { Plus, Users, Bike, FileText, Send, Wrench, Package, DollarSign, MessageSquare, Shield, Box, ShoppingBag, CalendarCheck, FileSpreadsheet, Percent, Network } from "lucide-react";

interface QuickActionPanelProps {
  setCurrentPage?: (page: string) => void;
}

export function QuickActionPanel({ setCurrentPage }: QuickActionPanelProps) {
  const actions = [
    { label: "New Lead", icon: Plus, className: "bg-blue-600 hover:bg-blue-500 text-white border-blue-500", onClick: () => setCurrentPage && setCurrentPage("Leads") },
    { label: "Add Customer", icon: Users, className: "bg-slate-800 hover:bg-slate-700 border-slate-700", onClick: () => setCurrentPage && setCurrentPage("Customers") },
    { label: "Test Ride", icon: Bike, className: "bg-slate-800 hover:bg-slate-700 border-slate-700", onClick: () => setCurrentPage && setCurrentPage("Test Ride") },
    { label: "New Booking", icon: FileText, className: "bg-slate-800 hover:bg-slate-700 border-slate-700", onClick: () => setCurrentPage && setCurrentPage("Booking") },
    { label: "Process Finance", icon: DollarSign, className: "bg-slate-800 hover:bg-slate-700 border-slate-700", onClick: () => setCurrentPage && setCurrentPage("Finance") },
    { label: "Issue Insurance", icon: Shield, className: "bg-slate-800 hover:bg-slate-700 border-slate-700", onClick: () => setCurrentPage && setCurrentPage("Insurance") },
    { label: "Book Service", icon: Wrench, className: "bg-slate-800 hover:bg-slate-700 border-slate-700", onClick: () => setCurrentPage && setCurrentPage("Service Center") },
    { label: "Create Job Card", icon: Wrench, className: "bg-slate-800 hover:bg-slate-700 border-slate-700", onClick: () => setCurrentPage && setCurrentPage("Job Cards") },
    { label: "Spare Parts", icon: Box, className: "bg-slate-800 hover:bg-slate-700 border-slate-700", onClick: () => setCurrentPage && setCurrentPage("Spare Parts") },
    { label: "Check Inventory", icon: Package, className: "bg-slate-800 hover:bg-slate-700 border-slate-700", onClick: () => setCurrentPage && setCurrentPage("Inventory") },
    { label: "Sell Accessories", icon: ShoppingBag, className: "bg-slate-800 hover:bg-slate-700 border-slate-700", onClick: () => setCurrentPage && setCurrentPage("Accessories") },
    { label: "Mark Attendance", icon: CalendarCheck, className: "bg-slate-800 hover:bg-slate-700 border-slate-700", onClick: () => setCurrentPage && setCurrentPage("Attendance") },
    { label: "Run Payroll", icon: FileSpreadsheet, className: "bg-slate-800 hover:bg-slate-700 border-slate-700", onClick: () => setCurrentPage && setCurrentPage("Payroll") },
    { label: "Collect Payment", icon: DollarSign, className: "bg-slate-800 hover:bg-slate-700 border-slate-700", onClick: () => setCurrentPage && setCurrentPage("Accounts") },
    { label: "File GST", icon: Percent, className: "bg-slate-800 hover:bg-slate-700 border-slate-700", onClick: () => setCurrentPage && setCurrentPage("GST") },
    { label: "Manage Branches", icon: Network, className: "bg-slate-800 hover:bg-slate-700 border-slate-700", onClick: () => setCurrentPage && setCurrentPage("Multi Branch") },
    { label: "Analytics & Reports", icon: FileText, className: "bg-slate-800 hover:bg-slate-700 border-slate-700", onClick: () => setCurrentPage && setCurrentPage("Reports") },
    { label: "WhatsApp Blast", icon: MessageSquare, className: "bg-slate-800 hover:bg-slate-700 border-slate-700", onClick: () => setCurrentPage && setCurrentPage("Marketing") },
    { label: "System Settings", icon: Wrench, className: "bg-slate-800 hover:bg-slate-700 border-slate-700", onClick: () => setCurrentPage && setCurrentPage("Settings") },
  ];

  return (
    <div className="flex gap-2 overflow-x-auto snap-x hide-scrollbar mb-2 px-1">
      <span className="text-[10px] font-bold text-slate-500 uppercase flex items-center mr-2 shrink-0 tracking-widest">Quick Commands:</span>
      {actions.map((action, i) => (
        <button key={i} onClick={action.onClick} className={`px-3 py-1.5 rounded border text-[10px] font-bold flex items-center gap-1.5 whitespace-nowrap shrink-0 transition-colors ${action.className}`}>
          <action.icon className="w-3.5 h-3.5" />
          {action.label}
        </button>
      ))}
    </div>
  );
}
