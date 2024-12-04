"use client";

import React, { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import CollabsableLink from "./CollabsableLink";
import { ChevronRight } from "lucide-react";
// import { usePathname } from "next/navigation";

export default function SidebarDropdownLink({ title, items, icon: Icon }) {
  const [isOpen, setIsOpen] = useState(false);
  // const pathname = usePathname();

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger className={`flex items-center justify-between p-3 transition-all duration-300 rounded-md w-full ${isOpen ? "text-blue-500" : "hover:bg-slate-950"}`}>
        <div className="flex items-center space-x-2">
          <Icon className="w-4 h-4" />
          <span className="text-sm">{title}</span>
        </div>
        <ChevronRight className={`w-4 h-4 transform transition-transform duration-300 ${isOpen ? "rotate-90" : "rotate-0"}`} />
      </CollapsibleTrigger>

      <CollapsibleContent>
        <div>
          {items.map((item, i) => (
            <CollabsableLink key={i} href={item.href} title={item.title} />
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
