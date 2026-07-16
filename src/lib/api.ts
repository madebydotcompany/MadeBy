import { NextResponse } from "next/server";
export const demoUserId = "demo-collector";
export function ok<T>(data: T, init?: ResponseInit) { return NextResponse.json({ data }, init); }
export function fail(message: string, status = 400) { return NextResponse.json({ error: { message } }, { status }); }
export async function readJson<T>(request: Request): Promise<T | null> { try { return await request.json() as T; } catch { return null; } }
export function actor(request: Request) { return request.headers.get("x-studioverse-user") ?? demoUserId; }
