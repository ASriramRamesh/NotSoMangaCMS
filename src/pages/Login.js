import React from 'react';
import Login from '../components/user/Login';

const LoginPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Login to ComicReader</h1>
      <Login />
    </div>
  );
};

export default LoginPage;