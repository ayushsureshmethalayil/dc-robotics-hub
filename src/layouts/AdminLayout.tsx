
import React from "react";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-900 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">DC Robotics Admin</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="/admin" className="hover:underline">Dashboard</a></li>
              <li><a href="/admin/products" className="hover:underline">Products</a></li>
              <li><a href="/admin/milestones" className="hover:underline">Milestones</a></li>
              <li><a href="/admin/settings" className="hover:underline">Settings</a></li>
              <li><a href="/" className="hover:underline">View Site</a></li>
            </ul>
          </nav>
        </div>
      </header>
      
      <main className="flex-grow">
        <Outlet />
      </main>
      
      <footer className="bg-gray-800 text-white p-4">
        <div className="container mx-auto">
          <p className="text-center">© 2025 DC Robotics Admin Panel</p>
        </div>
      </footer>
    </div>
  );
};

export default AdminLayout;
