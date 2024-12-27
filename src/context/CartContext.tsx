'use client'

import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        // Load cart from localStorage (or sessionStorage)
        const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(savedCart);
    }, []);

    const addToCart = (item) => {
        setCart((prevCart) => {
            const updatedCart = [...prevCart, item];
            localStorage.setItem('cart', JSON.stringify(updatedCart)); // Save to localStorage
            return updatedCart;
        });
    };

    const removeFromCart = (itemName) => {
        setCart((prevCart) => {
            const updatedCart = prevCart.filter(item => item.name !== itemName);
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
