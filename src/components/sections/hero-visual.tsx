import Image from "next/image";
import { CarProfile, CheckCircle, MapPin, NavigationArrow, Star } from "@phosphor-icons/react/dist/ssr";

export function HeroVisual() {
  return <div className="hero-visual">
    <Image className="hero-photo" src="/images/marketing/hero-mobility-placeholder.jpg" alt="A rider entering a car in a modern Nigerian city" fill priority quality={84} sizes="(max-width: 767px) 100vw, 52vw" />
    <div className="hero-route" aria-hidden><span className="hero-route__start"/><span className="hero-route__end"/><CarProfile size={20} weight="fill" /></div>
    <div className="driver-search" aria-hidden><i/><span>Finding a driver</span></div>
    <div className="hero-trip-card" aria-label="Illustrative matched-driver details">
      <p><CheckCircle size={15} weight="fill" /> Driver matched <em>4 min away</em></p>
      <div className="matched-driver"><span className="driver-avatar">KA</span><span><strong>Kareem A.</strong><small>Silver sedan · 4.9 ★ · 1,420 trips</small></span></div>
      <div className="trip-point"><span><MapPin size={15} weight="fill" /></span><small>Pickup</small><strong>Your location</strong></div>
      <div className="trip-point"><span><NavigationArrow size={15} weight="fill" /></span><small>Destination</small><strong>Choose where to go</strong></div>
    </div>
    <div className="hero-offer-card"><small>Rider choice selected</small><strong>Make an Offer</strong><span>Illustrative fare · ₦4,500</span><p>Fixed ₦5,200 · Metered available</p></div>
    <div className="driver-chip"><div className="avatar">KA</div><div><small>Ready for your trip</small><strong>Kareem <Star size={12} weight="fill" /> 4.9</strong></div></div>
  </div>;
}
