import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { legalDraftLabel, legalDraftDate, legalDocuments } from "@/config/legal-content";

export const metadata: Metadata = {
  title: "Legal Center",
  description: "Mova Nigeria Launch Draft legal documents and privacy information.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/legal" },
};

export default function LegalCenter() {
  return <main id="main-content" className="legal-page"><Container><header className="legal-intro"><p className="eyebrow">Mova Legal Center</p><h1>Public legal documents.</h1><p>These documents describe Mova’s technology platform and marketplace model for the Nigeria launch context.</p><div className="legal-draft-notice"><strong>{legalDraftLabel}</strong><span>Effective date: To be confirmed · {legalDraftDate}</span></div></header><div className="legal-document-grid">{legalDocuments.map((document) => <article className="legal-document-card" key={document.slug}><p className="eyebrow">Nigeria Launch Draft</p><h2>{document.title}</h2><p>{document.summary}</p><Link className="button button--secondary" href={`/legal/${document.slug}`}>Read document</Link></article>)}</div><p className="legal-center-note">General Terms apply broadly. Ride and Delivery terms supplement them. The Privacy Policy explains personal-information handling. All documents remain pending qualified Nigerian legal and privacy counsel review.</p></Container></main>;
}
