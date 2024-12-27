'use client'

import Link from "next/link";

export default function Hero() {
    return (
        <div>
            {/* Hero Section */}
            {/* <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20 px-4 text-center md:text-left">
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                    <div className="md:w-1/2">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Welcome to Our Store
                        </h1>
                        <p className="text-lg mb-6">
                            Discover the latest trends in fashion and accessories. Quality products, amazing prices.
                        </p>
                        <Link href="/Product"><button className="bg-white text-purple-600 px-6 py-2 rounded-md hover:bg-opacity-90 transition">
                            Explore Now
                        </button></Link>
                    </div>
                    <div className="md:w-1/2">
                        <img
                            src="/images/hero-image1.png"
                            alt="Hero Image"
                            className="w-full rounded-md shadow-lg"
                        />
                    </div>
                </div>
            </section> */}

            <section className="bg-gradient-to-r from-purple-600 via-indigo-500 to-indigo-700 text-white py-20 px-4">
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                    <div className="md:w-1/2 text-center md:text-left">
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 animate-fadeInDown">
                            Welcome to Our Store
                        </h1>
                        <p className="text-lg mb-6 leading-relaxed animate-fadeInUp delay-100">
                            Discover the latest trends in fashion and accessories. <br />
                            Quality products at amazing prices.
                        </p>
                        <Link href="/Product">
                            <button className="bg-white text-purple-700 px-8 py-3 rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300">
                                Explore Now
                            </button>
                        </Link>
                    </div>

                    <div className="md:w-1/2 mt-10 md:mt-0 animate-slideInRight">
                        <img
                            src="/images/hero-image1.png"
                            alt="Hero Image"
                            className="w-full max-w-lg mx-auto md:mx-0 rounded-lg shadow-2xl hover:scale-105 transform transition-transform duration-300"
                        />
                    </div>
                </div>
            </section>

            <style jsx>{`
                @keyframes fadeInDown {
                    from {
                        opacity: 0;
                        transform: translateY(-30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                @keyframes slideInRight {
                    from {
                        opacity: 0;
                        transform: translateX(50px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
                .animate-fadeInDown {
                    animation: fadeInDown 1s ease-in-out;
                }
                .animate-fadeInUp {
                    animation: fadeInUp 1s ease-in-out;
                }
                .animate-slideInRight {
                    animation: slideInRight 1s ease-in-out;
                }
            `}</style>
        </div>
    )
}