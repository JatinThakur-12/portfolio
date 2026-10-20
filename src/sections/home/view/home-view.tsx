"use client";
import React from "react";
import BlurFadeText from "@/components/motion/BlurFadeText";
import BlurFade from "@/components/motion/BlurFade";
import AvatarAnimate from "@/components/custom/AvatarAnimate";
import ExpandableContent from "@/components/custom/ExpandableContent";
import Markdown from "react-markdown";
import { TimelineCard } from "@/components/TimlineCard";
import { Chip } from "@/components/ui/chip";
import { ProjectCard } from "@/components/ProjectCard";
import Link from "next/link";
import { projectList } from "../data/projectList";
import { BLUR_FADE_DELAY } from "@/constants/blurConstants";


const markdown =
    `I'm a **full-stack software engineer** with **2.5+ years of experience** building web products across **edtech, travel-tech, and enterprise software**. I work across the stack, with **React and Next.js** on the frontend and **Python, Node.js, and Django** on the backend, and I like **owning work from requirements through release and production support**.

I currently work on a **large-scale education platform**, building the systems around how students learn, practice, and get assessed, along with **security and academic-integrity controls**, **engagement analytics**, and **AI-powered experiences**. Before that, I led the **frontend migration of a high-traffic travel CRM** from a legacy PHP (Laravel) stack to **Next.js with TypeScript and Redux**, which **cut load times by about 30%** and gave agents **real-time booking updates**. Earlier, I built **authentication and third-party integrations** as a backend developer and worked on **enterprise applications and test automation**.`;

function HomeView() {
    return (
        <main className="flex flex-col min-h-[100dvh] space-y-10 font-noto_sans">
            <section id="hero">
                <div className="mx-auto w-full max-w-2xl space-y-8">
                    <div className="gap-2 flex justify-between">
                        <div className="flex-col flex flex-1 space-y-1.5">
                            <BlurFadeText
                                text="Hi there 👋,"
                                className="text-3xl font-medium tracking-tighter sm:text-xl font-lobster text-gray-500 "
                                delay={BLUR_FADE_DELAY}
                            />
                            <BlurFadeText
                                text="I'm Jatin Thakur"
                                className="text-3xl font-bold tracking-tighter sm:text-4xl xl:text-5xl/none font-geist_sans"
                                delay={BLUR_FADE_DELAY}
                                as="h1"
                            />
                            <BlurFadeText
                                className="max-w-[600px] md:text-base"
                                delay={BLUR_FADE_DELAY * 2}
                                text={
                                    "Full-stack engineer who takes ideas from spec to production—wiring up the UI, APIs, and cloud infrastructure to build things that actually hold up."
                                }
                            />
                        </div>
                        <AvatarAnimate />
                    </div>
                </div>
            </section>
            <section id="about">
                <BlurFade delay={BLUR_FADE_DELAY * 3}>
                    <h2 className="text-xl font-bold">About</h2>
                </BlurFade>
                <BlurFade delay={BLUR_FADE_DELAY * 4}>
                    <ExpandableContent>
                        <Markdown className="prose max-w-full text-pretty font-sans text-md leading-[24px] text-muted-foreground dark:text-gray-300 dark:prose-strong:text-gray-50">
                            {markdown}
                        </Markdown>
                    </ExpandableContent>
                </BlurFade>
            </section>
            <section id="work">
                <div className="flex min-h-0 flex-col gap-y-3">
                    <BlurFade delay={BLUR_FADE_DELAY * 5}>
                        <h2 className="text-xl font-bold">Work Experience</h2>
                    </BlurFade>
                    <BlurFade delay={BLUR_FADE_DELAY * 6}>
                        <TimelineCard
                            title="Nxtwave"
                            subtitle="Software Development Engineer 1"
                            logoUrl="https://divine-voice-26cf.thakurjatinx.workers.dev/Nxtwave_Colored.svg"
                            altText="Travomint"
                            period="Jul,2026 - Present"
                            description={`At NxtWave, I build student-facing learning and assessment experiences on an education platform, along with the Python services and APIs behind them. I implemented platform-wide security and academic-integrity controls, including facial authentication with anti-spoofing and automated blocking of AI browsers, third-party AI extensions, and copy-paste during evaluations. I defined the API contract and a 10-second heartbeat protocol that classifies learner engagement as Active, Passive, or Non-Learning, streaming telemetry to AWS CloudWatch. I also delivered adaptive practice experiences, an AI-powered coaching flow across four repositories, new assessment question types, and interactive tools such as a SQL query visualizer and a notes workspace with a rich-text editor. On the reliability side, I rolled out feature-scoped error boundaries, fixed Sentry-tracked production defects, and built usage dashboards and logging for the IDE infrastructure. I write Jest and Pytest tests alongside my features and use Cursor IDE to speed up debugging and code review.`}
                        />
                    </BlurFade>
                    <BlurFade delay={BLUR_FADE_DELAY * 6}>
                        <TimelineCard
                            title="Travomint"
                            subtitle="Frontend Developer"
                            logoUrl="https://www.travomint.com/Image/logo.png"
                            altText="Travomint"
                            period="May,2024 - Jul,2026"
                            description={`Led the frontend development using Next.js, Typescript, Redux ensuring robust and scalable architecture.Implemented state management solutions to ensure a smooth and dynamic user experience.Focused on performance optimization and responsiveness to handle high traffic volumes.Collaborated with designers and backend developers to integrate APIs and ensure a seamless booking process.Developed and implemented new features, enhancing user experience and functionality.`}
                        />
                    </BlurFade>
                    <BlurFade delay={BLUR_FADE_DELAY * 6}>
                        <TimelineCard
                            title="PureSoftware Ltd."
                            subtitle="Associate Software Engineer"
                            logoUrl="https://divine-voice-26cf.thakurjatinx.workers.dev/puresoftware_logo.jpeg"
                            altText="PureSoftware"
                            period="Apr,2023 - Dec,2023"
                            description={`Proficient knowledge of automation and testing frameworks, encompassing SG Mutate, pywinauto, pytest, and various others.Practical exposure to functional and some non-functional testing aspects.Independently designed and developed the backend infrastructure for a web application, utilizing Node js, MongoDB, GraphAPI, MSAL and templating library.Conducted research and development to conceptualize, design, develop, and seamlessly integrate critical project features`}
                        />
                    </BlurFade>
                </div>
            </section>
            <section id="education">
                <div className="flex min-h-0 flex-col gap-y-3">
                    <BlurFade delay={BLUR_FADE_DELAY * 7}>
                        <h2 className="text-xl font-bold">Qualifications</h2>
                    </BlurFade>
                    <BlurFade delay={BLUR_FADE_DELAY * 8} className="w-full">
                        <TimelineCard
                            title="Master's Degree of Computer Application"
                            subtitle="Indira Gandhi National Open University"
                            logoUrl="https://logolook.net/wp-content/uploads/2022/12/IGNOU-Symbol.png"
                            altText="MCA"
                            period="Jan,2023 - Dec,2024"
                        />
                    </BlurFade>
                    <BlurFade delay={BLUR_FADE_DELAY * 8} className="w-full">
                        <TimelineCard
                            title="Bachelor's Degree of Computer Application"
                            subtitle="Guru Gobind Singh Indraprastha University"
                            logoUrl="https://cdnbbsr.s3waas.gov.in/s3ea119a40c1592979f51819b0bd38d39d/uploads/2022/01/2022013149.png"
                            altText="BCA"
                            period="Aug,2019 - Jun,2022"
                        />
                    </BlurFade>
                </div>
            </section>
            <section id="skills">
                <div className="flex min-h-0 flex-col gap-y-3">
                    <BlurFade delay={BLUR_FADE_DELAY * 9}>
                        <h2 className="text-xl font-bold">Skills</h2>
                    </BlurFade>
                    <div className="flex flex-wrap gap-1">
                        {[
                            "Reactjs",
                            "Next.js",
                            "Typescript",
                            "Python",
                            "Django",
                            "Nodejs",
                            "Redux",
                            "Express",
                            "NoSQL",
                            "MySQL",
                            "TailwindCSS",
                            "Docker",
                            "MobX",
                            "Serverless",
                            "Styled Components",
                            "WebSockets","Redis", "Storybook","AWS", 
                        ].map((skill, id) => (
                            <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                                <Chip key={skill}>{skill}</Chip>
                            </BlurFade>
                        ))}
                    </div>
                </div>
            </section>
            <section id="projects">
                <div className="space-y-12 w-full py-12">
                    <BlurFade delay={BLUR_FADE_DELAY * 11}>
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                                    My Projects
                                </div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                    Check out my latest work
                                </h2>
                                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    I&apos;ve built a range of projects, from sleek and simple
                                    websites to dynamic, feature-rich web applications. Here are
                                    some of my favorites!
                                </p>
                            </div>
                        </div>
                    </BlurFade>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto justify-items-center">
                        {projectList.map((project, id) => (
                            <BlurFade key={project.title} delay={BLUR_FADE_DELAY * 12 + id * 0.05}>
                                <ProjectCard
                                    href={project.href}
                                    key={project.title}
                                    title={project.title}
                                    description={project.description}
                                    dates={project.dates}
                                    tags={project.technologies}
                                    image={project.image}
                                    video={project.video}
                                    links={project.links}
                                />
                            </BlurFade>
                        ))}
                    </div>
                </div>
            </section>
            <section id="contact">
                <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
                    <BlurFade delay={BLUR_FADE_DELAY * 16}>
                        <div className="space-y-3">
                            <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                                Contact
                            </div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                Get in Touch
                            </h2>
                            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Feel free to DM me on{" "}
                                <Link href={""} className="text-blue-500 hover:underline">
                                    Twitter with a direct question,
                                </Link>{" "}
                                and I&apos;ll get back to you when I can. However, I don&apos;t
                                engage with promotional messages.
                            </p>
                        </div>
                    </BlurFade>
                </div>
            </section>
        </main>
    );
}

export default HomeView;
