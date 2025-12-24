import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from './components/layout/Header';

// 나중에 폰트 변경

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

// 탭 이미지 추가

export const metadata: Metadata = {
  title: 'ShowGems | 나의 인생 영화',
  description: '사람들이 뽑은 인생 영화 랭킹과 나만의 인생작 리스트',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <div className='min-h-screen px-6 max-w-7xl mx-auto'>
          {children}
        </div>
      </body>
    </html>
  );
}
