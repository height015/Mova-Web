import { CheckCircle, Handshake, LockKey, MapTrifold, Minus, Path, Plus } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function RideModes() {
  return <section className="section ride-modes-section" id="ride-modes"><Container>
    <SectionHeading eyebrow="The power of choice" title="How do you want to ride today?" copy="Different journeys call for different pricing approaches. Mova gives you three clear ways to choose before every request." align="center" />
    <div className="mode-connector" aria-hidden />
    <div className="ride-mode-grid ride-mode-grid--detailed" role="region" aria-label="Mova ride options">
      <article className="ride-mode-card">
        <div className="mode-card-head"><span className="mode-icon mode-icon--gradient"><Handshake size={25} weight="duotone" /></span><span className="mode-badge">More choice</span></div>
        <h3>Make an Offer</h3><p className="mode-subtitle">More say in what you pay</p><p>Suggest a fare within Mova’s configured pricing boundaries. Drivers may accept or respond with a counteroffer where supported.</p>
        <div className="mode-ui"><div className="mode-ui-label"><span>Suggested fare</span><strong>Illustrative</strong></div><div className="offer-control"><button disabled aria-label="Decrease illustrative offer"><Minus /></button><div><small>Your offer</small><strong>₦5,000</strong></div><button disabled aria-label="Increase illustrative offer"><Plus /></button></div><p className="ui-note">Example interface—not a published fare</p></div>
      </article>
      <article className="ride-mode-card ride-mode-card--selected">
        <span className="featured-label">Upfront price</span><div className="mode-card-head"><span className="mode-icon mode-icon--navy"><LockKey size={25} weight="duotone" /></span><span className="mode-badge">Clear before booking</span></div>
        <h3>Fixed Price</h3><p className="mode-subtitle">Certainty before you step in</p><p>See the price before the trip and choose whether to proceed. The agreed amount is presented clearly before booking.</p>
        <div className="mode-ui"><div className="mode-ui-label"><span>Upfront price</span><strong>Agreed before trip</strong></div><div className="fixed-total"><div><small>Total shown</small><strong>₦5,200</strong></div><CheckCircle size={28} weight="fill" /></div><p className="ui-note">Example interface—not a published fare</p></div>
      </article>
      <article className="ride-mode-card">
        <div className="mode-card-head"><span className="mode-icon mode-icon--blue"><Path size={25} weight="duotone" /></span><span className="mode-badge">Journey based</span></div>
        <h3>Metered Ride</h3><p className="mode-subtitle mode-subtitle--blue">Fare based on the journey</p><p>Fare reflects the actual journey according to Mova’s metered pricing model, including applicable distance and time.</p>
        <div className="mode-ui"><div className="mode-ui-label"><span>Journey progress</span><strong className="live-label"><i /> Live</strong></div><div className="meter-total"><div><small>Distance / time</small><strong>14.2 km <em>· 26m</em></strong></div><div><small>Current fare</small><strong>₦3,850</strong></div></div><p className="ui-note"><MapTrifold size={13}/> Illustrative metered journey</p></div>
      </article>
    </div><div className="mobile-carousel-dots" aria-hidden="true"><i className="is-current"/><i/><i/></div>
  </Container></section>;
}
