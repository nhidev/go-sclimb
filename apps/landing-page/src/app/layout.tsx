import { AntdRegistry } from '@ant-design/nextjs-registry';
import localFont from 'next/font/local';

import type { Metadata, Viewport } from 'next';

import './globals.scss';

import Script from 'next/script';

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
  title: 'Sclimb - Rock climbing gym',
  description:
    'Sclimb rock climbing gym provides everyone with a world class indoor rock climbing, fitness, and community experience in state of the art facilities.',
  keywords:
    'rock climbing gym, bouldering gym, indor climbing gym, leo núi nhân tạo, leo núi trong nhà, thể thao mạo hiểm',
  icons: {
    icon: '../../public/logo.png',
  },
  verification: {
    other: {
      'facebook-domain-verification': 't9fg7mjs7hx5ydspf16f5qkup7imbf',
      'naver-site-verification': 'bacc449d9ac09a86560417f3b2668802a37597a6',
    },
  },
  openGraph: {
    title: 'Sclimb - Rock climbing gym',
    description:
    'Sclimb rock climbing gym provides everyone with a world class indoor rock climbing, fitness, and community experience in state of the art facilities.',
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
        <Script id="google-tag-manager" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-T8GJSVBZ');`}
        </Script>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T8GJSVBZ"
            height="0"
            width="0"
            title="ga"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <AntdRegistry>
          {children}
        </AntdRegistry>
      </body>
    </html>
  );
}
