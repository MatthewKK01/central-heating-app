import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ცენტრალური გათბობის სერვისი",
  description: "გამოცდილი ცენტრალური გათბობის მომსახურება საცხოვრებელი და კომერციული ფართებისთვის. მონტაჟი, მოვლა და შეკეთება. დაგვიკავშირდით სანდო გადაწყვეტილებებისთვის.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
