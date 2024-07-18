import React from 'react';
import { Link, Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const AdminDashboard = () => {
  const { user } = useAuth();

  if (!user || user.role !== 'admin') {
    return <Navigate to="/login" />;
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
        </div>
        <nav className="mt-4">
          <Link to="/admin" className="block py-2 px-4 text-gray-700 hover:bg-gray-200">Overview</Link>
          <Link to="/admin/comics" className="block py-2 px-4 text-gray-700 hover:bg-gray-200">Manage Comics</Link>
          <Link to="/admin/users" className="block py-2 px-4 text-gray-700 hover:bg-gray-200">Manage Users</Link>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;