import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#fceeff] dark:bg-gray-800 text-center py-6 px-4">
      <p className="text-lg font-semibold text-blue-600 mb-2">Let’s Connect!</p>
      <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
        Open to collabs, feedback, and exciting job opportunities — let’s connect!
      </p>

      <div className="flex justify-center gap-6 text-xl text-blue-600 dark:text-white">
        <a href="https://www.linkedin.com/in/manjushree-venkatesan" target="_blank" rel="noreferrer">
          <FaLinkedin className="hover:scale-110 transition" />
        </a>
        <a href="https://github.com/Manjushree8" target="_blank" rel="noreferrer">
          <FaGithub className="hover:scale-110 transition" />
        </a>
        <a href="mailto:manjushree0228@gmail.com" target="_blank" rel="noreferrer">
          <FaEnvelope className="hover:scale-110 transition" />
        </a>
      </div>

      <p className="text-xs text-gray-500 mt-4">
        © 2025 Manjushree — Built with React, JavaScript & good vibes 💙
      </p>
    </footer>
  );
};

export default Footer;

