
import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <section className="text-center mb-16 animate-fade-in">
        <h1 className="text-5xl font-bold mb-6 text-black">About DC Robotics</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We are at the forefront of industrial automation, providing cutting-edge robotic solutions for businesses worldwide.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-12 mb-16">
        <div className="animate-fade-in space-y-4">
          <h2 className="text-3xl font-bold text-black">Our Mission</h2>
          <p className="text-gray-600">
            DC Robotics is committed to transforming industries through advanced robotic technology. 
            We aim to enhance workplace safety, increase productivity, and enable scalable automation 
            solutions for businesses of all sizes.
          </p>
          <p className="text-gray-600">
            Our team of experts works closely with clients to understand their unique challenges 
            and develop customized robotic systems that address specific operational needs.
          </p>
        </div>
        <div className="bg-gray-200 rounded-lg animate-slide-in h-64 md:h-auto"></div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-black animate-fade-in">Our Expertise</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Mobile Robotics",
              description: "Autonomous mobile robots for material handling and logistics in industrial environments."
            },
            {
              title: "Collaborative Robots",
              description: "Human-friendly cobots designed to work safely alongside employees in shared workspaces."
            },
            {
              title: "Custom Automation",
              description: "Tailored robotic solutions for unique industrial applications and challenges."
            }
          ].map((item, index) => (
            <div 
              key={item.title}
              className="bg-white border-2 border-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform animate-scale-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <h3 className="text-2xl font-bold mb-4 text-black">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
