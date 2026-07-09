/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { SERVICES } from "../constants";
import { Service } from "../types";
import {
  Wrench,
  Snowflake,
  Droplet,
  Shield,
  Battery,
  Zap,
  Cpu,
  Compass,
  CircleDot,
  Clock,
  Coins,
  ChevronRight,
  Search,
  Filter
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const IconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  Wrench,
  Snowflake,
  Droplet,
  Shield,
  Battery,
  Zap,
  Cpu,
  Compass,
  CircleDot,
};

interface ServicesProps {
  onSelectServiceForBooking?: (serviceId: string) => void;
}

export default function Services({ onSelectServiceForBooking }: ServicesProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<"all" | "mechanical" | "electrical" | "maintenance">("all");

  const categories = [
    { id: "all", name: "All Services" },
    { id: "mechanical", name: "Heavy Mechanical" },
    { id: "electrical", name: "Diagnostics & Elec" },
    { id: "maintenance", name: "Fast Track Care" },
  ];

  // Map service ID to category
  const getCategoryOfService = (serviceId: string): "mechanical" | "electrical" | "maintenance" => {
    switch (serviceId) {
      case "engine-repair":
      case "suspension-repair":
        return "mechanical";
      case "electrical-diagnostics":
      case "computer-scanning":
        return "electrical";
      default:
        return "maintenance"; // AC, Oil, Brake, Battery, Tire
    }
  };

  const filteredServices = SERVICES.filter((service) => {
    const matchesSearch =
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.features.some((f) => f.toLowerCase().includes(searchQuery.toLowerCase()));

    const category = getCategoryOfService(service.id);
    const matchesCategory = selectedCategory === "all" || category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const handleBookClick = (serviceId: string) => {
    if (onSelectServiceForBooking) {
      onSelectServiceForBooking(serviceId);
    }
    const element = document.querySelector("#booking");
    if (element) {
      const offset = 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="services" className="scroll-mt-24 py-24 bg-neutral-900 border-t border-neutral-950 relative">
      <div className="absolute top-0 left-10 w-80 h-80 bg-neutral-950 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-red font-bold font-mono tracking-widest text-xs uppercase block mb-3">
            ELITE AUTO REPAIR
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight mb-4">
            Our Professional Services
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base">
            Dealer-standard maintenance using high-end diagnostics, factory-certified parts, and meticulous quality control procedures.
          </p>
        </div>

        {/* Search and Filters Controls */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-12 bg-neutral-950 p-4 rounded-xl border border-neutral-800">
          
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id as any)}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all font-mono ${
                  selectedCategory === cat.id
                    ? "bg-brand-red text-white shadow-md shadow-brand-red/20"
                    : "bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-80 shrink-0">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500" />
            <input
              type="text"
              placeholder="Search services, parts, fixes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-neutral-900 border border-neutral-800 focus:border-brand-red focus:outline-none rounded-lg py-2.5 pl-10 pr-4 text-xs text-white placeholder-neutral-500 transition-colors"
            />
          </div>

        </div>

        {/* Services Grid with Animations */}
        {filteredServices.length > 0 ? (
          <motion.div
            layout
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredServices.map((service, idx) => {
                const IconComponent = IconMap[service.iconName] || Wrench;
                return (
                  <motion.div
                    key={service.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="group bg-neutral-950 border border-neutral-800 hover:border-neutral-700 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-black/50 hover:translate-y-[-4px]"
                  >
                    <div>
                      {/* Card Header (Icon and meta) */}
                      <div className="flex justify-between items-start mb-5">
                        <div className="bg-neutral-900 border border-neutral-800 p-3 rounded-xl text-brand-red group-hover:bg-brand-red group-hover:text-white transition-all duration-300">
                          <IconComponent className="h-6 w-6 stroke-[1.8]" />
                        </div>
                        <div className="text-right font-mono text-xs text-neutral-400">
                          <div className="flex items-center gap-1 justify-end font-bold text-white mb-0.5">
                            <Coins className="h-3.5 w-3.5 text-brand-red" />
                            <span>{service.estimatedPrice}</span>
                          </div>
                          <div className="flex items-center gap-1 justify-end">
                            <Clock className="h-3 w-3" />
                            <span>{service.duration}</span>
                          </div>
                        </div>
                      </div>

                      {/* Title & Description */}
                      <h3 className="text-xl font-bold font-display text-white mb-3 tracking-tight">
                        {service.title}
                      </h3>
                      <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-6">
                        {service.description}
                      </p>

                      {/* Key features check items */}
                      <ul className="space-y-2 mb-8 border-t border-neutral-900 pt-4">
                        {service.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-center gap-2 text-xs text-neutral-300">
                            <div className="h-1.5 w-1.5 bg-brand-red rounded-full shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Booking trigger action */}
                    <button
                      onClick={() => handleBookClick(service.id)}
                      className="w-full flex items-center justify-center gap-2 py-3 bg-neutral-900 hover:bg-brand-red group-hover:bg-brand-red border border-neutral-800 group-hover:border-brand-red text-neutral-300 group-hover:text-white font-bold text-xs rounded-xl tracking-wider uppercase font-mono transition-all duration-300 cursor-pointer"
                    >
                      <span>Reserve Service</span>
                      <ChevronRight className="h-3.5 w-3.5" />
                    </button>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="text-center py-16 bg-neutral-950 border border-neutral-800 rounded-2xl">
            <Filter className="h-12 w-12 text-neutral-600 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-white mb-1">No services found</h3>
            <p className="text-neutral-400 text-sm max-w-sm mx-auto">
              We couldn't find anything matching your filters or search terms. Try searching another standard mechanic repair term.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="mt-4 text-xs font-mono font-bold text-brand-red hover:underline"
            >
              Reset Search & Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
