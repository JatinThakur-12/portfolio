"use client";

import React, { useState } from "react";
import BlurFade from "../motion/BlurFade";
import { BLUR_FADE_DELAY } from "@/constants/blurConstants";
import { motion } from "motion/react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const AvatarAnimate = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <BlurFade delay={BLUR_FADE_DELAY}>
        {hovered && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="pointer-events-none absolute -top-8 -left-8 dark:text-sky-700 text-sky-500"
            viewBox="86 86 228 228"
            width="175px"
            height="175px"
          >
            <title>Three hand-drawn circular rounds</title>
            <path
              id="rounds"
              d="M299,202
           C299,257 253,301 198,301
           C143,301 99,254 99,199
           C99,144 147,98 202,98
           C257,98 303,146 303,201
           C303,257 252,305 197,305
           C142,305 96,255 96,200
           C96,145 148,95 203,95
           C258,95 306,145 306,200
           C306,256 254,307 199,307
           C144,307 93,256 93,201
           C93,146 149,93 204,93
           C259,93 302,146 302,201"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.85"
              pathLength="1"
              strokeDasharray="1"
              strokeDashoffset="1"
            >
              <animate
                attributeName="stroke-dashoffset"
                values="1;0"
                keyTimes="0;1"
                calcMode="spline"
                keySplines="0.3 0 0.7 1"
                dur="1s"
                repeatCount="1"
                fill="freeze"
              />
            </path>
          </svg>
        )}
        <motion.div
          onHoverStart={() => setHovered(true)}
          onHoverEnd={() => setHovered(false)}
          initial={{ filter: "grayscale(50%)", rotate: 0 }}
          whileHover={{ filter: "grayscale(0%)", scale: 1.2, rotate: -5 }} 
          transition={{ duration: 0.3 }} 
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
  );
};

export default AvatarAnimate;
