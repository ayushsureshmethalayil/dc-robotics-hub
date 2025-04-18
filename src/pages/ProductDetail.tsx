
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Bot, ChevronLeft } from 'lucide-react';
import { Button } from "@/components/ui/button";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  
  // In a real app, this would come from an API or state management
  const products = {
    "mc600": {
      name: "MC600 Mobile Cobot",
      description: "Combining the \"legs\" of a mobile robot with the \"arms\" of a cobot, the MC600 is designed for complex automation tasks like palletising, machine tending, and box handling.",
      fullDescription: "Mobile Industrial Robots (MiR) has unveiled the MC600 mobile cobot, the latest addition to their MiR Go-approved lineup. Designed to handle complex automation tasks, the MC600 is a game-changer for industries seeking scalable, efficient solutions. Building on the success of previous models, the MC600 is equipped to handle heavier payloads with the extended reach of the UR20 cobot.",
      price: "Contact for pricing",
      image: "https://media.licdn.com/dms/image/v2/D5622AQFJq1Nho1VRwg/feedshare-shrink_2048_1536/B56ZPpzHtAG8Ao-/0/1734794313220?e=1747872000&v=beta&t=Y-2pluiDeUiMqWCaaBklE3lFgzaTe62kGVNGzYck6fU",
      features: [
        "Heavy-Duty Performance with extended reach of the UR20 cobot",
        "Enhanced Safety & Ergonomics for improved workplace safety",
        "Continuous Productivity with minimal downtime",
        "Ease of Use with proven, ready-to-deploy system",
        "Serves multiple machines and handles materials seamlessly",
        "Designed for scalability, reliability, and operational efficiency"
      ],
      specifications: [
        { name: "Cobot Type", value: "UR20" },
        { name: "Mobile Base", value: "MiR" },
        { name: "Payload Capacity", value: "Designed for heavier loads" },
        { name: "Applications", value: "Palletising, machine tending, box handling" },
        { name: "Industries", value: "Manufacturing, logistics, healthcare" }
      ]
    },
    "product-1": {
      name: "Robot Model 100",
      description: "Advanced automation solution for industrial applications.",
      fullDescription: "The Model 100 is our entry-level industrial robot designed for versatility and reliability. It offers comprehensive automation capabilities for small to medium manufacturing environments.",
      price: "$15,000",
      image: null,
      features: [
        "Payload capacity: 10kg",
        "Reach: 1.3m",
        "6 degrees of freedom",
        "Compact design for flexible deployment",
        "User-friendly programming interface",
        "Multiple mounting options"
      ],
      specifications: [
        { name: "Weight", value: "28kg" },
        { name: "Power Requirements", value: "230V" },
        { name: "Repeatability", value: "±0.03mm" },
        { name: "Maximum Speed", value: "1.5m/s" },
        { name: "Programming", value: "Graphical interface and API" }
      ]
    }
  };
  
  // Default to MC600 if product not found
  const product = products[id as keyof typeof products] || products["mc600"];

  return (
    <div className="container mx-auto py-12 px-4">
      <Link to="/shop" className="inline-flex items-center text-black hover:underline mb-8 animate-fade-in">
        <ChevronLeft className="h-4 w-4 mr-1" />
        Back to Shop
      </Link>
      
      <section className="grid md:grid-cols-2 gap-12 mb-16">
        <div className="bg-white border-2 border-black rounded-lg overflow-hidden shadow-lg animate-slide-in">
          {product.image ? (
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-auto"
            />
          ) : (
            <div className="h-64 md:h-96 bg-gray-200 flex items-center justify-center">
              <Bot className="h-24 w-24 text-gray-400" />
            </div>
          )}
        </div>
        
        <div className="space-y-6 animate-fade-in">
          <h1 className="text-3xl font-bold text-black">{product.name}</h1>
          <p className="text-xl font-bold text-black">{product.price}</p>
          <p className="text-gray-600">{product.fullDescription || product.description}</p>
          
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-black">Key Features</h2>
            <ul className="space-y-3">
              {product.features.map((feature, index) => (
                <li 
                  key={index} 
                  className="flex items-center space-x-2 text-gray-600"
                >
                  <Bot className="h-5 w-5 text-black flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="pt-6 space-y-4">
            <Button className="bg-black text-white hover:bg-gray-800 w-full">
              Request Quote
            </Button>
            <Button className="bg-white border-2 border-black text-black hover:bg-gray-100 w-full">
              Add to Cart
            </Button>
          </div>
        </div>
      </section>
      
      <section className="mb-16 animate-fade-in">
        <h2 className="text-2xl font-bold mb-6 text-black">Specifications</h2>
        <div className="bg-white border-2 border-black rounded-lg overflow-hidden shadow-lg">
          <table className="w-full">
            <tbody>
              {product.specifications?.map((spec, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="py-4 px-6 font-medium">{spec.name}</td>
                  <td className="py-4 px-6 text-gray-600">{spec.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
