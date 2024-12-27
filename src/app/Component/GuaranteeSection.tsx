import { FiCheckCircle, FiTruck, FiRefreshCw } from "react-icons/fi";

export default function GuaranteeSection() {
    return (
        <div className="bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 py-12">
            <div className="container mx-auto flex flex-col md:flex-row justify-center items-stretch gap-6">
                {/* Box 1: Satisfaction Guaranteed */}
                <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 flex-1 text-center transition-transform transform hover:scale-105 duration-300">
                    <div className="p-4 bg-green-100 rounded-full">
                        <FiCheckCircle className="w-12 h-12 text-green-500" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mt-4">
                        100% Satisfaction Guaranteed
                    </h3>
                    <p className="text-gray-600 mt-2">
                        We’re committed to your satisfaction with every purchase.
                    </p>
                </div>

                {/* Box 2: Free Cash On Delivery */}
                <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 flex-1 text-center transition-transform transform hover:scale-105 duration-300">
                    <div className="p-4 bg-blue-100 rounded-full">
                        <FiTruck className="w-12 h-12 text-blue-500" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mt-4">
                        Free Cash On Delivery
                    </h3>
                    <p className="text-gray-600 mt-2">
                        Enjoy the convenience of paying at your doorstep.
                    </p>
                </div>

                {/* Box 3: 7 Days Exchange Policy */}
                <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 flex-1 text-center transition-transform transform hover:scale-105 duration-300">
                    <div className="p-4 bg-yellow-100 rounded-full">
                        <FiRefreshCw className="w-12 h-12 text-yellow-500" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mt-4">
                        7 Days Exchange Policy
                    </h3>
                    <p className="text-gray-600 mt-2">
                        Hassle-free exchanges for a worry-free shopping experience.
                    </p>
                </div>
            </div>
        </div>
    );
}
