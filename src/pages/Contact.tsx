import React, { useState } from 'react';
import { Button } from "@/components/ui/button";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://hook.us1.make.com/45to0w175p43ckuz2rfwaa6sjl8hfy5z", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while sending the message.");
    }
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <section className="text-center mb-16 animate-fade-in">
        <h1 className="text-5xl font-bold mb-6 text-black">Contact Us</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Have questions about our robotic solutions? We're here to help.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-12 mb-16">
        <div className="bg-white border-2 border-black p-8 rounded-lg shadow-lg animate-slide-in">
          <h2 className="text-2xl font-bold mb-6 text-black">Send Us a Message</h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border-2 border-gray-300 rounded-md p-2 focus:border-black focus:outline-none"
                placeholder="Your Name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border-2 border-gray-300 rounded-md p-2 focus:border-black focus:outline-none"
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
              <input
                type="text"
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full border-2 border-gray-300 rounded-md p-2 focus:border-black focus:outline-none"
                placeholder="How can we help?"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                id="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full border-2 border-gray-300 rounded-md p-2 focus:border-black focus:outline-none"
                placeholder="Tell us about your project or questions..."
                required
              ></textarea>
            </div>

            <Button type="submit" className="bg-black text-white hover:bg-gray-800 w-full">
              Send Message
            </Button>
          </form>
        </div>

        <div className="space-y-8 animate-fade-in">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-black">Contact Information</h2>
            <p className="text-gray-600 mb-2">We'd love to hear from you. Here's how you can reach us:</p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="bg-black text-white p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-black">Address</h3>
                <p className="text-gray-600">DC House, VP Marakar Rd, Nethaji Nagar, Edappally, Ernakulam, Kerala 682024</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="bg-black text-white p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-black">Phone</h3>
                <p className="text-gray-600">+91 90724 07456</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="bg-black text-white p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-black">Email</h3>
                <p className="text-gray-600">dcdronesofficial@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="pt-6">
            <h3 className="font-bold text-black text-xl mb-4">Business Hours</h3>
            <p className="text-gray-600 mb-2">Monday - Sunday: 9:00 AM - 8:00 PM</p>
          </div>

          <div className="pt-6">
            <h3 className="font-bold text-black text-xl mb-4">Find Us on the Map</h3>
            <a
              href="https://www.google.com/maps/place/DC+House,+VP+Marakar+Rd,+Nethaji+Nagar,+Edappally,+Ernakulam,+Kerala+682024"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://maps.googleapis.com/maps/api/staticmap?center=DC+House,+VP+Marakar+Rd,+Nethaji+Nagar,+Edappally,+Ernakulam,+Kerala+682024&zoom=15&size=600x300&maptype=roadmap&markers=color:red%7Clabel:D%7CDC+House,+Edappally&key=YOUR_GOOGLE_MAPS_API_KEY"
                alt="DC Robotics Location"
                className="w-full rounded-lg shadow-lg"
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
