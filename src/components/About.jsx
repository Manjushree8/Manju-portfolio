import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="w-full min-h-[80vh] bg-gradient-to-r from-[#fdfcff] via-[#f7ddff] to-[#ffe7f0] px-6 md:px-20 py-16 flex items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-4xl w-full bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 md:p-12 text-center md:text-left"
      >
        
<h2 className="text-3xl font-bold text-blue-600 mb-4 text-center md:text-left">About Me</h2>
<p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed space-y-4">
  Hey! I’m <span className="font-semibold text-blue-500">Manjushree</span> — someone who finds joy in turning caffeine and code into clean, beautiful websites. I’m a full stack web developer who vibes with creative UIs, smooth animations, and logic that just clicks.

  <br /><br />
  I love working with <strong>React</strong>, <strong>Tailwind CSS</strong>, <strong>JavaScript</strong>, <strong>Node.js</strong>, and <strong>MongoDB</strong>. Whether it’s a Netflix clone, weather app, or a task manager — I build with a balance of fun and function.

  <br /><br />
  I’m always exploring new tools, leveling up my skills, and looking for projects that make me say: “Ooh, this is gonna be fun.” If you’re into clean code, quirky ideas, and cool collabs — we’ll get along just fine.

  <br /><br />
  <span className="font-semibold text-indigo-500">Let’s make something awesome together!</span>
</p>

{/* Contact CTA */}
<div className="mt-6">
  <a
    href="#contact"
    className="inline-block px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow transition duration-300"
  >
     Contact Me
  </a>
</div>



      </motion.div>
    </section>
  );
};

export default About;
