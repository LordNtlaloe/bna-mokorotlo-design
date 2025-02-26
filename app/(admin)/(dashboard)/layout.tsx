import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardSidebar from "@/components/dashboard/DashboardSideBar";
import React from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main className='flex h-screen bg-gradient-to-b from-black to-[#0D0D0D] text-white overflow-hidden'>
      <div className='fixed inset-0 z-0'>
        <div className='absolute inset-0 bg-gradient-to-br from-black to-[#0D0D0D] opacity-80' />
        <div className='absolute inset-0 backdrop-blur-sm' />
      </div>
      <DashboardSidebar />
      <div className="flex-1 overflow-y-auto px-2 z-10">
        <DashboardHeader />
        <div className="bg-gradient-to-b from-[#0D0D0D] to-[#000000] mt-2 p-2 rounded mb-3 flex-1 overflow-y-auto">
          {children}
        </div>
      </div>
    </main>
  );
};

export default layout;
