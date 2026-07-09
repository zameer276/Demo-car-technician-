/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Wrench, Menu, X, Phone, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Why Us", href: "#why-choose-us" },
    { name: "Gallery", href: "#gallery" },
    { name: "Brands", href: "#brands" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 85; // height of sticky header + buffer
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Top Bar for contact info and status */}
      <div className="bg-neutral-950 border-b border-neutral-800 text-xs py-2 px-4 sm:px-6 md:px-8 hidden sm:flex justify-between items-center text-neutral-400 font-mono tracking-wider">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-brand-red animate-pulse" />
            Dubai's Premier Workshop
          </span>
          <span>|</span>
          <span>Mon - Sat: 8:00 AM - 8:00 PM</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="tel:+971501234567" className="hover:text-white flex items-center gap-1 transition-colors">
            <Phone className="h-3.5 w-3.5 text-brand-red" /> +971 50 123 4567
          </a>
        </div>
      </div>

      {/* Main sticky navigation */}
      <header
        id="navbar-sticky"
        className={`sticky top-0 z-50 transition-all duration-300 w-full ${
          isScrolled || mobileMenuOpen
            ? "bg-neutral-950/95 backdrop-blur-md border-b border-neutral-800 shadow-lg py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="bg-brand-red p-2 rounded-lg transition-transform duration-300 group-hover:rotate-12">
              <Wrench className="h-5 w-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold font-display tracking-tight text-white flex items-center leading-none">
                APEX<span className="text-brand-red ml-1">AUTO</span>
              </span>
              <span className="text-[10px] uppercase tracking-widest font-mono text-neutral-400">
                Technician & Garage
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-sm font-medium text-neutral-300 hover:text-white hover:border-b-2 hover:border-brand-red py-1 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="https://wa.me/971501234567"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-neutral-300 hover:text-white transition-colors py-2 px-4"
            >
              WhatsApp Us
            </a>
            <a
              href="#booking"
              onClick={(e) => handleNavClick(e, "#booking")}
              className="bg-brand-red hover:bg-brand-red-hover text-white px-5 py-2.5 rounded-lg text-sm font-semibold tracking-wide transition-all shadow-md shadow-brand-red/20 hover:scale-[1.02] flex items-center gap-2"
            >
              <Calendar className="h-4 w-4" /> Book Appointment
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-neutral-400 hover:text-white focus:outline-none relative z-50 cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6 text-white" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 lg:hidden bg-neutral-950 border-b border-neutral-800 shadow-2xl z-40 overflow-hidden"
            >
              <div className="px-6 pt-4 pb-8 space-y-4 flex flex-col max-h-[85vh] overflow-y-auto">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-neutral-300 hover:text-white font-semibold py-3 text-lg border-b border-neutral-900 transition-colors block"
                  >
                    {item.name}
                  </a>
                ))}
                <div className="pt-4 flex flex-col gap-3">
                  <a
                    href="https://wa.me/971501234567"
                    target="_blank"
                    rel="noreferrer"
                    className="border border-neutral-700 text-center hover:border-neutral-500 text-neutral-200 py-3 rounded-lg text-sm font-semibold transition-all"
                  >
                    WhatsApp Us
                  </a>
                  <a
                    href="#booking"
                    onClick={(e) => handleNavClick(e, "#booking")}
                    className="bg-brand-red text-center hover:bg-brand-red-hover text-white py-3 rounded-lg text-sm font-semibold tracking-wide transition-all shadow-lg shadow-brand-red/10"
                  >
                    Book Appointment
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
