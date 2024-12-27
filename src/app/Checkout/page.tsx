'use client';

import React, { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';

export default function CheckoutPage() {
    const [isClient, setIsClient] = useState(false); // Client-side check
    const [cartItems, setCartItems] = useState([]);
    const [shippingAddress, setShippingAddress] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("");
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setIsClient(true); // Mark component as mounted in the client
        const savedCart = JSON.parse(sessionStorage.getItem('cart')) || [];
        const savedTotal = sessionStorage.getItem('total');
        setCartItems(savedCart);
        setTotal(savedTotal);
    }, []);

    const router = useRouter();

    // const handlePlaceOrder = async () => {
    //     const orderData = {
    //         cartItems: cartItems,
    //         shippingAddress: shippingAddress,
    //         paymentMethod: paymentMethod,
    //         total: total
    //     };

    //     console.log(cartItems);
    //     console.log(shippingAddress);
    //     console.log(paymentMethod);
    //     console.log(total);

    //     try {
    //         const response = await fetch('/api/place-order', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(orderData), // Send the order data as JSON
    //         });

    //         if (!response.ok) {
    //             const errorData = await response.json();
    //             console.error('Error placing order:', errorData);
    //             alert('Error placing order: ' + errorData.message);
    //             return;
    //         }

    //         const data = await response.json();
    //         alert(data.message);
    //         router.push('/order-confirmation');
    //     } catch (error) {
    //         console.error('Error placing order:', error);
    //         alert('Error placing order');
    //     }
    // };

    const handlePlaceOrder = async () => {
        if (!Array.isArray(cartItems) || cartItems.length === 0) {
            alert('Your cart is empty!');
            return;
        }

        try {
            const orderDetails = {
                cartItems,
                shippingAddress,
                paymentMethod,
                total,
            };

            const response = await fetch('/api/place-order', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(orderDetails),
            });

            if (response.ok) {
                const result = await response.json();

                const trackingNumber = result.trackingNumber || `TRK-${Math.floor(Math.random() * 1000000)}`;
                const confirmationDetails = {
                    cartItems: result.cartItems || cartItems,
                    total: result.total || total,
                    trackingNumber,
                };

                // Save order details for the confirmation page
                sessionStorage.setItem('orderDetails', JSON.stringify(confirmationDetails));

                // Clear the cart
                sessionStorage.removeItem('cart');
                setCartItems([]);

                // Redirect to confirmation page
                router.push('/order-confirmation');
            } else {
                const errorData = await response.json();
                console.error('Error placing order:', errorData.message || response.statusText);
                alert(errorData.message || 'Failed to place order. Please try again.');
            }
        } catch (error) {
            console.error('Error placing order:', error);
            alert('An unexpected error occurred. Please try again.');
        }
    };



    if (!isClient) {
        return <div>Loading...</div>; // Return loading state until client-side rendering
    }

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">Checkout</h1>

            {/* Cart Items */}
            <div className="mb-6">
                <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
                <div className="border p-4 rounded-lg">
                    {cartItems.length === 0 ? (
                        <p>Your cart is empty.</p>
                    ) : (
                        <table className="w-full text-left table-auto">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="border px-4 py-2 text-sm font-medium">Product</th>
                                    <th className="border px-4 py-2 text-sm font-medium">Price</th>
                                    <th className="border px-4 py-2 text-sm font-medium">Quantity</th>
                                    <th className="border px-4 py-2 text-sm font-medium">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map((item, index) => (
                                    <tr key={index}>
                                        <td className="border px-4 py-2">{item.name}</td>
                                        <td className="border px-4 py-2">${item.price}</td>
                                        <td className="border px-4 py-2">{item.quantity}</td>
                                        <td className="border px-4 py-2">${item.price * item.quantity}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>

            {/* Shipping Address */}
            <div className="mb-6">
                <h2 className="text-2xl font-semibold mb-4">Shipping Address</h2>
                <textarea
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Enter your shipping address"
                    value={shippingAddress}
                    onChange={(e) => setShippingAddress(e.target.value)}
                    rows="4"
                />
            </div>

            {/* Payment Method */}
            <div className="mb-6">
                <h2 className="text-2xl font-semibold mb-4">Payment Method</h2>
                <select
                    className="w-full p-2 border border-gray-300 rounded"
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                >
                    <option value="">Select Payment Method</option>
                    <option value="credit">Credit Card</option>
                    <option value="paypal">PayPal</option>
                    <option value="cod">Cash on Delivery</option>
                </select>
            </div>

            {/* Total */}
            <div className="mb-6">
                <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
                <div className="border p-4 rounded-lg">
                    <p className="text-lg">Total: ${total}</p>
                    <button
                        className="mt-4 px-6 py-2 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700"
                        onClick={handlePlaceOrder}
                    >
                        Place Order
                    </button>
                </div>
            </div>
        </div>
    );
}
