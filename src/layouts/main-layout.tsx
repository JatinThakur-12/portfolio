import React from "react";
import { ThemeProvider } from "next-themes";
import { TooltipProvider } from "@/components/Tooltip";

function MainLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ThemeProvider attribute="class" defaultTheme="light">
            <TooltipProvider delayDuration={100}>{children}</TooltipProvider>
        </ThemeProvider>
    );
}

export default MainLayout;
