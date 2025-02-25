"use client";

import { cn } from "@/lib/classes";
import { AnimatePresence, motion, MotionProps, Variants } from "framer-motion";
import { useMemo } from "react";

interface BlurFadeTextProps {
    text: string;
    className?: string;
    variant?: {
        hidden: { y: number };
        visible: { y: number };
    };
    duration?: number;
    characterDelay?: number;
    delay?: number;
    yOffset?: number;
    animateByCharacter?: boolean;
    as?: keyof HTMLElementTagNameMap ;
}
const BlurFadeText: React.FC<BlurFadeTextProps> = ({
    text,
    className,
    variant,
    characterDelay = 0.03,
    delay = 0,
    yOffset = 8,
    animateByCharacter = false,
    as,
}) => {
    const defaultVariants: Variants = {
        hidden: { y: yOffset, opacity: 0, filter: "blur(8px)" },
        visible: { y: 0, opacity: 1, filter: "blur(0px)" },
    };
    const combinedVariants = variant || defaultVariants;
    const characters = useMemo(() => Array.from(text), [text]);

    const Tag = motion.create(as ?? "span") as React.ForwardRefExoticComponent<
        MotionProps &
            React.RefAttributes<Element> & {
                children: React.ReactNode;
                className: string;
            }
    >;

    if (animateByCharacter) {
        return (
            <div className="flex">
                <AnimatePresence>
                    {characters.map((char, i) => (
                        <Tag
                            key={i}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={combinedVariants}
                            transition={{
                                yoyo: Infinity,
                                delay: delay + i * characterDelay,
                                ease: "easeOut",
                            }}
                            className={cn("inline-block", className)}
                            style={{ width: char.trim() === "" ? "0.2em" : "auto" }}
                        >
                            {char}
                        </Tag>
                    ))}
                </AnimatePresence>
            </div>
        );
    }

    return (
        <div className="flex">
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
                    {text}
                </Tag>
            </AnimatePresence>
        </div>
    );
};

export default BlurFadeText;
