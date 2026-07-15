import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/footer";
import { Navigation } from "@/components/layout/navigation";
import { ProductPage } from "@/components/products/product-page";
import { getProduct, products } from "@/features/products/data";
import Link from "next/link";
export function generateStaticParams() { return products.map(({ slug }) => ({ slug })); }
export function generateMetadata({ params }: { params: { slug: string } }): Metadata { const product = getProduct(params.slug); if (!product) return {}; return { title: product.name, description: `${product.name} by ${product.studio.name}. ${product.story}`, openGraph: { title: `${product.name} by ${product.studio.name}`, description: product.story, images: [{ url: product.gallery[0], alt: product.name }] } }; }
export default function ProductRoute({ params }: { params: { slug: string } }) { const product = getProduct(params.slug); if (!product) notFound(); const structuredData = { "@context": "https://schema.org", "@type": "Product", name: product.name, image: product.gallery, description: product.story, brand: { "@type": "Brand", name: product.studio.name }, offers: { "@type": "Offer", priceCurrency: product.currency, price: product.price, availability: "https://schema.org/InStock" } }; return <><Navigation /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} /><nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-5 pt-6 text-sm text-muted lg:px-8"><Link href="/explore" className="hover:text-ink">Explore</Link><span className="px-2">/</span><Link href={`/studios/${product.studio.slug}`} className="hover:text-ink">{product.studio.name}</Link><span className="px-2">/</span><span aria-current="page">{product.name}</span></nav><ProductPage product={product} /><Footer /></>; }
