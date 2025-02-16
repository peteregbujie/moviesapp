
import { Star } from 'lucide-react';
import { Movie } from '../../types/movie.types';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

// MovieCard Component
const MovieCard = ({ movie }: { movie: Movie }) => {
  return (
    <div className="relative group overflow-hidden rounded-lg shadow-lg bg-gray-800 transition-transform duration-300 hover:-translate-y-1">
      <div className="aspect-[2/3] relative">
        <img 
          src={movie.poster_path ? `${IMAGE_BASE_URL}${movie.poster_path}` : '/no-poster.png'}
          alt={movie.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 p-4 space-y-2">
            <h3 className="text-white font-semibold">{movie.title}</h3>
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4 text-yellow-400" />
              <span className="text-white">{movie.vote_average}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
