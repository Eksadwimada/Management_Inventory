import React from "react";

export default function InventoryCard({ item }) {
  return (
    <div className="mb-4 shadow rounded-lg bg-white border border-slate-300 hover:border-blue-400 py-2 px-4 cursor-pointer flex justify-between items-center gap-3 transition-all duration-300">
      <h2 className=" text-slate-500 uppercase text-sm">{item.title}</h2>
      <h4 className="text-2xl">{item.number}</h4>
    </div>
  );
}
