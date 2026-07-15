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

const mira = studios[0];
studios.push(
  { ...mira, slug: "sol-park", name: "SOL PARK", owner: "Sol Park", discipline: "Sneaker artist & material researcher", location: "Seoul, South Korea", bio: "I rebuild familiar silhouettes through colour, repair and improbable materials.", hero: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1800&q=90", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=85", theme: { accent: "#e24c2a", wash: "#f7e0d8", ink: "#242020" }, collections: [{ name: "Street relics", note: "Footwear made from traces of the city.", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=85" }] },
  { ...mira, slug: "zuri-ade", name: "Zuri Ade Studio", owner: "Zuri Ade", discipline: "Painter & colour archivist", location: "Lagos, Nigeria", bio: "Paintings that hold the heat, music and improvised architecture of a changing city.", hero: "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=1800&q=90", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=85", theme: { accent: "#b33d2d", wash: "#f5dfcf", ink: "#34251f" }, collections: [{ name: "After the rain", note: "Painted notes from an electric city.", image: "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=1200&q=85" }] },
  { ...mira, slug: "lina-vale", name: "Lina Vale", owner: "Lina Vale", discipline: "Home decor creator", location: "Lisbon, Portugal", bio: "I make domestic objects with a little theatre built into their everyday use.", hero: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1800&q=90", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=85", theme: { accent: "#927449", wash: "#eee6d7", ink: "#2b3028" }, collections: [{ name: "Room notes", note: "A gentle collection for lived-in corners.", image: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1200&q=85" }] },
  { ...mira, slug: "noah-landry", name: "Noah Landry", owner: "Noah Landry", discipline: "Woodworker & object maker", location: "Montréal, Canada", bio: "Furniture and useful objects with soft edges, built to take on a life of their own.", hero: "https://images.unsplash.com/photo-1541971875076-8f970d573be6?auto=format&fit=crop&w=1800&q=90", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=85", theme: { accent: "#8a4d2d", wash: "#eadbca", ink: "#33271e" }, collections: [{ name: "Grain & gesture", note: "Wood turned into warm companions.", image: "https://images.unsplash.com/photo-1541971875076-8f970d573be6?auto=format&fit=crop&w=1200&q=85" }] },
  { ...mira, slug: "saanvi-studio", name: "Saanvi Studio", owner: "Saanvi Mehra", discipline: "Resin artist & textile maker", location: "Jaipur, India", bio: "I layer translucent colour, cloth and found fragments into objects that catch the light.", hero: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=1800&q=90", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=85", theme: { accent: "#a4426c", wash: "#f2dde7", ink: "#392837" }, collections: [{ name: "Held light", note: "Resin and textile studies in colour.", image: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=1200&q=85" }] }
);

export function getStudio(slug: string) { return studios.find((studio) => studio.slug === slug); }
