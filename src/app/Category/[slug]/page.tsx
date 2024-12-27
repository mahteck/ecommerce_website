'use client'

import React, { useState, useEffect } from 'react';
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";
import { useCart } from '@/context/CartContext';

export default function CategoryPage({ params }) {
    const { slug } = React.use(params);  // Unwrap the params object

    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState(null);
    const { addToCart } = useCart(); // Access the addToCart function from the CartContext

    // Fetch the data when the component mounts
    useEffect(() => {
        const fetchData = async () => {
            const data = await client.fetch(
                `*[_type == "Product" && Category->slug.current == $slug]{
                    name,
                    price,
                    "imageUrl": image.asset->url,
                    "slug": slug.current,
                    "category": Category->{
                        name,
                        "slug": slug.current,
                        SubCategory[]->{
                            name,
                            "slug": slug.current
                        }
                    }
                }`,
                { slug }
            );
            // Set the category and products state
            if (data.length > 0) {
                setCategory(data[0].category);
                setProducts(data);
            }
        };

        fetchData();
    }, [slug]); // Only fetch data when the slug changes

    const handleAddToCart = (product) => {
        addToCart(product); // Add the product to the cart
    };

    return (
        <div className="container mx-auto p-4">
            {/* Title Centered */}
            <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">
                Products for {slug}
            </h1>

            {/* Subcategories Horizontal List */}
            {category?.SubCategory?.length > 0 && (
                <div className="mb-6">
                    <ul className="flex flex-wrap gap-4 border-b pb-2 justify-center">
                        {category.SubCategory.map((subcategory) => (
                            <li key={subcategory.slug} className="flex-shrink-0">
                                <Link
                                    href={`/SubCategory/${subcategory.slug}`}
                                    className="text-lg font-semibold text-purple-600 hover:text-purple-800 transition"
                                >
                                    {subcategory.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
                {products.map((product, index) => (
                    <div key={product.slug || `product-${index}`} className="border p-4 flex flex-col items-center hover:shadow-2xl transition-transform transform hover:scale-105 rounded-lg bg-white">
                        {/* Wrap the image with Link to navigate to the product detail page */}
                        <Link href={`/Products/${product.slug}`}>
                            <div className="w-full h-64 mb-4">
                                {product.imageUrl && (
                                    <img
                                        src={product.imageUrl}
                                        alt={product.name}
                                        className="w-full h-full object-contain rounded-lg"
                                    />
                                )}
                            </div>
                        </Link>

                        <h2 className="text-lg font-semibold text-center text-gray-800 mb-2">{product.name}</h2>

                        <p className="text-gray-700 text-center mb-4">${product.price}</p>

                        {/* Add to Cart Button */}
                        <button
                            className="mt-auto flex items-center justify-center gap-2 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-500 transition"
                            onClick={() => handleAddToCart({
                                ...product,
                                quantity: 1,
                                totalPrice: product.price // Add product with initial quantity and price 
                            })}
                        >
                            <FiShoppingCart className="w-5 h-5" />
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
