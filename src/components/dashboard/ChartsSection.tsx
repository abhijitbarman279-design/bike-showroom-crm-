import { WidgetSection } from "./WidgetSection";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const bestSellingData = [
  { name: 'Classic 350', sales: 120 },
  { name: 'Bullet 350', sales: 85 },
  { name: 'Meteor 350', sales: 65 },
  { name: 'Himalayan', sales: 45 },
  { name: 'Hunter 350', sales: 90 },
];

const colorData = [
  { name: 'Stealth Black', value: 400 },
  { name: 'Gunmetal Grey', value: 300 },
  { name: 'Signals', value: 300 },
  { name: 'Halcyon Green', value: 200 },
];
const COLORS = ['#334155', '#475569', '#3b82f6', '#10b981'];

export function ChartsSection() {
  return (
    <>
      <WidgetSection title="Bike Model Performance" className="col-span-1 xl:col-span-2">
        <div className="h-[200px] w-full mt-2">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={bestSellingData} margin={{ top: 5, right: 10, left: -25, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1e293b" />
              <XAxis dataKey="name" tick={{fontSize: 10, fill: '#64748b'}} axisLine={false} tickLine={false} />
              <YAxis tick={{fontSize: 10, fill: '#64748b'}} axisLine={false} tickLine={false} />
              <Tooltip cursor={{fill: 'transparent'}} contentStyle={{borderRadius: '4px', border: '1px solid #1e293b', backgroundColor: '#0f172a', color: '#f8fafc', fontSize: '12px'}} itemStyle={{color: '#3b82f6'}} />
              <Bar dataKey="sales" fill="#3b82f6" radius={[2, 2, 0, 0]} barSize={24} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </WidgetSection>

      <WidgetSection title="Color Preference" className="col-span-1">
        <div className="h-[200px] w-full relative mt-2">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={colorData}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={70}
                paddingAngle={5}
                dataKey="value"
                stroke="none"
              >
                {colorData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip contentStyle={{borderRadius: '4px', border: '1px solid #1e293b', backgroundColor: '#0f172a', color: '#f8fafc', fontSize: '12px'}} itemStyle={{color: '#f8fafc'}} />
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none flex-col">
            <span className="text-xl font-bold">1.2K</span>
            <span className="text-[10px] text-slate-500 uppercase tracking-widest mt-0.5">Sales</span>
          </div>
        </div>
      </WidgetSection>
    </>
  );
}
