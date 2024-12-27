"use client";

import { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";

function ProductGrid({ products }) {
    const [selectedImage, setSelectedImage] = useState(null);

    const ImageModal = ({ imageUrl, onClose }) => (
        <div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
            onClick={onClose}
        >
            <div
                className="bg-white p-4 rounded shadow-lg"
                onClick={(e) => e.stopPropagation()}
            >
                <img
                    src={imageUrl}
                    alt="Product Preview"
                    className="max-w-full max-h-screen object-contain"
                />
                <button
                    onClick={onClose}
                    className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                    Close
                </button>
            </div>
        </div>
    );

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
            {products.map((product, index) => (
                <div
                    key={product.slug || `product-${index}`}
                    className="border p-4 flex flex-col text-center items-center justify-between h-auto"
                >
                    <h2 className="text-lg font-bold mb-2 text-ellipsis overflow-hidden whitespace-normal">{product.name}</h2>
                    {product.imageUrl && (
                        <img
                            src={product.imageUrl}
                            alt={product.name}
                            className="w-full h-48 object-contain mb-2 cursor-pointer"
                            onClick={() => setSelectedImage(product.imageUrl)}
                        />
                    )}
                    <p className="text-sm text-gray-600 mb-2">{product.category || "Uncategorized"}</p>
                    <p className="text-gray-700 font-semibold mb-4">${product.price}</p>
                    {/* <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                        Add to Cart
                    </button> */}
                    <button className="mt-auto flex items-center justify-center gap-2 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-500 transition">
                        <FiShoppingCart className="w-5 h-5" />
                        Add to Cart
                    </button>
                </div>
            ))}
            {selectedImage && <ImageModal imageUrl={selectedImage} onClose={() => setSelectedImage(null)} />}
        </div>
    );
}

export default ProductGrid;
