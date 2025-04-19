import React from 'react';
import { Link } from 'react-router-dom';
import { Bot } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Shop: React.FC = () => {
  const { addToCart } = useCart();

  const products = [
    {
      id: "mc600",
      name: "MC600 Mobile Cobot",
      description: "Combining the 'legs' of a mobile robot with the 'arms' of a cobot for complex automation tasks.",
      price: 42000,
      image: "https://media.licdn.com/dms/image/v2/D5622AQFJq1Nho1VRwg/feedshare-shrink_2048_1536/B56ZPpzHtAG8Ao-/0/1734794313220?e=1747872000&v=beta&t=Y-2pluiDeUiMqWCaaBklE3lFgzaTe62kGVNGzYck6fU",
      features: [
        "Heavy-Duty Performance with extended reach",
        "Enhanced Safety & Ergonomics",
        "Continuous Productivity with minimal downtime",
        "Ease of Use with proven, ready-to-deploy system"
      ]
    },
    {
      id: "robot-1",
      name: "Robot Model 100",
      description: "Advanced automation solution for industrial applications.",
      price: 15000,
      image: null,
      features: [
        "Payload capacity: 10kg",
        "Reach: 1.3m",
        "6 degrees of freedom",
        "Compact design for flexible deployment"
      ]
    },
    // Add more products as needed
  ];

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Shop Our Robots</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map(product => (
          <div key={product.id} className="bg-white border border-black rounded-xl p-6 shadow-md">
            <Link to={`/shop/${product.id}`}>
              <div className="h-48 bg-gray-200 mb-4">
                {product.image ? (
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-500">No Image</div>
                )}
              </div>
              <h2 className="text-xl font-bold text-black">{product.name}</h2>
              <p className="text-gray-600 mb-2">{product.description}</p>
              <p className="text-black font-semibold">${product.price.toLocaleString()}</p>
            </Link>
            <ul className="text-sm mt-2 mb-4 text-gray-600 list-disc list-inside">
              {product.features.slice(0, 2).map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <button
              onClick={() => addToCart(product)}
              className="w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
