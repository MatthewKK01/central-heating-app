import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Author } from "next/dist/lib/metadata/types/metadata-types";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ცენტრალური გათბობის სერვისი",
  description:
    "გამოცდილი ცენტრალური გათბობის მომსახურება საცხოვრებელი და კომერციული ფართებისთვის. მონტაჟი, მოვლა და შეკეთება. დაგვიკავშირდით სანდო გადაწყვეტილებებისთვის.",
  keywords: "gatbobis servisi,გათბობის სერვისი",
  authors: "mate" as Author,
  robots: "index,follow",
  verification: {
    google: "L3cOnxCgYCOEoiP64FcyBfdjBN-UZShN6GoXVElQyQg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-C5Q1E304PH`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-C5Q1E304PH');
            `,
          }}
        ></script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
