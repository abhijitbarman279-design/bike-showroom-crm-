import { WidgetSection } from "./WidgetSection";

const stages = [
  { name: "New", count: 12, className: "bg-blue-900/30 border border-blue-500/30 text-blue-400" },
  { name: "Contacted", count: 8, className: "bg-slate-800 border border-slate-700 text-slate-300" },
  { name: "Interested", count: 15, className: "bg-slate-800 border border-slate-700 text-slate-300" },
  { name: "Test Ride", count: 5, className: "bg-slate-800 border border-slate-700 text-slate-300" },
  { name: "Negotiation", count: 4, className: "bg-slate-800 border border-slate-700 text-slate-300" },
  { name: "Loan Process", count: 6, className: "bg-slate-800 border border-slate-700 text-slate-300" },
  { name: "Booking", count: 9, className: "bg-slate-800 border border-slate-700 text-slate-300" },
  { name: "Delivered", count: 24, className: "bg-green-900/30 border border-green-500/30 text-green-400" },
];

export function LeadPipeline() {
  return (
    <WidgetSection title="Lead Pipeline Funnel" className="col-span-full xl:col-span-2">
      <div className="flex overflow-x-auto gap-1 pb-1 snap-x hide-scrollbar">
        {stages.map((stage) => (
          <div key={stage.name} className={`kanban-step w-auto shrink-0 justify-between gap-3 px-3 min-w-[100px] ${stage.className}`}>
            <span className="font-semibold">{stage.name}</span>
            <span className="opacity-70 text-right">{stage.count}</span>
          </div>
        ))}
      </div>
    </WidgetSection>
  );
}
