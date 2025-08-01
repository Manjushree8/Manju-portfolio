import React from "react";
import { projects } from "../data/projects";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative py-20 px-6 md:px-12 bg-gradient-to-br from-[#FCEAFF] via-[#E0F7FA] to-[#F8F8F8] dark:bg-gray-900 overflow-hidden"
    >
      {/* Top Left Blob */}
      <svg
        className="absolute -top-20 -left-10 w-96 h-96 text-pink-100 opacity-30 z-0"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="M41.4,-72.2C53.6,-62.7,63.3,-53.6,69.7,-42.4C76,-31.2,79,-18,78.8,-5.1C78.6,7.9,75.2,20.6,68.4,31.8C61.6,43.1,51.4,52.9,40.1,62.7C28.8,72.5,14.4,82.3,-0.4,82.8C-15.3,83.3,-30.6,74.6,-41.3,63.2C-51.9,51.9,-57.8,37.8,-64.3,23.7C-70.7,9.7,-77.7,-4.3,-75.5,-17.3C-73.3,-30.2,-61.9,-41.9,-49.7,-51.4C-37.4,-61,-24.3,-68.5,-10.2,-74.4C3.9,-80.2,17.7,-84.4,30.4,-80.6C43,-76.9,55.4,-65.6,41.4,-72.2Z"
          transform="translate(100 100)"
        />
      </svg>

      {/* Animated Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-center text-blue-600 mb-12 relative z-10"
      >
        Projects
      </motion.h2>

      {/* Projects Grid */}
      <div className="grid gap-8 md:grid-cols-2 relative z-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:scale-[1.02] hover:shadow-xl transition duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-52 object-cover"
            />

            <div className="p-6 space-y-3">
              <h3 className="text-xl font-semibold text-blue-500">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 text-blue-700 dark:bg-blue-700 dark:text-blue-100 px-2 py-1 text-xs rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 mt-4">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded transition"
                >
                  <FiExternalLink className="text-base" />
                  Live Preview
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white bg-gray-800 hover:bg-gray-900 px-4 py-2 rounded transition"
                >
                  <FaGithub className="text-base" />
                  View Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom Right Blob */}
      <svg
        className="absolute bottom-0 right-0 w-[250px] h-[250px] text-blue-100 opacity-20 z-0"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="M39.6,-67.5C49.9,-58.5,56.5,-45.6,62.6,-32.2C68.7,-18.8,74.3,-4.9,73.7,8.4C73.1,21.6,66.4,34.2,58.5,45.6C50.6,57,41.4,67.1,29.6,70.9C17.7,74.7,3.2,72.1,-10.7,71.3C-24.6,70.5,-38,71.5,-51.6,66C-65.3,60.4,-79.3,48.3,-84.2,34.3C-89.1,20.3,-84.8,4.4,-79.6,-10.1C-74.5,-24.7,-68.6,-38,-59.4,-47.6C-50.2,-57.3,-37.6,-63.3,-24.1,-69.4C-10.6,-75.4,3.7,-81.4,16.9,-78.3C30.2,-75.1,42.5,-62.6,39.6,-67.5Z"
          transform="translate(100 100)"
        />
      </svg>
    </section>
  );
};

export default Projects;
