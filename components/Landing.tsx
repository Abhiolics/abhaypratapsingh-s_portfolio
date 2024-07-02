"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
import { SparklesCore } from "./ui/sparkles";
import Image from "next/image";

export default function LampDemo() {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold text-center bg-transparent mb-6 mt-6">Get to  <span className=" font-bold text-[#8b5cf6]">Know Me <Image className="flex justify-center items-center" src='/in.png' width={100} height={100} alt="image"/></span></h1>
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeOut",
          }}
          className="mt-8 p-4 flex gap-5 flex-col lg:flex-row sm:flex-col justify-center items-center text-gray-300 py-4 bg-clip-text text-center text-4xl font-medium text-transparent md:text-7xl"
        >
          <Image src="/ProfileA.jpg" width={200} height={200} alt="Profile Image" />
          <p className="text-[20px] font-light lg:text-[20px] text-white">
            Hey I&apos;m Abhay Pratap Singh,
            Currently, I am pursuing B.Tech in Computer Science, now in my 5th semester at Shri Ramswaroop Memorial University, Lucknow.
            My journey in tech began somewhat aimlessly until I had a pivotal realization in my first year that set me on a path of self-improvement.
            <br />In my 3rd semester, I got my laptop and dove into learning Java and Web development. This ignited my passion for frontend development, particularly in designing websites/apps and products. To enhance my skills bit more, I learned Figma for UI/UX design and started solving DSA problems on LeetCode for sustain in rat race.
            <br />By the end of my 2nd year, I had a clear vision for my career. I decided to make a significant impact in the tech industry and discovered my interest in the role of a Product Manager. Since then, I have been diligently preparing for this role while continuously honing my development and design skills.
            I am committed to leveraging my knowledge and skills to innovate and drive meaningful change in the industry. <br /> My goal is to become a Product Manager and contribute to creating impactful products.
            <br />Thank you for taking the time to read my profile 💗
          </p>
        </motion.h1>
      </LampContainer>
    </div>
  );
}

