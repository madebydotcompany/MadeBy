export type ProductType = "ready-made" | "made-on-demand";

export type Product = {
  slug: string;
  name: string;
  type: ProductType;
  price: number;
  currency: string;
  studio: { name: string; slug: string; location: string; avatar: string };
  gallery: string[];
  story: string;
  inspiration: string;
  process: string[];
  materials: string[];
  dimensions: string;
  care: string;
  collection: { name: string; note: string; image: string };
  related: { name: string; price: number; image: string }[];
  reviews: { quote: string; author: string; location: string }[];
  delivery: string;
  customisation?: { colors: string[]; materials: string[]; sizes: string[] };
};

export type CartLine = {
  id: string;
  productSlug: string;
  name: string;
  unitPrice: number;
  quantity: number;
  image: string;
  customisation?: Record<string, string>;
};
