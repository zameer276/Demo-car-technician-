/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TESTIMONIALS } from "../constants";
import { Star, Quote, ShieldAlert } from "lucide-react";
import { motion } from "motion/react";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-neutral-900 border-t border-neutral-950 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-red/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-red font-bold font-mono tracking-widest text-xs uppercase block mb-3">
            VERIFIED FEEDBACK
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight mb-4">
            What Our Clients Say
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base">
            Read transparent, high-rating reviews from supercar collectors and premium car owners across the UAE.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative shadow-xl hover:border-neutral-700 transition-colors"
            >
              {/* Giant Quote icon in background */}
              <div className="absolute top-6 right-6 text-neutral-900 pointer-events-none">
                <Quote className="h-10 w-10 fill-neutral-950" />
              </div>

              <div>
                {/* Rating stars */}
                <div className="flex gap-1 text-brand-red mb-5">
                  {Array.from({ length: t.rating }).map((_, rIdx) => (
                    <Star key={rIdx} className="h-4 w-4 fill-brand-red stroke-brand-red" />
                  ))}
                </div>

                {/* Feedback */}
                <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed mb-6 italic">
                  "{t.feedback}"
                </p>
              </div>

              {/* User Bio Footer */}
              <div className="flex items-center gap-4 border-t border-neutral-900 pt-5 mt-4">
                <img
                  src={t.avatarUrl}
                  alt={t.name}
                  className="h-12 w-12 rounded-full object-cover border border-neutral-800 shrink-0"
                  referrerPolicy="no-referrer"
                />
                <div className="text-left">
                  <p className="text-white font-bold font-display text-sm leading-snug">{t.name}</p>
                  <p className="text-xs text-brand-red font-mono font-medium leading-none mt-0.5">{t.carModel}</p>
                  <p className="text-[10px] text-neutral-500 font-mono mt-1 uppercase tracking-wider">{t.role}</p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
