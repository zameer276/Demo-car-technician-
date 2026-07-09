/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { IMAGES } from "../constants";
import { Phone, Calendar, ShieldCheck, Award, Flame } from "lucide-react";
import { motion } from "motion/react";

export default function Hero() {
  const handleScrollToBooking = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
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
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden py-16">
      {/* Background image overlay */}
      <div className="absolute inset-0 z-0">
        <motion.img
          src={IMAGES.heroWorkshop}
          alt="Premium Supercar Auto Workshop"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
          initial={{ scale: 1.1, opacity: 0.3 }}
          animate={{ scale: 1.0, opacity: 0.4 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
        />
        {/* Modern dark radial and linear gradients for ultimate high-end feel */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center lg:text-left">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero text panel */}
          <div className="lg:col-span-8 flex flex-col justify-center">
            
            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="inline-flex items-center gap-1.5 self-center lg:self-start bg-neutral-900 border border-neutral-800 rounded-full px-4 py-1.5 mb-6 text-xs text-neutral-300 font-mono"
            >
              <Flame className="h-4.5 w-4.5 text-brand-red fill-brand-red animate-pulse" />
              <span>THE ULTIMATE CAR CARE EXPERIENCE</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-display tracking-tight text-white mb-6 leading-tight"
            >
              Expert Car Repair & <br className="hidden sm:inline" />
              <span className="text-brand-red relative inline-block">
                Auto Maintenance
                <span className="absolute left-0 bottom-1 w-full h-1.5 bg-brand-red/20 rounded" />
              </span>
            </motion.h1>

            {/* Supporting Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-base sm:text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed font-sans"
            >
              Apex Auto Garage delivers dealership-level car servicing, diagnostic scanning, and heavy engine repairs. Backed by certified technicians, genuine OEM parts, and state-of-the-art tools.
            </motion.p>

            {/* CTA Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12"
            >
              <button
                onClick={handleScrollToBooking}
                className="w-full sm:w-auto bg-brand-red hover:bg-brand-red-hover text-white px-8 py-4 rounded-xl text-base font-bold tracking-wide transition-all shadow-lg shadow-brand-red/30 hover:scale-[1.03] flex items-center justify-center gap-2"
              >
                <Calendar className="h-5 w-5" /> Book Appointment
              </button>
              
              <a
                href="https://wa.me/971501234567"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto border border-neutral-700 bg-neutral-900/60 backdrop-blur hover:bg-neutral-800 hover:border-neutral-500 text-white px-8 py-4 rounded-xl text-base font-bold transition-all flex items-center justify-center gap-2"
              >
                <Phone className="h-5 w-5 text-green-500 fill-green-500/20" /> Contact WhatsApp
              </a>
            </motion.div>

            {/* Trust Metrics */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1.0 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-xl mx-auto lg:mx-0 border-t border-neutral-800 pt-8"
            >
              <div className="flex items-center gap-3">
                <div className="bg-neutral-900 border border-neutral-800 p-2.5 rounded-lg text-brand-red">
                  <Award className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <p className="text-white font-bold leading-tight">100% Certified</p>
                  <p className="text-xs text-neutral-400 font-mono">ASE TECHNICIANS</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-neutral-900 border border-neutral-800 p-2.5 rounded-lg text-brand-red">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <p className="text-white font-bold leading-tight">12 Months</p>
                  <p className="text-xs text-neutral-400 font-mono">WARRANTY PROTECTED</p>
                </div>
              </div>

              <div className="flex items-center gap-3 col-span-2 sm:col-span-1 justify-center sm:justify-start">
                <div className="bg-neutral-900 border border-neutral-800 p-2.5 rounded-lg text-brand-red">
                  <span className="font-bold text-sm tracking-tight">4.9★</span>
                </div>
                <div className="text-left">
                  <p className="text-white font-bold leading-tight">Top Rated</p>
                  <p className="text-xs text-neutral-400 font-mono">GOOGLE CUSTOMERS</p>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Hero interactive widget (Dynamic Quote Estimator mockup or floating visual card) */}
          <div className="lg:col-span-4 hidden lg:block">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 1.0 }}
              className="bg-neutral-900/90 border border-neutral-800 rounded-2xl p-6 shadow-2xl backdrop-blur relative"
            >
              <div className="absolute top-0 right-0 transform translate-x-3 -translate-y-3 bg-brand-red text-white text-xs font-mono font-bold px-3 py-1.5 rounded-md uppercase tracking-widest shadow">
                Live Status
              </div>
              <h3 className="text-lg font-bold font-display text-white mb-4 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                Workshop Queue Today
              </h3>
              <div className="space-y-4 font-sans text-sm">
                <div className="bg-neutral-950 p-3.5 rounded-xl border border-neutral-800 flex justify-between items-center">
                  <div>
                    <p className="text-neutral-400 text-xs uppercase font-mono">Available Bays</p>
                    <p className="text-white font-bold text-base mt-0.5">3/8 Service Bays</p>
                  </div>
                  <span className="text-xs bg-green-500/10 text-green-400 px-2.5 py-1 rounded-full font-mono font-medium">Accepting Cars</span>
                </div>

                <div className="bg-neutral-950 p-3.5 rounded-xl border border-neutral-800 flex justify-between items-center">
                  <div>
                    <p className="text-neutral-400 text-xs uppercase font-mono">Diagnostics Wait</p>
                    <p className="text-white font-bold text-base mt-0.5">Approx. 15 Mins</p>
                  </div>
                  <span className="text-xs bg-neutral-800 text-neutral-300 px-2.5 py-1 rounded-full font-mono">Instant Check</span>
                </div>

                <div className="bg-neutral-950 p-4 rounded-xl border border-neutral-800 space-y-2">
                  <div className="flex justify-between items-center text-xs font-mono text-neutral-400">
                    <span>CUSTOMER SATISFACTION</span>
                    <span className="text-white font-bold">99.2%</span>
                  </div>
                  <div className="w-full bg-neutral-800 h-2 rounded-full overflow-hidden">
                    <motion.div
                      className="bg-brand-red h-full"
                      initial={{ width: 0 }}
                      animate={{ width: "99.2%" }}
                      transition={{ delay: 0.6, duration: 1.2 }}
                    />
                  </div>
                </div>

                <p className="text-neutral-400 text-xs italic text-center font-mono pt-1">
                  *Get complimentary multi-point scanning with any booked oil or brake service!
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
