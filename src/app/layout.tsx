import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "chistock",
  description: "한 눈에 보는 나만의 주식",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="theme-light">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
