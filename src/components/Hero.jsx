import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="w-full min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 bg-gradient-to-br from-[#ffe7f0] via-[#f7ddff] to-[#f3f4ff] dark:bg-gray-900 py-16 pt-28 gap-10 overflow-hidden">
      
      {/* Left Text Content */}
      <motion.div
        className="flex-1 flex flex-col items-center md:items-start text-center md:text-left space-y-6"
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-2xl text-gray-600 dark:text-gray-400">Hey, I’m</h2>
        <h1 className="text-5xl font-extrabold text-blue-800 dark:text-blue-400">Manjushree</h1>
        <h3 className="text-2xl font-medium text-gray-700 dark:text-white">Full Stack Web Developer</h3>

        <p className="text-base text-gray-600 dark:text-gray-100 text-center md:text-left max-w-md leading-relaxed">
          I'm a code-loving creative who crafts slick, scalable websites with clean logic and playful design.
          Currently building fun, functional apps with <strong>React</strong>, <strong>Tailwind</strong> & <strong>Node</strong>.
          Always down to learn, grow, and deploy!
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row sm:justify-center md:justify-start items-center gap-4">
          <a
            href="https://drive.google.com/file/d/1GZyDLniaU91Vgf_ZetBkl5LXNfiB3zP1/view?usp=sharing"
            target="_blank"
            className="group px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-lg shadow-md hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
          >
            Resume & Skills
            <span className="transform transition-transform duration-300 group-hover:translate-x-1">↗</span>
          </a>

          <a
            href="#projects"
            className="group px-6 py-3 border-2 border-blue-500 text-blue-600 font-semibold rounded-lg hover:bg-blue-100 transition-all duration-300 inline-flex items-center gap-2"
          >
            Peek My Work
            <span className="transform transition-transform duration-300 group-hover:-translate-y-0.5">↗</span>
          </a>
        </div>
      </motion.div>

      {/* Right Image with Blob */}
      <motion.div
        className="flex-1 flex justify-center relative w-full max-w-md"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Blob SVG */}
        <svg
          className="absolute top-0 -left-10 w-80 h-80 z-0"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="blobGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#60a5fa" />
              <stop offset="100%" stopColor="#a78bfa" />
            </linearGradient>
          </defs>
          <path
            fill="url(#blobGradient)"
            d="M41.4,-72.2C53.6,-62.7,63.3,-53.6,69.7,-42.4C76,-31.2,79,-18,78.8,-5.1C78.6,7.9,75.2,20.6,68.4,31.8C61.6,43.1,51.4,52.9,40.1,62.7C28.8,72.5,14.4,82.3,-0.4,82.8C-15.3,83.3,-30.6,74.6,-41.3,63.2C-51.9,51.9,-57.8,37.8,-64.3,23.7C-70.7,9.7,-77.7,-4.3,-75.5,-17.3C-73.3,-30.2,-61.9,-41.9,-49.7,-51.4C-37.4,-61,-24.3,-68.5,-10.2,-74.4C3.9,-80.2,17.7,-84.4,30.4,-80.6C43,-76.9,55.4,-65.6,41.4,-72.2Z"
            transform="translate(100 100)"
            opacity="0.3"
          />
        </svg>

        {/* Profile Image */}
        <img
          src="/me.png"
          alt="Manjushree's profile photo"
          className="w-72 h-72 object-cover rounded-2xl shadow-xl border-[6px] border-white relative z-10"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
