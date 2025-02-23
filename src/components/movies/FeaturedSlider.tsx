import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Movie } from "../../types/movie.types";

const BACKDROP_BASE_URL = 'https://image.tmdb.org/t/p/original';

const FeaturedSlider = ({ movies }: { movies: Movie[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % movies.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + movies.length) % movies.length);

  const handleWatchNow = () => {
    navigate(`/movie/${movies[currentIndex].id}`);
  };

  return (
    <div className="relative h-[500px] overflow-hidden bg-gray-900">
      <div className="absolute inset-0">
        <img 
          src={movies[currentIndex].backdrop_path 
            ? `${BACKDROP_BASE_URL}${movies[currentIndex].backdrop_path}`
            : '/no-backdrop.png'
          }
          alt={movies[currentIndex].title}
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent">
          <div className="h-full flex items-center">
            <div className="p-8 max-w-2xl">
              <h2 className="text-4xl font-bold text-white mb-4">{movies[currentIndex].title}</h2>
              <p className="text-gray-200 mb-6">{movies[currentIndex].overview}</p>
              <button 
                onClick={handleWatchNow}
                className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
              >
                Watch Now
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/75 transition-colors"
      >
        <ArrowLeft className="w-6 h-6 text-white" />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/75 transition-colors"
      >
        <ArrowRight className="w-6 h-6 text-white" />
      </button>
    </div>
  );
};

export default FeaturedSlider;
