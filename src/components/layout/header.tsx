import Link from "next/link";
import { Container } from "@/components/ui/container";
import { BrandLogo } from "@/components/ui/brand-logo";
import { Button } from "@/components/ui/button";
import { MobileNavigation } from "@/components/navigation/mobile-navigation";
import { siteConfig } from "@/config/site";

export function Header() {
  return <header className="site-header header-fidelity"><Container className="header-inner">
    <Link href="/" aria-label="Mova home"><BrandLogo /></Link>
    <nav className="desktop-nav" aria-label="Main navigation">{siteConfig.nav.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}</nav>
    <div className="desktop-actions"><Button href={siteConfig.actions.signIn} variant="ghost">Sign in</Button><Button href={siteConfig.actions.getMova}>Get Mova</Button></div>
    <MobileNavigation />
  </Container></header>;
}
