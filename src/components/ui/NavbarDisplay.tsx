"use client";
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import toast from "react-hot-toast";

// The Navbar component as given
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
      <div className="mx-8 flex justify-between items-center py-8 md:py-10">
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

      {isNavOpen && (
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

// Component to display and copy the code
const NavbarDisplay = () => {
  const codeString = `
'use client';
import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const navClass = \`py-1 px-6 rounded-full border border-neutral-400 
  hover:bg-neutral-400 transform transition duration-300 font-semibold my-2 hover:text-white 
  hover:translate-x-2\`;

  return (
    <div>
      <div className="mx-8 lg:mx-20 flex justify-between items-center py-8 md:py-10">
        <a href="/">
          <img
            src="link"
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

      {isNavOpen && (
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
`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeString);
    toast.success("Code copied to clipboard!");
  };

  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold my-8">Navbar Component</h1>
      <h2 className="my-6 font-bold text-xl">Preview</h2>

      <div className="p4 rounded-lg border border-neutral-700 my-8">
        <Navbar />
      </div>

      <pre className="bg-neutral-800 p-4 rounded-lg border border-neutral-800 overflow-auto">
        <button
          onClick={copyToClipboard}
          className="mb-4 py-2 px-4 bg-green-500 hover:bg-green-600 text-white rounded-lg font-extrabold"
        >
          Copy Code
        </button>
        <code>{codeString}</code>
      </pre>
    </div>
  );
};

export default NavbarDisplay;
