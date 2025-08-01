import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-[#fceaff] dark:bg-gray-900 text-gray-700 dark:text-gray-300 px-6 py-10 mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto text-center"
      >
        <h3 className="text-xl font-bold mb-3 text-blue-600">Let’s Connect!</h3>
        <p className="mb-6 text-sm">
          Open to collabs, feedback, and exciting job opportunities — let’s connect!
        </p>

        <div className="flex justify-center gap-6 text-2xl mb-6">
          <a
            href="https://www.linkedin.com/in/manjushree-venkatesan-b2b86826b"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Manjushree8"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:manjushree0228@gmail.com"
            className="hover:text-blue-600 transition"
          >
            <FaEnvelope />
          </a>
        </div>

        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} Manjushree — Built with React, JavaScript & good vibes!
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
