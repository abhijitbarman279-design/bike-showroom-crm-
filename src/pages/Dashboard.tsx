import { QuickActionPanel } from "@/components/dashboard/QuickActionPanel";
import { LeadPipeline } from "@/components/dashboard/LeadPipeline";
import { StatGrid } from "@/components/dashboard/StatGrid";
import { ChartsSection } from "@/components/dashboard/ChartsSection";
import { AlertsAndFeeds } from "@/components/dashboard/AlertsAndFeeds";
import { WidgetSection } from "@/components/dashboard/WidgetSection";
import {
  salesOverviewStats, customerOverviewStats, inventoryStats, testRideStats, bookingStats, financeStats, insuranceStats, serviceStats, mechanicStats, partsStats, accessoriesStats, hrStats, accountsStats, gstStats, marketingStats, loyaltyStats, branchStats, aiStats
} from "@/components/dashboard/dashboardData";

import { Users, UsersRound, CalendarPlus, Package, FileText, DollarSign, Shield, Wrench, ClipboardList, Box, ShoppingBag, UserCheck, CalendarCheck, FileSpreadsheet, Percent, MessageSquare, Star, Network, BrainCircuit, ArrowRight } from "lucide-react";

interface DashboardProps {
  setCurrentPage?: (page: string) => void;
}

export function Dashboard({ setCurrentPage }: DashboardProps) {
  return (
    <div className="h-full flex flex-col gap-2">
      <div className="flex-1 overflow-y-auto hide-scrollbar pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
          {/* Top action row inside main layout or hidden depending on space. For this theme we keep QuickAction as a dense row */}
          <div className="col-span-full">
            <QuickActionPanel setCurrentPage={setCurrentPage} />
          </div>

          {/* Core Sales Pipeline - Spans Top */}
          <LeadPipeline />
          
          {/* Row 1 Metrics */}
          <StatGrid title="Sales Overview" icon={<Users className="w-3.5 h-3.5"/>} stats={salesOverviewStats} className="col-span-1 xl:col-span-2" />
          <StatGrid title="Customer Overview" icon={<UsersRound className="w-3.5 h-3.5"/>} stats={customerOverviewStats} className="col-span-1" />
          <StatGrid title="Inventory Overview" icon={<Package className="w-3.5 h-3.5"/>} stats={inventoryStats} className="col-span-1" />

          {/* Row 2 Charts & Quick Metrics */}
          <ChartsSection />
          <StatGrid title="Test Ride Dashboard" icon={<CalendarPlus className="w-3.5 h-3.5"/>} stats={testRideStats} className="col-span-1" />

          {/* Row 3 Flow (Booking -> Finance -> Insurance) */}
           <StatGrid title="Booking Dashboard" icon={<FileText className="w-3.5 h-3.5"/>} stats={bookingStats} className="col-span-1" />
          <StatGrid title="Finance & Loan" icon={<DollarSign className="w-3.5 h-3.5"/>} stats={financeStats} className="col-span-1" />
          <StatGrid title="Insurance" icon={<Shield className="w-3.5 h-3.5"/>} stats={insuranceStats} className="col-span-1" />
          
          {/* Row 4 Service & Parts */}
          <StatGrid title="Service Center" icon={<Wrench className="w-3.5 h-3.5"/>} stats={serviceStats} className="col-span-1" />
          <StatGrid title="Mechanic Performance" icon={<ClipboardList className="w-3.5 h-3.5"/>} stats={mechanicStats} className="col-span-1" />
           <StatGrid title="Spare Parts" icon={<Box className="w-3.5 h-3.5"/>} stats={partsStats} className="col-span-1" />
          <StatGrid title="Accessories Sales" icon={<ShoppingBag className="w-3.5 h-3.5"/>} stats={accessoriesStats} className="col-span-1" />

          {/* Row 5 HR, Accounts, Marketing */}
          <StatGrid title="HR & Payroll" icon={<UserCheck className="w-3.5 h-3.5"/>} stats={hrStats} className="col-span-1" />
          <StatGrid title="Accounting Dashboard" icon={<FileSpreadsheet className="w-3.5 h-3.5"/>} stats={accountsStats} className="col-span-1" />
          <StatGrid title="GST Dashboard" icon={<Percent className="w-3.5 h-3.5"/>} stats={gstStats} className="col-span-1" />
          <StatGrid title="Marketing Insights" icon={<MessageSquare className="w-3.5 h-3.5"/>} stats={marketingStats} className="col-span-1" />

          {/* Meta metrics */}
          <StatGrid title="Customer Loyalty" icon={<Star className="w-3.5 h-3.5"/>} stats={loyaltyStats} className="col-span-1" />
          <StatGrid title="Multi Branch" icon={<Network className="w-3.5 h-3.5"/>} stats={branchStats} className="col-span-1" />
          <WidgetSection title="AI Business Insights" icon={<BrainCircuit className="w-3.5 h-3.5 text-blue-400"/>} className="col-span-1 xl:col-span-2 border-blue-500/50 bg-blue-950/20">
             <div className="flex flex-col h-full justify-between">
                <div>
                   <div className="text-sm font-semibold mt-1 text-slate-200">Demand Surge Alert</div>
                   <p className="text-[10px] text-slate-400 mt-1 mb-2">Predicting 22% increase in Cruiser models for Navratri season. Suggest reorder of Spare Kit A-2.</p>
                   <div className="grid grid-cols-2 gap-2 mt-2">
                     {aiStats.slice(0, 4).map((stat, idx) => (
                       <div key={idx} className="text-left">
                         <div className={`kpi-val ${stat.highlight ? 'text-blue-400' : ''}`}>{stat.value}</div>
                         <div className="kpi-label mt-0.5 max-w-[90%] truncate">{stat.label}</div>
                       </div>
                     ))}
                   </div>
                </div>
                <button 
                  onClick={() => setCurrentPage?.("AI Insights")}
                  className="mt-4 px-3 py-1.5 w-full bg-blue-900/40 hover:bg-blue-900/60 rounded border border-blue-800/50 text-xs font-semibold text-blue-300 flex items-center justify-center gap-1.5 transition-colors"
                >
                  View Full AI Report <ArrowRight className="w-3 h-3" />
                </button>
             </div>
          </WidgetSection>
        </div>
      </div>
      
      <div className="shrink-0 pt-2 border-t border-slate-800">
        <AlertsAndFeeds setCurrentPage={setCurrentPage} />
      </div>
    </div>
  );
}
