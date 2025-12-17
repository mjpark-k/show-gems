import Link from 'next/link';
import Button from './components/ui/Button';

export default function Home() {
  return (
    <main className='min-h-screen flex items-center justify-center'>
      <section className='text-center space-y-4'>
        <h1 className='text-4xl font-bold'>ShowGems</h1>
        <p className='text-gray-600'>
          나의 인생 영화, 사람들의 인생 영화는 뭐가 있을까?
        </p>
        <p>
          (사람들이 선택한 인생 영화 랭킹 리스트)
          {/* 랭킹 컴포넌트 top 10이나 top 20까지 보여주기 */}
        </p>
        <div className='flex flex-col justify-center gap-4'>
          <Button>
            <Link href='/ranking'>영화 검색 및 랭킹 보기</Link>
          </Button>
          <Button>
            <Link href='/signin'>로그인</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
