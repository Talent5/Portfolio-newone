import React from 'react';
import { motion } from 'framer-motion';
import { Database, Code, BarChart, Globe, Server, Brain } from 'lucide-react';

const skills = [
  { name: 'Data Science', icon: Database, color: 'text-blue-400' },
  { name: 'Web Development', icon: Code, color: 'text-green-400' },
  { name: 'Data Visualization', icon: BarChart, color: 'text-yellow-400' },
  { name: 'Machine Learning', icon: Brain, color: 'text-purple-400' },
  { name: 'API Development', icon: Server, color: 'text-red-400' },
  { name: 'GIS', icon: Globe, color: 'text-indigo-400' },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          My Skills
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gray-800 bg-opacity-50 rounded-lg p-6 flex flex-col items-center"
            >
              <skill.icon className={`w-12 h-12 ${skill.color} mb-4`} />
              <h3 className="text-xl font-semibold">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;