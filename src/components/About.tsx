import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800 bg-opacity-50">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-8 text-center"
        >
          About Me
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col md:flex-row items-center justify-between"
        >
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
              alt="John Doe"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <p className="text-lg mb-4">
              Hi, I'm John Doe, a passionate student of Data Science and Informatics with a knack for web development. I'm constantly exploring the intersection of data analysis and web technologies to create meaningful and interactive data-driven applications.
            </p>
            <p className="text-lg mb-4">
              My journey in tech started with self-taught web development, which eventually led me to pursue a formal education in Data Science. This unique combination allows me to approach problems from both a data-centric and user-centric perspective.
            </p>
            <p className="text-lg">
              When I'm not coding or analyzing data, you can find me contributing to open-source projects, attending tech meetups, or exploring the latest advancements in AI and machine learning.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;