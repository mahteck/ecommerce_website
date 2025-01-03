import Link from "next/link";
import Image from "next/image";  // Importing the Image component from Next.js

export default function CategorySection() {
    return (
        <div>
            {/* Categories Section */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="container mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
                        Shop by Categories
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8 justify-center">
                        {/* Mens Clothing */}
                        <div className="bg-white p-6 rounded-lg text-center shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
                            <Image
                                src="/images/category-1.png"
                                alt="Men Clothing"
                                width={128}
                                height={128}
                                className="mx-auto mb-4 rounded-full border-2 border-gray-300 shadow-lg"
                            />
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                Mens Clothing
                            </h3>
                            <p className="text-sm text-gray-600 mb-4">
                                Discover the latest trends in mens wear.
                            </p>
                            <Link href="/Category/MEN" className="text-blue-500 font-semibold hover:text-blue-700">
                                Shop Now
                            </Link>
                        </div>

                        {/* Womens Clothing */}
                        <div className="bg-white p-6 rounded-lg text-center shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
                            <Image
                                src="/images/category-2.png"
                                alt="Women Clothing"
                                width={128}
                                height={128}
                                className="mx-auto mb-4 rounded-full border-2 border-gray-300 shadow-lg"
                            />
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                Womens Clothing
                            </h3>
                            <p className="text-sm text-gray-600 mb-4">
                                Stylish outfits for every occasion.
                            </p>
                            <Link href="/Category/WOMEN" className="text-blue-500 font-semibold hover:text-blue-700">
                                Shop Now
                            </Link>
                        </div>

                        {/* Kids Clothing */}
                        <div className="bg-white p-6 rounded-lg text-center shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
                            <Image
                                src="/images/category-5.png"
                                alt="Kids Clothing"
                                width={128}
                                height={128}
                                className="mx-auto mb-4 rounded-full border-2 border-gray-300 shadow-lg"
                            />
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                Kids Clothing
                            </h3>
                            <p className="text-sm text-gray-600 mb-4">
                                Adorable outfits for your little ones.
                            </p>
                            <Link href="/Category/KIDS" className="text-blue-500 font-semibold hover:text-blue-700">
                                Shop Now
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
