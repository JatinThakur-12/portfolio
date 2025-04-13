import { Icons } from "@/components/Icons";

export const projectList = [
    {
        title: "Travomint",
        href: "https://www.travomint.com",
        dates: "May 2024 - Present",
        active: true,
        description:
            "Built features like dynamic filtering, meal and baggage selection, and a custom CRM for managing bookings, leads, and emails. I also created admin tools for configuring banners, offers, and site content — all designed to deliver a clean and efficient user experience.",
        technologies: [
            "Next.js",
            "Typescript",
            "Bootstrap",
            "MaterialUI",
            "TailwindCSS",
            "SWR",
            "Zod",
            "Redux",
            "React Hook Form",
        ],
        links: [
            {
                type: "Website",
                href: "https://www.travomint.com",
                icon: <Icons.globe className="size-3" />,
            },
        ],
        image: "",
        video: "https://divine-voice-26cf.thakurjatinx.workers.dev/travomint_demo.mp4",
    },
    {
        title: "TheLabelBar",
        href: "https://www.thelabelbar.com",
        dates: "May 2024 - Sep 2024",
        active: true,
        description:
            "E-commerce platform that delivers a fast, secure, and user-friendly online shopping experience. Built with modern technologies, the platform is optimized for performance, offering quick load times and seamless navigation across devices. Enhanced security features and a focus on SEO ensure a smooth and efficient experience for users.",
        technologies: [
            "Next.js",
            "Typescript",
            "Redux",
            "Sass",
            "Swiper",
            "React-pdf",
        ],
        links: [
            {
                type: "Website",
                href: "https://www.thelabelbar.com",
                icon: <Icons.globe className="size-3" />,
            },
        ],
        image: "",
        video: "https://divine-voice-26cf.thakurjatinx.workers.dev/tlb-demo.mp4",
    },
];
