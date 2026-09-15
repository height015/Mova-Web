import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
	const { slug } = await params;
	const title = slug === "privacy" ? "Privacy" : "Terms";
	return { title: `${title} pending`, description: `Mova’s official ${title.toLowerCase()} information is being finalized.`, robots: { index: false, follow: true }, alternates: { canonical: `/legal/${slug}` } };
}

 export default async function LegalPage({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; if (!["privacy", "terms"].includes(slug)) notFound(); const title = slug === "privacy" ? "Privacy" : "Terms"; return <main id="main-content" className="public-page"><Container><p className="eyebrow">Legal content pending</p><h1>{title}</h1><p className="public-page__description">Mova’s official {title.toLowerCase()} information is being finalized before public launch.</p><div className="coming-soon">This page is not a final legal policy or contractual document.</div></Container></main>; }
