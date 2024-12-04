"use client";

import { BaggageClaim, BarChart4, Cable, ChevronLeft, Files, Home, ShoppingBag, ShoppingBasket } from "lucide-react";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import SubscriptionCard from "./SubscriptionCard";
import SidebarDropdownLink from "./SidebarDropdownLink";
import { usePathname } from "next/navigation";

export default function SideBar() {
  const pathname = usePathname();

  const inventoryLinks = [
    { title: "Items", href: "/dashboard/inventory" },
    // { title: "Categories", href: "/dashboard/inventory/categories/new" },
    // { title: "Brands", href: "/dashboard/inventory/brands/new" },
    // { title: "Units", href: "/dashboard/inventory/units/new" },
    // { title: "Warehouse", href: "/dashboard/inventory/warehouse/new" },
    //{ title: "Inventory Adjustments", href: "/dashboard/inventory/adjustments/new" },
  ];
  const salesLinks = [
    { title: "Customers", href: "#" },
    { title: "Sales Orders", href: "#" },
    { title: "Packages", href: "#" },
    { title: "Shipments", href: "#" },
    { title: "Invoices", href: "#" },
    { title: "Sales Receipts", href: "#" },
    { title: "Payment Received", href: "#" },
    { title: "Sales Returns", href: "#" },
    { title: "Credits Notes", href: "#" },
  ];
  const purchasesLinks = [{ title: "Item", href: "#" }];

  return (
    <div className="w-60 min-h-screen bg-slate-900 text-slate-50 fixed flex flex-col justify-between">
      {/* Main Content */}
      <div className="">
        {/* Logo */}
        <Link href="#" className="flex space-x-3 items-center justify-center py-6 px-3">
          <Image src="/logo.png" alt="user image" width={96} height={96} className="w-6 h-6" />
          <span className="font-bold text-xl">Inventory</span>
        </Link>

        {/* Links */}
        <nav className="flex flex-col gap-3 px-3 py-6">
          <Link href="/dashboard/home/overview" className={`flex items-center space-x-2 p-3 transition-all duration-300 rounded-md w-full ${pathname === "/dashboard/home/overview" ? "bg-blue-500" : "hover:bg-slate-950"}`}>
            <Home className="w-4 h-4" />
            <span className="text-sm">Home</span>
          </Link>
          <SidebarDropdownLink items={inventoryLinks} title="Inventory" icon={BaggageClaim} />
          <SidebarDropdownLink items={salesLinks} title="Sales" icon={ShoppingBasket} />
          <SidebarDropdownLink items={purchasesLinks} title="Purchases" icon={ShoppingBag} />
          <Link href="/dashboard/integrations" className={`flex items-center space-x-2 p-3 transition-all duration-300 rounded-md w-full ${pathname === "/dashboard/integrations" ? "bg-blue-500" : "hover:bg-slate-950"}`}>
            <Cable className="w-4 h-4" />
            <span className="text-sm">Integration</span>
          </Link>
          <Link href="/dashboard/reports" className={`flex items-center space-x-2 p-3 transition-all duration-300 rounded-md w-full ${pathname === "/dashboard/reports" ? "bg-blue-500" : "hover:bg-slate-950"}`}>
            <BarChart4 className="w-4 h-4" />
            <span className="text-sm">Reports</span>
          </Link>
          <Link href="/dashboard/documents" className={`flex items-center space-x-2 p-3 transition-all duration-300 rounded-md w-full ${pathname === "/dashboard/documents" ? "bg-blue-500" : "hover:bg-slate-950"}`}>
            <Files className="w-4 h-4" />
            <span className="text-sm">Documents</span>
          </Link>
        </nav>
      </div>

      {/* Bottom Part */}
      <div className="absolute bottom-0 w-full px-3 pb-3 bg-slate-900">
        {/* Subscription Card */}
        <SubscriptionCard />

        {/* Icon Bottom Button */}
        <button className="flex bg-slate-950 space-x-2 items-center py-3 px-2 justify-center mt-3 rounded-md w-full">
          <ChevronLeft />
        </button>
      </div>
    </div>
  );
}
