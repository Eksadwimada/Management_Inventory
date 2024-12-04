import { X } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function FormHeader({ title, href }) {
  return (
    <div className="flex items-center justify-between bg-white py-4 px-8">
      <h2 className="text-lg font-semibold">{title}</h2>
      <Link href={href}>
        <X className="w-5 h-5" />
      </Link>
    </div>
  );
}
