import type { Metadata } from "next";
import localFont from "next/font/local";
import Link from "next/link";

import Chistock from "@assets/chistock.svg";

import FloatingButton from "@atoms/Button/FloatingButton/FloatingButton";
import Divider from "@atoms/Divider/Divider";
import Icon from "@atoms/Icon/Icon";
import Stack from "@atoms/Stack/Stack";
import Text from "@atoms/Text/Text";
import Tile from "@atoms/Tile/Tile";

import "./globals.css";

const Pretandard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  display: "swap",
});

export const metadata: Metadata = {
  title: "chistock",
  description: "한 눈에 보는 나만의 주식",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className="theme-light">
      <body className={`${Pretandard.className} text-m relative`}>
        <Stack
          itemAligns="center"
          justifyContent="center"
          gap={"m"}
          className="w-full min-h-screen bg-surface p-3xl"
        >
          <Stack gap="xs">
            <Tile
              height="h-[72px]"
              width="w-desktop-12"
              variant="primary"
              itemAligns="center"
              justifyContent="between"
              padding="m"
            >
              <Link href={"/"}>
                <Chistock />
              </Link>
              <input
                className="w-[320px] h-full outline-none bg-secondary-fixed rounded-m p-s"
                placeholder="검색"
              />
            </Tile>
            <Tile
              height="h-[32px]"
              width="w-desktop-12"
              variant="secondaryFixed"
              justifyContent="center"
              itemAligns="center"
              gap="l"
            >
              <Text color="onSecondaryFixed">APPL 2,595.55 ▼ -1.30%</Text>
              <Text color="onSecondaryFixed">TSLA 2,595.55 ▲ +1.30%</Text>
              <Text color="onSecondaryFixed">APPL 2,595.55 ▼ -1.30%</Text>
              <Text color="onSecondaryFixed">TSLA 2,595.55 ▲ +1.30%</Text>
              <Text color="onSecondaryFixed">APPL 2,595.55 ▼ -1.30%</Text>
            </Tile>
          </Stack>
          <Divider length="w-desktop-12" color="outlineVariant" thickness="s" />
          {children}
        </Stack>
        <FloatingButton
          position="fixed"
          icon={<Icon icon="sun" />}
          size="l"
          bottom={48}
          right={48}
        />
      </body>
    </html>
  );
}
