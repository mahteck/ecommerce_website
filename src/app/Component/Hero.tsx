export default function Hero() {
    return (
        <div>
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20 px-4 text-center md:text-left">
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                    <div className="md:w-1/2">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Welcome to Our Store
                        </h1>
                        <p className="text-lg mb-6">
                            Discover the latest trends in fashion and accessories. Quality products, amazing prices.
                        </p>
                        <button className="bg-white text-purple-600 px-6 py-2 rounded-md hover:bg-opacity-90 transition">
                            Explore Now
                        </button>
                    </div>
                    <div className="md:w-1/2">
                        <img
                            src="/images/hero-image1.png"
                            alt="Hero Image"
                            className="w-full rounded-md shadow-lg"
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}