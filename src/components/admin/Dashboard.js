import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalComics: 0,
    totalUsers: 0,
    newUsersThisWeek: 0,
    totalReads: 0
  });

  const [recentActivity, setRecentActivity] = useState([]);

  useEffect(() => {
    // Fetch dashboard data
    // This is a placeholder. Replace with actual API calls
    setStats({
      totalComics: 150,
      totalUsers: 5000,
      newUsersThisWeek: 120,
      totalReads: 25000
    });

    setRecentActivity([
      { id: 1, action: 'New comic uploaded', user: 'admin@example.com', date: '2023-07-17 14:30' },
      { id: 2, action: 'User registered', user: 'newuser@example.com', date: '2023-07-17 13:45' },
      { id: 3, action: 'Comic chapter added', user: 'editor@example.com', date: '2023-07-17 12:15' },
    ]);
  }, []);

  const chartData = [
    { name: 'Mon', reads: 4000 },
    { name: 'Tue', reads: 3000 },
    { name: 'Wed', reads: 2000 },
    { name: 'Thu', reads: 2780 },
    { name: 'Fri', reads: 1890 },
    { name: 'Sat', reads: 2390 },
    { name: 'Sun', reads: 3490 },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Total Comics</h2>
          <p className="text-3xl font-bold text-blue-600">{stats.totalComics}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Total Users</h2>
          <p className="text-3xl font-bold text-green-600">{stats.totalUsers}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">New Users This Week</h2>
          <p className="text-3xl font-bold text-purple-600">{stats.newUsersThisWeek}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Total Reads</h2>
          <p className="text-3xl font-bold text-red-600">{stats.totalReads}</p>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h2 className="text-lg font-semibold mb-4">Weekly Reads</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="reads" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
        <table className="w-full">
          <thead>
            <tr className="text-left">
              <th className="pb-2">Action</th>
              <th className="pb-2">User</th>
              <th className="pb-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {recentActivity.map((activity) => (
              <tr key={activity.id}>
                <td className="py-2">{activity.action}</td>
                <td>{activity.user}</td>
                <td>{activity.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;