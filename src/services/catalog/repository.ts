import { products } from "@/features/products/data";
import { studios } from "@/features/studios/data";
import type { Product } from "@/features/products/types";
import type { Studio } from "@/features/studios/types";

/** UI-facing contract. Replace this mock implementation with Prisma queries without changing feature components. */
export interface CatalogRepository {
  listStudios(): Promise<Studio[]>;
  getStudio(slug: string): Promise<Studio | null>;
  listProducts(): Promise<Product[]>;
  getProduct(slug: string): Promise<Product | null>;
  search(query: string): Promise<{ studios: Studio[]; products: Product[] }>;
}

export const mockCatalogRepository: CatalogRepository = {
  async listStudios() { return studios; },
  async getStudio(slug) { return studios.find(studio => studio.slug === slug) ?? null; },
  async listProducts() { return products; },
  async getProduct(slug) { return products.find(product => product.slug === slug) ?? null; },
  async search(query) { const q = query.trim().toLowerCase(); return { studios: studios.filter(studio => `${studio.name} ${studio.discipline} ${studio.location}`.toLowerCase().includes(q)), products: products.filter(product => `${product.name} ${product.materials.join(" ")}`.toLowerCase().includes(q)) }; }
};
