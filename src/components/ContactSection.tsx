/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MapPin, Phone, Mail, Clock, Calendar, Compass, Share2 } from "lucide-react";
import { motion } from "motion/react";

export default function ContactSection() {
  const contactDetails = [
    {
      icon: <MapPin className="h-5 w-5 text-brand-red" />,
      label: "Our Premium Facility",
      value: "Showroom 4, Sheikh Zayed Road, Al Quoz 1, Dubai, UAE",
      action: { label: "Get Directions", href: "https://maps.google.com" }
    },
    {
      icon: <Phone className="h-5 w-5 text-brand-red" />,
      label: "Call or WhatsApp Us",
      value: "+971 50 123 4567",
      action: { label: "Call Now", href: "tel:+971501234567" }
    },
    {
      icon: <Mail className="h-5 w-5 text-brand-red" />,
      label: "Support Email",
      value: "service@apexautogarage.ae",
      action: { label: "Email Us", href: "mailto:service@apexautogarage.ae" }
    }
  ];

  const businessHours = [
    { days: "Monday - Friday", hours: "8:00 AM - 8:00 PM" },
    { days: "Saturday", hours: "9:00 AM - 6:00 PM" },
    { days: "Sunday", hours: "Closed (Emergency Support Only)" }
  ];

  return (
    <section id="contact" className="scroll-mt-24 py-24 bg-neutral-900 border-t border-neutral-950 relative overflow-hidden">
      <div className="absolute top-0 right-10 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-red font-bold font-mono tracking-widest text-xs uppercase block mb-3">
            VISIT OUR WORKSHOP
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight mb-4">
            Contact & Directions
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base">
            Drop in today for an instant diagnostic computer scanning. Our luxury Al Quoz facility is fully open 6 days a week.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Info Cards & Hours */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            
            {/* Contact cards */}
            <div className="space-y-6">
              {contactDetails.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="bg-neutral-950 border border-neutral-800 p-5 rounded-2xl flex gap-4 items-start text-left hover:border-neutral-750 transition-colors"
                >
                  <div className="bg-neutral-900 border border-neutral-800 p-3 rounded-xl shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold font-mono tracking-wider text-neutral-500 uppercase">
                      {item.label}
                    </h4>
                    <p className="text-white font-bold text-sm sm:text-base mt-1 leading-snug">
                      {item.value}
                    </p>
                    <a
                      href={item.action.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-brand-red hover:text-brand-red-hover text-xs font-mono font-bold mt-2.5 transition-colors"
                    >
                      {item.action.label} →
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Business Hours Panel */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-neutral-950 border border-neutral-800 p-6 rounded-2xl text-left"
            >
              <h4 className="text-white font-bold font-display text-base mb-4 flex items-center gap-2">
                <Clock className="h-4.5 w-4.5 text-brand-red" />
                Workshop Business Hours
              </h4>
              <div className="space-y-3">
                {businessHours.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center text-xs sm:text-sm border-b border-neutral-900 pb-2.5 last:border-0 last:pb-0">
                    <span className="font-medium text-neutral-300">{item.days}</span>
                    <span className="font-mono text-neutral-400 font-bold">{item.hours}</span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

          {/* Right Column: Premium Dark Map Embed */}
          <div className="lg:col-span-7 h-full">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full h-full min-h-[350px] lg:min-h-0 rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl bg-neutral-950 flex flex-col justify-between"
            >
              {/* Google Maps iFrame with custom dark mode class filters */}
              <iframe
                title="Apex Auto Garage Dubai Sheikh Zayed Road Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14441.74512402175!2d55.22851413867623!3d25.1884483726915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a6d0883%3A0x2f5431d1f053e18a!2sSheikh%20Zayed%20Rd%20-%20Dubai!5e0!3m2!1sen!2sae!4v1710000000000!5m2!1sen!2sae"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full opacity-80"
              />

              {/* Floating Address Overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-neutral-950/90 backdrop-blur-md border border-neutral-850 p-4 rounded-xl shadow-xl flex justify-between items-center gap-4">
                <div className="text-left">
                  <p className="text-white font-bold text-xs sm:text-sm font-display flex items-center gap-1.5">
                    <Compass className="h-4 w-4 text-brand-red" />
                    Apex Auto Garage Dubai
                  </p>
                  <p className="text-neutral-400 text-[10px] font-mono mt-0.5">Al Quoz 1 Industrial, Dubai, UAE</p>
                </div>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-brand-red hover:bg-brand-red-hover text-white font-bold font-mono text-[10px] py-2 px-3 rounded uppercase tracking-wider transition-colors shrink-0 flex items-center gap-1"
                >
                  <Share2 className="h-3 w-3" /> Navigate
                </a>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
