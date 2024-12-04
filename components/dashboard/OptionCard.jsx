"use client";

import Link from "next/link";
import React from "react";

export default function OptionCard({ optionData }) {
  const { title, description, link, linkTitle, enabled, icon: Icon } = optionData;
  return (
    <div className="shadow-md bg-white flex flex-col items-center justify-center gap-6 p-8 rounded">
      <h2 className="text-xl font-bold">{title}</h2>
      <div className="">
        <Icon className="w-32 h-32" strokeWidth="0.5px" />
      </div>
      <p className="line-clamp-1 text-sm">{description}</p>
      {enabled ? (
        <Link href={link} className="bg-blue-500 hover:bg-blue-600 rounded-md inline-flex items-center space-x-2 px-3 py-2">
          <span className="text-white text-sm">{linkTitle}</span>
        </Link>
      ) : (
        <button className="py-2 rounded-sm bg-blue-500 px-3 inline-flex items-center space-x-2 text-white text-sm">Enable</button>
      )}
    </div>
  );
}
