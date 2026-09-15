import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/container";

const pages = { ride: ["Ride with Mova", "Flexible ways to book your next journey."], drive: ["Drive with Mova", "Explore opportunities on your own terms."], deliver: ["Mova Courier", "Move packages and discover courier opportunities."], safety: ["Safety at Mova", "How we’re designing for more confident journeys."], cities: ["Where Mova moves", "Market and city availability will be published here."], about: ["About Mova", "A mobility platform built around choice."], help: ["Mova Help", "Support resources are coming soon."], signin: ["Sign in", "Account access will be available here when it launches."] } as const;

export function generateStaticParams() { return Object.keys(pages).map((slug) => ({ slug })); }

export default async function FoundationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const page = pages[slug as keyof typeof pages]; if (!page) notFound();
  return <main id="main-content" className="placeholder-page"><Container><p className="eyebrow">Mova</p><h1>{page[0]}</h1><p>{page[1]}</p><div className="coming-soon">This page is ready for its next implementation phase.</div><Link href="/"><ArrowLeft />Back to the homepage</Link></Container></main>;
}
