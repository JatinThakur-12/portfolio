import type { Metadata } from "next";
import { Geist, Geist_Mono, Ubuntu, Noto_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/classes";
import MainLayout from "@/layouts/main-layout";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const notoSans = Noto_Sans({
    variable: "--font-noto-sans",
    subsets: ["latin"],
});
export const metadata: Metadata = {
    title: "Jatin Thakur",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={cn(
                    "min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6",
                    geistSans.variable,
                    geistMono.variable,
                    notoSans.variable,
                    "antialiased"
                )}
            >
                <MainLayout>{children}</MainLayout>
            </body>
        </html>
    );
}
