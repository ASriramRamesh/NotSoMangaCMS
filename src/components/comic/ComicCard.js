import React from 'react';
import { Link } from 'react-router-dom';

const ComicCard = ({ id, title, coverImage, latestChapter }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1">
      <Link to={`/comic/${id}`}>
        <img src={coverImage} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="font-bold text-lg mb-2 text-gray-800 dark:text-white">{title}</h3>
          {latestChapter && (
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Latest: Chapter {latestChapter}
            </p>
          )}
        </div>
      </Link>
    </div>
  );
};

export default ComicCard;