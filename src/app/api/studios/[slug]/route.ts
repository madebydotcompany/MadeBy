import { fail, ok } from "@/lib/api"; import { mockBackend } from "@/services/mock-backend";
export function GET(_: Request, { params }: { params: { slug: string } }) { const studio = mockBackend.catalog.studio(params.slug); return studio ? ok(studio) : fail("Studio not found", 404); }
