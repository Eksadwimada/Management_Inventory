import { HelpCircle, LayoutGrid, List, MoreHorizontal, Plus } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function FixedHeader({ newLink }) {
  return (
    <div className="flex justify-between items-center bg-white py-6 px-4">
      <button className="text-xl">All Items</button>
      <div className="flex space-x-3">
        {/* New */}
        <div className="pr-2">
          <Link href={newLink} className="bg-blue-500 rounded-md hover:bg-blue-600 flex items-center space-x-2 px-3 py-2">
            <Plus className="text-slate-50 w-4 h-4" />
            <span className="text-white text-sm">New</span>
          </Link>
        </div>
        {/* Layout */}
        <div className="flex border border-gray-300 bg-slate-50 rounded-md overflow-hidden">
          <button className="hover:bg-gray-200 p-2 transition-all duration-150">
            <List className="w-4 h-4 text-gray-600" />
          </button>
          <div className="w-px h-9 bg-gray-300" />
          <button className="hover:bg-gray-200 p-2 text-slate-400 transition-all duration-150">
            <LayoutGrid className="w-4 h-4" />
          </button>
        </div>

        {/* More */}
        <button className="bg-slate-50 p-2 rounded-md border border-gray-300">
          <MoreHorizontal className="w-4 h-4" />
        </button>
        {/* Help */}
        <button className="bg-orange-500 text-white p-2 rounded-md">
          <HelpCircle className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
