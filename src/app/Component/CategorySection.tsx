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
                        {/* Men's Clothing */}
                        <div className="bg-white p-6 rounded-lg text-center shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
                            <img
                                src="/images/category-1.png"
                                alt="Men's Clothing"
                                className="w-32 h-32 mx-auto mb-4 rounded-full border-2 border-gray-300 shadow-lg"
                            />
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                Men's Clothing
                            </h3>
                            <p className="text-sm text-gray-600 mb-4">
                                Discover the latest trends in men's wear.
                            </p>
                            <a href="/Category/MEN" className="text-blue-500 font-semibold hover:text-blue-700">
                                Shop Now
                            </a>
                        </div>

                        {/* Women's Clothing */}
                        <div className="bg-white p-6 rounded-lg text-center shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
                            <img
                                src="/images/category-2.png"
                                alt="Women's Clothing"
                                className="w-32 h-32 mx-auto mb-4 rounded-full border-2 border-gray-300 shadow-lg"
                            />
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                Women's Clothing
                            </h3>
                            <p className="text-sm text-gray-600 mb-4">
                                Stylish outfits for every occasion.
                            </p>
                            <a href="/Category/WOMEN" className="text-blue-500 font-semibold hover:text-blue-700">
                                Shop Now
                            </a>
                        </div>

                        {/* Kids' Clothing */}
                        <div className="bg-white p-6 rounded-lg text-center shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
                            <img
                                src="/images/category-5.png"
                                alt="Kids' Clothing"
                                className="w-32 h-32 mx-auto mb-4 rounded-full border-2 border-gray-300 shadow-lg"
                            />
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                Kids' Clothing
                            </h3>
                            <p className="text-sm text-gray-600 mb-4">
                                Adorable outfits for your little ones.
                            </p>
                            <a href="/Category/KIDS" className="text-blue-500 font-semibold hover:text-blue-700">
                                Shop Now
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
