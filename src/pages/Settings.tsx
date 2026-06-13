import { WidgetSection } from "@/components/dashboard/WidgetSection";
import { ArrowLeft, Settings as SettingsIcon, Save, Key, Users, Building, Bell, MessageSquare, Shield, DollarSign } from "lucide-react";

interface SettingsProps {
  setCurrentPage: (page: string) => void;
}

export function Settings({ setCurrentPage }: SettingsProps) {
  const settingsSections = [
    { title: "General Settings", icon: Building, description: "Manage dealer name, address, and contact." },
    { title: "User Roles & Permissions", icon: Users, description: "Manage staff accounts and access levels." },
    { title: "Notifications", icon: Bell, description: "Configure email, SMS, and WhatsApp alerts." },
    { title: "Finance & Taxation", icon: DollarSign, description: "Setup GST rates, bank accounts, and invoice formats." },
    { title: "Integrations (WhatsApp & SMS)", icon: MessageSquare, description: "Configure Marketing and CRM APIs." },
    { title: "Security & Backup", icon: Shield, description: "Manage passwords, 2FA, and database backups." },
    { title: "API Keys", icon: Key, description: "Manage third-party service API integration keys." },
  ];

  return (
    <div className="h-full flex flex-col gap-2 relative">
      <div className="flex justify-between items-center bg-[#0f172a] border border-[#1e293b] p-3 rounded-lg shrink-0">
        <div className="flex items-center gap-4">
          <button onClick={() => setCurrentPage("Dashboard")} className="p-1 rounded-md text-slate-400 hover:text-slate-100 hover:bg-slate-800 transition-colors" title="Back to Dashboard">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-lg font-bold text-slate-100">System Settings</h1>
        </div>
        <div className="flex items-center gap-2">
          <button className="bg-blue-600 hover:bg-blue-500 text-white px-3 py-1.5 rounded border border-blue-500 text-xs font-semibold flex items-center gap-1.5 transition-colors">
            <Save className="w-3.5 h-3.5" />
            Save Changes
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 flex-1 overflow-auto hide-scrollbar">
         {settingsSections.map((section, idx) => (
             <WidgetSection key={idx} title={section.title} className="flex flex-col">
                 <div className="flex items-start gap-3 p-2">
                     <div className="p-2 bg-slate-800 rounded-md shrink-0">
                        <section.icon className="w-5 h-5 text-blue-400" />
                     </div>
                     <div>
                         <p className="text-slate-400 text-xs mt-1">{section.description}</p>
                         <button className="mt-4 text-xs font-semibold text-blue-500 hover:text-blue-400 transition-colors">
                             Configure &rarr;
                         </button>
                     </div>
                 </div>
             </WidgetSection>
         ))}
      </div>
    </div>
  );
}
