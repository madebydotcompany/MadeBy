import type { Studio } from "./types";

export const studios: Studio[] = [{
  slug: "mira-kato",
  name: "Mira Kato",
  owner: "Mira Kato",
  discipline: "Ceramic artist & tableware designer",
  location: "Setagaya, Tokyo",
  bio: "I make quiet objects for daily rituals—thrown slowly, fired with curiosity, and meant to be used often.",
  avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=85",
  hero: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=1800&q=90",
  theme: { accent: "#bd5335", wash: "#f1e3d5", ink: "#2e221d" },
  socials: [{ label: "Instagram", href: "#" }, { label: "Website", href: "#" }, { label: "Pinterest", href: "#" }],
  stats: [{ value: "12.8k", label: "followers" }, { value: "284", label: "following" }, { value: "36", label: "works collected" }],
  portfolio: [
    { title: "Morning / Evening", image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=900&q=85", size: "tall" },
    { title: "A table in winter", image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=1100&q=85", size: "wide" },
    { title: "Soft edge study", image: "https://images.unsplash.com/photo-1565193298357-c2f6f1a0f5d4?auto=format&fit=crop&w=700&q=85", size: "square" },
    { title: "Salt forms", image: "https://images.unsplash.com/photo-1612196808214-b7e1d0d2bf0d?auto=format&fit=crop&w=900&q=85", size: "tall" }
  ],
  products: [
    { slug: "low-moon-bowl", name: "Low moon bowl", price: "$96", image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=700&q=85" },
    { slug: "everyday-cup-ash", name: "Everyday cup, ash", price: "$58", image: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=700&q=85" },
    { name: "Small serving plate", price: "$74", image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=700&q=85" }
  ],
  collections: [{ name: "The slow table", note: "A study in everyday gathering", image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=1200&q=85" }],
  journal: [{ title: "Notes from a quieter kiln", date: "12 June 2026", image: "https://images.unsplash.com/photo-1565193298357-c2f6f1a0f5d4?auto=format&fit=crop&w=800&q=85" }],
  videos: [{ title: "The making of a cup", duration: "03:24", image: "https://images.unsplash.com/photo-1612196808214-b7e1d0d2bf0d?auto=format&fit=crop&w=1200&q=85" }],
  achievement: "Selected for the 2026 Tokyo Craft Week emerging makers programme.",
  review: { quote: "Every piece has the feeling of having already belonged to our home.", name: "Nami O.", role: "Collector, Kyoto" },
  event: { title: "Open studio: summer firing", date: "03 Aug · 14:00–18:00", place: "Setagaya studio, Tokyo" }
}];

export function getStudio(slug: string) { return studios.find((studio) => studio.slug === slug); }
