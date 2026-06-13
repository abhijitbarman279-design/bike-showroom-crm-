import { cn } from "@/lib/utils";
import {
  LayoutDashboard, Users, UsersRound, CalendarPlus,
  Package, Bike, FileText, Send, DollarSign, Shield,
  Wrench, ClipboardList, Settings, Box, ShoppingBag,
  UserCheck, CalendarCheck, FileSpreadsheet, Percent,
  MessageSquare, Star, Network, BrainCircuit, Bell
} from "lucide-react";

const navItems = [
  { title: "Dashboard", icon: LayoutDashboard, href: "#" },
  { title: "Leads", icon: Users, href: "#" },
  { title: "Customers", icon: UsersRound, href: "#" },
  { title: "Test Ride", icon: CalendarPlus, href: "#" },
  { title: "Inventory", icon: Package, href: "#" },
  { title: "Bike Models", icon: Bike, href: "#" },
  { title: "Booking", icon: FileText, href: "#" },
  { title: "Delivery", icon: Send, href: "#" },
  { title: "Finance", icon: DollarSign, href: "#" },
  { title: "Insurance", icon: Shield, href: "#" },
  { title: "Service Center", icon: Wrench, href: "#" },
  { title: "Job Cards", icon: ClipboardList, href: "#" },
  { title: "Spare Parts", icon: Box, href: "#" },
  { title: "Accessories", icon: ShoppingBag, href: "#" },
  { title: "Employees", icon: UserCheck, href: "#" },
  { title: "Attendance", icon: CalendarCheck, href: "#" },
  { title: "Payroll", icon: FileSpreadsheet, href: "#" },
  { title: "Accounts", icon: DollarSign, href: "#" },
  { title: "GST", icon: Percent, href: "#" },
  { title: "Marketing", icon: MessageSquare, href: "#" },
  { title: "Loyalty Program", icon: Star, href: "#" },
  { title: "Multi Branch", icon: Network, href: "#" },
  { title: "Reports", icon: FileText, href: "#" },
  { title: "AI Insights", icon: BrainCircuit, href: "#" },
  { title: "Settings", icon: Settings, href: "#" },
];

export function Sidebar({ currentPage, setCurrentPage }: { currentPage: string, setCurrentPage: (page: string) => void }) {
  return (
    <div className="flex h-full w-[220px] flex-col bg-[#020617] overflow-y-auto hide-scrollbar p-3">
      <div className="flex items-center gap-2 mb-6 px-2 shrink-0 pt-2">
        <div className="w-8 h-8 rounded shrink-0 bg-blue-600 flex items-center justify-center font-bold text-white shadow-sm">
          <Bike className="h-5 w-5" />
        </div>
        <span className="font-bold text-sm tracking-tight text-slate-100 truncate">MotoCRM Pro</span>
      </div>
      <div className="flex-1">
        <nav className="flex flex-col gap-1 space-y-0.5">
          <div className="text-[10px] text-slate-500 font-bold px-2 py-1 uppercase tracking-widest mt-2 mb-1">Core & Sales</div>
          {navItems.slice(0, 8).map((item, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(item.title)}
              className={cn(
                "flex w-full items-center gap-3 px-2 py-1.5 rounded-md text-xs font-medium transition-colors text-left",
                currentPage === item.title 
                  ? "bg-blue-600/10 text-blue-400" 
                  : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"
              )}
            >
              <item.icon className="h-3.5 w-3.5 shrink-0" />
              <span className="truncate">{item.title}</span>
            </button>
          ))}
          
          <div className="text-[10px] text-slate-500 font-bold px-2 py-1 uppercase tracking-widest mt-4 mb-1">Operations</div>
          {navItems.slice(8, 14).map((item, index) => (
            <button
              key={index + 8}
              onClick={() => setCurrentPage(item.title)}
              className={cn(
                "flex w-full items-center gap-3 px-2 py-1.5 rounded-md text-xs font-medium transition-colors text-left",
                currentPage === item.title 
                  ? "bg-blue-600/10 text-blue-400" 
                  : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"
              )}
            >
              <item.icon className="h-3.5 w-3.5 shrink-0" />
              <span className="truncate">{item.title}</span>
            </button>
          ))}

          <div className="text-[10px] text-slate-500 font-bold px-2 py-1 uppercase tracking-widest mt-4 mb-1">Management</div>
          {navItems.slice(14, 21).map((item, index) => (
            <button
              key={index + 14}
              onClick={() => setCurrentPage(item.title)}
              className={cn(
                "flex w-full items-center gap-3 px-2 py-1.5 rounded-md text-xs font-medium transition-colors text-left",
                currentPage === item.title 
                  ? "bg-blue-600/10 text-blue-400" 
                  : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"
              )}
            >
              <item.icon className="h-3.5 w-3.5 shrink-0" />
              <span className="truncate">{item.title}</span>
            </button>
          ))}

          <div className="text-[10px] text-slate-500 font-bold px-2 py-1 uppercase tracking-widest mt-4 mb-1">System Insights</div>
          {navItems.slice(21).map((item, index) => (
            <button
              key={index + 21}
              onClick={() => setCurrentPage(item.title)}
              className={cn(
                "flex w-full items-center gap-3 px-2 py-1.5 rounded-md text-xs font-medium transition-colors text-left",
                currentPage === item.title 
                  ? "bg-blue-600/10 text-blue-400" 
                  : item.title === "AI Insights" ? "text-purple-400 bg-purple-900/10 font-bold" : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"
              )}
            >
              <item.icon className="h-3.5 w-3.5 shrink-0" />
              <span className="truncate">{item.title}</span>
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}
