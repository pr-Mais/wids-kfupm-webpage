'use client';

import { useEffect, useState } from 'react';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const previousEvents = [
    { id: '2023', label: '2023 Event', url: '/old_events/2023/index.html' },
    { id: '2022', label: '2022 Event', url: '/old_events/2022/index.html' },
    { id: '2021', label: '2021 Event', url: '/old_events/2021/index.html' },
  ];

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'workshops', label: 'Workshops' },
    { id: 'speakers', label: 'Speakers' },
    { id: 'schedule', label: 'Schedule' },
    { id: 'contact', label: 'Contact' },
    {
      id: 'previous-events',
      label: 'Previous Events',
      submenu: true,
    },
  ];

  return (
    <>
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-sm shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex justify-center">
            <div className="flex space-x-10 py-3">
              {navItems.map((item) => (
                <div
                  key={item.id}
                  className="relative"
                  onMouseEnter={() => item.submenu && setSubMenuOpen(true)}
                  onMouseLeave={() => item.submenu && setSubMenuOpen(false)}
                >
                  {item.submenu ? (
                    <>
                      <button
                        className={`flex items-center gap-1 text-lg font-medium transition-all duration-200 ${
                          isScrolled
                            ? 'text-gray-800 hover:text-gray-600'
                            : 'hover:text-gray-200'
                        }`}
                      >
                        {item.label}
                        <FiChevronDown
                          size={18}
                          className={`transition-transform duration-200 ${
                            subMenuOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      <div
                        className={`absolute left-1/2 transform -translate-x-1/2 mt-2 w-48 rounded-md shadow-lg bg-white transition-all duration-200 ${
                          subMenuOpen
                            ? 'opacity-100 visible translate-y-0'
                            : 'opacity-0 invisible -translate-y-2'
                        }`}
                      >
                        <div className="py-1">
                          {previousEvents.map((event) => (
                            <a
                              key={event.id}
                              href={event.url}
                              className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors"
                            >
                              {event.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <div
                      onClick={() => scrollTo(item.id)}
                      className={`text-lg font-medium cursor-pointer transition-all duration-200 hover:scale-110 ${
                        isScrolled ? 'text-gray-800' : ''
                      }`}
                    >
                      {item.label}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden flex justify-end py-3">
            <div
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`p-2 rounded-md cursor-pointer transition-all duration-200 ${
                isScrolled ? 'text-gray-800' : ''
              }`}
            >
              {mobileOpen ? (
                <FiX size={28} color="black" />
              ) : (
                <FiMenu size={28} />
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 w-full h-full bg-white z-40 transition-all duration-300 ease-in-out ${
          mobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="container mx-auto px-6 pt-24">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <div key={item.id}>
                {item.submenu ? (
                  <>
                    <button
                      onClick={() => setSubMenuOpen(!subMenuOpen)}
                      className="flex items-center justify-between w-full text-2xl font-medium text-gray-800 py-3"
                    >
                      {item.label}
                      <FiChevronDown
                        size={24}
                        className={`transition-transform duration-200 ${
                          subMenuOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    <div
                      className={`pl-4 overflow-hidden transition-all duration-300 ${
                        subMenuOpen ? 'max-h-96' : 'max-h-0'
                      }`}
                    >
                      {previousEvents.map((event) => (
                        <a
                          key={event.id}
                          href={event.url}
                          className="block py-2 text-xl text-gray-600 hover:text-gray-900"
                        >
                          {event.label}
                        </a>
                      ))}
                    </div>
                  </>
                ) : (
                  <div
                    onClick={() => scrollTo(item.id)}
                    className="text-2xl font-medium text-gray-800 cursor-pointer py-3"
                  >
                    {item.label}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
