import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { RootHeader } from "@/components/RootHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nguyễn Phú Tín - tnmod.dev",
  description: "Portfolio of Nguyễn Phú Tín - tnmod.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex flex-col justify-between">
          <RootHeader />
          {children}
        </main>
      </body>
    </html>
  );
}
