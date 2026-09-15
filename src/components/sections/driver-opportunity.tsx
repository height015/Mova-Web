import { ArrowRight, Bell, MapPin, NavigationArrow } from "@phosphor-icons/react/dist/ssr";

export function DriverOpportunity() {
  return <div className="opportunity-card opportunity-card--detailed" aria-label="Illustrative new ride opportunity">
    <div className="opportunity-head"><span><i/><Bell size={14} weight="fill"/> New ride opportunity</span><small>Illustrative UI</small></div>
    <div className="opportunity-meta"><strong>8 min</strong><span>Estimated pickup</span></div>
    <div className="opportunity-route"><div><MapPin size={15} weight="fill"/><p><small>Pickup</small>Current area</p></div><i/><div><NavigationArrow size={15} weight="fill"/><p><small>Destination</small>Trip destination</p></div></div>
    <div className="opportunity-offer"><span>Rider offer</span><strong>₦4,500</strong></div>
    <div className="opportunity-actions"><button type="button">Counter</button><button type="button">Accept <ArrowRight/></button></div>
  </div>;
}
