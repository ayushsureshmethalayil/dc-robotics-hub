'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Button } from "@/components/ui/button";

const Cart = () => {
  const router = useRouter();

  // State for cart items
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "MC600 Mobile Cobot",
      price: "Contact for pricing",
      quantity: 1
    }
  ]);

  const handleRemove = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const handleQuantityChange = (id: number, delta: number) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <section className="text-center mb-12 animate-fade-in">
        <h1 className="text-5xl font-bold mb-6 text-black">Your Cart</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Review your selected robotic solutions.
        </p>
      </section>

      <section className="mb-16">
        <div className="bg-white border-2 border-black rounded-lg shadow-lg overflow-hidden animate-scale-in">
          {cartItems.length > 0 ? (
            <>
              <table className="w-full">
                <thead className="bg-gray-100 border-b-2 border-black">
                  <tr>
                    <th className="py-4 px-6 text-left">Product</th>
                    <th className="py-4 px-6 text-left">Price</th>
                    <th className="py-4 px-6 text-left">Quantity</th>
                    <th className="py-4 px-6 text-left">Total</th>
                    <th className="py-4 px-6 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id} className="border-b border-gray-200">
                      <td className="py-4 px-6">{item.name}</td>
                      <td className="py-4 px-6">{item.price}</td>
                      <td className="py-4 px-6">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => handleQuantityChange(item.id, -1)}
                            className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center hover:bg-gray-300 transition-colors"
                          >
                            -
                          </button>
                          <span>{item.quantity}</span>
                          <button
                            onClick={() => handleQuantityChange(item.id, 1)}
                            className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center hover:bg-gray-300 transition-colors"
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="py-4 px-6">{item.price}</td>
                      <td className="py-4 px-6">
                        <button
                          onClick={() => handleRemove(item.id)}
                          className="text-red-500 hover:text-red-700 transition-colors"
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="p-6 bg-gray-50 border-t border-gray-200">
                <div className="flex justify-between items-center mb-6">
                  <span className="font-bold text-lg">Total:</span>
                  <span className="font-bold text-xl">Contact for pricing</span>
                </div>

                <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
                  <Button
                    className="bg-white border-2 border-black text-black hover:bg-gray-100 flex-1"
                    onClick={() => router.push("/shop")}
                  >
                    Continue Shopping
                  </Button>
                  <Button className="bg-black text-white hover:bg-gray-800 flex-1">
                    Request Quote
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <div className="p-12 text-center">
              <h2 className="text-2xl font-bold mb-4 text-black">Your cart is empty</h2>
              <p className="text-gray-600 mb-6">Add some products to get started.</p>
              <Button
                className="bg-black text-white hover:bg-gray-800"
                onClick={() => router.push("/shop")}
              >
                Browse Products
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Cart;
