import { Movie } from '@/app/types/movies';
import TopRankingItem from './TopRankingItem';
import { mockMovie } from '@/app/data/mockData';

export default function TopRankingList() {
  // 만약 api 받으면 계산하는 식을 만들어야 된다.
  const top3 = mockMovie.slice(0, 3);
  const rest = mockMovie.slice(3);

  return (
    <section className='space-y-10'>
      {/* TOP 3 */}
      <div className='grid grid-cols-3 gap-10'>
        {top3.map((movie) => (
          <TopRankingItem key={movie.id} movie={movie} />
        ))}
      </div>
      {/* 4 ~ 10 */}
      {/* 4~10등은 슬라이드로 구현 해봐야겠다. */}
      <div className='grid grid-cols-7 gap-5'>
        {rest.map((movie) => (
          <TopRankingItem key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
}
