import Link from 'next/link';
import Button from './components/ui/Button';
import TopRankingList from './components/home/TopRankingList';

export default function Home() {
  return (
    <main className='my-20 min-h-screen'>
      <section className='flex flex-col gap-10 text-center'>
        <h1 className='text-4xl font-bold'>
          나의 인생 영화, 사람들의 인생 영화는 뭐가 있을까?
        </h1>
        <div className='flex flex-col gap-10'>
          <p className='font-bold text-2xl'>
            인생 영화로 선정된 영화 TOP 10
            {/* 랭킹 컴포넌트 top 10이나 top 20까지 보여주기 */}
          </p>
          <TopRankingList />
        </div>
        <div className='max-w-4xl w-full mx-auto'>
          <Link href='/ranking'>
            <Button>영화 검색 및 랭킹 보기</Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
