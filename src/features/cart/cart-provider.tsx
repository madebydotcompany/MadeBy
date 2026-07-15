"use client";
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { CartLine } from "@/features/products/types";

type CartContextValue = { lines: CartLine[]; hydrated: boolean; addLine: (line: CartLine) => void; removeLine: (id: string) => void; clearCart: () => void; count: number };
const CartContext = createContext<CartContextValue | null>(null);
const storageKey = "studioverse-cart";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => { try { const saved = window.localStorage.getItem(storageKey); if (saved) setLines(JSON.parse(saved)); } catch { window.localStorage.removeItem(storageKey); } finally { setHydrated(true); } }, []);
  useEffect(() => { if (hydrated) window.localStorage.setItem(storageKey, JSON.stringify(lines)); }, [hydrated, lines]);
  const addLine = useCallback((line: CartLine) => setLines(current => { const matching = current.find(item => item.id === line.id); return matching ? current.map(item => item.id === line.id ? { ...item, quantity: item.quantity + line.quantity } : item) : [...current, line]; }), []);
  const removeLine = useCallback((id: string) => setLines(current => current.filter(line => line.id !== id)), []);
  const clearCart = useCallback(() => setLines([]), []);
  const value = useMemo(() => ({ lines, hydrated, addLine, removeLine, clearCart, count: lines.reduce((total, line) => total + line.quantity, 0) }), [lines, hydrated, addLine, removeLine, clearCart]);
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() { const value = useContext(CartContext); if (!value) throw new Error("useCart must be used inside CartProvider"); return value; }
