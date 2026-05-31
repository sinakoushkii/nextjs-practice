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
  title: "Authentication Layout",
  description: "Login and Register pages layout for authentication",
  keywords: ["authentication", "login", "register", "nextjs", "react"],
  authors: [{ name: "Sina Koushki", url: "https://example.com/register" }],
  robots: "noindex, nofollow",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="bg-yellow-300 p-4 flex gap-2">
          <Link
            href="/login"
            className="text-lg font-bold text-blue-500 hover:text-blue-700"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="text-lg font-bold text-blue-500 hover:text-blue-700"
          >
            Register
          </Link>
        </header>
        <main className="p-6">{children}</main>
    
      </body>
    </html>
  );
}
