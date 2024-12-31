import { client } from "@/sanity/lib/client";
import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";
import Image from "next/image";
import { Params } from "next/dist/server/request/params";

interface SubCategory {
    name: string;
    slug: string;
}

interface Category {
    name: string;
    slug: string;
    SubCategory: SubCategory[];
}

interface Product {
    name: string;
    price: number;
    imageUrl: string;
    slug: string;
    category: Category | null;
}

export default async function SubCategoryPage(context: { params: Promise<Params> }) {
    const params = await context.params;

    if (!params || !params.slug) {
        return <div>Error: Invalid category slug.</div>;
    }

    const { slug } = params;

    // Fetch category details and products
    const data: Product[] = await client.fetch(
        `*[_type == "Product" && Subcategory->slug.current == $slug]{
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

    return (
        <div className="container mx-auto p-4">
            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">
                Products for {slug}
            </h1>

            {/* Subcategories Horizontal List */}
            {category?.SubCategory && category.SubCategory.length > 0 && (
                <div className="mb-6">
                    <ul className="flex flex-wrap gap-4 justify-center border-b pb-2">
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

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
                {data.map((product, index) => (
                    <Link href={`/Products/${product.slug}`} key={product.slug || `product-${index}`}>
                        <div className="border p-4 flex flex-col items-center hover:shadow-2xl transition-transform transform hover:scale-105 rounded-lg bg-white">
                            {product.imageUrl && (
                                <Image
                                    src={product.imageUrl}
                                    alt={product.name}
                                    width={500}
                                    height={256}
                                    className="w-full h-64 object-contain mb-4 rounded-lg"
                                />
                            )}

                            <h2 className="text-lg font-semibold text-center text-gray-800 mb-2">{product.name}</h2>

                            <p className="text-gray-700 text-center mb-4">${product.price}</p>

                            {/* Add to Cart Button */}
                            <button
                                className="mt-auto flex items-center justify-center gap-2 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-500 transition"
                            >
                                <FiShoppingCart className="w-5 h-5" />
                                Add to Cart
                            </button>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
