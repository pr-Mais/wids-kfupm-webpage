'use client';

import { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'workshops', label: 'Workshops' },
    { id: 'speakers', label: 'Speakers' },
    { id: 'schedule', label: 'Schedule' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <>
      <header className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-sm py-3' : 'bg-transparent py-4'
      }`}
      >
        <div className="container mx-auto px-6">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex justify-center">
            <div className="flex space-x-10">
              {navItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`text-lg font-medium cursor-pointer transition-all duration-200 transform hover:scale-110 ${
                    isScrolled ? 'text-gray-800' : 'text-white'
                  }`}
                >
                  {item.label}
                </div>
              ))}
            </div>
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex justify-end">
            <div 
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`p-2 rounded-md cursor-pointer transition-all duration-200 transform hover:scale-110 ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              {mobileOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed top-0 left-0 w-full h-full bg-white z-40 pt-24 transition-all duration-300 ease-in-out ${
        mobileOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
      }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col space-y-6">
            {navItems.map((item) => (
              <div
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-2xl font-medium text-gray-800 cursor-pointer py-3 transition-all duration-200 transform hover:scale-105"
              >
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};