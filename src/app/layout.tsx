import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/web/Navbar";
import Footer from "@/components/web/Footer"
import { Toaster } from "react-hot-toast";

const inter = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sparks UI",
  description: "Copy paste the code to generate the UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster />
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
