import type { Metadata } from 'next';
import '@/styles/globals.css';
import { GoogleAnalytics } from '@next/third-parties/google';
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
        <meta
          name="google-site-verification"
          content="q7M-TsiLoycuzXtqzsV4d7r2mxFEEdkL9uic2tNCt00"
        />
        <link
          rel="canonical"
          href="https://health-center-gvsax3322.vercel.app"
        ></link>
        <GoogleAnalytics gaId="G-225423Q65G" />
      </head>
      <body>{children}</body>
    </html>
  );
}
