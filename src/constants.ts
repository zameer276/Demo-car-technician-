/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Service, Brand, Testimonial, BeforeAfter } from "./types";

// Import generated images
import heroWorkshop from "./assets/images/hero_workshop_1783579402005.jpg";
import aboutDiagnostic from "./assets/images/about_diagnostic_1783579420442.jpg";
import repairBefore from "./assets/images/repair_before_1783579435329.jpg";
import repairAfter from "./assets/images/repair_after_1783579451031.jpg";

export const IMAGES = {
  heroWorkshop,
  aboutDiagnostic,
  repairBefore,
  repairAfter,
};

export const SERVICES: Service[] = [
  {
    id: "engine-repair",
    title: "Engine Repair & Overhaul",
    description: "Complete diagnostic and precision rebuilding of multi-cylinder performance and luxury engines.",
    iconName: "Wrench",
    estimatedPrice: "From $150",
    duration: "2 - 5 Hours",
    features: [
      "Precision valve & piston adjustments",
      "Head gasket replacement",
      "Timing belt/chain replacement",
      "Performance tuning & testing"
    ]
  },
  {
    id: "ac-repair",
    title: "Car AC Repair & Charging",
    description: "Multi-point cooling system diagnostic, leak detection, and rapid refrigerant recharging.",
    iconName: "Snowflake",
    estimatedPrice: "From $49",
    duration: "45 Mins",
    features: [
      "Refrigerant leak detection",
      "Compressor diagnostic & repair",
      "Cabin filter sanitization",
      "Evaporator cleaning"
    ]
  },
  {
    id: "oil-change",
    title: "Premium Oil Change",
    description: "Full synthetic oil replacement with high-performance filter and complementary safety check.",
    iconName: "Droplet",
    estimatedPrice: "From $29",
    duration: "30 Mins",
    features: [
      "Mobil 1 / Castrol Edge synthetic oil",
      "OEM oil filter replacement",
      "Fluid level top-offs",
      "15-point vehicle safety check"
    ]
  },
  {
    id: "brake-service",
    title: "Brake System Service",
    description: "OEM brake pads, rotors, caliper servicing, and safety flushing of fluid lines.",
    iconName: "Shield",
    estimatedPrice: "From $79",
    duration: "1 - 2 Hours",
    features: [
      "Ceramic brake pad replacement",
      "Rotor resurfacing & replacement",
      "Brake fluid line flushing",
      "Caliper lubrication & checking"
    ]
  },
  {
    id: "battery-replacement",
    title: "Battery & Starter Service",
    description: "Heavy-duty AGM batteries with warranty, complete starting and charging system test.",
    iconName: "Battery",
    estimatedPrice: "From $99",
    duration: "20 Mins",
    features: [
      "Varta / Bosch battery matching",
      "Terminal cleaning & sealing",
      "Alternator output test",
      "Starter motor analysis"
    ]
  },
  {
    id: "electrical-diagnostics",
    title: "Electrical Diagnostics",
    description: "Tracing short circuits, wiring harness failures, and computer module communication bugs.",
    iconName: "Zap",
    estimatedPrice: "From $85",
    duration: "1 - 3 Hours",
    features: [
      "Wiring harness trace & repair",
      "Body control module pairing",
      "Sensors & actuator analysis",
      "Fuse box reconstruction"
    ]
  },
  {
    id: "computer-scanning",
    title: "Computer Diagnostic Scanning",
    description: "Deep fault code retrieval, live telemetry sensor scanning, and software updates.",
    iconName: "Cpu",
    estimatedPrice: "From $39",
    duration: "15 Mins",
    features: [
      "Dealer-level scan tool diagnostic",
      "Pending/historic code clearing",
      "ECU adaptation reset",
      "Live sensor value logging"
    ]
  },
  {
    id: "suspension-repair",
    title: "Suspension & Steering",
    description: "Complete control arm, strut, shock absorber, and steering gear overhaul.",
    iconName: "Compass",
    estimatedPrice: "From $120",
    duration: "2 - 4 Hours",
    features: [
      "Strut & shock replacement",
      "Tie rod & ball joint renewal",
      "Power steering pump repair",
      "Chassis noise elimination"
    ]
  },
  {
    id: "tire-services",
    title: "Tire Mounting & Alignment",
    description: "High-precision computer balancing, mounting of premium tires, and 3D wheel alignment.",
    iconName: "CircleDot",
    estimatedPrice: "From $25",
    duration: "45 Mins",
    features: [
      "Michelin/Pirelli tire selection",
      "Road force wheel balancing",
      "Precision 3D alignment setup",
      "TPMS sensor programming"
    ]
  }
];

export const BRANDS: Brand[] = [
  { name: "Toyota", logoType: "text", symbol: "トヨタ" },
  { name: "Nissan", logoType: "text", symbol: "日産" },
  { name: "BMW", logoType: "text", symbol: "M" },
  { name: "Mercedes-Benz", logoType: "text", symbol: "AMG" },
  { name: "Audi", logoType: "text", symbol: "Quattro" },
  { name: "Lexus", logoType: "text", symbol: "F-Sport" },
  { name: "Honda", logoType: "text", symbol: "VTEC" },
  { name: "Ford", logoType: "text", symbol: "ST" },
  { name: "Hyundai", logoType: "text", symbol: "N" },
  { name: "Kia", logoType: "text", symbol: "GT" }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Faisal Al-Mansoori",
    role: "Supercar Collector",
    rating: 5,
    feedback: "The absolute best workshop in Dubai. I brought my Audi R8 here for a complex engine repair and electrical diagnostics. The level of care, certified techs, and state-of-the-art scanning was impeccable. They treat every car like a masterpiece.",
    carModel: "Audi R8 V10 Plus",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&fit=crop&q=80"
  },
  {
    id: "test-2",
    name: "Sarah Jenkins",
    role: "Expat Professional",
    rating: 5,
    feedback: "Highly trustworthy mechanics! They diagnosed my BMW AC cooling system and replaced the compressor in record time. No hidden costs, completely upfront pricing, and they provided OEM parts. Highly recommended!",
    carModel: "BMW 540i",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&fit=crop&q=80"
  },
  {
    id: "test-3",
    name: "Kamil Rostam",
    role: "Corporate Executive",
    rating: 5,
    feedback: "Outstanding suspension repair and brake servicing. The car rides like it's brand new. The customer lounge has fast Wi-Fi and excellent coffee while they do computer scanning. A truly premium auto clinic.",
    carModel: "Mercedes-Benz S-Class",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&fit=crop&q=80"
  }
];

export const GALLERY_ITEMS: BeforeAfter[] = [
  {
    id: "gal-1",
    title: "Detailing & Scuff Repair",
    description: "Deep scratch removal and high-gloss ceramic clear coat polishing on a luxury black bumper.",
    beforeImg: repairBefore,
    afterImg: repairAfter
  }
];

export const WHY_CHOOSE_US = [
  {
    id: "wc-1",
    title: "Certified Technicians",
    description: "Our team consists of factory-trained, ASE-certified auto engineers with expertise in European, Japanese, and American imports.",
    iconName: "Award"
  },
  {
    id: "wc-2",
    title: "Genuine Parts (OEM)",
    description: "We use exclusively genuine or premium OEM manufacturer-approved parts backed by a comprehensive warranty.",
    iconName: "ShieldCheck"
  },
  {
    id: "wc-3",
    title: "Fast & Precise Service",
    description: "Equipped with advanced diagnostic scanning bays, allowing us to perform rapid, exact fixes without unnecessary downtime.",
    iconName: "Zap"
  },
  {
    id: "wc-4",
    title: "Affordable & Clear Pricing",
    description: "Detailed itemized quotes prior to any work. Absolutely zero surprise hidden fees or unrequested labor charges.",
    iconName: "DollarSign"
  },
  {
    id: "wc-5",
    title: "Comprehensive Warranty",
    description: "All services, components, and heavy mechanics work come backed by our reliable 12-Month / 20,000 km warranty coverage.",
    iconName: "CheckCircle"
  }
];
