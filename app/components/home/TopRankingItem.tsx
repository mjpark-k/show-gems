import { Movie } from '@/app/types/movies';
import MovieCard from '../movie/MovieCard';

export default function TopRankingItem({ movie }: { movie: Movie }) {
  return (
    <MovieCard
      movie={movie}
      topLeft={
        <div
          className='
          absolute
          -top-6 -left-6 
          w-16 h-16 rounded-2xl 
          bg-amber-400
          flex items-center justify-center
          text-4xl font-black
          shadow-xl
          rotate-[-5deg]
          z-10'
        >
          {movie.rank}
        </div>
      }
    />
  );
}
