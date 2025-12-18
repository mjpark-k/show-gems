import Link from 'next/link';
import Button from './components/ui/Button';
import TopRankingList from './components/home/TopRankingList';

export default function Home() {
  return (
    <main className='min-h-screen flex items-center justify-center'>
      <section className='flex flex-col gap-10 text-center'>
        <h1 className='text-4xl font-bold'>
          나의 인생 영화, 사람들의 인생 영화는 뭐가 있을까?
        </h1>
        <div className='flex flex-col gap-2'>
          <p>
            (사람들이 선택한 인생 영화 랭킹 리스트)
            {/* 랭킹 컴포넌트 top 10이나 top 20까지 보여주기 */}
          </p>
          <TopRankingList />
        </div>
        <Link href='/ranking'>
          <Button>영화 검색 및 랭킹 보기</Button>
        </Link>
      </section>
    </main>
  );
}
