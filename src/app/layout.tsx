import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GlobalStyles } from "@/styles/globalStyles";
import { Nunito } from "next/font/google";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lacrei Saúde",
  description: "Desafio Lacrei Saúde",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${nunito.variable}`}
      >
        <Header />
        {children}
        <Footer />
        <GlobalStyles />
      </body>
    </html>
  );
}
