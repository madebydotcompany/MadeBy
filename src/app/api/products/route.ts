import { ok } from "@/lib/api"; import { mockBackend } from "@/services/mock-backend";
export function GET() { return ok(mockBackend.catalog.products()); }
