'use client';

import React, { useEffect, useState } from 'react';

// Define the type for order details
interface OrderDetails {
    cartItems: { name: string; price: number; quantity: number }[];
    total: number;
    trackingNumber: string;
}

export default function OrderConfirmationPage() {
    const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null);

    useEffect(() => {
        // Retrieve order details from session storage
        const savedOrderDetails = sessionStorage.getItem('orderDetails');
        if (savedOrderDetails) {
            setOrderDetails(JSON.parse(savedOrderDetails));
        }
    }, []);

    if (!orderDetails) {
        // Show a loading state or error if no order details are found
        return <div className="text-center mt-10 text-gray-500">Loading order details...</div>;
    }

    const { cartItems, total, trackingNumber } = orderDetails;

    if (!cartItems || cartItems.length === 0) {
        // Handle the case where cartItems are undefined or empty
        return <div className="text-center mt-10 text-gray-500">No items found in your order. Please try again.</div>;
    }

    return (
        <div className="container mx-auto px-4 py-6">
            <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-green-600 text-center">Thank You for Your Order!</h1>
            <p className="text-base sm:text-lg mb-4 text-center">Your order has been placed successfully. Below are the details of your order:</p>

            <div className="space-y-6">
                {/* Tracking Number */}
                <div className="bg-gray-100 p-4 rounded-lg">
                    <h2 className="text-lg sm:text-xl font-semibold mb-2">Tracking Number:</h2>
                    <p className="text-base sm:text-lg text-gray-700 break-words">{trackingNumber}</p>
                </div>

                {/* Order Summary */}
                <div className="bg-gray-100 p-4 rounded-lg">
                    <h2 className="text-lg sm:text-xl font-semibold mb-2">Order Summary:</h2>
                    <ul className="space-y-3">
                        {cartItems.map((item, index) => (
                            <li key={index} className="text-base sm:text-lg text-gray-700">
                                <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                                    <span className="font-medium">{item.name}</span>
                                    <span>{item.price} x {item.quantity}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Total */}
                <div className="bg-gray-100 p-4 rounded-lg">
                    <h2 className="text-lg sm:text-xl font-semibold mb-2">Total:</h2>
                    <p className="text-base sm:text-lg text-gray-700">{total}</p>
                </div>
            </div>
        </div>
    );
}
