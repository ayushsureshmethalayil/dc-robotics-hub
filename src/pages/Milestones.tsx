import React from 'react';

const Milestones = () => {
  const milestones = [
    {
      year: "2020",
      title: "Company Founded",
      description: "DC Robotics was established with a vision to revolutionize industrial automation.",
      imageUrl: "https://www.dropbox.com/scl/fi/4r8hxetlcu351z42aor28/IMG_9990.JPG?rlkey=u38q11yjt64s8mzix3dlzfb9c&st=09z4ih4a&dl=1"
    },
    {
      year: "2021",
      title: "First Major Project",
      description: "Successfully implemented our first large-scale robotic solution for a manufacturing client.",
      imageUrl: "https://www.dropbox.com/scl/fi/onyaroxbjp1fuu923api3/20250130_091453.jpg?rlkey=zy570ep65dwp34ab8xx6mzoo8&st=w82j1pee&dl=1"
    },
    {
      year: "2022",
      title: "Product Line Expansion",
      description: "Introduced our first series of collaborative robots designed for small and medium businesses.",
      imageUrl: "https://www.dropbox.com/scl/fi/597taurkmvo7d22aklkxb/20250124_123358.jpg?rlkey=8a3qt3y0j3ul9um9o8eugvpi3&st=90tn17br&dl=1"
    },
    {
      year: "2023",
      title: "International Expansion",
      description: "Opened our first international office to serve clients across Europe and Asia.",
      imageUrl: "https://www.dropbox.com/scl/fi/597taurkmvo7d22aklkxb/20250124_123358.jpg?rlkey=8a3qt3y0j3ul9um9o8eugvpi3&st=o3yp59b3&dl=1"
    },
    {
      year: "2024",
      title: "MC600 Launch",
      description: "Released our flagship MC600 Mobile Cobot, combining mobile robotics with collaborative arm technology.",
      imageUrl: "https://www.dropbox.com/scl/fi/r9bgc8rvm7duotg2b2tnm/20250120_160252.jpg?rlkey=y8n4k82re7a0kmkayoz2f1c4b&st=sdgjcxow&dl=1"
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
                    <img src={milestone.imageUrl} alt={milestone.title} className="mt-4 w-full h-auto rounded-lg shadow-md" />
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
