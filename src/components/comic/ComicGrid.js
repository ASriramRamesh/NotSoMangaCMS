import React from 'react';
import ComicCard from './ComicCard';

const ComicGrid = ({ comics }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {comics.map((comic) => (
        <ComicCard
          key={comic.id}
          id={comic.id}
          title={comic.title}
          coverImage={comic.coverImage}
          latestChapter={comic.latestChapter}
        />
      ))}
    </div>
  );
};

export default ComicGrid;