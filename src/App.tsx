/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Gallery from "./components/Gallery";
import Brands from "./components/Brands";
import Testimonials from "./components/Testimonials";
import BookingForm from "./components/BookingForm";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  const [selectedServiceId, setSelectedServiceId] = useState("");

  const handleSelectServiceForBooking = (serviceId: string) => {
    setSelectedServiceId(serviceId);
  };

  const handleResetSelectedService = () => {
    setSelectedServiceId("");
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans selection:bg-brand-red selection:text-white">
      {/* Navigation Headers */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Banner Section */}
        <Hero />

        {/* About Garage Section */}
        <AboutUs />

        {/* Services Listings Section with booking callback */}
        <Services onSelectServiceForBooking={handleSelectServiceForBooking} />

        {/* Why Choose Us Section */}
        <WhyChooseUs />

        {/* Interactive Before & After comparison slider */}
        <Gallery />

        {/* Vehicle Brands Supported Section */}
        <Brands />

        {/* Verified Customer Testimonials */}
        <Testimonials />

        {/* Interactive booking reservation block */}
        <BookingForm
          selectedServiceId={selectedServiceId}
          onResetSelectedService={handleResetSelectedService}
        />

        {/* Maps and Contact section */}
        <ContactSection />
      </main>

      {/* Footer contacts, business hours, and copyright info */}
      <Footer />

      {/* Fixed WhatsApp communication bubble */}
      <WhatsAppButton />
    </div>
  );
}
