'use client'

import { useState } from "react";
import { FiShoppingCart, FiUser, FiMenu } from "react-icons/fi";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md">
            <div className="container mx-auto flex justify-between items-center px-6 py-4">
                {/* Left: Title */}
                <div className="text-lg font-bold text-gray-700">MAH-TECK</div>

                {/* Center: Menu */}
                <div className={`flex-1 items-center justify-center md:flex ${isOpen ? "block" : "hidden"} md:block`}>
                    <ul className="flex flex-col md:flex-row items-center gap-6">
                        <li>
                            <a href="/" className="text-gray-700 hover:text-gray-900">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="/About" className="text-gray-700 hover:text-gray-900">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="/Contact" className="text-gray-700 hover:text-gray-900">
                                Contact
                            </a>
                        </li>
                        <li>
                            <a href="/Product" className="text-gray-700 hover:text-gray-900">
                                Products
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Right: Icons */}
                <div className="flex items-center space-x-4">
                    <FiShoppingCart className="text-gray-700 w-6 h-6 cursor-pointer" />
                    <FiUser className="text-gray-700 w-6 h-6 cursor-pointer" />
                    <button
                        className="md:hidden text-gray-700 focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <FiMenu className="w-6 h-6" />
                    </button>
                </div>
            </div>
            {/* Bottom line */}
            <div className="border-t border-gray-200"></div>
        </nav>
    );
}
