/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef, useEffect } from "react";
import { GALLERY_ITEMS } from "../constants";
import { ArrowLeftRight, HelpCircle, Info } from "lucide-react";
import { motion } from "motion/react";

export default function Gallery() {
  const [sliderPosition, setSliderPosition] = useState(50); // 0 to 100
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging]);

  const activeItem = GALLERY_ITEMS[0]; // main before & after item

  return (
    <section id="gallery" className="scroll-mt-24 py-24 bg-neutral-900 border-t border-neutral-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-red font-bold font-mono tracking-widest text-xs uppercase block mb-3">
            WORKSHOP SPOTLIGHT
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight mb-4">
            Before & After Gallery
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base">
            Drag the slider handle below to see the astonishing results of our paint correction, detailing, and cosmetic bodywork restoration procedures.
          </p>
        </div>

        {/* Interactive Comparison Slider */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-neutral-950 p-4 sm:p-6 rounded-3xl border border-neutral-800 shadow-2xl">
            
            <div
              ref={containerRef}
              className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden select-none cursor-ew-resize border border-neutral-800"
              onMouseDown={() => setIsDragging(true)}
              onTouchStart={() => setIsDragging(true)}
            >
              {/* After image (Base layer, fully visible) */}
              <img
                src={activeItem.afterImg}
                alt="After Professional Detailing Paint Correction"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                referrerPolicy="no-referrer"
              />
              <div className="absolute right-6 top-6 bg-green-500/95 text-white font-mono text-[10px] font-bold px-3 py-1.5 rounded-md uppercase tracking-wider shadow-lg">
                After: Glossy Mirror Finish
              </div>

              {/* Before image (Clipped layer on top) */}
              <div
                className="absolute inset-0 pointer-events-none overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src={activeItem.beforeImg}
                  alt="Before Repair Paint Damage"
                  className="absolute inset-0 w-full h-full object-cover max-w-none"
                  style={{ width: containerRef.current?.getBoundingClientRect().width }}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute left-6 top-6 bg-brand-red/95 text-white font-mono text-[10px] font-bold px-3 py-1.5 rounded-md uppercase tracking-wider shadow-lg">
                  Before: Scratches & Wear
                </div>
              </div>

              {/* Slider Handle Line */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                {/* Drag Handle Button */}
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-10 w-10 bg-brand-red border-2 border-white rounded-full flex items-center justify-center text-white shadow-xl hover:scale-110 active:scale-95 transition-transform duration-100">
                  <ArrowLeftRight className="h-4 w-4 stroke-[3]" />
                </div>
              </div>

            </div>

            {/* Explanatory Details */}
            <div className="mt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-neutral-400">
              <div className="flex items-center gap-2">
                <Info className="h-4.5 w-4.5 text-brand-red shrink-0" />
                <span className="text-left">
                  <strong>Task Done:</strong> Paint sanding, multi-stage correction polishing, and double-layer premium ceramic coat sealing.
                </span>
              </div>
              <div className="shrink-0 bg-neutral-900 border border-neutral-800 rounded px-3 py-1.5 text-neutral-300">
                ↕ Swipe or drag to compare
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
