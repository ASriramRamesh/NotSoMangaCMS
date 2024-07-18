import React from 'react';
import { Link } from 'react-router-dom';
import FeaturedComic from '../components/comic/FeaturedComic';
import ComicGrid from '../components/comic/ComicGrid';

const Home = () => {
  const featuredComic = {
    id: 1,
    title: "Amazing Adventure",
    coverImage: "https://via.placeholder.com/300x450",
    description: "Join our hero on an epic journey through fantastic realms!"
  };

  const recentComics = [
    { id: 1, title: "Comic 1", coverImage: "https://via.placeholder.com/150x200", latestChapter: 10 },
    { id: 2, title: "Comic 2", coverImage: "https://via.placeholder.com/150x200", latestChapter: 5 },
    { id: 3, title: "Comic 3", coverImage: "https://via.placeholder.com/150x200", latestChapter: 8 },
    { id: 4, title: "Comic 4", coverImage: "https://via.placeholder.com/150x200", latestChapter: 3 },
  ];

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold my-8">Welcome to ComicReader</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Featured Comic</h2>
        <FeaturedComic {...featuredComic} />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Recent Updates</h2>
        <ComicGrid comics={recentComics} />
      </section>

      <section className="text-center">
        <Link to="/browse" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300">
          Browse All Comics
        </Link>
      </section>
    </div>
  );
};

export default Home;