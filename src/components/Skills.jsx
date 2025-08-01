import React from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiVite,
  SiRedux,
  SiHtml5,
  SiTailwindcss,
  SiJavascript,
  SiNodedotjs,
  SiMysql,
  SiPostman,
  SiGithub,
  SiGit,
  SiExpress,
  SiMongodb,
  SiBootstrap,
  SiFramer,
} from "react-icons/si";

const skills = [
  { icon: <SiReact />, label: "React", level: "Advanced" },
  { icon: <SiVite />, label: "Vite", level: "Advanced" },
  { icon: <SiRedux />, label: "Redux", level: "Intermediate" },
  { icon: <SiHtml5 />, label: "HTML5", level: "Pro" },
  { icon: <SiTailwindcss />, label: "Tailwind CSS", level: "Advanced" },
  { icon: <SiJavascript />, label: "JavaScript", level: "Advanced" },
  { icon: <SiNodedotjs />, label: "Node.js", level: "Intermediate" },
  { icon: <SiExpress />, label: "Express.js", level: "Intermediate" },
  { icon: <SiMysql />, label: "MySQL", level: "Learning" },
  { icon: <SiMongodb />, label: "MongoDB", level: "Learning" },
  { icon: <SiPostman />, label: "Postman", level: "Intermediate" },
  { icon: <SiGit />, label: "Git", level: "Pro" },
  { icon: <SiGithub />, label: "GitHub", level: "Pro" },
  { icon: <SiBootstrap />, label: "Bootstrap", level: "Intermediate" },
  { icon: <SiFramer />, label: "Framer Motion", level: "Learning" },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 px-6 md:px-12 bg-gradient-to-b from-[#FCEAFF] to-[#F8F8F8] dark:bg-gray-900 text-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-blue-600 mb-10"
      >
        Tech Stack & Tools 🧠
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow text-center flex flex-col items-center justify-center hover:shadow-xl transition"
          >
            <div className="text-4xl text-blue-600 mb-3">{skill.icon}</div>
            <h4 className="font-semibold text-gray-800 dark:text-gray-100">{skill.label}</h4>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{skill.level}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
