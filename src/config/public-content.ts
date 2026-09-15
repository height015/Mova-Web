export type PublicPageContent = {
  eyebrow: string;
  title: string;
  description: string;
  variant: "ride" | "drive" | "deliver" | "safety" | "about" | "help";
  sections: Array<{ title: string; body: string }>;
  steps?: string[];
  cta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export const publicPages: Record<string, PublicPageContent> = {
  ride: {
    eyebrow: "Ride with Mova",
    title: "Move on your terms.",
    description: "Your ride. Your price. Your choice. Mova gives Riders three clear ways to choose before every request.",
    variant: "ride",
    sections: [
      { title: "Make an Offer", body: "Suggest a fare within Mova’s supported pricing boundaries. Drivers may accept or respond with a counteroffer where the product permits." },
      { title: "Fixed Price", body: "See and agree to a supported upfront price before the trip begins, so the decision is clear before you request." },
      { title: "Metered Ride", body: "The final fare reflects the actual journey according to Mova’s metered pricing model, including the trip context." },
    ],
    steps: ["Choose a destination", "Choose how you want to ride", "Review the available trip information", "Take the trip and complete the journey"],
    cta: { label: "Get Mova", href: "/#get-mova" },
    secondaryCta: { label: "Explore Safety", href: "/safety" },
  },
  drive: {
    eyebrow: "Drive with Mova",
    title: "Your time. Your opportunities.",
    description: "Explore Driver opportunities, review useful trip information, and make informed choices through the Mova experience.",
    variant: "drive",
    sections: [
      { title: "Useful trip information", body: "Mova is designed to keep relevant pickup, destination, and offer context visible before a supported request is accepted." },
      { title: "Choice where supported", body: "Drivers may accept or respond to an offer where the product and market support that flow. Availability is not a promise of earnings." },
      { title: "One platform", body: "Ride, communication, support, and safety context come together in one Mova experience." },
    ],
    steps: ["Review an opportunity", "See the available trip context", "Accept or respond where supported", "Complete the trip through Mova"],
    cta: { label: "Driver information", href: "/help" },
    secondaryCta: { label: "Explore Safety", href: "/safety" },
  },
  deliver: {
    eyebrow: "Mova Delivery",
    title: "Move packages through the city.",
    description: "A clear delivery experience for people sending packages and Couriers moving them through the city.",
    variant: "deliver",
    sections: [
      { title: "Send with Mova", body: "Create a delivery request, provide pickup and recipient information, and follow the delivery lifecycle where supported." },
      { title: "Recipient experience", body: "Recipients who use Mova may participate in the supported in-app delivery experience. External recipients should not be assumed to have app access." },
      { title: "Deliver with Mova", body: "Couriers can explore delivery opportunities, pickup information, recipient handoff, and completion through an approved Mova flow when available." },
    ],
    steps: ["Create the delivery", "Enter pickup and recipient information", "Courier assignment and active tracking", "Recipient handoff and completion"],
    cta: { label: "Get Mova", href: "/#get-mova" },
    secondaryCta: { label: "Courier information", href: "/help" },
  },
  safety: {
    eyebrow: "Safety at every step",
    title: "Keep the important trip details visible.",
    description: "Mova approaches Safety through trip visibility, account care, communication, reporting, and support access.",
    variant: "safety",
    sections: [
      { title: "Trip visibility", body: "Follow relevant journey details during an active service and keep the context of the trip close at hand." },
      { title: "Account security", body: "Account access and personal information should be handled through Mova’s approved product and identity flows." },
      { title: "Communication and support", body: "Use supported communication and reporting paths when you need help. This website does not make a guarantee of safety." },
    ],
    steps: ["Review the trip context", "Stay connected through supported communication", "Share or report through available product paths", "Use Help when you need support"],
    cta: { label: "Get Mova", href: "/#get-mova" },
    secondaryCta: { label: "Visit Help", href: "/help" },
  },
  about: {
    eyebrow: "About Mova",
    title: "Mobility made around choice.",
    description: "Mova brings Ride, Drive, and Delivery experiences together in one public brand, launching first in Nigeria and designed for more markets over time.",
    variant: "about",
    sections: [
      { title: "Why choice matters", body: "Different journeys call for different ways to move. Mova makes those choices clearer before the journey begins." },
      { title: "One ecosystem", body: "Riders, Drivers, and Couriers are part of a connected mobility and delivery platform built around useful information." },
      { title: "Nigeria first", body: "Nigeria is Mova’s first launch market. Future country and service availability will be communicated through approved public content." },
    ],
    cta: { label: "Explore Ride", href: "/ride" },
    secondaryCta: { label: "See markets", href: "/cities" },
  },
  help: {
    eyebrow: "Mova Help",
    title: "Find the right place to start.",
    description: "A focused public help foundation for understanding Mova’s Ride, Drive, Delivery, Account, and Safety paths.",
    variant: "help",
    sections: [
      { title: "Riding", body: "Learn about Make an Offer, Fixed Price, Metered Ride, and the information shown before a request." },
      { title: "Driving and Delivery", body: "Review the public product explanations before using an approved Mova onboarding experience." },
      { title: "Account and Safety", body: "For account or incident support, use the in-app support path where available. No public support contact is configured yet." },
    ],
    cta: { label: "Explore Ride", href: "/ride" },
    secondaryCta: { label: "Get Mova", href: "/#get-mova" },
  },
};
