import { Skeleton } from "@/components/ui/skeleton";
export default function Loading() { return <main className="mx-auto max-w-7xl px-5 py-16 lg:px-8"><Skeleton className="h-6 w-36" /><Skeleton className="mt-7 h-24 max-w-3xl" /><div className="mt-16 grid gap-5 md:grid-cols-3">{[1,2,3].map(i => <Skeleton key={i} className="h-96" />)}</div></main>; }
