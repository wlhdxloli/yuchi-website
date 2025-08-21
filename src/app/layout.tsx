import type { Metadata } from "next";
import { JetBrains_Mono, Noto_Sans_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const notoSansMonoJP = Noto_Sans_Mono({
  variable: "--font-noto-mono-jp",
  subsets: ["latin"],
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
      <body
        className={`${jetbrainsMono.variable} ${notoSansMonoJP.variable} font-mono antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
