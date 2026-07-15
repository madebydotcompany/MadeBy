"use client";
import Link from "next/link";
import { useCart } from "@/features/cart/cart-provider";
export function CartLink() { const { count, hydrated } = useCart(); return <Link href="/cart" className="rounded-full border border-line px-3 py-2 text-sm transition hover:bg-ink/5" aria-label={`Cart, ${hydrated ? count : 0} items`}>Cart{hydrated && count > 0 ? ` (${count})` : ""}</Link>; }
