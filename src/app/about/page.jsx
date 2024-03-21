"use client";
import Brain from "@/components/brain";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const AboutPage = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  // const isSkillRefInView = useInView(skillRef, {once:true});
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY IMAGE */}
            <Image
              src="/me2.jpg"
              alt=""
              width={112}
              height={112}
              className="w-28 h-28 rounded-full object-cover"
            />
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl">Oh, hello there!</h1>
            {/* BIOGRAPHY DESC */}
            <p className="text-lg">
            I am a creative and organized graphic designer with 4 years of experience in 
            designing content for social media. Work
            Through various projects, I taught conscientiousness and skills
            effective cooperation.
            </p>
            {/* BIOGRAPHY QUOTE */}
            <span className="italic">
              Lorem ipsum dolor sit amet u will be me next client :)
            </span>
            {/* BIOGRAPHY SIGN SVG*/}
            <div className="self-end">
              <svg
                width="300"
                height="200"
                viewBox="0 5 1000 50"
                fill="black"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M200.71,183.4c-6.88,0-13.75-.09-20.63.02-12.96.2-25.87.88-38.66,3.25-1.92.36-2.98,1.2-3.89,2.86-8.88,16.24-17.74,32.51-29.31,47.04-4.03,5.07-8.91,9.48-13.54,14.05-2.9,2.86-6.56,4.16-10.63,4.5-4.45.38-7.43-2.15-6.86-6.58,1.84-14.47,6.91-27.65,16.37-38.91,10.65-12.68,24.72-19.73,40.39-23.95,2.36-.64,3.76-1.74,4.73-3.93,4.07-9.19,8.25-18.33,12.38-27.5.15-.33.18-.7.37-1.5-.94.5-1.58.78-2.15,1.15-14.8,9.52-30.56,17.14-46.91,23.58-.89.35-2.02.96-2.36,1.75-4.29,9.96-12,16.98-20.16,23.6-9.62,7.81-20.41,13.71-32.04,17.76-11.1,3.87-22.63,3.21-33.07-1.82-8.6-4.15-13.71-11.51-14.52-21.87-1.59-20.22,5.57-37.5,15.99-54.08,12.29-19.58,29.66-33.41,49.39-44.68,19.14-10.93,40.06-17.22,61.14-22.97,8.58-2.34,17.27-4.38,26.03-5.94,4.85-.86,9.93-.48,14.91-.52.64,0,1.28.8,1.92,1.23-.61.45-1.23,1.3-1.84,1.28-23.14-.58-44.37,7.74-65.94,14.26-22.06,6.67-42.19,17.24-59.84,32.18-19.37,16.38-33.09,36.48-38.13,61.6-1.42,7.09-.96,14.73-.27,22.01.59,6.23,8.3,15.79,19.52,17.71,10.36,1.77,20.25,1.26,30.03-3.26,14.38-6.65,27.3-15.14,37.8-27.09,1.51-1.72,2.76-3.68,4.05-5.57.63-.93,1.09-1.98,1.94-3.55-5.1,1.47-9.61,2.91-14.19,4.07-10.11,2.56-20.2,5.3-30.43,7.32-4.8.95-9.92.76-14.84.43-5.57-.38-7.39-3.69-5.58-8.99,1.47-4.29,4.41-7.48,8.16-9.72,10.44-6.23,21.84-9.47,33.99-8.94,6.93.3,13.87,1.48,20.69,2.86,3.89.78,7.15,3.07,6.44,8.61,6-2.59,11.78-4.64,17.13-7.47,11.25-5.95,22.31-12.27,33.36-18.59,1.35-.77,2.48-2.34,3.18-3.8,7.78-16.33,15.04-32.93,23.29-49.02,6.31-12.32,14.69-23.38,24.91-32.87,3.26-3.03,6.57-5.86,11.62-5.15,2.68.38,4.15,1.48,4.66,4.16,1.39,7.26-.14,14.11-2.85,20.77-4.35,10.71-11.36,19.72-18.65,28.52-11.7,14.12-24.98,26.51-40.25,36.73-.68.46-1.4,1.09-1.72,1.81-4.94,11.09-9.83,22.21-14.86,33.65,3.13-.4,6.2-.75,9.26-1.19,16.99-2.46,34.05-2.11,51.12-1.21,3.02.16,5.76-.2,8.63-1.37,4.59-1.87,9.44-3.08,14.15-4.66,1.03-.34,2.13-.87,2.86-1.64,25.3-26.52,52.34-51.03,83.05-71.23,5.44-3.58,11.11-6.81,16.68-10.2.8-.49,1.59-.97,2.58-1.58-.5-.43-.82-.77-1.2-1.02-25.16-16.33-50.26-32.77-75.53-48.93-9.53-6.1-19.62-11.35-30.61-14.32-4.94-1.34-10.14-2.08-15.25-2.29-6.7-.27-13.42.28-20.14.42-1.53.03-3.09,0-4.58-.28-.92-.18-2.28-.77-2.46-1.44-.2-.75.47-2.08,1.17-2.67,1.52-1.27,3.19-2.52,5-3.27,18.27-7.52,37.35-11.88,56.89-14.51,25.15-3.38,50.36-2.74,75.56-1.26,22.02,1.29,44.02,2.92,65.99,4.88,18.89,1.68,37.79,3.6,56.1,9.05,1.56.46,3.13.93,4.6,1.61,3.86,1.8,4.97,6.21,2.02,9.29-2.15,2.25-4.8,4.1-7.44,5.82-18.43,11.97-37.9,22.08-57.28,32.38-15.23,8.09-30.14,16.77-45.19,25.19-.65.37-1.26.82-2.19,1.43,5.74,3.72,11.25,7.31,16.78,10.87,40.23,25.93,81.6,49.88,124.86,70.43,36.15,17.17,74.18,28.85,113.15,37.64,28.18,6.35,56.65,10.98,85.46,13.05,27.45,1.97,54.94,3.61,82.45,4.71,33.36,1.33,66.75,1.94,100.13,2.86.58.02,1.22-.1,1.7.12.5.24,1.03.76,1.19,1.26.08.25-.59.93-1.04,1.1-.6.22-1.32.16-1.99.15-37.98-1.05-75.97-1.81-113.94-3.29-24.52-.96-49.05-2.53-73.5-4.62-39.04-3.34-77.35-10.84-115.14-21.27-41.69-11.51-81.02-28.53-118.97-49.06-34.59-18.71-68.2-39.04-101.01-60.68-2.19-1.45-3.65-1.35-5.83-.09-33.84,19.35-63.34,44.14-90.49,71.9-2.67,2.73-5.62,5.19-8.45,7.77.18.33.35.67.53,1,.98,0,1.97.02,2.95,0,24.84-.68,46.62,7.56,65.97,22.75.87.68,1.91,2.1,1.73,2.91-.19.85-1.69,1.81-2.75,2.01-5.54,1.06-11.1,2.09-16.7,2.76-15.32,1.85-30.68,3.39-45.99,5.29-13.78,1.71-27.65,2.92-41.07,6.78-1.18.34-2.44,1.1-3.2,2.03-3.58,4.37-7.01,8.86-10.97,13.93,2.67,1.18,4.89,2.35,7.24,3.17,7.48,2.63,15.32,2.29,23.07,2.53,23.68.74,46.74-3.19,69.58-9.07,8.62-2.22,17.37-3.9,26.09-5.69,5.22-1.07,10.45-1.28,15.64,1.35,1.78-2.46,3.56-4.83,5.22-7.27.39-.57.54-1.45.48-2.15-1.1-12.19,1.11-24.08,3.31-35.96.56-3.01,1.47-5.95,2.04-8.96,1.62-8.46,6.15-15.33,11.34-21.98,2.85-3.65,4.92-7.9,7.42-11.83.53-.83,1.41-1.44,2.13-2.16.25,1.04.91,2.18.69,3.1-1.33,5.38-3.12,10.66-4.28,16.07-2.26,10.58-3.86,21.3-6.38,31.82-2.55,10.65-6.78,20.73-12.3,30.24-.6,1.04-.74,2.5-.69,3.75.22,5.16.6,10.31.89,15.47.03.56,0,1.2-.24,1.69-.31.65-.83,1.2-1.27,1.79-.63-.49-1.47-.86-1.86-1.49-.96-1.54-1.6-3.28-2.58-4.8-.86-1.33-2-2.47-3.03-3.71-4.17,3.79-7.91,7.49-11.96,10.81-14.11,11.57-30.82,17.64-48.15,22.18-18.36,4.81-37.08,6.07-55.93,4.09-11.03-1.16-21.08-5.52-30.46-11.32-1.81-1.12-3.28-2.94-4.61-4.67-1.78-2.32-1.98-4.96-.45-7.55,1.6-2.72,3.34-5.37,4.9-8.12.43-.75.71-1.74.64-2.58-.25-2.92-.63-5.83-1.1-8.72-.19-1.16-.92-2.23-1.08-3.39-.1-.71.26-1.6.67-2.25.46-.73,1.52-1.17,1.78-1.92,4.32-12.43,11.78-22.5,22.4-30.25.38-.28.73-.61,1.09-.91-.04-.36-.09-.72-.13-1.07ZM183.35,21.3c.1.14.2.28.3.42,3.92,0,7.89.36,11.76-.06,16.52-1.82,31.76,2.11,46.17,9.91,6.06,3.28,12.19,6.5,17.98,10.23,23.35,15.06,46.6,30.29,69.81,45.56,2.05,1.35,3.43,1.44,5.59.22,16.33-9.26,32.63-18.58,49.16-27.46,19.49-10.47,39.29-20.38,57.53-33.02,1.91-1.32,4.43-2.54,3.95-5.47-.46-2.85-3.2-2.99-5.32-3.62-16.04-4.85-32.57-6.99-49.18-8.48-22.15-2-44.3-4.05-66.49-5.37-27.96-1.66-55.95-2.53-83.86,1.21-18.31,2.45-36.02,7.17-53.23,13.82-1.45.56-2.79,1.41-4.18,2.12ZM320.18,227.66c-3.11-1.89-6.27-1.94-9.37-1.41-7.17,1.22-14.4,2.25-21.42,4.06-21.64,5.57-43.38,10.87-65.82,11.18-14.96.2-30.35,1.83-44.4-5.97-.46.66-.93,1.26-1.34,1.91-1.02,1.62-2.06,3.23-3.02,4.88-2.25,3.89-2.12,5.02.99,8.34.78.83,1.62,1.69,2.59,2.25,9.03,5.17,18.46,9.31,28.93,10.54,15.07,1.76,30.02.92,44.93-1.79,18.57-3.37,36.06-9.53,51.88-19.96,5.9-3.89,11.28-8.47,16.05-14.02ZM158.72,144.01c21.85-15.44,40.07-34.22,53.27-57.56,3.58-6.34,5.43-13.27,5.02-20.68-.28-5-3.16-6.6-7.57-4.02-1.39.81-2.72,1.84-3.86,2.98-3.37,3.41-6.84,6.75-9.9,10.42-17.01,20.39-26.7,44.75-36.96,68.85ZM135.26,188.21c-1.38.27-2.04.35-2.67.53-26.09,7.57-43.89,23.54-50.91,50.36-.84,3.22-1.31,6.56-1.78,9.87-.35,2.46.99,3.42,3.39,3.46,4.12.07,7.5-1.72,10.34-4.37,3.84-3.59,7.68-7.26,11.02-11.31,10.58-12.86,18.61-27.4,26.9-41.76,1.19-2.06,2.29-4.17,3.72-6.78ZM223.82,208.75c.05.17.1.35.15.52,24.59-2.94,49.18-5.88,73.77-8.82,0-.32,0-.65,0-.97-.42-.35-.84-.73-1.28-1.06-19.11-14.62-40.56-21.85-64.76-21.03-4.81.16-7.08,2.75-9.75,6.19.88.15,1.43.19,1.95.34,5.42,1.53,10.99,2.66,16.19,4.74,4.44,1.78,4.82,5.09,1.88,8.76-2.8,3.5-6.07,6.33-10.36,7.92-2.65.99-5.19,2.26-7.78,3.41ZM72.91,165.4c-.04.24-.08.48-.12.73-10.42.23-21.52,3.18-30,7.91-3.53,1.97-6.41,4.56-8.05,8.3-1.85,4.21-.83,6.21,3.78,6.56,3.8.29,7.81.58,11.45-.3,15.52-3.75,30.94-7.9,46.37-12,2.54-.68,3.09-4.24.96-5.83-1.12-.84-2.46-1.65-3.8-1.9-6.84-1.25-13.72-2.32-20.59-3.45ZM196.65,212.55c.12.21.24.42.37.63,3.29-.58,6.69-.8,9.84-1.8,6.92-2.19,13.75-4.68,20.55-7.22,4.41-1.65,8.56-3.74,11.7-7.51,2.76-3.32,2.65-4.91-1.44-6.19-5.19-1.63-10.49-2.95-15.81-4.08-1.18-.25-2.95.5-3.91,1.37-1.98,1.79-3.61,3.96-5.35,6-5.33,6.26-10.64,12.54-15.95,18.81ZM180.12,216.21c3.96-.72,7.37-1.24,10.72-2,.91-.21,1.82-.98,2.46-1.73,3.16-3.73,6.2-7.57,9.35-11.31,4.31-5.12,8.68-10.18,13.18-15.45-5.51-1.21-10.55-1.93-14.94,2.12-2.75,2.53-5.79,4.77-8.34,7.47-5.58,5.91-9.69,12.76-12.42,20.9ZM330.57,212.38c11.66-19.44,14.17-41.43,18.16-63.67-6.14,7.02-10.8,13.97-12.79,22.75-3.06,13.49-5.67,26.99-5.37,40.93ZM188.43,218.51c-3.05.54-5.57.94-8.06,1.48-.53.11-1.33.72-1.35,1.12-.12,2.86-.06,5.74-.06,8.61.23.06.46.12.69.18,2.82-3.66,5.63-7.31,8.78-11.39ZM328.97,222.21c-.27-.06-.53-.11-.8-.17-1.16,1.58-2.32,3.17-3.45,4.7,1.49,1.77,2.87,3.41,4.83,5.74-.22-3.96-.4-7.12-.58-10.28ZM222.1,178.59c-3.3,1.13-6.15,2.11-9.63,3.3,5.38,1.64,6.13,1.37,9.63-3.3Z"
                  stroke="black"
                  strokeWidth="0"
                />
              </svg>
            </div>
            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* SKILL TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            {/* SKILL LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Adobe Phostohop
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
               Adobe Illustrator
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
               Figma
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Next.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Tailwind CSS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Framer Motion
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Git
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                HTML | CSS | JS
              </div>
            </motion.div>
            {/* SKILL SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* EXPERIENCE CONTAINER */}
          <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={experienceRef}
          >
            {/* EXPERIENCE TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              EXPERIENCE
            </motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              className=""
            >

              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Freelance Graphic Designer
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                  I am constantly learning and setting new horizons for myself.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2020 - Present{" "}
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Selfemployed
                  </div>
                </div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Junior Product Designer
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                  I helped with the visual identification of the brand. I took part in creating an effective branding campaign and creating clothing fashion projects.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    May 2021 - Sep 2021
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Interstalar
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>             
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Junior Graphic Designer
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                  I was responsible for creating visual content for Facebook Ads campaigns.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    Aug 2022 - Jan 2023{" "}
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Skymedica
                  </div>
                </div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Junior Product Designer
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                  I helped with the visual identification of the brand. I took part in creating an effective branding campaign and creating clothing fashion projects.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    May 2021 - Sep 2021
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Interstalar
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
