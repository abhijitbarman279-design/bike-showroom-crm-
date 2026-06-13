import { Bell, Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="flex h-[50px] shrink-0 items-center justify-between bg-[#0f172a] px-5">
      <div className="flex items-center gap-4 w-1/3">
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-500" />
          <input
            type="search"
            placeholder="Global Search..."
            className="w-full bg-slate-900 border border-slate-800 rounded-md py-1 pl-8 pr-3 text-xs text-slate-300 placeholder:text-slate-500 outline-none focus:border-blue-500 transition-colors"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-6">
        <div className="flex flex-col items-end leading-tight">
          <span className="text-xs font-bold text-slate-200">Main HQ - Delhi NCR</span>
          <span className="text-[10px] text-green-500 font-medium">System Online</span>
        </div>
        <div className="flex items-center gap-3">
          <button className="relative text-slate-400 hover:text-slate-200 transition-colors">
            <Bell className="h-4 w-4" />
            <span className="absolute -top-1 -right-1 flex h-2 w-2 rounded-full bg-red-500 border border-[#0f172a]"></span>
          </button>
          <div className="h-8 w-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 text-xs font-bold shrink-0">
            JD
          </div>
        </div>
      </div>
    </header>
  );
}
