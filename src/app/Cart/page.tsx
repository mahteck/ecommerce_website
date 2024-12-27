'use client';

import React, { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";

export default function CartPage() {
    const { cart, removeFromCart } = useCart();
    const [isClient, setIsClient] = useState(false); // Track client-side rendering
    const [shippingCharges, setShippingCharges] = useState(0); // Store shipping charges
    const [loading, setLoading] = useState(true); // Handle loading state for the API call
    const [error, setError] = useState(null); // Handle API errors
    const router = useRouter();

    useEffect(() => {
        setIsClient(true);

        // const weight = cart.reduce(
        //     (total, item) => total + item.weight2 * item.quantity,
        //     0
        // );

        // const calculateTotalWeight = () => {
        //     return cart.reduce((totalWeight, item) => totalWeight + item.weight * item.quantity, 0);
        // };

        const weight = 10;
        const distance = 100;

        const fetchShippingCharges = async () => {
            try {
                const response = await fetch('/api/shipment', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ weight, distance }),
                });

                if (!response.ok) {
                    throw new Error("Failed to fetch shipping charges");
                }

                const data = await response.json();
                if (data.rates) {
                    setShippingCharges(parseFloat(data.rates.charges));
                } else {
                    throw new Error("No rates found in the response");
                }
            } catch (error) {
                console.error("Error fetching shipping charges:", error);
                setError("Failed to fetch shipping charges. Please try again.");
            } finally {
                setLoading(false);
            }
        };

        fetchShippingCharges();
    }, [cart]); // Update when cart changes

    const calculateTotal = () =>
        cart.reduce((total, item) => total + item.price * item.quantity, 0);

    const grandTotal = calculateTotal() + shippingCharges;

    const handleCheckout = () => {
        if (isClient) {
            sessionStorage.setItem('cart', JSON.stringify(cart));
            sessionStorage.setItem('total', grandTotal);
            router.push("/Checkout");
        }
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

            {cart.length === 0 ? (
                <p className="text-lg text-gray-500">Your cart is empty.</p>
            ) : (
                <>
                    <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-300">
                        <table className="w-full text-left table-auto">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="border px-4 py-2 text-sm font-medium">Product Name</th>
                                    <th className="border px-4 py-2 text-sm font-medium">Price</th>
                                    <th className="border px-4 py-2 text-sm font-medium">Quantity</th>
                                    <th className="border px-4 py-2 text-sm font-medium">Total</th>
                                    <th className="border px-4 py-2 text-sm font-medium">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map((item, index) => (
                                    <tr key={index} className="even:bg-gray-50">
                                        <td className="border px-4 py-2">{item.name}</td>
                                        <td className="border px-4 py-2">{item.price}</td>
                                        <td className="border px-4 py-2">{item.quantity}</td>
                                        <td className="border px-4 py-2">{item.price * item.quantity}</td>
                                        <td className="border px-4 py-2">
                                            <button
                                                onClick={() => removeFromCart(item.name)}
                                                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                                            >
                                                Remove
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
                        <div>
                            <h2 className="text-xl font-semibold">Subtotal: {calculateTotal()}</h2>
                            {loading ? (
                                <h2 className="text-lg font-medium text-gray-600">Loading shipping charges...</h2>
                            ) : error ? (
                                <h2 className="text-lg font-medium text-red-600">{error}</h2>
                            ) : (
                                <h2 className="text-lg font-medium text-gray-600">Shipping Charges: {shippingCharges}</h2>
                            )}
                        </div>

                        <div className="flex flex-col items-start md:items-end">
                            <h2 className="text-2xl font-semibold text-purple-600">Total: {grandTotal}</h2>
                            {isClient && (
                                <button
                                    className="mt-4 px-6 py-2 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700"
                                    onClick={handleCheckout}
                                >
                                    Proceed to Checkout
                                </button>
                            )}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
