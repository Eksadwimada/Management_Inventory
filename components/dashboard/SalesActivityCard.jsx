import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function SalesActivityCard({ item }) {
  return (
    <Link href={item.href} className="shadow rounded-lg bg-white border border-slate-300 hover:border-blue-400 px-3 py-4 cursor-pointer flex flex-col items-center gap-3 transition-all duration-300">
      <h4 className={`font-semibold text-4xl ${item.color}`}>{item.number}</h4>
      <small className="text-slate-500">{item.unit}</small>
      <div className="flex items-center space-x-2 text-slate-500">
        <CheckCircle2 className="w-3 h-3" />
        <span className="uppercase text-xs">{item.title}</span>
      </div>
    </Link>
  );
}
