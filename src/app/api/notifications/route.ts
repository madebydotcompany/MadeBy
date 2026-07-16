import { fail, ok } from "@/lib/api"; import { databaseBackend } from "@/services/database-backend";
export async function GET() { try { return ok(await databaseBackend.notifications()); } catch (error) { return fail(error instanceof Error ? error.message : "Unable to load notifications", 500); } }
