
import React from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <section className="text-center mb-16 animate-fade-in">
        <h1 className="text-5xl font-bold mb-6 text-black">Welcome to DC Robotics</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Pioneering the future of automation with cutting-edge robotic solutions for industries worldwide.
        </p>
      </section>

      <section className="grid md:grid-cols-3 gap-8 mb-16">
        {[
          {
            title: "Innovation",
            description: "Leading the industry with breakthrough robotic technologies and solutions."
          },
          {
            title: "Excellence",
            description: "Committed to the highest standards in robot design, manufacturing, and service."
          },
          {
            title: "Support",
            description: "24/7 technical assistance and maintenance for all our robotic systems."
          }
        ].map((item, index) => (
          <div 
            key={item.title}
            className="bg-white border-2 border-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform animate-scale-in"
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <h2 className="text-2xl font-bold mb-4 text-black">{item.title}</h2>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </section>

      <section className="mb-16 animate-fade-in" style={{ animationDelay: "600ms" }}>
        <h2 className="text-3xl font-bold mb-6 text-center text-black">Featured Products</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <Link 
              to={`/shop/product-${item}`}
              key={item} 
              className="bg-white border-2 border-black rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform animate-scale-in"
              style={{ animationDelay: `${(item + 3) * 200}ms` }}
            >
              <div className="h-48 bg-gray-200"></div>
              <div className="p-4">
                <h3 className="font-bold mb-2 text-black">Robot Model {item}00</h3>
                <p className="text-gray-600 mb-2">Advanced automation solution for industrial applications.</p>
                <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors">
                  View Details
                </button>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
