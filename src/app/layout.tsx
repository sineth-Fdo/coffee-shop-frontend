import type { Metadata } from "next";
import { poppins } from "../styles/fonts";
import "../styles/globals.css";

import Navbar from "../components/layout/navbar";
import Footer from "../components/layout/footer/Footer";

export const metadata: Metadata = {
  title: "Coffee Shop",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} scroll-smooth`}>
        <Navbar />
        {children}
        <Footer/>
        </body>
    </html>
  );
}
