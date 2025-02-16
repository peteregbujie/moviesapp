

import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, Star, Heart } from 'lucide-react';
import LoadingSpinner from '../components/common/LoadingSpinner';
import { useMovieDetails } from '../hooks/useMovieDetails';

const BACKDROP_BASE_URL = 'https://image.tmdb.org/t/p/original';
const POSTER_BASE_URL = 'https://image.tmdb.org/t/p/w500';

function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: movie, isLoading, error } = useMovieDetails(id);

  const handleBack = () => {
    navigate(-1);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-red-500 text-center">
          <h2 className="text-xl font-bold mb-2">Error loading movie details</h2>
          <p>{error.message}</p>
        </div>
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-gray-500">Movie not found</div>
      </div>
    );
  }

  const formatRuntime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}h ${remainingMinutes}m`;
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section with Backdrop */}
      <div className="relative">
        {/* Backdrop Image */}
        <div className="relative h-[75vh]">
          <div className="absolute inset-0">
            <img
              src={movie.backdrop_path ? `${BACKDROP_BASE_URL}${movie.backdrop_path}` : '/no-backdrop.png'}
              alt={movie.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent" />
          </div>
          
          {/* Back Button - Moved inside the backdrop container */}
          <div className="absolute top-4 left-4 z-10">
            <button
              onClick={handleBack}
              className="flex items-center space-x-2 bg-black/50 hover:bg-black/75 text-white px-4 py-2 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back</span>
            </button>
          </div>
        </div>

        {/* Movie Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 px-4 py-8">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-end">
              {/* Poster */}
              <div className="w-64 flex-shrink-0 rounded-lg overflow-hidden shadow-2xl transform md:translate-y-16">
                <img
                  src={movie.poster_path ? `${POSTER_BASE_URL}${movie.poster_path}` : '/no-poster.png'}
                  alt={movie.title}
                  className="w-full h-auto"
                />
              </div>

              {/* Movie Details */}
              <div className="flex-1 text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{movie.title}</h1>
                {movie.tagline && (
                  <p className="text-xl text-gray-300 italic mb-4">{movie.tagline}</p>
                )}
                
                {/* Movie Meta Info */}
                <div className="flex flex-wrap gap-6 mb-6 text-sm">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span>{new Date(movie.release_date).getFullYear()}</span>
                  </div>
                  {movie.runtime && (
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span>{formatRuntime(movie.runtime)}</span>
                    </div>
                  )}
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span>{movie.vote_average.toFixed(1)}</span>
                  </div>
                </div>

                {/* Genres */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {movie.genres.map((genre) => (
                    <span
                      key={genre.id}
                      className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300"
                    >
                      {genre.name}
                    </span>
                  ))}
                </div>

                {/* Overview */}
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {movie.overview}
                </p>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  <button className="px-8 py-3 bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition-colors">
                    Watch Now
                  </button>
                  <button className="px-8 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg font-semibold transition-colors flex items-center gap-2">
                    <Heart className="w-5 h-5" />
                    Add to Watchlist
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Movie Details Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Production Companies */}
          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-white mb-4">Production Companies</h2>
            <div className="space-y-4">
              {movie.production_companies.map((company) => (
                <div key={company.id} className="text-gray-300">
                  {company.name}
                </div>
              ))}
            </div>
          </div>

          {/* Movie Stats */}
          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-white mb-4">Movie Stats</h2>
            <div className="space-y-4 text-gray-300">
              <div>
                <span className="text-gray-400">Status: </span>
                {movie.status}
              </div>
              <div>
                <span className="text-gray-400">Budget: </span>
                ${movie.budget.toLocaleString()}
              </div>
              <div>
                <span className="text-gray-400">Revenue: </span>
                ${movie.revenue.toLocaleString()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
