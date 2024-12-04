"use client";

import { CreditCard, X } from "lucide-react";
import React, { useState } from "react";

export default function DashboardBanner() {
  const [hidden, setHidden] = useState(false);

  return hidden ? null : (
    <div className="grid grid-cols-12 items-center py-6 px-8 bg-white border-b border-slate-300 gap-4 relative">
      {/* Icon */}
      <div className="col-span-2 flex justify-center">
        <CreditCard className="w-16 h-16 text-slate-500" />
      </div>
      {/* Text */}
      <div className="col-span-7 space-y-2">
        <h2 className="font-bold text-xl">Start accepting online payments</h2>
        <p className="text-slate-600 text-lg">Businesses are moving towards online payments as they're easy, secure, and fast. Try them for your business today.</p>
      </div>
      {/* Enable Button */}
      <div className="col-span-2 flex justify-end">
        <button className="py-2 px-8 text-sm uppercase bg-blue-500 hover:bg-blue-600 text-white rounded-lg">Enable</button>
      </div>
      {/* Close Button */}
      <button onClick={() => setHidden(true)} className="absolute top-4 right-16 text-slate-500 hover:text-slate-700">
        <X className="w-5 h-5" />
      </button>
    </div>
  );
}
