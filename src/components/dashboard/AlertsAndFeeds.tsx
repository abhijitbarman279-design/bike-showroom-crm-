import { WidgetSection } from "./WidgetSection";
import { AlertCircle, Bell, ArrowRight } from "lucide-react";

interface AlertsAndFeedsProps {
  setCurrentPage?: (page: string) => void;
}

export function AlertsAndFeeds({ setCurrentPage }: AlertsAndFeedsProps) {
  const alerts = [
    { type: "warning", text: "Low Stock: Meteror 350 Stellar Black (2 left)", time: "10m ago" },
    { type: "danger", text: "5 Follow-ups missed today", time: "1h ago" },
  ];

  const activities = [
    { text: "Rahul K. confirmed Booking #1042", time: "5m ago" },
    { text: "Vehicle Delivered: Bullet 350 (Vinay)", time: "15m ago" },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 h-full">
      <WidgetSection title="Real-Time Alerts" icon={<AlertCircle className="w-3.5 h-3.5 text-orange-500" />}>
        <div className="space-y-2">
          {alerts.map((alert, idx) => (
            <div key={idx} className={`p-1.5 border-l-2 rounded bg-[#0f172a] shadow-sm flex gap-2 ${
                alert.type === 'danger' ? 'border-red-500 shadow-[inset_2px_0_0_0_rgba(239,68,68,0.2)]' :
                'border-orange-500 shadow-[inset_2px_0_0_0_rgba(249,115,22,0.2)]'
              }`}>
              <div className="flex-1 flex justify-between items-start">
                <span className="text-xs text-slate-200">{alert.text}</span>
                <span className="text-[10px] text-slate-500 ml-2 whitespace-nowrap">{alert.time}</span>
              </div>
            </div>
          ))}
        </div>
        <button 
          onClick={() => setCurrentPage?.("Reports")}
          className="w-full mt-3 py-1.5 text-xs text-slate-400 hover:text-slate-200 bg-slate-800/50 hover:bg-slate-800 rounded flex items-center justify-center font-medium transition-colors"
        >
          View All Alerts <ArrowRight className="w-3 h-3 ml-1" />
        </button>
      </WidgetSection>

      <WidgetSection title="Live Feed" icon={<Bell className="w-3.5 h-3.5 text-blue-500" />}>
        <div className="space-y-2 border-l border-slate-800 ml-1 pl-3 mt-1">
          {activities.map((activity, idx) => (
            <div key={idx} className="relative">
              <div className="absolute -left-[16.5px] top-1 w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_0_2px_#0f172a]"></div>
              <div className="flex-1 flex justify-between items-start">
                <span className="text-xs text-slate-200">{activity.text}</span>
                <span className="text-[10px] text-slate-500 ml-2 whitespace-nowrap">{activity.time}</span>
              </div>
            </div>
          ))}
        </div>
        <button 
          onClick={() => setCurrentPage?.("Reports")}
          className="w-full mt-3 py-1.5 text-xs text-slate-400 hover:text-slate-200 bg-slate-800/50 hover:bg-slate-800 rounded flex items-center justify-center font-medium transition-colors"
        >
          View Activity History <ArrowRight className="w-3 h-3 ml-1" />
        </button>
      </WidgetSection>
    </div>
  );
}
