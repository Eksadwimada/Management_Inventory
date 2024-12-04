import { Bell, ChevronDown, History, LayoutGrid, Plus, Settings, Users } from "lucide-react";
import React from "react";
import Image from "next/image";
import SearchInput from "./SearchInput";

export default function Header() {
  return (
    <div className="bg-gray-100 h-14 flex items-center justify-between px-4 border-b border-slate-200">
      <div className="flex gap-4">
        <button>
          <History className="w-6 h-6" />
        </button>
        <SearchInput />
      </div>
      <div className="flex items-center">
        {/* Plus Icon */}
        <div className="pr-4 border-r border-gray-300">
          <button className="p-1 bg-blue-500  hover:bg-blue-600 rounded-lg">
            <Plus className="text-slate-50 w-4 h-4" />
          </button>
        </div>
        <div className="pr-4 pl-4 flex border-r border-gray-300 space-x-1">
          <button className="p-2 hover:bg-slate-200 rounded-lg">
            <Users className="text-slate-900 w-4 h-4" />
          </button>
          <button className="p-2 hover:bg-slate-200 rounded-lg">
            <Bell className="text-slate-900 w-4 h-4" />
          </button>
          <button className="p-2 hover:bg-slate-200 rounded-lg">
            <Settings className="text-slate-900 w-4 h-4" />
          </button>
        </div>
        <div className="pl-4 flex gap-6">
          <button className="flex items-center">
            <span>Eksa</span>
            <ChevronDown className="pl-1 w-4 h-4" />
          </button>
          <button>
            <Image src="/user.png" alt="user image" width={96} height={96} className="w-8 h-8 rounded-full border border-slate-500" />
          </button>
          <button>
            <LayoutGrid className="w-6 h-6 text-slate-900" />
          </button>
        </div>
      </div>
    </div>
  );
}
