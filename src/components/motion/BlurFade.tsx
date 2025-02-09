"use client";

import { cn } from "@/lib/classes";
import { AnimatePresence, motion, Variants } from "framer-motion";

interface BlurFadeTextProps {
    children: React.ReactNode;
    className?: string;
    variant?: {
        hidden: { y: number };
        visible: { y: number };
    };
    duration?: number;
    delay?: number;
    yOffset?: number;
}
const BlurFade = ({ children, className, variant, delay = 0, yOffset = 8}: BlurFadeTextProps) => {
    const defaultVariants: Variants = {
        hidden: { y: yOffset, opacity: 0, filter: "blur(8px)" },
        visible: { y: 0, opacity: 1, filter: "blur(0px)" },
    };
    const combinedVariants = variant || defaultVariants;

    return (
        <div className="flex">
            <AnimatePresence>
                <motion.span
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={combinedVariants}
                    transition={{
                        yoyo: Infinity,
                        delay,
                        ease: "easeOut",
                    }}
                    className={cn("inline-block", className)}
                >
                    {children}
                </motion.span>
            </AnimatePresence>
        </div>
    );
};

export default BlurFade;
