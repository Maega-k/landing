import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden md:block container mx-auto p-7  shadow-md">
        <div className="justify-start">
            {/* <img src="public/img/needle.svg" alt="Logo" className="h-8 px-7" /> */}
          </div>
          <div className="space-x-5 flex justify-center items-center">
            <motion.div
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200 }}
              style={{ display: "inline-block" }}
            >
              <Link to="/" className=" text-bluee font-bold text-xl hover:text-black">Home</Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200 }}
              style={{ display: "inline-block" }}
            >
              <Link to="/products" className="text-bluee font-bold text-xl hover:text-black">Products</Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200 }}
              style={{ display: "inline-block" }}
            >
              <Link to="/contact" className="text-bluee font-bold text-xl hover:text-black">Contact Us</Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200 }}
              style={{ display: "inline-block" }}
            >
              <Link to="/login" className="text-bluee font-bold text-xl hover:text-black">Sign-in</Link>
            </motion.div>
          </div>
        
      </nav>

      {/* Mobile Navbar - Hamburger */}
      <nav className="md:hidden shadow p-4 flex items-center justify-between">
        <img src="img/needle.svg" alt="Logo" className="h-8 px-2" />
        <button
          onClick={() => setSidebarOpen(true)}
          className="text-bluee"
          aria-label="Open menu"
        >
          <Menu size={32} />
        </button>
      </nav>

      {/* Sidebar for Mobile */}
      {sidebarOpen && (
        <motion.aside
          initial={{ x: '100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: '100%', opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed top-0 right-0 w-64 h-full bg-bluee z-50 shadow-lg flex flex-col p-6"
        >
          <div className="flex justify-between items-center mb-8">
            <img src="img/needle.svg" alt="Logo" className="h-8" />
            <button
              onClick={() => setSidebarOpen(false)}
              className="text-white"
              aria-label="Close menu"
            >
              <X size={32} />
            </button>
          </div>
          <nav className="flex flex-col space-y-6">
            <motion.div
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200 }}
              style={{ display: "inline-block" }}
            >
              <Link
                to="/"
                className="text-white font-bold text-xl hover:text-black"
                onClick={() => setSidebarOpen(false)}
              >
                Home
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200 }}
              style={{ display: "inline-block" }}
            >
              <Link
                to="/products"
                className="text-white font-bold text-xl hover:text-black"
                onClick={() => setSidebarOpen(false)}
              >
                Products
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200 }}
              style={{ display: "inline-block" }}
            >
              <Link
                to="/contact"
                className="text-white font-bold text-xl hover:text-black"
                onClick={() => setSidebarOpen(false)}
              >
                Contact Us
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200 }}
              style={{ display: "inline-block" }}
            >
              <Link
                to="/login"
                className="text-white font-bold text-xl hover:text-black"
                onClick={() => setSidebarOpen(false)}
              >
                Sign-in
              </Link>
            </motion.div>
          </nav>
        </motion.aside>
      )}
    </>
  );
}

export default Navbar;





