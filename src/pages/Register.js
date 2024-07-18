import React from 'react';
import Register from '../components/user/Register';

const RegisterPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Register for ComicReader</h1>
      <Register />
    </div>
  );
};

export default RegisterPage;