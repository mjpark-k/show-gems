import { Movie } from '@/app/types/movies';
import Image from 'next/image';

type MovieCardProps = {
  movie: Movie;
  topLeft?: React.ReactNode;
  children?: React.ReactNode;
};

export default function MovieCard({
  movie,
  topLeft,
  children,
}: MovieCardProps) {
  return (
    <div className='relative rounded-lg border p-4'>
      {topLeft}
      {/* img */}
      <div className='relative aspect-[2/3] w-full'>
        <Image
          src={movie.posterUrl}
          alt={`${movie.title} 포스터`}
          fill
          className='object-cover'
          sizes='(max-width: 768px) 100vw, 200px'
        />
      </div>
      <div className='mt-4'>
        <span className='text-xl'>{movie.title}</span>
        {children}
      </div>
    </div>
  );
}
