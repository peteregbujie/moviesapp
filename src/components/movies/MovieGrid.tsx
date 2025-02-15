import { Movie } from '../../types/movie.types';
import MovieCard from './MovieCard';

const MovieGrid = ({ movies }: { movies: Movie[] }) => {
 return (
   <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-6">
     {movies.map((movie) => (
       <MovieCard key={movie.id} movie={movie} />
     ))}
   </div>
 );
};

export default MovieGrid;