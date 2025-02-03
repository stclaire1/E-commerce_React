import React, { ReactNode, useContext, useEffect, useState } from 'react';
import { CartContext, CartItem } from './CartContext';
import { useAuth } from '../Authentication/AuthContext';

interface CartProviderProps {
  children: ReactNode;
}

const CartProvider = ({ children }: CartProviderProps) => {
    const user = useAuth(); //authenticated user
    const [cart, setCart] = useState<CartItem[]>([]);

    // load the cart from localStorage when the user logs in
    useEffect(() => {
        if (user) {
            //uid comes from firebase (userID)
            const savedCart = localStorage.getItem(`cart-${user.uid}`);
            setCart(savedCart ? JSON.parse(savedCart) : []);
        } else {
            setCart([]); // if there is no user, clear the cart
        }
    }, [user]);

    // save the current cart to localStorage when it changes
    useEffect(() => {
        if (user) {
            localStorage.setItem(`cart-${user.uid}`, JSON.stringify(cart));
        }
    }, [cart, user]);

    const addToCart = (product: CartItem) => {
        setCart((currentCart) => {
            const existingProduct = currentCart.find((item) => item.id === product.id);
            if (existingProduct) {
                return currentCart.map((item) => 
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...currentCart, { ...product, quantity: 1 }];
        });
    };

    const updateQuantity = (id: string, quantity: number) => {
        setCart((currentCart) => 
            currentCart.map((item) => (item.id === id ? { ...item, quantity } : item))
        );
    };

    const removeFromCart = (id: string) => {
        setCart((currentCart) => currentCart.filter((item) => item.id !== id));
    };

    const clearCart = () => {
        if (user) {
            localStorage.removeItem(`cart-${user.uid}`);
        }
        setCart([]);
    };

    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const getTotalItems = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, getTotalPrice, getTotalItems }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
