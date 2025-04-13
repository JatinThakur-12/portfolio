"use client";
import React from "react";
import { motion } from "motion/react";
import BlurFadeText from "@/components/motion/BlurFadeText";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import BlurFade from "@/components/motion/BlurFade";
import Markdown from "react-markdown";
import { TimelineCard } from "@/components/TimlineCard";
import { Chip } from "@/components/ui/chip";
import { ProjectCard } from "@/components/ProjectCard";
import Link from "next/link";
import { projectList } from "../data/projectList";

const BLUR_FADE_DELAY = 0.04;

// const markdown =
//     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem autem, itaque sunt deserunt facere dolores placeat similique, [nostrum nam quod omnis velit consequuntur aliquam ipsa](/#), [quos repudiandae voluptate cumque, illo reprehenderit.](https://google.com), and [cconsecteturrum nam quod omnis velit consequuntur](/#). Itaque hic, ipsum atque totam placeat dolorum a culpa similique [taque hic](https://google.com).";

const markdown =
    " As a Frontend Developer, my role involves translating complex functionalities into accessible web features that drive customer satisfaction at [Travomint](https://travomint.com). Currently expanding my expertise, which complements my hands-on development work. My goal is to continuously innovate and contribute to the tech industry's growth through cutting-edge solutions.";

function HomeView() {
    return (
        <main className="flex flex-col min-h-[100dvh] space-y-10 font-noto_sans">
            <section id="hero">
                <div className="mx-auto w-full max-w-2xl space-y-8">
                    <div className="gap-2 flex justify-between">
                        <div className="flex-col flex flex-1 space-y-1.5">
                            <BlurFadeText
                                text="Hi there,"
                                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-5xl/none font-geist_sans"
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
                                    "I harness the power of Node.js, SSR, and Next.js to create seamless user experiences."
                                }
                            />
                        </div>
                        <BlurFade delay={BLUR_FADE_DELAY}>
                            <motion.div
                                initial={{ filter: "grayscale(50%)", rotate: 0 }} // Initial state
                                whileHover={{ filter: "grayscale(0%)", scale: 1.2, rotate: -5 }} // Hover state
                                transition={{ duration: 0.3 }} // Smooth transition
                            >
                                <Avatar className="size-28 border rounded-lg p-2 bg-gray-50">
                                    <AvatarImage
                                        alt={"Jatin Thakur"}
                                        src={"/assets/avatar-image.png"}
                                        className="rounded-none"
                                    />
                                    <AvatarFallback className="rounded-none">{"JT"}</AvatarFallback>
                                </Avatar>
                            </motion.div>
                        </BlurFade>
                    </div>
                </div>
            </section>
            <section id="about">
                <BlurFade delay={BLUR_FADE_DELAY * 3}>
                    <h2 className="text-xl font-bold">About</h2>
                </BlurFade>
                <BlurFade delay={BLUR_FADE_DELAY * 4}>
                    <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:text-white dark:prose-invert">
                        {markdown}
                    </Markdown>
                </BlurFade>
            </section>
            <section id="work">
                <div className="flex min-h-0 flex-col gap-y-3">
                    <BlurFade delay={BLUR_FADE_DELAY * 5}>
                        <h2 className="text-xl font-bold">Work Experience</h2>
                    </BlurFade>
                    <BlurFade delay={BLUR_FADE_DELAY * 6}>
                        <TimelineCard
                            title="Travomint (SNVA TravelTech)"
                            subtitle="Frontend Developer"
                            logoUrl="https://www.travomint.com/Image/logo.png"
                            altText="Travomint"
                            period="May,2024 - Present"
                            description={`Led the frontend development using Next.js, Typescript, Redux ensuring robust and scalable architecture.Implemented state management solutions to ensure a smooth and dynamic user experience.Focused on performance optimization and responsiveness to handle high traffic volumes.Collaborated with designers and backend developers to integrate APIs and ensure a seamless booking process.Developed and implemented new features, enhancing user experience and functionality.`}
                        />
                    </BlurFade>
                    <BlurFade delay={BLUR_FADE_DELAY * 6}>
                        <TimelineCard
                            title="PureSoftware Ltd."
                            subtitle="Associate Software Engineer"
                            logoUrl="https://www.puresoftware.com/wp-content/themes/puresoftware/images/logo.svg"
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
                    <BlurFade delay={BLUR_FADE_DELAY * 8}>
                        <TimelineCard
                            title="Master's Degree of Computer Application"
                            subtitle="Indira Gandhi National Open University"
                            logoUrl="https://logolook.net/wp-content/uploads/2022/12/IGNOU-Symbol.png"
                            altText="MCA"
                            period="Jan,2023 - Dec,2024"
                        // description="adfasf"
                        />
                    </BlurFade>
                    <BlurFade delay={BLUR_FADE_DELAY * 8}>
                        <TimelineCard
                            title="Bachelor's Degree of Computer Application"
                            subtitle="Guru Gobind Singh Indraprastha University"
                            logoUrl="https://cdnbbsr.s3waas.gov.in/s3ea119a40c1592979f51819b0bd38d39d/uploads/2022/01/2022013149.png"
                            altText="BCA"
                            period="Aug,2019 - Jun,2022"
                        // description="adfasf"
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
                            "Nodejs",
                            "Redux",
                            "Express",
                            "MongoDb",
                            "MySQL",
                            "TailwindCSS",
                            "Docker",
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
