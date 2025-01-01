'use client'

import { useState, useEffect } from "react";
import { FiShoppingCart, FiUser, FiMenu } from "react-icons/fi";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

// Define the type for Category and SubCategory
type SubCategory = {
    name: string;
    slug: string;
};

type Category = {
    name: string;
    slug: string;
    SubCategory?: SubCategory[]; // SubCategory is optional
};

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [categories, setCategories] = useState<Category[]>([]); // Set explicit type for categories
    const { cartItems } = useCart();  // Correct usage of cartItems

    const cartCount = Array.isArray(cartItems) ? cartItems.length : 0;

    useEffect(() => {
        async function fetchCategories() {
            const data = await client.fetch(`
                *[_type == "category"]{
                    name,
                    "slug": slug.current,
                    SubCategory[]->{
                        name,
                        "slug": slug.current
                    }
                }
            `);
            setCategories(data);
        }
        fetchCategories();
    }, []);

    return (
        <nav className="shadow-md sticky top-0 z-50 bg-white">
            {/* Top Row: Welcome Message */}
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-center py-2">
                <p className="text-white text-sm">Welcome to MAH Fashion Store! Your style, your way.</p>
            </div>

            {/* Second Row: Logo and Icons */}
            <div className="relative">
                <div className="container mx-auto flex justify-between items-center px-6 py-4">
                    {/* Left Spacer (for mobile view) */}
                    <div className="w-6 h-6 md:w-0 md:h-0"></div>

                    {/* Center: Company Logo */}
                    <div className="flex-1 flex justify-center md:justify-start">
                        <Link href="/">
                            <div className="text-2xl md:text-3xl font-extrabold text-gray-800 text-center transition hover:scale-110 transform duration-300">
                                <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-transparent bg-clip-text">
                                    MAH FASHION
                                </span>
                            </div>
                        </Link>
                    </div>

                    {/* Right: Icons */}
                    <div className="flex items-center space-x-4">
                        {/* Cart Icon with Counter */}
                        <Link href="/Cart">
                            <div className="relative">
                                <FiShoppingCart className="text-gray-800 w-6 h-6 cursor-pointer" />
                                {cartCount > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full px-2 py-1 text-xs shadow-md">
                                        {cartCount}
                                    </span>
                                )}
                            </div>
                        </Link>

                        {/* User Icon */}
                        <FiUser className="text-gray-800 w-6 h-6 cursor-pointer" />

                        {/* Mobile Menu Icon */}
                        <button
                            className="md:hidden text-gray-800 focus:outline-none"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <FiMenu className="w-6 h-6" />
                        </button>
                    </div>
                </div>
                <div className="border-t border-gray-200"></div>
            </div>

            {/* Categories Menu */}
            <div className="bg-white">
                <div
                    className={`container mx-auto md:flex justify-center px-6 py-3 ${isOpen ? "block" : "hidden"} md:block`}
                >
                    <ul className="flex flex-col md:flex-row items-center gap-6">
                        {categories.map((category, index) => (
                            <li key={`category-${index}`} className="relative group">
                                <Link href={`/Category/${category.slug}`}
                                    onClick={() => setIsOpen(false)}>
                                    <div className="text-gray-800 hover:text-purple-600 font-medium">
                                        {category.name}
                                    </div>
                                </Link>
                                {category.SubCategory && category.SubCategory.length > 0 && ( // Safe check
                                    <ul className="absolute left-0 hidden group-hover:flex flex-col bg-white text-gray-800 shadow-lg p-4 mt-2 w-48 z-10 transition duration-200 ease-in-out">
                                        {category.SubCategory.map((SubCategory, subIndex) => (
                                            <li key={`subcategory-${index}-${subIndex}`} className="mb-2">
                                                <Link href={`/SubCategory/${SubCategory.slug}`}
                                                    onClick={() => setIsOpen(false)}>
                                                    <div className="hover:underline">
                                                        {SubCategory.name}
                                                    </div>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
