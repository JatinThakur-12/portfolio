"use client";

import { JSX, useId, useLayoutEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/classes";
import { COLLAPSED_LINES, LINE_HEIGHT, TRANSITION_SECONDS } from "@/constants/expandableContent";

type ExpandableContentProps = {
    children: React.ReactNode;
    lines?: number;
    lineHeight?: number;
};

const ExpandableContent = ({
    children,
    lines = COLLAPSED_LINES,
    lineHeight = LINE_HEIGHT,
}: ExpandableContentProps) => {
    const collapsedHeight = lines * lineHeight;
    const contentRef = useRef<HTMLDivElement>(null);
    const [fullHeight, setFullHeight] = useState<number | null>(null);
    const [expanded, setExpanded] = useState(false);
    const reducedMotion = useReducedMotion();
    const contentId = useId();

    useLayoutEffect(() => {
        const element = contentRef.current;
        if (!element) return;

        const measure = () => setFullHeight(element.scrollHeight);
        measure();

        const observer = new ResizeObserver(measure);
        observer.observe(element);

        let cancelled = false;
        document.fonts?.ready.then(() => {
            if (!cancelled) measure();
        });

        return () => {
            cancelled = true;
            observer.disconnect();
        };
    }, [children]);

    const needsClamp = fullHeight === null || fullHeight > collapsedHeight + 1;
    const duration = reducedMotion ? 0 : TRANSITION_SECONDS;
    const height: number | "auto" = needsClamp
        ? expanded && fullHeight !== null
            ? fullHeight
            : collapsedHeight
        : "auto";

    const renderContent = (): JSX.Element => {
        return <motion.div
        id={contentId}
        initial={false}
        animate={{ height }}
        transition={{ duration, ease: "linear" }}
        style={{ overflow: needsClamp ? "hidden" : "visible" }}
    >
        <div ref={contentRef}>{children}</div>
    </motion.div>
    }

    const renderGradient = (): React.ReactNode => {
        return needsClamp && (
            <motion.div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-background to-transparent"
                initial={false}
                animate={{ opacity: expanded ? 0 : 1 }}
                transition={{ duration, ease: "linear" }}
            />
        )
    }

    const renderShowMoreButton = (): React.ReactNode => {
        return needsClamp && (
            <div
                className={cn(
                    "flex justify-center",
                    expanded
                        ? "mt-3"
                        : "pointer-events-none absolute inset-x-0 bottom-0 bg-background/50"
                )}
            >
                <button
                    type="button"
                    className="pointer-events-auto border-0 p-0 text-foreground shadow-none focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 font-orbitron font-bold text-sm bg-transparent tracking-wider"
                    aria-expanded={expanded}
                    aria-controls={contentId}
                    onClick={() => setExpanded((open) => !open)}
                >
                    {expanded ? "<- show less" : "show more ->"}
                </button>
            </div>
        )
    }

    return (
        <div className="relative">
            <div className="relative">
                {renderContent()}
                {renderGradient()}
            </div>
            {renderShowMoreButton()}
        </div>
    );
};

export default ExpandableContent;
