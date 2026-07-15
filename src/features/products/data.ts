import type { Product } from "./types";

export const products: Product[] = [{
  slug: "low-moon-bowl",
  name: "Low moon bowl",
  type: "made-on-demand",
  price: 96,
  currency: "USD",
  studio: { name: "Mira Kato", slug: "mira-kato", location: "Setagaya, Tokyo", avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=85" },
  gallery: ["https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=1400&q=90", "https://images.unsplash.com/photo-1565193298357-c2f6f1a0f5d4?auto=format&fit=crop&w=1200&q=85", "https://images.unsplash.com/photo-1612196808214-b7e1d0d2bf0d?auto=format&fit=crop&w=1200&q=85"],
  story: "A low, generous bowl made for the centre of the table. Its gentle curve holds fruit, soup, flowers or whatever the day calls for—an object that earns its place through use.",
  inspiration: "The moon over Setagaya on a damp spring evening: a pale disc, softened at the edges, glowing against everything dark.",
  process: ["Each bowl is thrown by hand in a small batch.", "It rests for two days before its rim is quietly shaped.", "A mineral-rich ash glaze is brushed on and fired at 1,240°C."],
  materials: ["High-fire stoneware", "Ash glaze", "Food-safe clear finish"],
  dimensions: "Ø 21 cm × H 6.5 cm · Approx. 780 g",
  care: "Dishwasher safe on a gentle cycle. Avoid sudden changes in temperature. A little variation in tone and form is the signature of the hand.",
  collection: { name: "The slow table", note: "Objects that make a gathering feel unhurried.", image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=1300&q=85" },
  related: [{ name: "Everyday cup, ash", price: 58, image: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=700&q=85" }, { name: "Small serving plate", price: 74, image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=700&q=85" }, { name: "Soft rim vase", price: 132, image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=700&q=85" }],
  reviews: [{ quote: "The kind of bowl that changes what you reach for every morning.", author: "Ellen R.", location: "Melbourne" }, { quote: "Beautifully quiet. The glaze catches the afternoon light in a different way each day.", author: "Joon P.", location: "Seoul" }],
  delivery: "Made for you in 3–4 weeks, then shipped from Tokyo.",
  customisation: { colors: ["Ash white", "Warm sand", "Charcoal"], materials: ["Stoneware", "Speckled stoneware"], sizes: ["Small · 17 cm", "Classic · 21 cm", "Generous · 26 cm"] }
}, {
  slug: "everyday-cup-ash", name: "Everyday cup, ash", type: "ready-made", price: 58, currency: "USD", studio: { name: "Mira Kato", slug: "mira-kato", location: "Setagaya, Tokyo", avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=85" }, gallery: ["https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1400&q=90"], story: "A cup with a thumb-sized resting place and enough weight to make the first tea of the day feel deliberate.", inspiration: "The small pause before a studio opens.", process: ["Thrown by hand", "Glazed with ash", "Fired in small batches"], materials: ["High-fire stoneware", "Ash glaze"], dimensions: "Ø 8 cm × H 9 cm · 280 ml", care: "Dishwasher safe. Avoid thermal shock.", collection: { name: "The slow table", note: "Objects that make a gathering feel unhurried.", image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=1300&q=85" }, related: [], reviews: [], delivery: "Ready to ship in 2–4 business days." }];

export function getProduct(slug: string) { return products.find((product) => product.slug === slug); }
export const formatPrice = (amount: number, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency, maximumFractionDigits: 0 }).format(amount);
