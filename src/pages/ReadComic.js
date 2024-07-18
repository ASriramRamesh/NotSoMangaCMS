import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ComicReader from '../components/comic/ComicReader';

const ReadComic = () => {
  const { comicId, chapterId } = useParams();
  const [comic, setComic] = useState(null);
  const [chapter, setChapter] = useState(null);

  useEffect(() => {
    // Fetch comic and chapter details
    // This is a placeholder. Replace with actual API calls
    setComic({
      id: comicId,
      title: "Sample Comic",
      chapters: [
        { id: 1, title: "Chapter 1" },
        { id: 2, title: "Chapter 2" },
        { id: 3, title: "Chapter 3" },
      ]
    });

    setChapter({
      id: chapterId,
      title: `Chapter ${chapterId}`,
      pages: [
        "https://via.placeholder.com/800x1200",
        "https://via.placeholder.com/800x1200",
        "https://via.placeholder.com/800x1200",
      ]
    });
  }, [comicId, chapterId]);

  if (!comic || !chapter) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link to={`/comic/${comicId}`} className="text-blue-500 hover:underline">&larr; Back to Comic Details</Link>
        <h1 className="text-3xl font-bold mt-4">{comic.title}</h1>
        <h2 className="text-xl font-semibold">{chapter.title}</h2>
      </div>

      <ComicReader pages={chapter.pages} />

      <div className="mt-8 flex justify-between">
        <Link to={`/read/${comicId}/${parseInt(chapterId) - 1}`} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
          Previous Chapter
        </Link>
        <Link to={`/read/${comicId}/${parseInt(chapterId) + 1}`} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
          Next Chapter
        </Link>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Chapters</h3>
        <ul className="bg-white shadow-md rounded-lg overflow-hidden">
          {comic.chapters.map((chap) => (
            <li key={chap.id} className="border-b last:border-b-0">
              <Link to={`/read/${comicId}/${chap.id}`} className={`block px-6 py-4 hover:bg-gray-100 transition duration-300 ${chap.id === parseInt(chapterId) ? 'bg-blue-100' : ''}`}>
                {chap.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ReadComic;