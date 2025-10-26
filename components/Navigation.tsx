'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const leftNavItems = [
  { name: 'Home', href: '/' },
  { name: "Kate's Story", href: '/about' },
  { name: 'Music Lessons', href: '/lessons' },
];

const rightNavItems = [
  { name: 'Mindset Coaching', href: '/coaching' },
  { name: 'Music', href: '/music' },
  { name: 'Contact', href: '/contact' },
];

const allNavItems = [...leftNavItems, ...rightNavItems];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-navy-dark/98 backdrop-blur-lg shadow-2xl shadow-gold/5' : 'bg-gradient-to-b from-navy-dark/80 to-transparent backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-32">
          {/* Left Navigation */}
          <div className="hidden lg:flex space-x-8 flex-1 justify-end pr-16">
            {leftNavItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-white/90 hover:text-gold transition-colors duration-200 relative group whitespace-nowrap"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gold to-peach transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Center Logo */}
          <Link href="/" className="flex-shrink-0 relative group">
            <div className="relative transition-transform duration-300 group-hover:scale-105">
              {/* Glow effect behind logo */}
              <div className="absolute -inset-4 bg-gradient-to-r from-gold/20 via-peach/20 to-gold/20 blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
              <div className="relative w-[300px] h-[57px]">
                <Image
                  src="/kate1.jpg"
                  alt="Kate Hurley"
                  fill
                  className="object-cover object-center drop-shadow-lg"
                  style={{ objectPosition: 'center' }}
                  priority
                />
              </div>
            </div>
          </Link>

          {/* Right Navigation */}
          <div className="hidden lg:flex space-x-8 flex-1 pl-16">
            {rightNavItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-white/90 hover:text-gold transition-colors duration-200 relative group whitespace-nowrap"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gold to-peach transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-white transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-full h-0.5 bg-white transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-0.5 bg-white transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-navy-dark/98 backdrop-blur-md"
          >
            <div className="px-4 py-6 space-y-4">
              {allNavItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-lg font-medium text-white/80 hover:text-gold transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
