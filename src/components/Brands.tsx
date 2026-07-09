/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BRANDS } from "../constants";
import { Shield, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export default function Brands() {
  return (
    <section id="brands" className="scroll-mt-24 py-24 bg-neutral-950 border-t border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-red font-bold font-mono tracking-widest text-xs uppercase block mb-3">
            MANUFACTURER COMPLIANT
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight mb-4">
            Brands We Expertly Service
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base">
            We use specialized original manufacturer diagnostic computer protocols for European, Japanese, American, and Korean performance models.
          </p>
        </div>

        {/* Brands Badges Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {BRANDS.map((brand, idx) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className="group relative bg-neutral-900/60 hover:bg-neutral-900 border border-neutral-850 hover:border-brand-red/30 p-6 rounded-2xl flex flex-col justify-center items-center text-center transition-all duration-300 hover:shadow-lg hover:shadow-black/40"
            >
              {/* Dynamic decorative element */}
              <div className="absolute top-2 right-2 text-neutral-800 group-hover:text-brand-red/30 transition-colors">
                <Shield className="h-4 w-4" />
              </div>

              {/* Text emblem mimicking luxury car badges */}
              <div className="h-12 w-12 bg-neutral-950 border border-neutral-800 group-hover:border-brand-red/20 rounded-full flex items-center justify-center mb-4 transition-all shadow-inner">
                <span className="font-mono text-xs font-bold text-neutral-500 group-hover:text-brand-red transition-colors">
                  {brand.symbol || "OEM"}
                </span>
              </div>

              <h3 className="text-white font-extrabold font-display text-base sm:text-lg tracking-tight group-hover:scale-105 transition-transform duration-200">
                {brand.name}
              </h3>

              <span className="text-[9px] font-mono tracking-widest text-neutral-500 uppercase mt-1 group-hover:text-neutral-400 transition-colors">
                Full Diagnostic Support
              </span>
            </motion.div>
          ))}
        </div>

        {/* Trust disclaimer badge */}
        <div className="mt-12 bg-neutral-900/40 border border-neutral-900 rounded-xl p-4 max-w-2xl mx-auto flex items-center gap-3 justify-center text-center">
          <Sparkles className="h-4 w-4 text-brand-red shrink-0" />
          <p className="text-xs font-mono text-neutral-400">
            We are fully licensed and registered to provide warranty repairs using dealer scan tools.
          </p>
        </div>

      </div>
    </section>
  );
}
