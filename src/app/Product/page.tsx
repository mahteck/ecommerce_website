'use client';
import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { FiShoppingCart } from "react-icons/fi";

// Define a more specific type for the image
type ImageType = {
    _type: string;
    asset: {
        _ref: string;
        _type: string;
    };
};

type Product = {
    name: string;
    description: string;
    price: number;
    image: ImageType; // Use the ImageType for image field
    category: { name: string };
};

export default function Product() {
    const [data, setData] = useState<Product[]>([]); // Explicitly typing the data state
    const [loading, setLoading] = useState(true); // Loading state
    const [selectedImage, setSelectedImage] = useState<string | null>(null); // State for image preview
    const [isOpen, setIsOpen] = useState(false); // Modal visibility state

    // Fetch data on component mount
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await client.fetch(
                    `*[_type == "Product"]{name,description,price,image,category ->{name}}`
                );
                setData(response);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    // Handle image click to open modal
    const handleImageClick = (imageUrl: string) => {
        setSelectedImage(imageUrl);
        setIsOpen(true);
    };

    // Handle modal close
    const handleCloseModal = () => {
        setIsOpen(false);
        setSelectedImage(null);
    };

    return (
        <div className="p-6">
            {/* Heading */}
            <h1 className="text-2xl font-bold mb-6 text-center">All Products</h1>

            {/* Loading State */}
            {loading ? (
                <p className="text-center text-gray-500">Loading products...</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {data.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow flex flex-col items-center text-center"
                        >
                            {/* Product Name */}
                            <h2 className="text-lg font-semibold mb-2 line-clamp-1">
                                {item.name || "Unnamed Product"}
                            </h2>

                            {/* Product Image */}
                            <div
                                className="w-full h-40 relative mb-4 cursor-pointer flex justify-center"
                                onClick={() => handleImageClick(urlFor(item.image).url())}
                            >
                                <Image
                                    src={item.image ? urlFor(item.image).url() : "/placeholder.jpg"}
                                    alt={item.name || "Product Image"}
                                    width={160}
                                    height={160}
                                    className="rounded-md object-contain"
                                />
                            </div>

                            {/* Product Category */}
                            <p className="text-sm text-gray-600 mb-2">
                                Category: {item.category?.name || "No category"}
                            </p>

                            {/* Product Price */}
                            <p className="text-lg font-semibold mb-4">
                                Price: ${item.price || "N/A"}
                            </p>

                            {/* Add to Cart Button */}
                            <button className="mt-auto flex items-center justify-center gap-2 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-500 transition">
                                <FiShoppingCart className="w-5 h-5" />
                                Add to Cart
                            </button>
                        </div>
                    ))}
                </div>
            )}

            {/* Image Preview Modal */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
                    onClick={handleCloseModal}
                >
                    <div
                        className="relative max-w-4xl mx-auto p-4 overflow-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="absolute top-2 right-2 text-white text-3xl z-50"
                            onClick={handleCloseModal}
                        >
                            &times;
                        </button>
                        <Image
                            src={selectedImage || "/placeholder.jpg"}
                            alt="Zoomed Preview"
                            width={800}
                            height={800}
                            className="rounded-lg object-contain max-w-full max-h-[80vh] mx-auto"
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
