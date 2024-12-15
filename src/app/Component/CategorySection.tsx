export default function CategorySection() {
    return (
        <div>
            {/* Categories Section */}
            <section className="py-16 px-4">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-10">Shop by Categories</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-gray-100 p-6 rounded-lg text-center hover:shadow-lg transition">
                            <img
                                src="/images/category-1.png"
                                alt="Category 1"
                                className="w-32 h-32 mx-auto mb-4"
                            />
                            <h3 className="text-xl font-semibold mb-2">Men's Clothing</h3>
                            <p className="text-sm text-gray-600">Discover the latest trends in men's wear.</p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg text-center hover:shadow-lg transition">
                            <img
                                src="/images/category-2.png"
                                alt="Category 2"
                                className="w-32 h-32 mx-auto mb-4"
                            />
                            <h3 className="text-xl font-semibold mb-2">Women's Clothing</h3>
                            <p className="text-sm text-gray-600">Stylish outfits for every occasion.</p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg text-center hover:shadow-lg transition">
                            <img
                                src="/images/category-3.png"
                                alt="Category 3"
                                className="w-32 h-32 mx-auto mb-4"
                            />
                            <h3 className="text-xl font-semibold mb-2">Accessories</h3>
                            <p className="text-sm text-gray-600">Complete your look with trendy accessories.</p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg text-center hover:shadow-lg transition">
                            <img
                                src="/images/category-4.png"
                                alt="Category 4"
                                className="w-32 h-32 mx-auto mb-4"
                            />
                            <h3 className="text-xl font-semibold mb-2">Footwear</h3>
                            <p className="text-sm text-gray-600">Step into style with our latest collection.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}