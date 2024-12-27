'use client';

import React, { useEffect, useState } from 'react';

export default function OrderConfirmationPage() {
    const [orderDetails, setOrderDetails] = useState(null);

    useEffect(() => {
        // Retrieve order details from session storage
        const savedOrderDetails = JSON.parse(sessionStorage.getItem('orderDetails'));
        setOrderDetails(savedOrderDetails);
    }, []);

    if (!orderDetails) {
        // Show a loading state or error if no order details are found
        return <div>Loading order details...</div>;
    }

    const { cartItems, total, trackingNumber } = orderDetails;

    if (!cartItems || cartItems.length === 0) {
        // Handle the case where cartItems are undefined or empty
        return <div>No items found in your order. Please try again.</div>;
    }

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6 text-green-600">Thank You for Your Order!</h1>
            <p className="text-lg mb-4">Your order has been placed successfully. Below are the details of your order:</p>

            <div className="bg-gray-100 p-4 rounded-lg mb-6">
                <h2 className="text-xl font-semibold">Tracking Number:</h2>
                <p className="text-lg text-gray-700">{trackingNumber}</p>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg mb-6">
                <h2 className="text-xl font-semibold">Order Summary:</h2>
                <ul>
                    {cartItems.map((item, index) => (
                        <li key={index} className="text-lg text-gray-700">
                            {item.name} - ${item.price} x {item.quantity}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg">
                <h2 className="text-xl font-semibold">Total:</h2>
                <p className="text-lg text-gray-700">${total}</p>
            </div>
        </div>
    );
}
