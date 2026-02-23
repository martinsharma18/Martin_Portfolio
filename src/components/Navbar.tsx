import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';

const ThemeToggle = dynamic(() => import('./ThemeToggle'), { ssr: false });

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Update navbar background
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navItems.map(item => {
        const element = document.getElementById(item.id);
        if (element) {
          return {
            id: item.id,
            offset: Math.abs(element.getBoundingClientRect().top),
          };
        }
        return { id: item.id, offset: Infinity };
      });

      const currentSection = sections.reduce((acc, curr) =>
        curr.offset < acc.offset ? curr : acc
      );

      setActiveSection(currentSection.id);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`fixed top-6 inset-x-0 mx-auto max-w-5xl px-4 md:px-6 z-50 transition-all duration-500 ${isScrolled
          ? 'scale-95'
          : 'scale-100'
          }`}
      >
        <div className="glass-card rounded-[2rem] px-6 py-2 shadow-2xl border-white/10">
          <div className="flex items-center justify-between h-14">
            <motion.div
              className="text-xl font-black bg-gradient-to-r from-gray-900 to-black text-transparent bg-clip-text dark:from-white dark:to-gray-400 cursor-pointer tracking-tighter"
              whileHover={{ scale: 1.05 }}
              onClick={() => scrollToSection('home')}
            >
              MARTIN SHARMA
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 text-xs font-bold uppercase tracking-widest transition-all rounded-xl ${activeSection === item.id
                    ? 'text-blue-500 bg-blue-500/5'
                    : 'text-gray-500 hover:text-gray-900 dark:hover:text-white'
                    }`}
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.button>
              ))}
              <div className="ml-4 pl-4 border-l border-gray-900/5 dark:border-white/5">
                <ThemeToggle />
              </div>
            </div>

            {/* Mobile Navigation Button */}
            <div className="md:hidden flex items-center gap-4">
              <ThemeToggle />
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 dark:text-gray-300 p-2 glass-card rounded-xl"
                aria-label="Toggle menu"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M4 8h16M4 16h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                className="md:hidden bg-gray-900/5 dark:bg-white/5 rounded-2xl overflow-hidden"
              >
                <div className="p-4 space-y-1">
                  {navItems.map((item) => (
                    <motion.button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`block w-full text-left px-6 py-4 rounded-xl text-sm font-black uppercase tracking-widest transition-all ${activeSection === item.id
                        ? 'text-blue-500 bg-blue-500/10'
                        : 'text-gray-600 dark:text-gray-400'
                        }`}
                      whileTap={{ scale: 0.98 }}
                    >
                      {item.label}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Spacer for fixed navbar */}
      <div className="h-16" />
    </>
  );
};

export default Navbar; 