"use client";

import Link from "next/link";
import { List, X } from "@phosphor-icons/react";
import { useEffect, useRef, useState } from "react";
import { getAppAcquisitionHref, siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";

export function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [open]);

  return <>
    <button className="menu-trigger" type="button" aria-label="Open menu" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(true)}><List size={25} weight="bold" /></button>
    {open && <div className="mobile-menu" id="mobile-menu" role="dialog" aria-modal="true" aria-label="Main menu">
      <div className="mobile-menu__top"><span className="mobile-menu__label">Menu</span><button ref={closeRef} className="menu-trigger" type="button" aria-label="Close menu" onClick={() => setOpen(false)}><X size={25} weight="bold" /></button></div>
      <nav aria-label="Mobile navigation">{siteConfig.nav.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>)}</nav>
      <div className="mobile-menu__actions"><Button href={getAppAcquisitionHref()}>Get Mova</Button><Button href={siteConfig.actions.signIn} variant="secondary">Sign in</Button></div>
    </div>}
  </>;
}
