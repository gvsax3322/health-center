import type { Metadata } from 'next';
import '@/styles/globals.css';
export const metadata: Metadata = {
  title: '전국 보건소 위치 안내',
  description: '전국 보건소 위치 안내 서비스 앱',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <meta
          name="naver-site-verification"
          content="fb449bff94541ff4aa8112e27b29db8129a91d7d"
        />
        <link
          rel="canonical"
          href="https://health-center-gvsax3322.vercel.app"
        ></link>
      </head>
      <body>{children}</body>
    </html>
  );
}
