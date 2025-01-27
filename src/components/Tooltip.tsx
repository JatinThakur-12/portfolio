"use client";
import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cn } from "@/lib/classes";

interface TooltipProps extends TooltipPrimitive.TooltipContentProps {
    children: React.ReactNode;
    content: string | undefined;
    open?: boolean;
    defaultOpen?: boolean;
    showArrow?: boolean;
    delay?: number;
    onOpenChange?: (open: boolean) => void;
    className?: string;
}

export const TooltipProvider = TooltipPrimitive.Provider;

export function Tooltip({ children, content, open, defaultOpen, delay, showArrow = false, onOpenChange, className = "", ...props }: TooltipProps) {
    return (
        <TooltipPrimitive.Root open={open} defaultOpen={defaultOpen} onOpenChange={onOpenChange} delayDuration={delay}>
            <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
            <TooltipPrimitive.Content
                className={cn(
                    "z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
                    !showArrow && "my-1",
                    className
                )}
                side="top"
                align="center"
                {...props}
            >
                {content}
                {showArrow && <TooltipPrimitive.Arrow width={11} height={5} />}
            </TooltipPrimitive.Content>
        </TooltipPrimitive.Root>
    );
}
