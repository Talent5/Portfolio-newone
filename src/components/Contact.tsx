import React from 'react';
import { motion } from 'framer-motion';
import { Mail, GitHub, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Get in Touch
        </motion.h2>
        <div className="max-w-2xl mx-auto">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gray-800 bg-opacity-50 rounded-lg p-8 shadow-lg"
          >
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <input type="text" id="name" name="name" className="w-full bg-gray-700 rounded-md py-2 px-3 text-white" required />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input type="email" id="email" name="email" className="w-full bg-gray-700 rounded-md py-2 px-3 text-white" required />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea id="message" name="message" rows={4} className="w-full bg-gray-700 rounded-md py-2 px-3 text-white" required></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-md transition-colors">
              Send Message
            </button>
          </motion.form>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 flex justify-center space-x-6"
          >
            <a href="mailto:johndoe@example.com" className="text-gray-300 hover:text-white transition-colors">
              <Mail className="w-8 h-8" />
            </a>
            <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
              <GitHub className="w-8 h-8" />
            </a>
            <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
              <Linkedin className="w-8 h-8" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;