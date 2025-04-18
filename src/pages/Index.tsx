
import React from 'react';
import { Link } from 'react-router-dom';
import { Robot } from 'lucide-react';

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

      {/* Featured Product Section */}
      <section className="mb-16 animate-fade-in" style={{ animationDelay: "600ms" }}>
        <h2 className="text-3xl font-bold mb-6 text-center text-black">Featured Product: MC600</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-white border-2 border-black rounded-lg overflow-hidden shadow-lg animate-slide-in">
            <img 
              src="https://media.licdn.com/dms/image/v2/D5622AQFJq1Nho1VRwg/feedshare-shrink_2048_1536/B56ZPpzHtAG8Ao-/0/1734794313220?e=1747872000&v=beta&t=Y-2pluiDeUiMqWCaaBklE3lFgzaTe62kGVNGzYck6fU" 
              alt="MC600 Mobile Cobot" 
              className="w-full h-auto"
            />
          </div>
          <div className="space-y-4 animate-fade-in" style={{ animationDelay: "800ms" }}>
            <h3 className="text-2xl font-bold text-black">MC600 Mobile Cobot</h3>
            <p className="text-gray-600">
              Combining the "legs" of a mobile robot with the "arms" of a cobot, the MC600 is designed for complex automation tasks like palletising, machine tending, and box handling.
            </p>
            <ul className="space-y-3">
              {[
                "Heavy-Duty Performance with extended reach of the UR20 cobot",
                "Enhanced Safety & Ergonomics for improved workplace safety",
                "Continuous Productivity with minimal downtime",
                "Ease of Use with proven, ready-to-deploy system"
              ].map((feature, index) => (
                <li 
                  key={index} 
                  className="flex items-center space-x-2 text-gray-600 animate-fade-in"
                  style={{ animationDelay: `${(index + 4) * 200}ms` }}
                >
                  <Robot className="h-5 w-5 text-black flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/shop/mc600"
              className="inline-block mt-4 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors animate-scale-in"
              style={{ animationDelay: "1200ms" }}
            >
              Learn More About MC600
            </Link>
          </div>
        </div>
      </section>

      <section className="mb-16 animate-fade-in" style={{ animationDelay: "600ms" }}>
        <h2 className="text-3xl font-bold mb-6 text-center text-black">Other Products</h2>
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
