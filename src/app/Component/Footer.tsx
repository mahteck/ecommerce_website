export default function Footer() {
    return (
        <div>
            {/* Footer Section */}
            <footer className="bg-gray-800 text-white py-8 px-4">
                <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-xl font-semibold mb-4">About Us</h3>
                        <p className="text-sm text-gray-400">
                            We provide the best products to our customers with quality and trust at the forefront.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                        <ul className="text-sm text-gray-400">
                            <li className="mb-2"><a href="/">Home</a></li>
                            <li className="mb-2"><a href="/products">Products</a></li>
                            <li className="mb-2"><a href="/categories">Categories</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                        <p className="text-sm text-gray-400">
                            Stay connected through our social media channels.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Subscribe</h3>
                        <form className="flex flex-col">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="p-2 rounded mb-4"
                            />
                            <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-500">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
                <div className="text-center text-sm text-gray-500 mt-8">
                    &copy; 2024 MAH-TECK. All Rights Reserved.
                </div>
            </footer>
        </div>
    )
}