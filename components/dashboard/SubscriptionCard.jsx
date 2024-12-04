import React from "react";
import Link from "next/link";

export default function SubscriptionCard() {
  return (
    <div className="px-1 py-3">
      <div className="rounded-lg p-3 mt-6 bg-slate-950">
        <div className="border-b border-slate-600 pb-3">
          <p className="text-sm border-l-2 border-orange-400 pl-2">
            Your premium plan's trial expires in <span className="text-orange-400">13 days</span>.
          </p>
        </div>
        <div className="flex items-center justify-center text-xs mt-2">
          <button className="p-2 text-center hover:text-blue-600 transition-colors duration-300">Change Plan</button>
          <div className="border-l border-slate-600 h-4 mx-2" />
          <Link href="#" className="p-2 text-center hover:text-blue-600 transition-colors duration-300">
            Upgrade
          </Link>
        </div>
      </div>
    </div>
  );
}
