import type { MetadataRoute } from "next";
const baseUrl = process.env.NEXT_PUBLIC_APP_URL ?? "https://studioverse.example";
export default function sitemap(): MetadataRoute.Sitemap { const pages = ["", "/explore", "/categories", "/community", "/blank-marketplace", "/studios/mira-kato", "/products/low-moon-bowl", "/products/everyday-cup-ash"]; return pages.map(path => ({ url: `${baseUrl}${path}`, lastModified: new Date(), changeFrequency: path === "" ? "weekly" : "monthly", priority: path === "" ? 1 : .7 })); }
