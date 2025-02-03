import React, { createContext   } from 'react';

export interface CartItem {
    id: string;
    img: string;
    name: string;
    price: number;
    quantity: number;
}

export interface CartContextType {
    cart: CartItem[];
    addToCart: (product: CartItem) => void;
    updateQuantity: (id: string, quantity: number) => void;
    removeFromCart: (id: string) => void;
    clearCart: () => void;
    getTotalPrice: () => number;
    getTotalItems: () => number;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);