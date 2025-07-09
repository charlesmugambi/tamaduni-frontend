'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Bars3Icon, XMarkIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

type NavLink = {
  label: string;
  href: string;
};

export default function Navbar() {
  // Toggle for mobile menu
  const [isOpen, setIsOpen] = useState(false);

  // menu items 
  const links: NavLink[] = [
    { label: 'Home',     href: '/' },
    {label:'Afrocelebration', href:'/afrocelebration'},
    {label:'Digital Ethnography', href:'/digital_ethnography'},
    {label:'Cultural Mapping', href:'/cultural-mapping'},
    {label:'African Civilization', href:'/african_civilization'},
    {label:'AFRICAN EARLY MOBILITY & MIGRATION', href:'/african_early_mobility_and_migration'},
  
    // …add more links here
  ];

  return (
    <header className="w-full shadow-sm">
      {/* ─────── Top bar: Logo + Desktop Menu + Hamburger ─────── */}
      <div className="bg-yellow-400">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            
              <Image
                src="/logo.svg"          // ← replace with your actual logo path
                alt="Tamaduni Logo"
                width={140}
                height={40}
                priority
              />
           
          </Link>

          {/* ───── Desktop Menu (visible at md and up) ───── */}
          <nav className="hidden md:flex space-x-6">
            {links.map((link) => (
              <Link key={link.href} href={link.href}className="text-black hover:text-gray-700">
              {link.label}
                
              </Link>
            ))}
          </nav>

          {/* ───── Hamburger Button (visible below md) ───── */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle mobile menu"
            className="md:hidden text-black focus:outline-none"
          >
            {isOpen ? (
              <XMarkIcon className="h-7 w-7" />
            ) : (
              <Bars3Icon className="h-7 w-7" />
            )}
          </button>
        </div>

        {/* ───── Mobile Menu (visible below md when isOpen=true) ───── */}
        <nav
          className={`px-4 pb-3 md:hidden ${
            isOpen ? 'block' : 'hidden'
          } bg-yellow-400`}
        >
          <ul className="flex flex-col space-y-2">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href}className="block text-black hover:text-gray-700"
                    onClick={() => setIsOpen(false)} >
                  
                    
                  
                    {link.label}
                  
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* ───── Search Bar (always visible) ───── */}
      <div className="bg-yellow-50">
        <div className="max-w-screen-xl mx-auto px-4 py-3">
          <div className="relative w-72">
            <input
              type="text"
              placeholder="Search"
              className="w-full rounded-full border border-neutral-300 py-2 pl-4 pr-10 text-sm placeholder:text-neutral-400 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            />
            <MagnifyingGlassIcon className="absolute left-50 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-400 " />
            
          </div>
        </div>
        
      </div>
    </header>
  );
}
