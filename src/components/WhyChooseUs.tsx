/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { WHY_CHOOSE_US } from "../constants";
import { Award, ShieldCheck, Zap, DollarSign, CheckCircle } from "lucide-react";
import { motion } from "motion/react";

const IconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  Award,
  ShieldCheck,
  Zap,
  DollarSign,
  CheckCircle,
};

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="scroll-mt-24 py-24 bg-neutral-950 border-t border-neutral-900 relative overflow-hidden">
      {/* Decorative ambient glowing grids */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Why choose us left column text panels */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <span className="text-brand-red font-bold font-mono tracking-widest text-xs uppercase block mb-3">
              THE APEX DIFFERENCE
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight mb-6">
              Why Discerning Owners Choose Us
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-6">
              Maintaining a premium vehicle requires absolute rigor. We do not take shortcuts. From diagnostic integrity logs to direct transparent invoicing, we ensure you always experience the ultimate automotive service.
            </p>
            
            <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl flex items-center gap-4">
              <span className="text-4xl font-extrabold text-brand-red font-display leading-none">100%</span>
              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed font-mono">
                GUARANTEED CLIENT SATISFACTION INDEX ON ACCIDENT AND OVERHAUL DELIVERIES.
              </p>
            </div>
          </div>

          {/* Advantages Cards Grid */}
          <div className="lg:col-span-8">
            <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
              {WHY_CHOOSE_US.map((item, idx) => {
                const IconComponent = IconMap[item.iconName] || Award;
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: idx * 0.1, duration: 0.6 }}
                    className="group bg-neutral-900/60 hover:bg-neutral-900 border border-neutral-800/80 hover:border-brand-red/40 p-6 sm:p-8 rounded-2xl transition-all duration-300"
                  >
                    <div className="bg-neutral-950 border border-neutral-800 group-hover:border-brand-red/30 p-3.5 rounded-xl text-brand-red inline-block mb-5 transition-colors">
                      <IconComponent className="h-6 w-6 stroke-[1.8]" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold font-display text-white mb-2 group-hover:text-brand-red transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
