import { Cast } from '../../types/movie.types';

const PROFILE_BASE_URL = 'https://image.tmdb.org/t/p/w185';

interface CastCardProps {
  cast: Cast;
}

const CastCard = ({ cast }: CastCardProps) => {
  return (
    <div className="flex flex-col items-center bg-gray-800 rounded-lg overflow-hidden">
      <div className="w-full aspect-[2/3] relative">
        <img
          src={cast.profile_path 
            ? `${PROFILE_BASE_URL}${cast.profile_path}`
            : '/no-profile.png'
          }
          alt={cast.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 text-center">
        <h3 className="text-white font-semibold">{cast.name}</h3>
        <p className="text-gray-400 text-sm">{cast.character}</p>
      </div>
    </div>
  );
};

export default CastCard;