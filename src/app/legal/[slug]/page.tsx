import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";

export default async function LegalPage({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; if (!["privacy", "terms"].includes(slug)) notFound(); const title = slug === "privacy" ? "Privacy" : "Terms"; return <main id="main-content" className="placeholder-page"><Container><p className="eyebrow">Legal</p><h1>{title}</h1><p>Mova’s {title.toLowerCase()} information will be published here before public launch.</p><div className="coming-soon">Coming soon—no legal terms are represented by this placeholder.</div></Container></main>; }
