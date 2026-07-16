import { ok } from "@/lib/api"; import { mockBackend } from "@/services/mock-backend";
export function GET() { return ok({ pendingArtistApprovals: 14, openReports: 3, activeStudios: mockBackend.catalog.studios().length, productsAwaitingModeration: 7 }); }
