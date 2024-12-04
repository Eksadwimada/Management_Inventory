import { PlusCircle } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function CollabsableLink({ href, title }) {
  const pathname = usePathname();
  const [isHovered, setIsHovered] = useState(false);

  const isActive = pathname === href;
  const displayIcon = isHovered || isActive;

  return (
    <Link
      href={href}
      className={`flex mt-2 mb-2 items-center justify-between pl-9 pr-4 transition-all duration-300 py-2.5 rounded-md space-x-3 ${isActive ? "bg-blue-500 text-white" : "hover:bg-slate-950"}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="text-sm">{title}</span>
      {displayIcon && <PlusCircle className="w-4 h-4" />}
    </Link>
  );
}
