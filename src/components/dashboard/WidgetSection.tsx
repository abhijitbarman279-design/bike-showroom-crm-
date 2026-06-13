import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface WidgetSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}

export function WidgetSection({ title, children, className, icon }: WidgetSectionProps) {
  return (
    <Card className={cn("", className)}>
      <div className="flex justify-between items-start mb-2">
        <span className="kpi-label flex items-center gap-2">
          {icon && <span className="text-slate-500">{icon}</span>}
          {title}
        </span>
      </div>
      <CardContent>
        {children}
      </CardContent>
    </Card>
  );
}
