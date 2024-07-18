import React, { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth';

const Profile = () => {
  const { user, updateProfile } = useAuth();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (user) {
      setUsername(user.username || '');
      setEmail(user.email || '');
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    try {
      await updateProfile({ username, email });
      setMessage('Profile updated successfully');
    } catch (err) {
      setError('Failed to update profile');
    }
  };

  if (!user) {
    return <div>Please log in to view your profile.</div>;
  }

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-5">Your Profile</h2>
      {error && <p className="text-red-500 mb-5">{error}</p>}
      {message && <p className="text-green-500 mb-5">{message}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="username" className="block mb-1">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
          Update Profile
        </button>
      </form>
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-3">Reading History</h3>
        {/* Add reading history component here */}
        <p>Your reading history will be displayed here.</p>
      </div>
    </div>
  );
};

export default Profile;