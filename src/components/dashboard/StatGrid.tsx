import { WidgetSection } from "./WidgetSection";

interface StatItem {
  label: string;
  value: string | number;
  highlight?: boolean;
}

interface StatGridProps {
  title: string;
  stats: StatItem[];
  icon?: React.ReactNode;
  className?: string;
}

export function StatGrid({ title, stats, icon, className }: StatGridProps) {
  return (
    <WidgetSection title={title} icon={icon} className={className}>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 overflow-x-hidden">
        {stats.map((stat, idx) => (
          <div key={idx} className="text-left">
            <div className={`kpi-val ${stat.highlight ? 'text-blue-400' : ''}`}>{stat.value}</div>
            <div className="kpi-label mt-0.5 max-w-[90%] truncate" title={stat.label}>{stat.label}</div>
          </div>
        ))}
      </div>
    </WidgetSection>
  );
}
