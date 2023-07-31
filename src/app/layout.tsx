import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";

const Pretandard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  display: "swap",
});

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
      <body className={Pretandard.className}>{children}</body>
    </html>
  );
}
