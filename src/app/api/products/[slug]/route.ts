import { fail, ok } from "@/lib/api"; import { mockBackend } from "@/services/mock-backend";
export function GET(_: Request, { params }: { params: { slug: string } }) { const product = mockBackend.catalog.product(params.slug); return product ? ok(product) : fail("Product not found", 404); }
