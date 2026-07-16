import { actor, fail, ok, readJson } from "@/lib/api"; import { mockBackend } from "@/services/mock-backend";
export function GET(_: Request, { params }: { params: { threadId: string } }) { return ok(mockBackend.messages.list(params.threadId)); }
export async function POST(request: Request, { params }: { params: { threadId: string } }) { const body = await readJson<{ body: string }>(request); if (!body?.body.trim()) return fail("Message body is required"); return ok(mockBackend.messages.send(params.threadId, actor(request), body.body.trim()), { status: 201 }); }
