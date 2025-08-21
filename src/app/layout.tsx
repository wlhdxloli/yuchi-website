import type { Metadata } from "next";
import { Aoboshi_One, Dela_Gothic_One, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const aoboshiOne = Aoboshi_One({
  variable: "--font-aoboshi-one",
  subsets: ["latin"],
  weight: "400",
});

const delaGothicOne = Dela_Gothic_One({
  variable: "--font-dela-gothic",
  subsets: ["latin"],
  weight: "400",
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Yuchi LLC - AI・LLMアプリケーション開発",
  description: "Professional AI & LLM Application Development | 合同会社YUCHI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${aoboshiOne.variable} ${delaGothicOne.variable} ${notoSansJP.variable} antialiased`}
        style={{ fontFamily: 'var(--font-noto-sans-jp), sans-serif' }}
      >
        {children}
      </body>
    </html>
  );
}
