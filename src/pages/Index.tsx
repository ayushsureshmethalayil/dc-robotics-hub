
import React from 'react';

const Index = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6 text-blue-900">Welcome to DC Robotics</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Pioneering the future of automation with cutting-edge robotic solutions for industries worldwide.
        </p>
      </section>

      <section className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">Innovation</h2>
          <p className="text-gray-600">
            Leading the industry with breakthrough robotic technologies and solutions.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">Excellence</h2>
          <p className="text-gray-600">
            Committed to the highest standards in robot design, manufacturing, and service.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">Support</h2>
          <p className="text-gray-600">
            24/7 technical assistance and maintenance for all our robotic systems.
          </p>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-900">Featured Products</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-4">
                <h3 className="font-bold mb-2">Robot Model {item}00</h3>
                <p className="text-gray-600 mb-2">Advanced automation solution for industrial applications.</p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-900">Why Choose DC Robotics?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-blue-800">Industry Expertise</h3>
            <p className="text-gray-600">
              With over 15 years of experience in robotics, we bring unparalleled knowledge to every project.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-blue-800">Custom Solutions</h3>
            <p className="text-gray-600">
              We design and develop tailor-made robotic systems to meet your specific requirements.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-blue-800">Advanced Technology</h3>
            <p className="text-gray-600">
              Our robots incorporate cutting-edge AI, machine learning, and precision engineering.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-blue-800">Reliability</h3>
            <p className="text-gray-600">
              DC Robotics systems are built to withstand demanding environments with minimal downtime.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
