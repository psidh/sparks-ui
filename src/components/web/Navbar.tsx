"use client";
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const navClass = `py-1 px-6 rounded-full border border-neutral-400 
  hover:bg-neutral-400 transform transition duration-300 font-semibold my-2 hover:text-white 
  hover:translate-x-2`;

  return (
    <div>
      <div className="mx-8 lg:mx-20 flex justify-between items-center py-8 md:py-10">
        <a href="/">
          <img
            src="https://images.unsplash.com/photo-1529101091764-c3526daf38fe?dpr=2&h=147&w=126&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8MTg4OTY4N3x8ZW58MHx8fHx8"
            alt="Logo"
            className="w-24 h-24 rounded-full hover:opacity-75"
          />
        </a>

        <div className="justify-center gap-6 hidden lg:flex items-center space-x-4">
          <a href="/about" className={navClass}>
            About
          </a>
          <a href="/neutral" className={navClass}>
            neutral
          </a>
          <a href="/blog" className={navClass}>
            Contact
          </a>
          <a href="/epics" className={navClass}>
            Epics
          </a>
          <a href="/feedback" className={navClass}>
            Schools of thought
          </a>
        </div>

        <AiOutlineMenu
          onClick={toggleNav}
          className="flex lg:hidden w-6 h-6 cursor-pointer"
        />
      </div>

      {isNavOpen && ( // Render the navigation links if isNavOpen is true
        <div className="flex flex-col lg:hidden justify-start items-start mx-4">
          <a href="/about" className={navClass}>
            About
          </a>
          <a href="/neutral" className={navClass}>
            neutral
          </a>
          <a href="/blog" className={navClass}>
            Contact
          </a>
          <a href="/privacy-policy" className={navClass}>
            privacy-policy
          </a>
          <a href="/feedback" className={navClass}>
            Feedback
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
