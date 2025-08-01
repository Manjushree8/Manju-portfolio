import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const contactItems = [
    {
      icon: <FaEnvelope className="text-blue-500 text-xl" />,
      label: "manjushree0228@gmail.com",
      link: "mailto:manjushree0228@gmail.com",
    },
    {
      icon: <FaLinkedin className="text-blue-700 text-xl" />,
      label: "/manjushree-venkatesan",
      link: "https://www.linkedin.com/in/manjushree-venkatesan-b2b86826b",
    },
    {
      icon: <FaGithub className="text-gray-900 dark:text-white text-xl" />,
      label: "@Manjushree8",
      link: "https://github.com/Manjushree8",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 px-6 md:px-12 bg-[#F9FBFF] dark:bg-gray-900 text-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-blue-600 mb-6"
      >
        Let’s Connect 
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="text-lg text-gray-700 dark:text-gray-300 mb-10 max-w-xl mx-auto"
      >
        Have a cool idea? Want to collab? Or just wanna say hi? I’m always down
        to connect and chat about code, design, or your favorite playlist.
      </motion.p>

      <div className="flex flex-col items-center gap-6">
        {contactItems.map((item, index) => (
          <motion.a
            key={index}
            href={item.link}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.15 }}
            className="flex items-center gap-3 text-md font-medium text-gray-800 dark:text-gray-100 hover:underline"
          >
            {item.icon}
            {item.label}
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
