import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";

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
    <html lang="en" className={`scrollbar-none`}>
      <body className={inter.className}>
        <SmoothScroll>
          <main className="flex flex-col justify-between scrollbar-thin scrollbar-track-red-800 scroll-smooth ">
            {children}
          </main>
        </SmoothScroll>
      </body>
    </html>
  );
}
