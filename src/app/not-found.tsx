import Link from "next/link";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return <main id="main-content" className="public-page"><Container><p className="eyebrow">Mova</p><h1>That page moved on.</h1><p className="public-page__description">The page you requested is not available. Start again from a public Mova destination.</p><div className="button-row"><Link className="button" href="/">Home</Link><Link className="button button--secondary" href="/ride">Explore Ride</Link><Link className="button button--secondary" href="/help">Visit Help</Link></div></Container></main>;
}