import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/container";
import { getAppAcquisitionHref, getMarket, siteConfig } from "@/config/site";
import { publicPages } from "@/config/public-content";

const routeSlugs = [...Object.keys(publicPages), "cities", "signin"] as const;
type RouteSlug = (typeof routeSlugs)[number];

const routeMeta: Record<RouteSlug, { title: string; description: string }> = {
  ride: { title: "Ride with Mova", description: "Explore Make an Offer, Fixed Price, and Metered Ride choices with Mova." },
  drive: { title: "Drive with Mova", description: "Explore Driver opportunities and trip information with Mova." },
  deliver: { title: "Mova Delivery", description: "Learn how Mova supports package senders and Couriers." },
  safety: { title: "Safety at Mova", description: "Learn how Mova keeps trip information, communication, and support visible." },
  cities: { title: "Mova markets", description: "See Mova’s first launch market and public availability context." },
  about: { title: "About Mova", description: "Learn what Mova is and why choice matters." },
  help: { title: "Mova Help", description: "Find public guidance for Ride, Drive, Delivery, Account, and Safety." },
  signin: { title: "Sign in to Mova", description: "Manage your Mova account through the approved Mova app experience." },
};

export function generateStaticParams() { return routeSlugs.map((slug) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const meta = routeMeta[slug as RouteSlug];
  if (!meta) return {};
  return { title: meta.title, description: meta.description, alternates: { canonical: `/${slug}` }, openGraph: { title: `${meta.title} | ${siteConfig.name}`, description: meta.description, url: `/${slug}` } };
}

function CitiesPage() {
  const market = getMarket();
  return <PageShell eyebrow="Where Mova moves" title="Starting in Nigeria. Built to go further." description="Nigeria is Mova’s first launch market. Confirmed country and service availability will be published as rollout information is approved.">
    <div className="public-content-grid"><article className="public-info-card"><CheckCircle size={24} weight="fill" /><h2>{market.country}</h2><p>First launch market</p><strong>{market.status === "launching" ? "Launching first" : "Coming soon"}</strong></article><article className="public-info-card"><h2>More markets</h2><p>No additional markets are announced on this site yet.</p><Link className="button button--secondary" href="/help">Visit Help</Link></article></div>
    <Link className="button button--primary" href="/#get-mova">Get Mova</Link>
  </PageShell>;
}

function SignInPage() {
  return <PageShell eyebrow="Account access" title="Manage your Mova account in the app." description="A public web sign-in contract is not currently configured. Use the approved Mova app experience for account access."><Link className="button" href={getAppAcquisitionHref()}>Get Mova</Link><Link className="button button--secondary" href="/help">Visit Help</Link></PageShell>;
}

function PageShell({ eyebrow, title, description, children }: { eyebrow: string; title: string; description: string; children: React.ReactNode }) {
  return <main id="main-content" className="public-page"><Container><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="public-page__description">{description}</p>{children}<Link className="public-page__back" href="/"><ArrowLeft aria-hidden />Back to homepage</Link></Container></main>;
}

export default async function PublicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!routeSlugs.includes(slug as RouteSlug)) notFound();
  if (slug === "cities") return <CitiesPage />;
  if (slug === "signin") return <SignInPage />;
  const page = publicPages[slug];
  return <PageShell eyebrow={page.eyebrow} title={page.title} description={page.description}><div className="public-content-grid">{page.sections.map((section) => <article className="public-info-card" key={section.title}><h2>{section.title}</h2><p>{section.body}</p></article>)}</div>{page.cta && <Link className="button" href={page.cta.label === "Get Mova" ? getAppAcquisitionHref() : page.cta.href}>{page.cta.label}</Link>}</PageShell>;
}
