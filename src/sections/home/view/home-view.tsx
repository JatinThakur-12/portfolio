"use client";
import React from "react";
import { motion } from "motion/react";
import BlurFadeText from "@/components/motion/BlurFadeText";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/Avatar";
import BlurFade from "@/components/motion/BlurFade";

function HomeView() {
    return (
        <main className="flex flex-col min-h-[100dvh] space-y-10">
            <section id="hero">
                <div className="mx-auto w-full max-w-2xl space-y-8">
                    <div className="gap-2 flex justify-between">
                        <div className="flex-col flex flex-1 space-y-1.5">
                            <BlurFadeText
                                text="Hi there,"
                                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-5xl/none font-geist_sans"
                            />
                            <BlurFadeText
                                text="I'm Jatin Thakur"
                                className="text-3xl font-bold tracking-tighter sm:text-4xl xl:text-5xl/none font-geist_sans"
                            />
                            <BlurFadeText
                                className="max-w-[600px] md:text-xl"
                                delay={0.4}
                                text={
                                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore exercitationem, dicta iure saepe minima labore possimus a odit odio sapiente tempora."
                                }
                            />
                            {/* <BlurFadeText></BlurFadeText> */}
                        </div>
                        {/* <div> */}
                        <BlurFade>
                            <motion.div
                                initial={{ filter: "grayscale(50%)", rotate: 0 }} // Initial state
                                whileHover={{ filter: "grayscale(0%)", scale: 1.2, rotate: -5 }} // Hover state
                                transition={{ duration: 0.3 }} // Smooth transition
                            >
                                <Avatar className="size-28 border rounded-lg p-2 bg-gray-50">
                                    <AvatarImage alt={"Jatin Thakur"} src={"/assets/avatar-image.png"} className="rounded-none" />
                                    <AvatarFallback className="rounded-none">{"JT"}</AvatarFallback>
                                </Avatar>
                            </motion.div>
                        </BlurFade>
                        {/* </div> */}
                    </div>
                </div>
            </section>
        </main>
    );
}

export default HomeView;
