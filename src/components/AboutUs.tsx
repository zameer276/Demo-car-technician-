/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { IMAGES } from "../constants";
import { Check, ShieldAlert, Award, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";

export default function AboutUs() {
  const highlights = [
    {
      title: "State-of-the-Art Facilities",
      description: "Our Dubai facility features ultra-modern vehicle lifts, advanced ECU programming tools, and clean, dust-free service environments."
    },
    {
      title: "100% Genuine OEM Parts",
      description: "We source our components straight from official manufacturers, ensuring your vehicle remains fully compliant with dealership warranties."
    },
    {
      title: "Factory-Trained Team",
      description: "Every master technician on our staff holds top-level ASE certifications and receives regular factory refresher training."
    },
    {
      title: "Fully Transparent Workshop",
      description: "We provide detailed photo and video logs of any recommended repairs before we start, keeping you in complete control."
    }
  ];

  return (
    <section id="about" className="scroll-mt-24 py-24 bg-neutral-950 border-t border-neutral-900 relative">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Image Panel */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl"
            >
              <img
                src={IMAGES.aboutDiagnostic}
                alt="Expert Mechanic Diagnostic Scanning"
                className="w-full h-auto object-cover aspect-[4/3] sm:aspect-auto hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-60" />
            </motion.div>
            
            {/* Overlay Statistics Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="absolute -bottom-6 -right-4 sm:right-6 bg-brand-red border border-brand-red-hover p-5 rounded-xl shadow-xl max-w-[240px]"
            >
              <div className="flex items-center gap-3">
                <div className="bg-white/15 p-2 rounded-lg text-white">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-2xl font-black font-display text-white leading-none">15+</p>
                  <p className="text-xs text-neutral-100 font-medium tracking-wider font-mono mt-1">YEARS OF EXCELLENCE</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Text Content Panel */}
          <div className="lg:col-span-7">
            <span className="text-brand-red font-bold font-mono tracking-widest text-xs uppercase block mb-3">
              ABOUT OUR WORKSHOP
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight mb-6">
              Precision Engineering. <br />
              <span className="text-neutral-400">Dealership Trust, Local Pricing.</span>
            </h2>
            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed mb-8">
              At Apex Auto Garage, we have redefined the vehicle maintenance experience. We combine the technical accuracy and state-of-the-art diagnostic gear of original brand dealerships with the speed, personalized service, and fair pricing of an independent workshop.
            </p>

            {/* Feature lists */}
            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="flex gap-3 bg-neutral-900/40 border border-neutral-900 p-4 rounded-xl"
                >
                  <div className="h-6 w-6 bg-brand-red/10 border border-brand-red/20 rounded-full flex items-center justify-center shrink-0 text-brand-red">
                    <Check className="h-3.5 w-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold font-display text-sm mb-1">{item.title}</h4>
                    <p className="text-neutral-400 text-xs leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick trust warning footer */}
            <div className="mt-8 pt-6 border-t border-neutral-900 flex flex-col sm:flex-row items-center gap-4 text-xs font-mono text-neutral-400">
              <div className="flex items-center gap-1.5 text-brand-red">
                <ShieldAlert className="h-4.5 w-4.5" />
                <span>DEALER WARRANTY SAFE:</span>
              </div>
              <p>Under Dubai automotive regulations, servicing your car at Apex Auto maintains your dealer warranty 100% untouched.</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
