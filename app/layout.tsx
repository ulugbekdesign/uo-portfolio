import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Ulug'bek Otabekov | Portfolio",
  description: "Brand Designer • SMM Manager • Mobilographer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz">
      <body className={`${manrope.variable} bg-[#090909] text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
