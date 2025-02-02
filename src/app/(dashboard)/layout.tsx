import Link from 'next/link';
import Image from 'next/image';
import Menu from "@/components/Menu";// Ensure that the Menu component exists in the same directory or update the path accordingly
import Navbar from "@/components/Navbar"; 
import React from 'react';

export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return <div className="h-screen flex">
        {/* LEFT */}
        <div className="w-[15%] md:w-[8%] l:w-[16%]">
            <Link href="/" className='flex items-center justify-center lg:justify-start p-4 gap-2'>
            <Image src="/logo.png" alt="Logo" width={32} height={32} />
            <span className='hidden lg:block'>Kudi MS</span>
            </Link>
            <Menu/>
        </div>





        {/* RIGHT */}
        <div className="w-[85%] md:w-[92%] l:w-[84%] bg-[#F7F8FA] overflow-scroll"></div>
        <Navbar />
        {children}
    </div>
  }
   