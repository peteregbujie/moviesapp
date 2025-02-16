import { useMovies } from '../hooks/useMovies';
import FeaturedSlider from '../components/movies/FeaturedSlider';
import MovieGrid from '../components/movies/MovieGrid';

const Home = () => {
  const { data: featuredMovies, isLoading: featuredLoading, error: featuredError } = useMovies('featured');
  const { data: trendingMovies, isLoading: trendingLoading, error: trendingError } = useMovies('trending');
  const { data: popularMovies, isLoading: popularLoading, error: popularError } = useMovies('popular');

  // Add error handling
  if (featuredError || trendingError || popularError) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-red-500">
          {featuredError?.message || trendingError?.message || popularError?.message}
        </div>
      </div>
    );
  }

  if (featuredLoading || trendingLoading || popularLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="animate-pulse space-y-8">
          <div className="h-96 bg-gray-800 rounded-lg"></div>
          <div className="space-y-4">
            <div className="h-8 bg-gray-800 rounded w-48"></div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="aspect-[2/3] bg-gray-800 rounded-lg"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100">
      {featuredMovies && <FeaturedSlider movies={featuredMovies} />}
      
      <div className="container mx-auto px-4 py-8 space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Trending Movies</h2>
          {trendingMovies && <MovieGrid movies={trendingMovies} />}
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Popular Movies</h2>
          {popularMovies && <MovieGrid movies={popularMovies} />}
        </section>
      </div>
    </main>
  );
};

export default Home;
