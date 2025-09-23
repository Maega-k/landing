import React from "react";
import { Mail, Lock, User, Instagram, Twitter, Facebook, Chrome } from 'lucide-react';
import { motion } from "framer-motion";
import Navbar from './navbar';

function Contact() {
  return (
    <Navbar />
    <motion.section
      className="bg-gradient-to-br from-orange-100 to-orange-300 min-h-screen py-12 px-4 flex flex-col items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <motion.h1
        className="text-5xl font-extrabold text-orange mb-6 text-center"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        Get in Touch!
      </motion.h1>
      <motion.p
        className="text-lg text-gray-700 mb-10 text-center max-w-xl"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        Have a question, need a quote, or want to book a fitting? We’d love to hear from you! Fill out the form below or reach us through any of the channels listed.
      </motion.p>
      <motion.div
        className="flex flex-col md:flex-row gap-10 w-full max-w-4xl"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.6 }}
      >
        {/* Contact Form */}
        <motion.form
          className="bg-white rounded-2xl shadow-lg p-8 flex-1"
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <motion.h2
            className="text-2xl font-bold text-orange mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
          >
            Send Us a Message
          </motion.h2>
          <div className="mb-4">
            <input type="text" placeholder="Your Name" className="w-full p-3 rounded-lg border border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange" required />
          </div>
          <div className="mb-4">
            <input type="email" placeholder="Your Email" className="w-full p-3 rounded-lg border border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange" required />
          </div>
          <div className="mb-4">
            <textarea placeholder="Your Message" className="w-full p-3 rounded-lg border border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange" rows="4" required />
          </div>
          <motion.button
            type="submit"
            className="bg-orange text-white font-bold py-3 px-6 rounded-lg hover:bg-orange-600 transition-all w-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            Send Message
          </motion.button>
        </motion.form>
        {/* Contact Info & Socials */}
        <motion.div
          className="flex-1 flex flex-col justify-between bg-white rounded-2xl shadow-lg p-8"
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 1 }}
        >
          <div>
            <motion.h2
              className="text-2xl font-bold text-orange mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.1 }}
            >
              Visit Us
            </motion.h2>
            <motion.p
              className="mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 1.2 }}
            >
              123 Fashion Ave, Warri, Delta State, Nigeria
            </motion.p>
            <motion.p
              className="mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 1.3 }}
            >
              Phone: +234 8102 334 023
            </motion.p>
            <motion.p
              className="mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 1.4 }}
            >
              Email: info@ceeseamstailoringstudio.com
            </motion.p>
          </div>
          <div>
            <motion.h2
              className="text-xl font-bold text-orange space-x-6 mb-2"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.5 }}
            >
              Follow Us
            </motion.h2>
            <div className="flex gap-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, color: "#ea580c" }}
                className="text-orange hover:text-orange-600 text-2xl"
                title="Instagram"
                transition={{ duration: 0.2 }}
              >
                <Instagram />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, color: "#ea580c" }}
                className="text-orange hover:text-orange-600 text-2xl"
                title="Facebook"
                transition={{ duration: 0.2 }}
              >
                <Facebook />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, color: "#ea580c" }}
                className="text-orange hover:text-orange-600 text-2xl"
                title="Twitter"
                transition={{ duration: 0.2 }}
              >
                <Twitter />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default Contact;
