import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ComicReader = () => {
  const { comicId, chapterId } = useParams();
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    // Fetch pages for the given comic and chapter
    // This is a placeholder. Replace with actual API call
    const fetchPages = async () => {
      // const response = await fetch(`/api/comics/${comicId}/chapters/${chapterId}`);
      // const data = await response.json();
      // setPages(data.pages);
      setPages(['/placeholder1.jpg', '/placeholder2.jpg', '/placeholder3.jpg']); // Placeholder
    };

    fetchPages();
  }, [comicId, chapterId]);

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  if (pages.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="relative">
        <img 
          src={pages[currentPage]} 
          alt={`Page ${currentPage + 1}`} 
          className="w-full h-auto"
        />
        <button 
          onClick={prevPage} 
          disabled={currentPage === 0}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-r"
        >
          Previous
        </button>
        <button 
          onClick={nextPage} 
          disabled={currentPage === pages.length - 1}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-l"
        >
          Next
        </button>
      </div>
      <div className="text-center mt-4">
        Page {currentPage + 1} of {pages.length}
      </div>
    </div>
  );
};

export default ComicReader;