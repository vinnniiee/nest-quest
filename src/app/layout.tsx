import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'NestQuest  |  Find Your Perfect Nest',
  description: 'Explore the estates to suit your needs.',
  keywords: 'rental, find rentals, find properties',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className=" bg-stone-100"}>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
