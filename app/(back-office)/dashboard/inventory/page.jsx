"use client";

import FixedHeader from "@/components/dashboard/FixedHeader";
import OptionCard from "@/components/dashboard/OptionCard";
import { Blend, Boxes, Component, LayoutGrid, ScrollText, Shirt, Warehouse } from "lucide-react";
import React from "react";

export default function Inventory() {
  const optionCards = [
    {
      title: "Items",
      description: "Create standalone items and services that buy and sell",
      link: "/dashboard/inventory/items/new",
      linkTitle: "New Item",
      enabled: true,
      icon: LayoutGrid,
    },
    {
      title: "Categories",
      description: "Bundle different items together and sell them as kits",
      link: "/dashboard/inventory/categories/new",
      linkTitle: "New Category",
      enabled: true,
      icon: Boxes,
    },
    {
      title: "Brands",
      description: "Tweak your items prices for specific contacts or transactions",
      link: "/dashboard/inventory/brands/new",
      linkTitle: "New Brands",
      enabled: true,
      icon: ScrollText,
    },
    {
      title: "Warehouse",
      description: "Tweak your items prices for specific contacts or transactions",
      link: "/dashboard/inventory/warehouse/new",
      linkTitle: "New Warehouse",
      enabled: true,
      icon: Warehouse,
    },
    {
      title: "Units",
      description: "Tweak your items prices for specific contacts or transactions",
      link: "/dashboard/inventory/units/new",
      linkTitle: "New Units",
      enabled: true,
      icon: Component,
    },
    {
      title: "Inventory Adjustments",
      description: "Transfer stock from the Main Warehouse",
      link: "/dashboard/inventory/adjustments/new",
      linkTitle: "New Adjustments",
      enabled: true,
      icon: Blend,
    },
  ];
  return (
    <div>
      <FixedHeader newLink="/dashboard/inventory/items/new" />
      <div className="grid grid-col-1 lg:grid-cols-3 md:grid-cols-2 px-16 py-8 gap-6">
        {optionCards.map((card, i) => {
          return <OptionCard optionData={card} key={i} />;
        })}
      </div>
    </div>
  );
}
