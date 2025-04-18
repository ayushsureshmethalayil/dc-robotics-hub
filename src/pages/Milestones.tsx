
import React from 'react';

const Milestones = () => {
  const milestones = [
    {
      year: "2020",
      title: "Company Founded",
      description: "DC Robotics was established with a vision to revolutionize industrial automation."
    },
    {
      year: "2021",
      title: "First Major Project",
      description: "Successfully implemented our first large-scale robotic solution for a manufacturing client."
    },
    {
      year: "2022",
      title: "Product Line Expansion",
      description: "Introduced our first series of collaborative robots designed for small and medium businesses."
    },
    {
      year: "2023",
      title: "International Expansion",
      description: "Opened our first international office to serve clients across Europe and Asia."
    },
    {
      year: "2024",
      title: "MC600 Launch",
      description: "Released our flagship MC600 Mobile Cobot, combining mobile robotics with collaborative arm technology."
    }
  ];

  return (
    <div className="container mx-auto py-12 px-4">
      <section className="text-center mb-16 animate-fade-in">
        <h1 className="text-5xl font-bold mb-6 text-black">Our Journey</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Tracing the path of innovation and growth at DC Robotics.
        </p>
      </section>

      <section className="mb-16">
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-black"></div>
          
          {/* Timeline events */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div 
                key={milestone.year} 
                className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} animate-fade-in`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Year marker */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-black text-white flex items-center justify-center font-bold z-10">
                  {milestone.year}
                </div>
                
                {/* Content box */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'mr-auto pr-8' : 'ml-auto pl-8'}`}>
                  <div className="bg-white border-2 border-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
                    <h3 className="text-2xl font-bold mb-2 text-black">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Milestones;
