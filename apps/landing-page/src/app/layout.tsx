import { AntdRegistry } from '@ant-design/nextjs-registry';
import localFont from 'next/font/local';

import type { Metadata, Viewport } from 'next';

import './globals.scss';

const Pretendard = localFont({
  src: [
    {
      path: '../../public/fonts/Pretendard-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Pretendard-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Pretendard-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Pretendard-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Pretendard-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Pretendard-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-pretendard',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://sclimb.com.vn'),
  title: 'Sclimb Adventure Sports - Climbing Gym',
  description:
    'Sclimb Adventure Sports provides everyone with a world class indoor rock climbing, fitness, and community experience in state of the art facilities.',
  keywords:
    'rock climbing gym, bouldering gym, indor climbing gym, leo núi nhân tạo, leo núi trong nhà, thể thao mạo hiểm',
  icons: {
    icon: '../../public/logo.png',
  },
  verification: {
    other: {
      'google-site-verification': '0t7T4dC162n4fGwz5tAjy23ivr3K05vhOeWIyCRZ8G8'
    },
  },
  openGraph: {
    title: 'Sclimb Adventure Sports - Climbing Gym',
    description:
      'Sclimb Adventure Sports provides everyone with a world class indoor rock climbing, fitness, and community experience in state of the art facilities.',
    images: [
      {
        url: "/imagesN/meta-main-page.png",
        alt: "sclimb"
      }
    ],
    url: "https://sclimb.com.vn"
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${Pretendard?.className} ${Pretendard?.variable}`} suppressHydrationWarning={true}>
        <AntdRegistry>
          {children}
        </AntdRegistry>
      </body>
    </html>
  );
}
