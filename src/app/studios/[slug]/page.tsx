import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { StudioPage } from "@/components/studios/studio-page";
import { getStudio, studios } from "@/features/studios/data";
export function generateStaticParams() { return studios.map(({ slug }) => ({ slug })); }
export function generateMetadata({ params }: { params: { slug: string } }): Metadata { const studio = getStudio(params.slug); if (!studio) return {}; return { title: studio.name, description: studio.bio, openGraph: { title: studio.name, description: studio.bio, images: [{ url: studio.hero, alt: studio.name }] } }; }
export default function StudioRoute({ params }: { params: { slug: string } }) { const studio = getStudio(params.slug); if (!studio) notFound(); const structuredData = { "@context": "https://schema.org", "@type": "Person", name: studio.owner, jobTitle: studio.discipline, address: { "@type": "PostalAddress", addressLocality: studio.location }, url: `/studios/${studio.slug}` }; return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} /><StudioPage studio={studio} /></>; }
