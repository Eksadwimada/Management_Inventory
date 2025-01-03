import Header from "@/components/dashboard/Header";
import SideBar from "@/components/dashboard/SideBar";
import React from "react";

export default function Layout({ children }) {
  return (
    <div className="flex">
      <SideBar />
      <main className="ml-60 w-full bg-slate-100 min-h-screen">
        <Header />
        {children}
      </main>
    </div>
  );
}
