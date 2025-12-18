import Link from 'next/link';
import Button from '../ui/Button';

export default function Header() {
  return (
    <div className='flex px-7 py-5 justify-between items-center bg-neutral-800'>
      <Link href='/'>
        <p className='font-extrabold text-2xl'>ShowGems</p>
      </Link>
      <Link href='/signin'>
        <Button>로그인</Button>
      </Link>
    </div>
  );
}
