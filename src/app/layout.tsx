import type { Metadata } from "next";
import { Inter } from "next/font/google";


import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Docs",
  description: "These is the homepage of docs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

  
      <body className={`${inter.className} overflow-hidden`}>

        <nav className=" border-b-2 border-b-slate-700 w-full pt-4 pb-2 font-medium text-xl flex justify-center">
          <ul className="w-3/4" >
            <Link href="/">
              <li className="w-3/4 border-b-slate-400 ">Docs</li>
            </Link>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
