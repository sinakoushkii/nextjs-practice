import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
// Ignore TS error for side-effect CSS import in Next.js app directory
// @ts-ignore: Cannot find module or type declarations for side-effect import of './globals.css'.
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Home Layout",
  description: "This is a page for Home",
  keywords: ["nextjs", "react", "javascript", "web development"],
  authors: [{ name: "Sina Koushki", url: "https://example.com/" }],
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-full`}
      >
        <header className="bg-blue-600 p-4 flex gap-2">
          <Link href="/" className="text-lg font-bold text-white">
            home
          </Link>
          <Link href="/about" className="text-lg font-bold text-white">
            about
          </Link>
          <Link href="/contact" className="text-lg font-bold text-white">
            contact
          </Link>
          <Link href="/products" className="text-lg font-bold text-white">
            products
          </Link>
        </header>
        <main className="p-6" style={{ height: "89vh" }}>
          {children}
        </main>
        <footer className="bg-blue-600 text-white p-4 text-md flex justify-center">
          My Website . All rights reserved
        </footer>
      </body>
    </html>
  );
}
