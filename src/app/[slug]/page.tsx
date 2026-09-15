import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Car, CheckCircle, MapPin, Package, ShieldCheck } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/container";
import { getAppAcquisitionHref, getCourierAcquisitionHref, getDriverAcquisitionHref, getMarket, siteConfig } from "@/config/site";
import { publicPages, type PublicPageContent } from "@/config/public-content";

const routeSlugs = [...Object.keys(publicPages), "cities", "signin"] as const;
type RouteSlug = (typeof routeSlugs)[number];
const routeMeta: Record<RouteSlug, { title: string; description: string }> = {
  ride: { title: "Ride with Mova", description: "Explore Make an Offer, Fixed Price, and Metered Ride choices with Mova." },
  drive: { title: "Drive with Mova", description: "Explore Driver opportunities and trip information with Mova." },
  deliver: { title: "Delivery with Mova", description: "Learn how Mova supports package senders and Couriers." },
  safety: { title: "Safety at Mova", description: "Learn how Mova approaches trip visibility, communication, and support." },
  cities: { title: "Mova Markets", description: "See Mova’s first launch market and public availability context." },
  about: { title: "About Mova", description: "Learn what Mova is and why choice matters." },
  help: { title: "Mova Help", description: "Find public guidance for Ride, Drive, Delivery, Account, and Safety." },
  signin: { title: "Sign in to Mova", description: "Manage your Mova account through the approved Mova app experience." },
};

export function generateStaticParams() { return routeSlugs.map((slug) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const meta = routeMeta[slug as RouteSlug];
  if (!meta) return {};
  return { title: meta.title, description: meta.description, alternates: { canonical: `/${slug}` }, openGraph: { title: `${meta.title} | ${siteConfig.name}`, description: meta.description, url: `/${slug}` } };
}

function PageVisual({ variant }: { variant: PublicPageContent["variant"] }) {
  if (variant === "ride") return <div className="public-visual public-visual--ride"><div className="public-phone"><small>Active Mova ride</small><strong>Trip in progress</strong><div className="public-route"><i/><span/><b/></div><div className="public-ui-row"><span>Driver matched</span><strong>On the way</strong></div></div><div className="public-orbit-label"><MapPin size={16} weight="fill" />Choose how you move</div></div>;
  if (variant === "drive") return <div className="public-visual public-visual--drive"><div className="public-opportunity"><small>NEW RIDE OPPORTUNITY</small><strong>Lekki Phase 1 → Ikeja</strong><span>Trip information available</span><div><b>Counter</b><b>Accept</b></div></div><div className="public-visual-route"><i/><i/><i/></div></div>;
  if (variant === "deliver") return <div className="public-visual public-visual--deliver"><Package size={42} weight="duotone" /><strong>PARCEL IN TRANSIT</strong><span>Courier assigned · Recipient handoff</span><div className="delivery-progress"><i/></div></div>;
  if (variant === "safety") return <div className="public-visual public-visual--safety"><ShieldCheck size={42} weight="duotone" /><strong>Trip details close at hand</strong><span>Visibility · Communication · Support</span><div className="safety-route"><i/><i/></div></div>;
  if (variant === "about") return <div className="public-visual public-visual--about"><Car size={42} weight="duotone" /><strong>Your ride. Your price. Your choice.</strong><span>One platform for Ride, Drive, and Delivery.</span></div>;
  return <div className="public-visual public-visual--help"><CheckCircle size={42} weight="duotone" /><strong>Start with what you need</strong><span>Ride · Drive · Delivery · Safety</span></div>;
}

function CitiesPage() {
  const market = getMarket();
  return <PageShell eyebrow="Where Mova moves" title="Starting in Nigeria. Built to go further." description="Nigeria is Mova’s first launch market. Confirmed country and service availability will be published as rollout information is approved." variant="about"><div className="market-page-grid"><div className="public-info-card public-info-card--market"><CheckCircle size={24} weight="fill" /><h2>{market.country}</h2><p>First launch market · {market.currency}</p><strong>Launching first</strong></div><div className="market-page-note"><h2>Designed to expand</h2><p>No additional markets are announced on this site yet. Mova’s country and service content will grow through approved public configuration.</p><Link className="button button--secondary" href="/help">Visit Help</Link></div></div><div className="public-map-note"><span>Illustrative launch-market map</span><p>The Lagos/Nigeria visual is conceptual and does not show live Drivers, Riders, or fleet data.</p></div><Link className="button" href={getAppAcquisitionHref()}>Get Mova</Link></PageShell>;
}
function SignInPage() { return <PageShell eyebrow="Account access" title="Manage your Mova account in the app." description="A public web sign-in contract is not currently configured. Use the approved Mova app experience for account access." variant="safety"><Link className="button" href={getAppAcquisitionHref()}>Get Mova</Link><Link className="button button--secondary" href="/help">Visit Help</Link></PageShell>; }

function PageShell({ eyebrow, title, description, variant, children }: { eyebrow: string; title: string; description: string; variant: PublicPageContent["variant"]; children?: React.ReactNode }) {
  return <main id="main-content" className={`public-page public-page--${variant}`}><Container><div className="public-page-hero"><div><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="public-page__description">{description}</p></div><PageVisual variant={variant} /></div>{children}<Link className="public-page__back" href="/"><ArrowLeft aria-hidden />Back to homepage</Link></Container></main>;
}
function ContentPage({ page }: { page: PublicPageContent }) {
  const primaryHref = page.variant === "drive" ? getDriverAcquisitionHref() : page.cta.label === "Get Mova" ? getAppAcquisitionHref() : page.cta.href;
  const secondaryHref = page.variant === "deliver" ? getCourierAcquisitionHref() : page.secondaryCta?.href;
  return <PageShell eyebrow={page.eyebrow} title={page.title} description={page.description} variant={page.variant}><div className="public-content-grid">{page.sections.map((section) => <article className="public-info-card" key={section.title}><h2>{section.title}</h2><p>{section.body}</p></article>)}</div>{page.steps && <section className="public-steps"><p className="eyebrow">How it comes together</p><div>{page.steps.map((step, index) => <article key={step}><b>0{index + 1}</b><span>{step}</span></article>)}</div></section>}<div className="public-page-actions"><Link className="button" href={primaryHref}>{page.cta.label}</Link>{page.secondaryCta && <Link className="button button--secondary" href={secondaryHref || page.secondaryCta.href}>{page.secondaryCta.label}</Link>}</div></PageShell>;
}
export default async function PublicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; if (!routeSlugs.includes(slug as RouteSlug)) notFound();
  if (slug === "cities") return <CitiesPage />; if (slug === "signin") return <SignInPage />;
  return <ContentPage page={publicPages[slug]} />;
}
