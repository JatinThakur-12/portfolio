"use client";

import { cn } from "@/lib/classes";
import { AnimatePresence, motion, MotionProps, Variants } from "framer-motion";

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
    as?: keyof HTMLElementTagNameMap;
}
const BlurFade = ({ children, className, variant, delay = 0, yOffset = 8, as,
}: BlurFadeTextProps) => {
    const defaultVariants: Variants = {
        hidden: { y: yOffset, opacity: 0, filter: "blur(8px)" },
        visible: { y: 0, opacity: 1, filter: "blur(0px)" },
    };
    const combinedVariants = variant || defaultVariants;

    const Tag = motion.create(as ?? "div") as React.ForwardRefExoticComponent<
        MotionProps &
        React.RefAttributes<Element> & {
            children: React.ReactNode;
            className: string;
        }
    >;

    return (
        <div className="inline-block">
            <AnimatePresence>
                <Tag
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
                </Tag>
            </AnimatePresence>
        </div>
    );
};

export default BlurFade;
