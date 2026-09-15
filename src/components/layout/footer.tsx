import Link from "next/link";
import { BrandLogo } from "@/components/ui/brand-logo";
import { Container } from "@/components/ui/container";

const groups = [
  { title: "Mova", links: [["About", "/about"], ["Safety", "/safety"], ["Cities", "/cities"]] },
  { title: "Ride", links: [["Ride with Mova", "/ride"], ["Help", "/help"]] },
  { title: "Earn", links: [["Drive", "/drive"], ["Deliver", "/deliver"]] },
  { title: "Legal", links: [["Privacy (coming soon)", "/legal/privacy"], ["Terms (coming soon)", "/legal/terms"]] },
] as const;

export function Footer() {
  return <footer className="site-footer"><Container>
    <div className="footer-grid"><div className="footer-brand"><Link href="/" aria-label="Mova home"><BrandLogo inverse /></Link><p>Your ride. Your price. Your choice.</p><p className="launch-note">Launching first in Nigeria.</p></div>
      {groups.map((group) => <div className="footer-group" key={group.title}><h2>{group.title}</h2>{group.links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</div>)}
    </div>
    <div className="footer-bottom"><p>© {new Date().getFullYear()} Mova. All rights reserved.</p><p>Built to move with you.</p></div>
  </Container></footer>;
}
