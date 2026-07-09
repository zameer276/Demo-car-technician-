/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Phone } from "lucide-react";
import { motion } from "motion/react";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/971501234567?text=Hi%20Apex%20Auto!%20I'd%20like%20to%20inquire%20about%20a%20car%20repair%20service."
      target="_blank"
      rel="noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      className="fixed bottom-6 right-6 z-40 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl flex items-center justify-center cursor-pointer border border-green-400/20"
      title="Chat on WhatsApp"
    >
      {/* Decorative pulse ring */}
      <span className="absolute inset-0 rounded-full bg-green-500/30 animate-ping pointer-events-none" />
      
      <Phone className="h-6 w-6 fill-white" />
    </motion.a>
  );
}
