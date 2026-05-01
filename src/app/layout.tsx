import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aniruddha Debroy | Senior UI/UX & Frontend Developer",
  description: "Portfolio of Aniruddha Debroy, showcasing 10+ years of enterprise UI/UX design and Frontend development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} dark antialiased h-full`}>
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-primary/30">
        {children}
      </body>
    </html>
  );
}
