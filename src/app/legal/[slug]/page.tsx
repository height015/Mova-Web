import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { legalDocuments, legalDocumentsBySlug, legalDraftDate, legalDraftLabel } from "@/config/legal-content";

export function generateStaticParams() { return legalDocuments.map((document) => ({ slug: document.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const document = legalDocumentsBySlug[slug as keyof typeof legalDocumentsBySlug];
  if (!document) return {};
  return { title: `${document.title} — Nigeria Draft`, description: document.summary, robots: { index: false, follow: true }, alternates: { canonical: `/legal/${document.slug}` } };
}

export default async function LegalDocumentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const document = legalDocumentsBySlug[slug as keyof typeof legalDocumentsBySlug];
  if (!document) notFound();
  return <main id="main-content" className="legal-page legal-document-page"><Container><div className="legal-document-layout"><aside className="legal-toc" aria-label="Document contents"><Link href="/legal">Legal Center</Link><p>Contents</p><nav>{document.sections.map((section) => <a key={section.id} href={`#${section.id}`}>{section.title}</a>)}</nav></aside><article className="legal-document"><header><p className="eyebrow">Nigeria Launch Draft v1</p><h1>{document.title}</h1><p className="legal-document-summary">{document.summary}</p><div className="legal-draft-notice"><strong>{legalDraftLabel}</strong><span>Effective date: To be confirmed · {legalDraftDate}</span></div></header>{document.sections.map((section) => <section id={section.id} key={section.id}><h2>{section.title}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}</section>)}<footer className="legal-document-footer"><Link href="/legal">Back to Legal Center</Link><Link href="/">Mova homepage</Link></footer></article></div></Container></main>;
}
