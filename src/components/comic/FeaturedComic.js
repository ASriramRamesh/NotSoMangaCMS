import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedComic = ({ id, title, coverImage, description }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img className="h-48 w-full object-cover md:w-48" src={coverImage} alt={title} />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Featured Comic</div>
          <Link to={`/comic/${id}`} className="block mt-1 text-lg leading-tight font-medium text-black dark:text-white hover:underline">{title}</Link>
          <p className="mt-2 text-gray-500 dark:text-gray-300">{description}</p>
          <Link to={`/comic/${id}`} className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">
            Read Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedComic;