import Link from "next/link";
import { Button } from "@/components/ui/button";
export default function NotFound() { return <main className="grid min-h-screen place-items-center p-6 text-center"><div><p className="font-display text-8xl text-accent">404</p><h1 className="mt-4 font-display text-4xl">This studio has moved on.</h1><p className="mt-3 text-muted">The space you’re looking for doesn’t exist here.</p><Button asChild className="mt-8"><Link href="/">Return home</Link></Button></div></main>; }
