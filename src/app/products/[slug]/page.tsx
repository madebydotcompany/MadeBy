import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/footer";
import { Navigation } from "@/components/layout/navigation";
import { ProductPage } from "@/components/products/product-page";
import { getProduct, products } from "@/features/products/data";
export function generateStaticParams() { return products.map(({ slug }) => ({ slug })); }
export function generateMetadata({ params }: { params: { slug: string } }): Metadata { const product = getProduct(params.slug); if (!product) return {}; return { title: product.name, description: `${product.name} by ${product.studio.name}. ${product.story}`, openGraph: { title: `${product.name} by ${product.studio.name}`, description: product.story, images: [{ url: product.gallery[0], alt: product.name }] } }; }
export default function ProductRoute({ params }: { params: { slug: string } }) { const product = getProduct(params.slug); if (!product) notFound(); const structuredData = { "@context": "https://schema.org", "@type": "Product", name: product.name, image: product.gallery, description: product.story, brand: { "@type": "Brand", name: product.studio.name }, offers: { "@type": "Offer", priceCurrency: product.currency, price: product.price, availability: "https://schema.org/InStock" } }; return <><Navigation /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} /><ProductPage product={product} /><Footer /></>; }
