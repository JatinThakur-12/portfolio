import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/classes";
import MainLayout from "@/layouts/main-layout";
import Navbar from "@/components/NavBar";
import Script from "next/script";

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
    description:
        "I'm Jatin Thakur | I harness the power of Node.js, SSR, and Next.js to create seamless user experiences.",
    keywords:
        "Jatin Thakur, Full Stack Developer, Frontend Developer, Backend Developer, MERN Stack, React.js, Next.js, SSR, Node.js, Express.js, JavaScript, TypeScript, Software Engineer, Web Performance, UI/UX, API Development",
    alternates: {
        canonical: "/",
    },
    openGraph: {
        title: "Jatin Thakur",
        description:
            "I'm Jatin Thakur | I harness the power of Node.js, SSR, and Next.js to create seamless user experiences.",
        url: "https://www.jatinthakur.in",
        siteName: "Jatin Thakur",
        locale: "en_US",
        type: "website",
        images: "https://www.jatinthakur.in/assets/avatar-image.png",
    },
    twitter: {
        card: "summary_large_image",
        site: "@JatinThakur_12",
        title: "Jatin Thakur | Full Stack Developer",
        description: "I'm Jatin Thakur | I harness the power of Node.js, SSR, and Next.js to create seamless user experiences.",
        images: "https://www.jatinthakur.in/assets/avatar-image.png",
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <Script id="google-analytics" strategy="afterInteractive">
                    {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-P5399227');`}
                </Script>
            </head>
            <body
                className={cn(
                    "min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6",
                    geistSans.variable,
                    geistMono.variable,
                    notoSans.variable,
                    "antialiased"
                )}
            >
                {/* <!-- Google Tag Manager (noscript) --> */}
                <noscript>
                    <iframe
                        src="https://www.googletagmanager.com/ns.html?id=GTM-P5399227"
                        height="0"
                        width="0"
                        style={{ display: "none", visibility: "hidden" }}
                    ></iframe>
                </noscript>
                {/* <!-- End Google Tag Manager (noscript) --> */}
                <MainLayout>
                    {children}

                    <Navbar />
                </MainLayout>
            </body>
        </html>
    );
}
