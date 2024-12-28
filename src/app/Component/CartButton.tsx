// components/CartButton.tsx

'use client';

import React from 'react';
import { FiShoppingCart } from "react-icons/fi";
import { useCart } from '@/context/CartContext';
import { CartItem } from '@/context/CartContext';

interface CartButtonProps {
    product: CartItem;
}

const CartButton: React.FC<CartButtonProps> = ({ product }) => {
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart(product);
    };

    return (
        <button
            className="mt-auto flex items-center justify-center gap-2 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-500 transition"
            onClick={handleAddToCart}
        >
            <FiShoppingCart className="w-5 h-5" />
            Add to Cart
        </button>
    );
};

export default CartButton;
