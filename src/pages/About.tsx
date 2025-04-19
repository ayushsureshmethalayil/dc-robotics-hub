import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      {/* Existing content */}

      {/* FAQ Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-black animate-fade-in">Frequently Asked Questions</h2>
        <div className="space-y-8">
          {[
            {
              name: "John Doe",
              question: "What is the best robotics solution for logistics?",
              email: "john@example.com",
              answer: "Our autonomous mobile robots are ideal for material handling and logistics.",
              profileIcon: "https://via.placeholder.com/50"
            },
            {
              name: "Jane Smith",
              question: "How do collaborative robots enhance safety?",
              email: "jane@example.com",
              answer: "Collaborative robots are designed to work alongside humans safely, improving workplace safety.",
              profileIcon: "https://via.placeholder.com/50"
            }
          ].map((faq, index) => (
            <div 
              key={index} 
              className="bg-white border-2 border-black p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <img src={faq.profileIcon} alt="Profile" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <p className="font-bold">{faq.name}</p>
                  <p className="text-sm text-gray-500">{faq.email}</p>
                </div>
              </div>
              <p className="text-xl font-semibold mb-4">{faq.question}</p>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
