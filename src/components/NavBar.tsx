import { Dock, DockIcon } from "@/components/Dock";
import { ThemeToggle } from "@/components/ToggleTheme";
import { buttonVariants } from "@/components/ui/button";
import { Divider } from "@/components/ui/divider";
import { Tooltip } from "@/components/Tooltip";
// import { DATA } from "@/data/resume";
import { cn } from "@/lib/classes";
import Link from "next/link";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { Icons } from "./Icons";

const navbar = [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "https://dub.sh/jt/medium", icon: NotebookIcon, label: "Blog" },
];
const social = {
    GitHub: {
        name: "GitHub",
        url: "https://dub.sh/jt/github",
        icon: Icons.github,

        navbar: true,
    },
    LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/jt/linkedin",
        icon: Icons.linkedin,

        navbar: true,
    },
    X: {
        name: "X",
        url: "https://dub.sh/jt/x",
        icon: Icons.x,

        navbar: true,
    },
};

export default function Navbar() {
    return (
        <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 mx-auto mb-4 flex origin-bottom h-full max-h-14">
            <div className="fixed bottom-0 inset-x-0 h-16 w-full bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background"></div>

            <Dock
                className={`z-50 pointer-events-auto relative mx-auto flex min-h-full h-full items-center px-4 
                    bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]
                    transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]
                `}
            >
                {navbar.map((item) => (
                    <DockIcon key={item.href}>
                        <Tooltip content={item.label}>
                            <Link
                                href={item.href}
                                className={cn(
                                    buttonVariants({ variant: "ghost", size: "icon" }),
                                    "size-12"
                                )}
                            >
                                <item.icon className="size-4" />
                            </Link>
                        </Tooltip>
                    </DockIcon>
                ))}
                <Divider orientation="vertical" className="h-full" />
                {Object.entries(social).map(([name, obj], index) => (
                    <DockIcon key={name}>
                        <Tooltip content={name}>
                            <Link
                                href={obj.url || ""}
                                className={cn(
                                    buttonVariants({ variant: "ghost", size: "icon" }),
                                    "size-12"
                                )}
                            >
                                <obj.icon className="size-4" />
                            </Link>
                        </Tooltip>
                    </DockIcon>
                ))}
                <Divider orientation="vertical" className="h-full" />
                <DockIcon>
                    {/* <Link
                            href={item.href}
                            className={cn(
                                buttonVariants({ variant: "ghost", size: "icon" }),
                                "size-12"
                            )}
                        >
                            <item.icon />
                        </Link> */}
                    <ThemeToggle />
                </DockIcon>
                {/* {Object.entries(DATA.contact.social)
                    .filter(([_, social]) => social.navbar)
                    .map(([name, social]) => (
                        <DockIcon key={name}>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Link
                                        href={social.url}
                                        className={cn(
                                            buttonVariants({ variant: "ghost", size: "icon" }),
                                            "size-12"
                                        )}
                                    >
                                        <social.icon className="size-4" />
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>{name}</p>
                                </TooltipContent>
                            </Tooltip>
                        </DockIcon>
                    ))}
                <Divider orientation="vertical" className="h-full py-2" />
                <DockIcon>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <ModeToggle />
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Theme</p>
                        </TooltipContent>
                    </Tooltip>
                </DockIcon> */}
            </Dock>
        </div>
    );
}
