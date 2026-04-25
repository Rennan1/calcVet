// import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return (
    <div className="flex flex-col h-screen">
      <Header onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
      <div className="flex flex-1 min-h-0">
        <div className="hidden md:block h-full">
          <Sidebar />
        </div>
        {/* Sidebar mobile */}
        {isSidebarOpen && (
          <div className="fixed inset-0 z-50 flex md:hidden">
            <div
              className="fixed inset-0 bg-black/40"
              onClick={() => setIsSidebarOpen(false)}
            />

            <div className="relative z-50 w-64 bg-white h-full">
              <Sidebar />
            </div>
          </div>
        )}
        <main className="flex-1 bg-neutral p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
