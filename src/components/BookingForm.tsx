/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { SERVICES } from "../constants";
import { Booking } from "../types";
import { Calendar, Phone, Car, User, CheckCircle2, Trash2, ShieldCheck, Clock, FileText, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface BookingFormProps {
  selectedServiceId: string;
  onResetSelectedService: () => void;
}

export default function BookingForm({ selectedServiceId, onResetSelectedService }: BookingFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    carModel: "",
    serviceId: "",
    preferredDate: "",
  });

  const [localBookings, setLocalBookings] = useState<Booking[]>([]);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [recentBooking, setRecentBooking] = useState<Booking | null>(null);
  const [validationError, setValidationError] = useState("");
  const [showMyBookings, setShowMyBookings] = useState(false);

  // Load from local storage on mount
  useEffect(() => {
    const saved = localStorage.getItem("apex_bookings");
    if (saved) {
      try {
        setLocalBookings(JSON.parse(saved));
      } catch (e) {
        console.error("Error loading local bookings", e);
      }
    }
  }, []);

  // Update form if selectedServiceId is passed down from the parent Services section
  useEffect(() => {
    if (selectedServiceId) {
      setFormData((prev) => ({ ...prev, serviceId: selectedServiceId }));
    }
  }, [selectedServiceId]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setValidationError("");
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validations
    if (!formData.name.trim()) return setValidationError("Please enter your name.");
    if (!formData.phone.trim()) return setValidationError("Please enter your phone number.");
    if (!formData.carModel.trim()) return setValidationError("Please enter your car model (e.g., Toyota Camry 2022).");
    if (!formData.serviceId) return setValidationError("Please select a service.");
    if (!formData.preferredDate) return setValidationError("Please select your preferred service date.");

    // Create Booking
    const newBooking: Booking = {
      id: "APX-" + Math.floor(100000 + Math.random() * 900000),
      name: formData.name,
      phone: formData.phone,
      carModel: formData.carModel,
      serviceId: formData.serviceId,
      preferredDate: formData.preferredDate,
      status: "Confirmed", // auto confirm for demo website fun!
      createdAt: new Date().toISOString(),
    };

    const updatedBookings = [newBooking, ...localBookings];
    setLocalBookings(updatedBookings);
    localStorage.setItem("apex_bookings", JSON.stringify(updatedBookings));

    setRecentBooking(newBooking);
    setShowSuccessModal(true);

    // Reset Form (except maintaining service if user wants, but clean reset is typical)
    setFormData({
      name: "",
      phone: "",
      carModel: "",
      serviceId: "",
      preferredDate: "",
    });
    onResetSelectedService();
  };

  const handleDeleteBooking = (bookingId: string) => {
    const filtered = localBookings.filter((b) => b.id !== bookingId);
    setLocalBookings(filtered);
    localStorage.setItem("apex_bookings", JSON.stringify(filtered));
  };

  return (
    <section id="booking" className="scroll-mt-24 py-24 bg-neutral-950 border-t border-neutral-900 relative">
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Form Details & Value Proposition */}
          <div className="lg:col-span-5 text-left">
            <span className="text-brand-red font-bold font-mono tracking-widest text-xs uppercase block mb-3">
              FAST PASS BOOKING
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight mb-6">
              Schedule Your Car Service
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed mb-8">
              Submit your vehicle details below to lock in your priority appointment. No credit card required. Our workshop coordinators will contact you via Phone/WhatsApp in minutes to confirm details.
            </p>

            {/* Step Indicators */}
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="h-8 w-8 bg-neutral-900 border border-neutral-800 text-brand-red font-mono font-bold text-xs rounded-full flex items-center justify-center shrink-0">
                  1
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">Select Service & Date</h4>
                  <p className="text-neutral-500 text-xs mt-0.5">Pick from our premium diagnostic and repair modules and a comfortable date.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="h-8 w-8 bg-neutral-900 border border-neutral-800 text-brand-red font-mono font-bold text-xs rounded-full flex items-center justify-center shrink-0">
                  2
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">Instant Confirmation Voucher</h4>
                  <p className="text-neutral-500 text-xs mt-0.5">Receive a digital reservation receipt on this screen showing active bay availability.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="h-8 w-8 bg-neutral-900 border border-neutral-800 text-brand-red font-mono font-bold text-xs rounded-full flex items-center justify-center shrink-0">
                  3
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">Priority Drop-Off</h4>
                  <p className="text-neutral-500 text-xs mt-0.5">Arrive on your scheduled date. We begin diagnostic computer scans immediately.</p>
                </div>
              </div>
            </div>

            {/* My Bookings Tracker Toggle */}
            {localBookings.length > 0 && (
              <div className="mt-12 pt-6 border-t border-neutral-900">
                <button
                  onClick={() => setShowMyBookings(!showMyBookings)}
                  className="flex items-center gap-2 text-neutral-400 hover:text-white text-xs font-mono font-bold uppercase tracking-wider"
                >
                  <span>My Saved Bookings ({localBookings.length})</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${showMyBookings ? "rotate-180" : ""}`} />
                </button>
              </div>
            )}
          </div>

          {/* Right Column: Interactive Booking Form */}
          <div className="lg:col-span-7">
            <div className="bg-neutral-900 border border-neutral-800 p-6 sm:p-10 rounded-3xl shadow-2xl">
              
              <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-6 flex items-center gap-2">
                <Calendar className="h-5.5 w-5.5 text-brand-red" />
                Book Appointment Online
              </h3>

              <form onSubmit={handleFormSubmit} className="space-y-5 text-left">
                
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label className="text-neutral-300 text-xs font-semibold font-mono tracking-wide uppercase">Your Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-neutral-500" />
                    <input
                      type="text"
                      name="name"
                      placeholder="e.g. Faisal Al-Mansoori"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-neutral-950 border border-neutral-800 focus:border-brand-red focus:outline-none rounded-xl py-3 pl-11 pr-4 text-sm text-white placeholder-neutral-600 transition-colors"
                    />
                  </div>
                </div>

                {/* Grid of Phone and Car Model */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-neutral-300 text-xs font-semibold font-mono tracking-wide uppercase">WhatsApp / Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-neutral-500" />
                      <input
                        type="tel"
                        name="phone"
                        placeholder="e.g. +971 50 123 4567"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full bg-neutral-950 border border-neutral-800 focus:border-brand-red focus:outline-none rounded-xl py-3 pl-11 pr-4 text-sm text-white placeholder-neutral-600 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-neutral-300 text-xs font-semibold font-mono tracking-wide uppercase">Car Model & Year</label>
                    <div className="relative">
                      <Car className="absolute left-3 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-neutral-500" />
                      <input
                        type="text"
                        name="carModel"
                        placeholder="e.g. Porsche 911 (2021)"
                        value={formData.carModel}
                        onChange={handleInputChange}
                        className="w-full bg-neutral-950 border border-neutral-800 focus:border-brand-red focus:outline-none rounded-xl py-3 pl-11 pr-4 text-sm text-white placeholder-neutral-600 transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* Service Select & Date */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-neutral-300 text-xs font-semibold font-mono tracking-wide uppercase">Select Service Needed</label>
                    <div className="relative">
                      <select
                        name="serviceId"
                        value={formData.serviceId}
                        onChange={handleInputChange}
                        className="w-full bg-neutral-950 border border-neutral-800 focus:border-brand-red focus:outline-none rounded-xl py-3 px-4 text-sm text-white transition-colors appearance-none"
                      >
                        <option value="">-- Choose Workshop Service --</option>
                        {SERVICES.map((srv) => (
                          <option key={srv.id} value={srv.id}>
                            {srv.title} ({srv.estimatedPrice})
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-neutral-400">
                        <ChevronDown className="h-4 w-4" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-neutral-300 text-xs font-semibold font-mono tracking-wide uppercase">Preferred Date</label>
                    <div className="relative">
                      <input
                        type="date"
                        name="preferredDate"
                        value={formData.preferredDate}
                        min={new Date().toISOString().split("T")[0]}
                        onChange={handleInputChange}
                        className="w-full bg-neutral-950 border border-neutral-800 focus:border-brand-red focus:outline-none rounded-xl py-3 px-4 text-sm text-white transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* Validation Error Message */}
                {validationError && (
                  <p className="text-brand-red text-xs font-mono font-bold mt-1">
                    ⚠ {validationError}
                  </p>
                )}

                {/* Submit CTA */}
                <button
                  type="submit"
                  className="w-full bg-brand-red hover:bg-brand-red-hover text-white py-4 px-6 rounded-xl text-sm font-bold tracking-wider uppercase font-mono transition-all shadow-md shadow-brand-red/10 cursor-pointer hover:scale-[1.01] active:scale-[0.99]"
                >
                  Secure Appointment Bay
                </button>

              </form>

              {/* Secure Booking Notice */}
              <div className="mt-6 flex items-center justify-center gap-2 text-neutral-500 text-xs font-mono">
                <ShieldCheck className="h-4.5 w-4.5 text-brand-red" />
                <span>SSL Secured & Privacy Compliant Workspace</span>
              </div>

            </div>
          </div>

        </div>

        {/* Saved Bookings Local Sub-Panel */}
        <AnimatePresence>
          {showMyBookings && localBookings.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="mt-16 bg-neutral-900 border border-neutral-800 rounded-2xl p-6 text-left max-w-4xl mx-auto"
            >
              <h4 className="text-white font-bold font-display text-lg mb-4 flex items-center gap-2 border-b border-neutral-800 pb-3">
                <FileText className="h-5 w-5 text-brand-red" />
                Your Active Reservation Bays
              </h4>
              <div className="divide-y divide-neutral-800">
                {localBookings.map((b) => {
                  const srv = SERVICES.find((s) => s.id === b.serviceId);
                  return (
                    <div key={b.id} className="py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-bold text-brand-red bg-brand-red/10 px-2 py-0.5 rounded">
                            {b.id}
                          </span>
                          <span className="text-white font-bold font-display text-sm">
                            {b.carModel}
                          </span>
                        </div>
                        <p className="text-neutral-400 text-xs mt-1">
                          <strong>Service:</strong> {srv?.title || b.serviceId} • <strong>Client:</strong> {b.name} ({b.phone})
                        </p>
                        <div className="flex items-center gap-4 mt-2 text-[11px] text-neutral-500 font-mono">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3.5 w-3.5" />
                            Date: {b.preferredDate}
                          </span>
                          <span className="flex items-center gap-1 text-green-400">
                            <Clock className="h-3.5 w-3.5" />
                            Status: {b.status}
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => handleDeleteBooking(b.id)}
                        className="p-2 text-neutral-500 hover:text-brand-red hover:bg-neutral-950 rounded-lg transition-colors cursor-pointer self-end sm:self-center"
                        title="Delete Booking"
                      >
                        <Trash2 className="h-4.5 w-4.5" />
                      </button>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      {/* Success Voucher Modal Dialog Overlay */}
      <AnimatePresence>
        {showSuccessModal && recentBooking && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6 sm:p-10 max-w-lg w-full shadow-2xl relative text-center text-sans"
            >
              {/* Close button */}
              <button
                onClick={() => setShowSuccessModal(false)}
                className="absolute top-4 right-4 text-neutral-400 hover:text-white"
              >
                ✕
              </button>

              <div className="h-16 w-16 bg-green-500/10 border-2 border-green-500 text-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="h-8 w-8 stroke-[2.5]" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white mb-2">
                Booking Confirmed!
              </h3>
              <p className="text-neutral-400 text-sm mb-6">
                Your workshop bay slot has been secured. Below is your official digital check-in receipt:
              </p>

              {/* Voucher Ticket UI representation */}
              <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-5 mb-6 text-left font-mono text-xs text-neutral-400 space-y-3 relative overflow-hidden">
                {/* Decorative cutouts at left and right */}
                <div className="absolute -left-3 top-1/2 -translate-y-1/2 h-6 w-6 bg-neutral-900 rounded-full border-r border-neutral-800" />
                <div className="absolute -right-3 top-1/2 -translate-y-1/2 h-6 w-6 bg-neutral-900 rounded-full border-l border-neutral-800" />

                <div className="flex justify-between border-b border-neutral-900 pb-2.5">
                  <span className="text-neutral-500">APPOINTMENT ID</span>
                  <span className="text-brand-red font-bold">{recentBooking.id}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-neutral-500">CLIENT</span>
                  <span className="text-white font-bold">{recentBooking.name}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-neutral-500">CAR MODEL</span>
                  <span className="text-white font-bold truncate max-w-[200px]">{recentBooking.carModel}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-neutral-500">SERVICE BAY</span>
                  <span className="text-white font-bold truncate max-w-[200px]">
                    {SERVICES.find((s) => s.id === recentBooking.serviceId)?.title || recentBooking.serviceId}
                  </span>
                </div>

                <div className="flex justify-between border-t border-neutral-900 pt-2.5">
                  <span className="text-neutral-500">DATE</span>
                  <span className="text-white font-bold">{recentBooking.preferredDate}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-neutral-500">QUEUE PRIORITY</span>
                  <span className="text-green-400 font-bold uppercase">FAST TRACK BAY 3</span>
                </div>
              </div>

              <p className="text-neutral-400 text-xs italic mb-6">
                *Our manager will message you on WhatsApp/Phone shortly to verify any special requests.
              </p>

              <div className="flex gap-4">
                <a
                  href={`https://wa.me/971501234567?text=Hi%20Apex%20Auto!%20I%20just%20booked%20my%20appointment%20with%20ID%20${recentBooking.id}%20for%20my%20${recentBooking.carModel}.`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold font-mono text-xs py-3.5 px-4 rounded-xl uppercase tracking-wider transition-all flex items-center justify-center gap-1.5"
                >
                  <Phone className="h-4 w-4 fill-white" /> Share on WhatsApp
                </a>
                <button
                  onClick={() => setShowSuccessModal(false)}
                  className="flex-1 bg-neutral-800 hover:bg-neutral-700 text-white font-bold font-mono text-xs py-3.5 px-4 rounded-xl uppercase tracking-wider transition-all"
                >
                  Done
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
