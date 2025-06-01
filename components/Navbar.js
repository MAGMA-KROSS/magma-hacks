"use client";
import { useState } from 'react';
import { ModeToggle } from './ModeToggle';
import Link from 'next/link.js';
import { usePathname } from 'next/navigation';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Footer from './Footer';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname()
  const isActive = (href) => pathname === href

  return (
    <nav className="bg-white border-gray-200  w-full relative shadow-[0_4px_12px_-2px_rgba(0,0,0,0.4)] z-50 dark:bg-black dark:shadow-none">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">

          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"><img src="/logo.png" alt="" width={24} /></span>
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">MagmaHacks</span>

        </Link>
        <div className="hidden md:flex md:items-center md:space-x-3 rtl:space-x-reverse">

        </div>
        <div className="flex items-center justify-center gap-1">
          <div className="block md:hidden">
            <ModeToggle />

            <Sheet>
              <SheetTrigger>

                <svg className="w-5 h-5 mx-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                </svg>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>MagmaHacks</SheetTitle>
                  <SheetDescription asChild>
                    <div className="transition-all duration-100 w-full md:block md:w-auto" id="navbar-default">
                      <ul className="font-medium md:hidden flex flex-col  md:p-0 mt-4 borde items-center rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-transparent md:dark:bg-transparent dark:border-gray-700">
                        <li className={`w-full md:w-min text-center `}>
                          <Link href="/" className={`${isActive('/') ? "md:text-[#ea580c] text-white md:dark:text-[#ea580c] bg-[#ea580c] dark:md:bg-transparent" : ""} block dark:hover:text-[#ea580c] py-2 px-3    rounded-sm md:bg-transparent  md:p-0 dark:text-white `} aria-current="page">Home</Link>
                        </li>
                        <li className="w-full md:w-min text-center">
                          <Link href="About" className={`${isActive('/About') ? "md:text-[#ea580c] text-white md:dark:text-[#ea580c] bg-[#ea580c] dark:md:bg-transparent" : ""} block dark:hover:text-[#ea580c] py-2 px-3   rounded-sm md:bg-transparent  md:p-0 dark:text-white `}>About</Link>
                        </li>

                        <li className="w-full md:w-min text-center">
                          <Link href="Pricing" className={`${isActive('/Pricing') ? "md:text-[#ea580c] text-white md:dark:text-[#ea580c] bg-[#ea580c] dark:md:bg-transparent" : ""} block dark:hover:text-[#ea580c] py-2 px-3   rounded-sm md:bg-transparent  md:p-0 dark:text-white `}>Pricing</Link>
                        </li>
                        <li className="w-full md:w-min text-center">
                          <Link href="Contact" className={`${isActive('/Contact') ? "md:text-[#ea580c] text-white md:dark:text-[#ea580c] bg-[#ea580c] dark:md:bg-transparent" : ""} block dark:hover:text-[#ea580c] py-2 px-3   rounded-sm md:bg-transparent  md:p-0 dark:text-white `}>Contact</Link>
                        </li>
                        <li className="w-full md:w-min text-center">
                          <Link href="Blogs" className={`${isActive('/Blogs') ? "md:text-[#ea580c] text-white md:dark:text-[#ea580c] bg-[#ea580c] dark:md:bg-transparent" : ""} block dark:hover:text-[#ea580c] py-2 px-3   rounded-sm md:bg-transparent  md:p-0 dark:text-white `}>Blogs</Link>
                        </li>
                      </ul>
                    
                    </div>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
          <div className="transition-all hidden duration-100 w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium  flex flex-col p-4 md:p-0 mt-4 border border-gray-100 items-center rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-transparent md:dark:bg-transparent dark:border-gray-700">
              <li className="w-full md:w-min text-center ">
                <Link href="/" className={`${isActive('/') ? "md:text-[#ea580c] text-white md:dark:text-[#ea580c] bg-[#ea580c] dark:md:bg-transparent" : ""} block dark:hover:text-[#ea580c] py-2 px-3  rounded-sm md:bg-transparent  md:p-0 dark:text-white `} aria-current="page">Home</Link>
              </li>
              <li className="w-full md:w-min text-center">
                <Link href="About" className={`${isActive('/About') ? "md:text-[#ea580c] text-white md:dark:text-[#ea580c] bg-[#ea580c] dark:md:bg-transparent" : ""} block dark:hover:text-[#ea580c] py-2 px-3   rounded-sm md:bg-transparent  md:p-0 dark:text-white `}>About</Link>
              </li>

              <li className="w-full md:w-min text-center">
                <Link href="Pricing" className={`${isActive('/Pricing') ? "md:text-[#ea580c] text-white md:dark:text-[#ea580c] bg-[#ea580c] dark:md:bg-transparent" : ""} block dark:hover:text-[#ea580c] py-2 px-3   rounded-sm md:bg-transparent  md:p-0 dark:text-white `}>Pricing</Link>
              </li>
              <li className="w-full md:w-min text-center">
                <Link href="Contact" className={`${isActive('/Contact') ? "md:text-[#ea580c] text-white md:dark:text-[#ea580c] bg-[#ea580c] dark:md:bg-transparent" : ""} block dark:hover:text-[#ea580c] py-2 px-3   rounded-sm md:bg-transparent  md:p-0 dark:text-white `}>Contact</Link>
              </li>
              <li className="w-full md:w-min text-center">
                <Link href="Blogs" className={`${isActive('/Blogs') ? "md:text-[#ea580c] text-white md:dark:text-[#ea580c] bg-[#ea580c] dark:md:bg-transparent" : ""} block dark:hover:text-[#ea580c] py-2 px-3   rounded-sm md:bg-transparent  md:p-0 dark:text-white `}>Blogs</Link>
              </li>
              <li className="md:block hidden cursor-pointer">
                <ModeToggle />
              </li>
            </ul>
          </div>
        </div>

      </div>
    </nav>
  );
}
