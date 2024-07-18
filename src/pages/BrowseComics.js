import React, { useState, useEffect } from 'react';
import ComicGrid from '../components/comic/ComicGrid';

const BrowseComics = () => {
  const [comics, setComics] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [genre, setGenre] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch comics
    setIsLoading(true);
    setError(null);
    try {
      // This is a placeholder. Replace with actual API call
      const fetchedComics = [
        { id: 1, title: "Comic 1", coverImage: "https://via.placeholder.com/150x200", latestChapter: 10 },
        { id: 2, title: "Comic 2", coverImage: "https://via.placeholder.com/150x200", latestChapter: 5 },
        { id: 3, title: "Comic 3", coverImage: "https://via.placeholder.com/150x200", latestChapter: 8 },
        { id: 4, title: "Comic 4", coverImage: "https://via.placeholder.com/150x200", latestChapter: 3 },
      ];
      setComics(fetchedComics);
    } catch (err) {
      setError('Failed to fetch comics');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const filteredComics = comics.filter(comic =>
    comic.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (genre === '' || comic.genre === genre)
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Browse Comics</h1>

      <div className="mb-8 flex flex-col md:flex-row md:items-center">
        <input
          type="text"
          placeholder="Search comics..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 border rounded-md mb-4 md:mb-0 md:mr-4"
        />
        <select
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          className="px-4 py-2 border rounded-md"
        >
          <option value="">All Genres</option>
          <option value="action">Action</option>
          <option value="romance">Romance</option>
          <option value="comedy">Comedy</option>
        </select>
      </div>

      {filteredComics.length > 0 ? (
        <ComicGrid comics={filteredComics} />
      ) : (
        <div>No comics found</div>
      )}
    </div>
  );
};

export default BrowseComics;