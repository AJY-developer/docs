import type { Metadata } from "next";
import { Inter } from "next/font/google";





const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Add Record",
    description: "These is the homepage of docs",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
        {children}
        </>
    );
}
