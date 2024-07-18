import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ComicManager = () => {
  const [comics, setComics] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch comics
    // This is a placeholder. Replace with actual API call
    setComics([
      { id: 1, title: 'Comic 1', author: 'Author 1', chapters: 10, status: 'Ongoing' },
      { id: 2, title: 'Comic 2', author: 'Author 2', chapters: 5, status: 'Completed' },
      { id: 3, title: 'Comic 3', author: 'Author 3', chapters: 15, status: 'Ongoing' },
    ]);
  }, []);

  const filteredComics = comics.filter(comic =>
    comic.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Comic Manager</h1>
      
      <div className="mb-4 flex justify-between items-center">
        <input
          type="text"
          placeholder="Search comics..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 border rounded-md"
        />
        <Link to="/admin/comics/new" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          Add New Comic
        </Link>
      </div>

      <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2 text-left">Title</th>
            <th className="px-4 py-2 text-left">Author</th>
            <th className="px-4 py-2 text-left">Chapters</th>
            <th className="px-4 py-2 text-left">Status</th>
            <th className="px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredComics.map((comic) => (
            <tr key={comic.id} className="border-t">
              <td className="px-4 py-2">{comic.title}</td>
              <td className="px-4 py-2">{comic.author}</td>
              <td className="px-4 py-2">{comic.chapters}</td>
              <td className="px-4 py-2">{comic.status}</td>
              <td className="px-4 py-2">
                <Link to={`/admin/comics/${comic.id}/edit`} className="text-blue-500 hover:underline mr-2">Edit</Link>
                <button className="text-red-500 hover:underline">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComicManager;