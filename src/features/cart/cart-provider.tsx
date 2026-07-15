"use client";
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { CartLine } from "@/features/products/types";

type CartContextValue = { lines: CartLine[]; savedLines: CartLine[]; hydrated: boolean; addLine: (line: CartLine) => void; removeLine: (id: string) => void; updateQuantity: (id: string, quantity: number) => void; saveForLater: (id: string) => void; moveToCart: (id: string) => void; clearCart: () => void; count: number };
const CartContext = createContext<CartContextValue | null>(null);
const storageKey = "studioverse-cart";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [savedLines, setSavedLines] = useState<CartLine[]>([]);
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => { try { const saved = window.localStorage.getItem(storageKey); if (saved) setLines(JSON.parse(saved)); const later = window.localStorage.getItem(`${storageKey}-saved`); if (later) setSavedLines(JSON.parse(later)); } catch { window.localStorage.removeItem(storageKey); } finally { setHydrated(true); } }, []);
  useEffect(() => { if (hydrated) { window.localStorage.setItem(storageKey, JSON.stringify(lines)); window.localStorage.setItem(`${storageKey}-saved`, JSON.stringify(savedLines)); } }, [hydrated, lines, savedLines]);
  const addLine = useCallback((line: CartLine) => setLines(current => { const matching = current.find(item => item.id === line.id); return matching ? current.map(item => item.id === line.id ? { ...item, quantity: item.quantity + line.quantity } : item) : [...current, line]; }), []);
  const removeLine = useCallback((id: string) => setLines(current => current.filter(line => line.id !== id)), []);
  const updateQuantity = useCallback((id: string, quantity: number) => setLines(current => quantity < 1 ? current.filter(line => line.id !== id) : current.map(line => line.id === id ? { ...line, quantity } : line)), []);
  const saveForLater = useCallback((id: string) => setLines(current => { const line = current.find(item => item.id === id); if (line) setSavedLines(saved => saved.some(item => item.id === id) ? saved : [...saved, line]); return current.filter(item => item.id !== id); }), []);
  const moveToCart = useCallback((id: string) => setSavedLines(current => { const line = current.find(item => item.id === id); if (line) setLines(lines => lines.some(item => item.id === id) ? lines : [...lines, line]); return current.filter(item => item.id !== id); }), []);
  const clearCart = useCallback(() => setLines([]), []);
  const value = useMemo(() => ({ lines, savedLines, hydrated, addLine, removeLine, updateQuantity, saveForLater, moveToCart, clearCart, count: lines.reduce((total, line) => total + line.quantity, 0) }), [lines, savedLines, hydrated, addLine, removeLine, updateQuantity, saveForLater, moveToCart, clearCart]);
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() { const value = useContext(CartContext); if (!value) throw new Error("useCart must be used inside CartProvider"); return value; }
