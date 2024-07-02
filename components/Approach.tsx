"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";
import Image from "next/image";

const Approach = () => {
  return (
    <section className="w-full py-20">
      <h1 className="heading flex justify-center items-center gap-3 ">
        My <span className="text-[#8b5cf6]">Approach</span>      <Image
            src="/3dd.svg"
            width={80}
            height={50}
            alt="emoji"
            className="inline-block justify-center align-middle"
          />
      </h1>
      {/* remove bg-white dark:bg-black */}
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4">
        {/* add description prop */}
        <Card
  title="Initial Consultation & Requirement Analysis"
  icon={<AceternityIcon order="Phase 1" />}
  description="Conduct a comprehensive consultation to understand your website's objectives, audience, and desired functionalities. Analyze requirements to lay a solid foundation for development."
>
  <CanvasRevealEffect
    animationSpeed={5.1}
    containerClassName="bg-emerald-900 rounded-3xl overflow-hidden"
  />
</Card>

<Card
  title="Design & Prototype Development"
  icon={<AceternityIcon order="Phase 2" />}
  description="Transform concepts into detailed prototypes, ensuring alignment with user needs and business goals. Provide iterative updates and incorporate feedback to refine designs."
>
  <CanvasRevealEffect
    animationSpeed={3}
    containerClassName="bg-pink-900 rounded-3xl overflow-hidden"
    colors={[
      [255, 166, 158],
      [221, 255, 247],
    ]}
    dotSize={2}
  />
</Card>

<Card
  title="Coding & Feature Implementation"
  icon={<AceternityIcon order="Phase 3" />}
  description="Develop the website using cutting-edge technologies and best practices. Implement features meticulously, ensuring functionality, performance, and scalability."
>
  <CanvasRevealEffect
    animationSpeed={3}
    containerClassName="bg-pink-900 rounded-3xl overflow-hidden"
    colors={[
      [255, 166, 158],
      [221, 255, 247],
    ]}
    dotSize={2}
  />
</Card>

<Card
  title="Quality Assurance & User Testing"
  icon={<AceternityIcon order="Phase 4" />}
  description="Perform rigorous testing to identify and resolve issues, ensuring a seamless user experience. Conduct user testing sessions to gather feedback and make necessary adjustments."
>
  <CanvasRevealEffect
    animationSpeed={3}
    containerClassName="bg-blue-900 rounded-3xl overflow-hidden"
    colors={[
      [200, 200, 255],
      [180, 255, 220],
    ]}
    dotSize={2}
  />
</Card>
      </div>
    </section>
  );
};

const Card = ({
  title,
  icon,
  children,
  description
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  description: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] max-w-sm w-full relative mx-auto p-4 h-[35rem] "
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover/canvas-card:opacity-0 transition duration-200 w-full mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white text-3xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4 font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 text-center transition duration-200">
          {title}
        </h2>
        <h2 className="dark:text-white text-center text-sm opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4 font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200" style={{ color: '#e4ecff' }}>
          {description}
        </h2>
      </div>
    </div>
  );
};

const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div>
      <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        {order}
      </button>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

export default Approach;
