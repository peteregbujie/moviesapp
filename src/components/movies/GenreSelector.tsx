import { Genre } from '../../types/movie.types';

interface GenreSelectorProps {
  genres: Genre[];
  selectedGenreId: number | null;
  onGenreSelect: (genreId: number | null) => void;
}

const GenreSelector = ({ genres, selectedGenreId, onGenreSelect }: GenreSelectorProps) => {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      <button
        onClick={() => onGenreSelect(null)}
        className={`px-4 py-2 rounded-full transition-colors ${
          selectedGenreId === null
            ? 'bg-red-600 text-white'
            : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
        }`}
      >
        All
      </button>
      {genres.map((genre) => (
        <button
          key={genre.id}
          onClick={() => onGenreSelect(genre.id)}
          className={`px-4 py-2 rounded-full transition-colors ${
            selectedGenreId === genre.id
              ? 'bg-red-600 text-white'
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          }`}
        >
          {genre.name}
        </button>
      ))}
    </div>
  );
};

export default GenreSelector;