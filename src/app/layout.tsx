import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/ui/Navbar";
import Footer from "@/app/components/ui/Footer";

import { authOptions } from "@/lib/authOption";
import { getServerSession } from "next-auth";
import SessionProviderWrapper from "./SessionProviderWrapper";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NextMart",
  description: "A e-commerce site",
};


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
   const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
      >
        <SessionProviderWrapper session={session}>
        <header >
          <Navbar />
        </header>
       <main className="pt-24">
         {children}

       </main>
        <Footer />
        <ToastContainer />
       </SessionProviderWrapper>
      </body>
    </html>
  );
}
