
import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";

const MainLayout = () => {
  const location = useLocation();
  
  // Helper to check if the current route is active
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      <header className="bg-black text-white p-4 animate-fade-in">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold hover:scale-105 transition-transform">
            <Link to="/">DC Robotics</Link>
          </h1>
          <nav>
            <ul className="flex space-x-6">
              {[
                ["Home", "/"],
                ["About", "/about"],
                ["Milestones", "/milestones"],
                ["Contact", "/contact"],
                ["Shop", "/shop"],
                ["Cart", "/cart"]
              ].map(([title, url], index) => (
                <li key={url} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <Link 
                    to={url} 
                    className={`hover:text-gray-300 transition-colors hover:scale-105 transform inline-block ${
                      isActive(url) ? "border-b-2 border-white" : ""
                    }`}
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      
      <main className="flex-grow animate-scale-in">
        <Outlet />
      </main>
      
      <footer className="bg-black text-white p-4 animate-fade-in">
        <div className="container mx-auto">
          <p className="text-center">© 2025 DC Robotics. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
