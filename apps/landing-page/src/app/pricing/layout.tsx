import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://sclimb.com.vn'),
  title: 'Sclimb - Membership & Pricing',
  description:
    'Sclimb rock climbing gym provides everyone with a world class indoor rock climbing, fitness, and community experience in state of the art facilities.',
  keywords:
    'rock climbing gym, bouldering gym, indor climbing gym, leo núi nhân tạo, leo núi trong nhà, thể thao mạo hiểm',
 openGraph: {
  title: 'Sclimb - Membership & Pricing',
  description:
  'Sclimb rock climbing gym provides everyone with a world class indoor rock climbing, fitness, and community experience in state of the art facilities.',
 images: [
      { 
        url: "/imagesN/meta-operation-page.png",
        alt: "sclimb"
      }
    ],
    url: "https://sclimb.com.vn"
  },
};

export default function operationLayout({ children }: { children: React.ReactNode }) {
  return children;
}
