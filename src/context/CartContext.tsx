'use client'

import React, { createContext, useContext, useState, useEffect } from "react";

export interface CartItem {
    name: string;
    price: number;
    quantity: number;
    weight?: number;
    imageUrl?: string;
}

export interface CartContextType {
    cart: CartItem[];
    removeFromCart: (name: string) => void;
    addToCart: (item: CartItem) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [cart, setCart] = useState<CartItem[]>([]);

    useEffect(() => {
        try {
            const savedCart = localStorage.getItem('cart');
            setCart(savedCart ? JSON.parse(savedCart) : []);
        } catch (error) {
            console.error("Error parsing cart data from localStorage:", error);
            setCart([]); // Reset to an empty cart on error
        }
    }, []);

    const addToCart = (item: CartItem) => {
        setCart((prevCart) => {
            const updatedCart = [...prevCart, item];
            localStorage.setItem('cart', JSON.stringify(updatedCart)); // Save to localStorage
            return updatedCart;
        });
    };

    const removeFromCart = (name: string) => {
        setCart((prevCart) => {
            const updatedCart = prevCart.filter(item => item.name !== name);
            localStorage.setItem('cart', JSON.stringify(updatedCart)); // Save to localStorage
            return updatedCart;
        });
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
};
