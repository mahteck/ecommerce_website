import React from 'react';
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import Image from 'next/image';
import CartButton from '@/app/Component/CartButton';
import { Params } from 'next/dist/server/request/params';

interface SubCategory {
    name: string;
    slug: string;
}

interface Category {
    name: string;
    slug: string;
    SubCategory?: SubCategory[];
}

interface Product {
    name: string;
    price: number | null;
    imageUrl: string;
    slug: string;
    category: Category | null;
}

export default async function CategoryPage(context: { params: Promise<Params> }) {
    const params = await context.params;

    if (!params || !params.slug) {
        return <div>Error: Invalid category slug.</div>;
    }

    const { slug } = params;

    const data: Product[] = await client.fetch(
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

    const category: Category | null = data.length > 0 ? data[0].category : null;
    const products: Product[] = data;

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">
                Products for {category?.name || "Unknown Category"}
            </h1>

            {Array.isArray(category?.SubCategory) && category?.SubCategory.length > 0 && (
                <div className="mb-6">
                    <ul className="flex flex-wrap gap-4 border-b pb-2 justify-center">
                        {category.SubCategory.map((subcategory: SubCategory) => (
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

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
                {products.length > 0 ? (
                    products.map((product: Product, index: number) => {
                        // const totalPrice = product.price ? product.price * 1 : 0;

                        return (
                            <div
                                key={product.slug || `product-${index}`}
                                className="border p-4 flex flex-col items-center hover:shadow-2xl transition-transform transform hover:scale-105 rounded-lg bg-white"
                            >
                                <Link href={`/Products/${product.slug}`}>
                                    <div className="w-full h-64 mb-4">
                                        {product.imageUrl && (
                                            <Image
                                                src={product.imageUrl}
                                                alt={product.name}
                                                width={500}
                                                height={500}
                                                className="w-full h-full object-contain rounded-lg"
                                            />
                                        )}
                                    </div>
                                </Link>

                                <h2 className="text-lg font-semibold text-center text-gray-800 mb-2">
                                    {product.name}
                                </h2>

                                <p className="text-gray-700 text-center mb-4">
                                    ${product.price ?? "Price unavailable"}
                                </p>

                                <CartButton
                                    product={{
                                        ...product,
                                        quantity: 1,
                                        price: product.price ?? 0, // Default to 0 if price is null
                                    }}
                                />
                            </div>
                        );
                    })
                ) : (
                    <p className="text-center text-gray-500">
                        No products found for this category.
                    </p>
                )}
            </div>
        </div>
    );
}
