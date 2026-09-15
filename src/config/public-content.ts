export type PublicPageContent = {
  eyebrow: string;
  title: string;
  description: string;
  sections: Array<{ title: string; body: string }>;
  cta?: { label: string; href: string };
};

export const publicPages: Record<string, PublicPageContent> = {
  ride: {
    eyebrow: "Ride with Mova",
    title: "Choose how your trip works.",
    description: "Mova gives Riders clear choices before every request, so the pricing approach fits the journey.",
    sections: [
      { title: "Make an Offer", body: "Suggest a fare within Mova’s supported pricing boundaries. Drivers may accept or respond with a counteroffer where the product permits." },
      { title: "Fixed Price", body: "See and agree to the supported fixed-price experience before the trip begins." },
      { title: "Metered Ride", body: "The final fare reflects the actual journey according to Mova’s metered pricing model." },
    ],
    cta: { label: "Get Mova", href: "/#get-mova" },
  },
  drive: {
    eyebrow: "Drive with Mova",
    title: "Find opportunities with useful trip information.",
    description: "Explore Driver opportunities, review trip details, and choose what works for you through the Mova experience.",
    sections: [
      { title: "See the important details", body: "Mova is designed to keep relevant trip and destination information visible before a supported request is accepted." },
      { title: "Choose where you can", body: "Where supported, Drivers may accept or respond to an offer. Availability depends on market and product configuration." },
      { title: "Start in the app", body: "Driver onboarding destinations will be provided through an approved Mova flow when available. No earnings are guaranteed on this site." },
    ],
    cta: { label: "Driver information", href: "/help" },
  },
  deliver: {
    eyebrow: "Mova Delivery",
    title: "Move packages with a clear delivery experience.",
    description: "Mova Delivery is designed for people sending packages and Couriers moving them through the city.",
    sections: [
      { title: "Send a package", body: "Create a parcel request, provide pickup and recipient details, and follow the delivery lifecycle where supported." },
      { title: "Track the delivery", body: "Assigned Couriers and delivery milestones can be presented through the approved Mova experience. External recipients should not be assumed to have app access." },
      { title: "Deliver with Mova", body: "Courier opportunities and onboarding will be available through an approved Mova destination when ready. Income is not guaranteed." },
    ],
    cta: { label: "Explore Mova in the app", href: "/#get-mova" },
  },
  safety: {
    eyebrow: "Safety at every step",
    title: "Keep the important trip details visible.",
    description: "Mova is designed around clearer trip information, account care, communication, and support access.",
    sections: [
      { title: "Trip visibility", body: "Follow relevant details during an active service and keep the journey context close at hand." },
      { title: "Account security", body: "Account access and personal information should be handled through Mova’s approved product and identity flows." },
      { title: "Communication and support", body: "Use supported communication and reporting paths when you need help. Mova does not make a guarantee of safety through this informational site." },
    ],
    cta: { label: "Visit Help", href: "/help" },
  },
  about: {
    eyebrow: "About Mova",
    title: "Mobility made around choice.",
    description: "Mova brings Ride, Drive, and Delivery experiences together in one public brand, launching first in Nigeria and designed for more markets over time.",
    sections: [
      { title: "Why choice matters", body: "Different journeys call for different ways to move. Mova’s public experience explains those choices clearly without recreating the mobile app." },
      { title: "One ecosystem", body: "Riders, Drivers, and Couriers are part of a connected mobility and delivery platform." },
      { title: "Nigeria first", body: "Nigeria is Mova’s first launch market. Future country and service availability will be communicated through public configuration and authoritative market information." },
    ],
    cta: { label: "See market information", href: "/cities" },
  },
  help: {
    eyebrow: "Mova Help",
    title: "Find the right place to start.",
    description: "Public guidance for understanding Mova’s Ride, Drive, Delivery, Account, Safety, and support paths.",
    sections: [
      { title: "Riding", body: "Learn about Make an Offer, Fixed Price, Metered Ride, and the information shown before a request." },
      { title: "Driving and Delivery", body: "Review the public product explanations before using the approved Mova onboarding experience." },
      { title: "Account and Safety", body: "For account or incident support, use the in-app support path when available. A public support endpoint is not configured yet." },
    ],
    cta: { label: "Explore Ride", href: "/ride" },
  },
};