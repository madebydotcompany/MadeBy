"use client";
import { Button } from "@/components/ui/button";
export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) { return <main className="grid min-h-screen place-items-center p-6 text-center"><div><p className="text-sm font-semibold text-accent">A small interruption</p><h1 className="mt-3 font-display text-5xl">The studio lights flickered.</h1><p className="mt-4 text-muted">Try again and we’ll bring you right back.</p><Button className="mt-8" onClick={reset}>Try again</Button></div></main>; }
