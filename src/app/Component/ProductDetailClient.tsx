"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function ProductDetailClient({ product }) {
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCart();


    // Calculate total price
    const totalPrice = product.price ? (product.price + 10) * quantity : 0;

    const handleIncrease = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity((prevQuantity) => prevQuantity - 1);
        }
    };

    const handleAddToCart = () => {
        const productWithQuantity = { ...product, quantity }; // Include quantity in the product data
        addToCart(productWithQuantity); // Add product to cart
        //console.log(productWithQuantity);
    };

    return (
        <div className="container mx-auto p-6">
            <div className="flex flex-col md:flex-row gap-8 bg-white shadow-lg rounded-lg overflow-hidden">
                {/* Left Section - Product Image */}
                <div className="w-full md:w-1/2 p-4">
                    {product.imageUrl ? (
                        <img
                            src={product.imageUrl}
                            alt={product.name}
                            className="w-full h-auto object-cover rounded-md"
                        />
                    ) : (
                        <p className="text-center text-gray-500">No image available</p>
                    )}
                </div>

                {/* Right Section - Product Details */}
                <div className="w-full md:w-1/2 p-6">
                    <h1 className="text-3xl font-bold mb-4 text-gray-800">
                        {product.name || "Unknown Product"}
                    </h1>
                    <p className="text-2xl font-semibold text-purple-600 mb-4">
                        Total Price: ${totalPrice.toFixed(2)}
                    </p>

                    <p className="text-lg text-gray-700 mb-4">{product.description || "No description available."}</p>

                    <div className="grid grid-cols-2 gap-4 text-gray-600 mb-6">
                        <div>
                            <strong>Size:</strong> {product.size || "N/A"}
                        </div>
                        <div>
                            <strong>Gender:</strong> {product.gender || "N/A"}
                        </div>
                        <div>
                            <strong>Type:</strong> {product.type || "N/A"}
                        </div>
                        <div>
                            <strong>Style:</strong> {product.style || "N/A"}
                        </div>
                        <div>
                            <strong>Color:</strong> {product.color || "N/A"}
                        </div>
                        <div>
                            <strong>Brand:</strong> {product.Brand?.name || "N/A"}
                        </div>
                        <div>
                            <strong>Category:</strong> {product.Category?.name || "N/A"}
                        </div>
                        <div>
                            <strong>Subcategory:</strong> {product.Subcategory?.name || "N/A"}
                        </div>
                    </div>

                    {/* Quantity Selector */}
                    <div className="flex items-center space-x-4 mt-4">
                        <button
                            onClick={handleDecrease}
                            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 text-gray-700 transition"
                        >
                            -
                        </button>
                        <input
                            type="text"
                            value={quantity}
                            readOnly
                            className="w-12 text-center border border-gray-300 rounded"
                        />
                        <button
                            onClick={handleIncrease}
                            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 text-gray-700 transition"
                        >
                            +
                        </button>
                    </div>

                    <button
                        onClick={handleAddToCart}
                        className="w-full bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-500 transition mt-6"
                    >
                        Add to Cart
                    </button>

                    <Link href={`/Category/${product.Category?.name}`}>
                        <button
                            className="w-full bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 transition mt-4"
                        >
                            Back to Category
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
