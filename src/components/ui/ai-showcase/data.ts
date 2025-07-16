import { ShowcaseItem } from "./types";

export const showcaseItems: ShowcaseItem[] = [
  {
    id: "plastic-surgery-outbound",
    title: "Outbound Call Agent",
    description:
      "Watch this AI turn leads into consultation bookings for cosmetic procedures. Handles sensitive questions about pricing and procedures with the perfect balance of professionalism and warmth.",
    industry: "Plastic Surgery Office",
    type: "outbound",
    audioUrl: "/audio/Doctor.wav",
    features: [
      "Consultation Booking",
      "Procedure Information",
      "Financing Options",
      "Follow-up Sequences",
    ],
    resultStats: [
      { metric: "Contact Rate", value: "100%" },
      { metric: "Consultation Bookings", value: "+58%" },
      { metric: "Cost per Lead", value: "-45%" },
    ],
  },
  {
    id: "law-office-agent",
    title: "Legal Intake Agent",
    description:
      "Listen to this AI conduct professional legal intake calls, gathering case details and qualifying potential clients. Handles sensitive legal matters with appropriate discretion and empathy.",
    industry: "Law Office",
    type: "inbound",
    audioUrl: "/audio/Lawyer.wav",
    features: [
      "Client Intake",
      "Case Qualification",
      "Appointment Scheduling",
      "Document Collection",
    ],
    resultStats: [
      { metric: "Call Answer Rate", value: "100%" },
      { metric: "Client Conversion", value: "+52%" },
      { metric: "Case Quality", value: "91%" },
    ],
  },
  {
    id: "alarm-security-support",
    title: "Technical Support Agent",
    description:
      "Our AI handles technical support calls for alarm system troubleshooting, monitoring center inquiries, and customer service. Provides instant responses to common issues while escalating complex matters to your technicians.",
    industry: "Alarm & Security Company",
    type: "support",
    audioUrl: "https://ia600908.us.archive.org/6/items/tech_20250716/tech.wav",
    features: [
      "System Diagnostics",
      "Alarm Troubleshooting",
      "Monitoring Support",
      "Service Scheduling",
    ],
    resultStats: [
      { metric: "Labor Cost Reduction", value: "80%" },
      { metric: "Revenue Increase", value: "30%" },
      { metric: "Call Resolution", value: "95%" },
    ],
  },
];
