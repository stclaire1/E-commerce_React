import React, { ReactNode, useContext, useEffect, useState } from 'react';
import { CartContext, CartItem } from './CartContext';

interface CartProviderProps {
  children: ReactNode;
}

const CartProvider = ({ children }: CartProviderProps) => {
    const [cart, setCart] = useState<CartItem[]>(() => {
        // search if there is already a current cart saved
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });
    
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product: CartItem) => {
        setCart((currentCart) => {
            const existingProduct = currentCart.find((item) => item.id === product.id);
            if(existingProduct) {
                return currentCart.map((item) => 
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...currentCart, { ...product, quantity: 1 }];
        })
    };

    const updateQuantity = (id: string, quantity: number) => {
        setCart((currentCart) => 
            currentCart.map((item) => (item.id === id? {...item, quantity} : item))
        );
    };

    const removeFromCart = (id: string) => {
        setCart((currentCart) => currentCart.filter((item) => item.id !== id));
    };

    const clearCart = () => {
        setCart([]);
        localStorage.removeItem('cart');
    };

    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + item.price *  item.quantity, 0);
    }

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
}