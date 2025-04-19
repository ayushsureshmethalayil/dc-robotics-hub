import React from 'react';
import { useCart } from '../context/CartContext';

const Shop = () => {
  const { addToCart } = useCart();
  
  const products = [
    { id: "mc600", name: "MC600 Mobile Cobot", price: "$20,000", description: "Robotic arm with mobility", image: null },
    { id: "product-1", name: "Robot Model 100", price: "$15,000", description: "Automation for industrial use", image: null },
    // Add more products
  ];

  const handleAddToCart = (product) => {
    addToCart({ ...product, quantity: 1 });
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <section className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-6 text-black">Shop Our Robots</h1>
        <p className="text-xl text-gray-600">Browse our range of cutting-edge robotic solutions.</p>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map(product => (
          <div key={product.id} className="bg-white border-2 border-black rounded-lg shadow-lg">
            <div className="h-32 bg-gray-200">
              {product.image && <img src={product.image} alt={product.name} />}
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-black">{product.name}</h3>
              <p className="text-gray-600 mb-3">{product.description}</p>
              <p className="font-bold text-black mb-4">{product.price}</p>
              <button 
                onClick={() => handleAddToCart(product)} 
                className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Shop;
