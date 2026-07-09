/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string; // references lucide icon name
  estimatedPrice: string;
  duration: string;
  features: string[];
}

export interface Brand {
  name: string;
  logoType: "text" | "icon";
  symbol?: string;
  description?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  feedback: string;
  carModel: string;
  avatarUrl: string;
}

export interface Booking {
  id: string;
  name: string;
  phone: string;
  carModel: string;
  serviceId: string;
  preferredDate: string;
  status: "Pending" | "Confirmed" | "Completed" | "Cancelled";
  createdAt: string;
}

export interface BeforeAfter {
  id: string;
  title: string;
  description: string;
  beforeImg: string;
  afterImg: string;
}
