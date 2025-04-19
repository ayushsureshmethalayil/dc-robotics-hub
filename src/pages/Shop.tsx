import React from 'react';
import { Link } from 'react-router-dom';
import { Bot } from 'lucide-react';
import { useCart } from '../context/CartContext'; // adjust the path as needed

const Shop = () => {
  const { addToCart } = useCart();

  const products = [
    {
      id: "mc600",
      name: "MC600 Mobile Cobot",
      description: "Combining the 'legs' of a mobile robot with the 'arms' of a cobot for complex automation tasks.",
      price: "$42,000",
      image: "https://media.licdn.com/dms/image/v2/D5622AQFJq1Nho1VRwg/feedshare-shrink_2048_1536/B56ZPpzHtAG8Ao-/0/1734794313220?e=1747872000&v=beta&t=Y-2pluiDeUiMqWCaaBklE3lFgzaTe62kGVNGzYck6fU",
      features: [
        "Heavy-Duty Performance with extended reach",
        "Enhanced Safety & Ergonomics",
        "Continuous Productivity with minimal downtime",
        "Ease of Use with proven, ready-to-deploy system"
      ]
    },
    {
      id: "product-1",
      name: "Robot Model 100",
      description: "Advanced automation solution for industrial applications.",
      price: "$15,000",
      image: null,
      features: [
        "Payload capacity: 10kg",
        "Reach: 1.3m",
        "6 degrees of freedom",
        "Compact design for flexible deployment"
      ]
    },
    {
      id: "product-2",
      name: "Robot Model 200",
      description: "Versatile robotic arm for precision tasks.",
      price: "$18,500",
      image: null,
      features: [
        "Payload capacity: 5kg",
        "Reach: 0.9m",
        "7 degrees of freedom",
        "High-precision operations"
      ]
    },
    {
      id: "product-3",
      name: "Robot Model 300",
      description: "Collaborative robot designed for human-robot interaction.",
      price: "$22,000",
      image: null,
      features: [
        "Payload capacity: 7kg",
        "Reach: 1.1m",
        "Force sensing for safe collaboration",
        "Easy programming interface"
      ]
    },
    {
      id: "product-4",
      name: "Robot Model 400",
      description: "Heavy-duty industrial robot for manufacturing.",
      price: "$35,000",
      image: null,
      features: [
        "Payload capacity: 25kg",
        "Reach: 1.8m",
        "Fast cycle times",
        "Rugged design for harsh environments"
      ]
    }
  ];

  return (
    <div className="container mx-auto py-12 px-4">
      <section className="text-center mb-16 animate-fade-in">
        <h1 className="text-5xl font-bold mb-6 text-black">Shop Our Robots</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Browse our range of cutting-edge robotic solutions designed for industrial automation.
        </p>
      </section>

      <section className="mb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="bg-white border-2 border-black rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Link to={`/shop/${product.id}`}>
                <div className={`${product.image ? 'h-48' : 'h-32'} bg-gray-200 relative`}>
                  {product.image && (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </Link>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-black">{product.name}</h3>
                <p className="text-gray-600 mb-3">{product.description}</p>
                <p className="font-bold text-black mb-4">{product.price}</p>
                <div className="space-y-2 mb-4">
                  {product.features.slice(0, 2).map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                      <Bot className="h-4 w-4 text-black flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => addToCart(product)}
                  className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors w-full"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Shop;
