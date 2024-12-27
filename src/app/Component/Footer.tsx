import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

export default function Footer() {
    return (
        <div>
            {/* Footer Section */}
            <footer className="bg-gray-800 text-white py-8 px-4">
                <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* About Us */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">About Us</h3>
                        <p className="text-sm text-gray-400">
                            We provide the best products to our customers with quality and trust at the forefront.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                        <ul className="text-sm text-gray-400">
                            <li className="mb-2">
                                <Link href="/">Home</Link>
                            </li>
                            <li className="mb-2">
                                <Link href="/About">About</Link>
                            </li>
                            <li className="mb-2">
                                <Link href="/contact">Contact</Link>
                            </li>
                            <li className="mb-2">
                                <Link href="/Product">Products</Link>
                            </li>
                            <li className="mb-2">
                                <Link href="/ReturnPolicy">Return Policy</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Follow Us */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                        <p className="text-sm text-gray-400 mb-4">
                            Stay connected through our social media channels.
                        </p>
                        <div className="flex gap-4">
                            <Link href="https://www.facebook.com/mahteck" target="_blank" rel="noopener noreferrer">
                                <FaFacebook className="w-6 h-6 hover:text-blue-500" />
                            </Link>
                            <Link href="https://www.youtube.com/@mahteck" target="_blank" rel="noopener noreferrer">
                                <FaYoutube className="w-6 h-6 hover:text-sky-500" />
                            </Link>
                            <Link href="https://www.instagram.com/mahteck/" target="_blank" rel="noopener noreferrer">
                                <FaInstagram className="w-6 h-6 hover:text-pink-500" />
                            </Link>
                            <Link href="https://www.linkedin.com/in/shoaibmunir88/" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className="w-6 h-6 hover:text-blue-700" />
                            </Link>
                        </div>
                    </div>

                    {/* Subscribe */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Subscribe</h3>
                        <form className="flex flex-col">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="p-2 rounded mb-4 text-gray-700"
                            />
                            <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-500">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="text-center text-sm text-gray-500 mt-8">
                    &copy; 2024 MAH-TECK. All Rights Reserved.
                </div>
            </footer>
        </div>
    );
}
