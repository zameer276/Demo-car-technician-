/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Wrench, Phone, Mail, MapPin, ShieldCheck, ChevronUp } from "lucide-react";

export default function Footer() {
  const handleScrollToTop = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const navLinks = [
    { name: "About Workshop", href: "#about" },
    { name: "Our Services", href: "#services" },
    { name: "Why Apex Garage", href: "#why-choose-us" },
    { name: "Before & After", href: "#gallery" },
    { name: "Car Brands", href: "#brands" },
    { name: "Reserve Slot", href: "#booking" }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const socialLinks = [
    { name: "Instagram", href: "https://instagram.com" },
    { name: "Facebook", href: "https://facebook.com" },
    { name: "LinkedIn", href: "https://linkedin.com" },
    { name: "YouTube", href: "https://youtube.com" }
  ];

  return (
    <footer className="bg-neutral-950 border-t border-neutral-900 text-neutral-400 font-sans pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-neutral-900 pb-12 mb-12">
          
          {/* Brand/Bio Column */}
          <div className="md:col-span-4 text-left space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-brand-red p-1.5 rounded-lg">
                <Wrench className="h-4.5 w-4.5 text-white" />
              </div>
              <span className="text-lg font-bold font-display text-white tracking-tight">
                APEX<span className="text-brand-red ml-0.5">AUTO</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed max-w-sm">
              Apex Auto Garage is Dubai's independent premium car garage. Providing dealer-level services, advanced computerized engine scans, AC restorations, and flawless paint corrections.
            </p>
            <div className="flex gap-4 pt-2">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-mono text-neutral-500 hover:text-brand-red transition-colors uppercase tracking-wider font-bold"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Nav Links Column */}
          <div className="md:col-span-3 text-left">
            <h4 className="text-white font-bold font-display text-xs uppercase tracking-widest font-mono mb-4 text-neutral-300">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
              {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="hover:text-white transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Contact Info Column */}
          <div className="md:col-span-3 text-left space-y-3.5">
            <h4 className="text-white font-bold font-display text-xs uppercase tracking-widest font-mono mb-1 text-neutral-300">
              Workshop Contacts
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-brand-red shrink-0" />
                <a href="tel:+971501234567" className="hover:text-white transition-colors">+971 50 123 4567</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-brand-red shrink-0" />
                <a href="mailto:service@apexautogarage.ae" className="hover:text-white transition-colors">service@apexautogarage.ae</a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-brand-red shrink-0 mt-0.5" />
                <span>Sheikh Zayed Rd, Al Quoz 1, Dubai, UAE</span>
              </div>
            </div>
          </div>

          {/* Certifications and Quick Back to Top */}
          <div className="md:col-span-2 text-left md:text-right flex flex-col justify-between items-start md:items-end gap-6">
            <div>
              <h4 className="text-white font-bold font-display text-xs uppercase tracking-widest font-mono mb-3 text-neutral-300">
                Dealer Compliant
              </h4>
              <div className="flex items-center md:justify-end gap-2 text-neutral-500">
                <ShieldCheck className="h-8 w-8 text-brand-red shrink-0" />
                <span className="text-[10px] font-mono leading-tight tracking-wider uppercase text-left">
                  100% GCC<br />Warranty Safe
                </span>
              </div>
            </div>

            <button
              onClick={handleScrollToTop}
              className="bg-neutral-900 hover:bg-brand-red hover:text-white border border-neutral-800 p-2.5 rounded-lg text-neutral-400 transition-all flex items-center gap-1.5 text-xs font-mono uppercase font-bold tracking-wider cursor-pointer shadow-md"
            >
              <span>Back To Top</span>
              <ChevronUp className="h-4 w-4" />
            </button>
          </div>

        </div>

        {/* Small Bottom Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] font-mono text-neutral-600">
          <p>© {new Date().getFullYear()} Apex Auto Garage Dubai. All rights reserved.</p>
          <p>
            Designed to Sheikh Zayed Road Luxury Standards • Approved Workshops
          </p>
        </div>

      </div>
    </footer>
  );
}
