'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronRight } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/expertise', label: 'Our Expertise' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <header className="bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-100 sticky top-0 z-50">
      {/* Main Navigation */}
      <nav className="section-padding py-4">
        <div className="container-max">
          {/* Desktop Layout */}
          <div className="hidden lg:flex items-center justify-center relative">
            {/* Logo positioned on the left */}
            <div className="absolute left-0">
              <Link href="/" className="group">
                <div className="relative">
                  <Image 
                    src="/logo.png" 
                    alt="Fine Medicine Logo"
                    width={80}
                    height={80}
                    className="object-contain hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </Link>
            </div>

            {/* Centered Navigation */}
            <div className="flex items-center space-x-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-6 py-3 font-medium rounded-xl transition-all duration-300 group ${
                    isActive(item.href)
                      ? 'text-green-600 bg-green-50'
                      : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                  {isActive(item.href) && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-green-600 rounded-full"></div>
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="group">
              <div className="relative">
                <Image 
                  src="/logo.png" 
                  alt="Fine Medicine Logo"
                  width={60}
                  height={60}
                  className="object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-3 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-xl transition-all duration-300"
            >
              <div className="relative">
                {isMenuOpen ? (
                  <X className="h-6 w-6 transform rotate-180 transition-transform duration-300" />
                ) : (
                  <Menu className="h-6 w-6 transition-transform duration-300" />
                )}
              </div>
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="mt-6 py-6 border-t border-gray-100">
              <div className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`group flex items-center justify-between px-4 py-3 font-medium rounded-xl transition-all duration-300 ${
                      isActive(item.href) 
                        ? 'text-green-600 bg-green-50' 
                        : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </Link>
                ))}
                <div className="pt-4">
                  <Link
                    href="/contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                  >
                    <span>Get Quote</span>
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;