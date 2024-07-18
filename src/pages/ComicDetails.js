import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const ComicDetails = () => {
  const { id } = useParams();
  const [comic, setComic] = useState(null);

  useEffect(() => {
    // Fetch comic details
    // This is a placeholder. Replace with actual API call
    setComic({
      id: id,
      title: "Sample Comic",
      author: "John Doe",
      description: "This is a sample comic description. It's an exciting story full of adventure and surprises!",
      coverImage: "https://via.placeholder.com/300x450",
      chapters: [
        { id: 1, title: "Chapter 1", date: "2023-07-01" },
        { id: 2, title: "Chapter 2", date: "2023-07-08" },
        { id: 3, title: "Chapter 3", date: "2023-07-15" },
      ]
    });
  }, [id]);

  if (!comic) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row">
        <img src={comic.coverImage} alt={comic.title} className="w-full md:w-1/3 rounded-lg shadow-lg mb-6 md:mb-0" />
        <div className="md:ml-8 md:w-2/3">
          <h1 className="text-3xl font-bold mb-4">{comic.title}</h1>
          <p className="text-xl mb-4">by {comic.author}</p>
          <p className="mb-6">{comic.description}</p>
          <Link to={`/read/${comic.id}/1`} className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300">
            Start Reading
          </Link>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-6">Chapters</h2>
      <ul className="bg-white shadow-md rounded-lg overflow-hidden">
        {comic.chapters.map((chapter) => (
          <li key={chapter.id} className="border-b last:border-b-0">
            <Link to={`/read/${comic.id}/${chapter.id}`} className="block px-6 py-4 hover:bg-gray-100 transition duration-300">
              <span className="font-semibold">{chapter.title}</span>
              <span className="text-gray-500 ml-4">{chapter.date}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ComicDetails;