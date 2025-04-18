
import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-900 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">DC Robotics</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/about" className="hover:underline">About</a></li>
              <li><a href="/milestones" className="hover:underline">Milestones</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
              <li><a href="/shop" className="hover:underline">Shop</a></li>
              <li><a href="/cart" className="hover:underline">Cart</a></li>
            </ul>
          </nav>
        </div>
      </header>
      
      <main className="flex-grow">
        <Outlet />
      </main>
      
      <footer className="bg-gray-800 text-white p-4">
        <div className="container mx-auto">
          <p className="text-center">© 2025 DC Robotics. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
