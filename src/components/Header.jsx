import React from 'react';
import Navbar from './Navbar';
import { motion } from "framer-motion"

const Header = () => {
  return (
    <div
      className="hero min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden"
      style={{ backgroundImage: "url('/header_img.png')" }}
      id="Header"
    >
      <Navbar />
      <motion.div 
      initial={{opacity:0, y:100}}
      transition={{duration:1.5}}
      whileInView={{opacity: 1, y:0}}
      viewport={{once: true}}
      className="hero-text container text-center mx-auto py-4 px-6 text-white md:px-20 lg:px-32">
        <h2 className="text-5xl sm:text-5xl md:text-[82px] max-w-3xl font-semibold pt-20">
          Explore homes that fit your dreams
        </h2>

        <div className="flex justify-center gap-6 mt-16">
          <a href="#Project" className="left-btn border border-white px-8 py-3 rounded">Projects</a>
          <a href="#Contact" className="right-btn border bg-blue-500 px-8 py-3 rounded">Contact us</a>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
