const faqs = [
  ["What is Mova?", "Mova is a mobility platform that brings rides, driver opportunities, and delivery experiences together in one place."],
  ["How does making an offer work?", "For supported trips, you can suggest a fare within Mova’s pricing boundaries and respond to offers from available drivers."],
  ["Can I choose a fixed-price ride?", "Yes. Fixed-price booking lets you see and agree to the trip price before your journey begins."],
  ["What is a metered ride?", "A metered ride calculates the fare from the actual journey using Mova’s metered pricing model."],
  ["How do I become a Driver?", "Visit the Drive page to learn about the onboarding process and register your interest."],
  ["Does Mova offer delivery?", "Mova Courier is being built for package delivery and courier opportunities through the same Mova platform."],
] as const;

export function Faq() {
  return <div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden>+</span></summary><p>{answer}</p></details>)}</div>;
}
