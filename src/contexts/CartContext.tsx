"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

export type CartItem = {
  id: string;
  name: string;
  img?: string;
  qty: number;
  productCode?: string;
  volume?: string;
};

export type CartContextType = {
  items: CartItem[];
  add: (item: CartItem) => void;
  updateQty: (id: string, qty: number, key?: string) => void;
  remove: (id: string, key?: string) => void;
  clear: () => void;
  count: number;
  drawerOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
  lastAdded: CartItem | null;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

const STORAGE_KEY = "moq-cart-v1";

function itemKey(id: string, productCode?: string, volume?: string) {
  return `${id}|${productCode ?? ""}|${volume ?? ""}`;
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [lastAdded, setLastAdded] = useState<CartItem | null>(null);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as CartItem[];
        if (Array.isArray(parsed)) setItems(parsed);
      }
    } catch { /* noop */ }

    const onStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY && e.newValue) {
        try {
          const next = JSON.parse(e.newValue) as CartItem[];
          if (Array.isArray(next)) setItems(next);
        } catch { /* noop */ }
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  // Persist
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch { /* noop */ }
  }, [items]);

  const api = useMemo<CartContextType>(() => ({
    items,
    add: (item) => {
      setItems((prev) => {
        const key = itemKey(item.id, item.productCode, item.volume);
        const idx = prev.findIndex((p) => itemKey(p.id, p.productCode, p.volume) === key);
        let added: CartItem = item;
        if (idx >= 0) {
          const next = [...prev];
          const updated = { ...next[idx], qty: next[idx].qty + item.qty };
          next[idx] = updated;
          added = updated;
          setLastAdded(added);
          setDrawerOpen(true);
          return next;
        }
        const next = [...prev, item];
        setLastAdded(item);
        setDrawerOpen(true);
        return next;
      });
    },
    updateQty: (id, qty, key) => {
      setItems((prev) => {
        const next = prev.map((p) => {
          const k = itemKey(p.id, p.productCode, p.volume);
          if (p.id === id && (!key || k === key)) {
            return { ...p, qty: Math.max(1, qty) };
          }
          return p;
        });
        return next;
      });
    },
    remove: (id, key) => {
      setItems((prev) => prev.filter((p) => {
        const k = itemKey(p.id, p.productCode, p.volume);
        if (p.id !== id) return true;
        if (!key) return false;
        return k !== key;
      }));
    },
    clear: () => setItems([]),
    count: items.reduce((acc, i) => acc + i.qty, 0),
    drawerOpen,
    openDrawer: () => setDrawerOpen(true),
    closeDrawer: () => setDrawerOpen(false),
    lastAdded,
  }), [items, drawerOpen, lastAdded]);

  return <CartContext.Provider value={api}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextType {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
