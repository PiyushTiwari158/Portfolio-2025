import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0b0d1b] text-gray-400 py-6 px-6 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center text-sm text-center space-y-2">
        <div>© {new Date().getFullYear()} Piyush Tiwari. All rights reserved.</div>
        <div>&lt; Coded by Piyush Tiwari /&gt;</div>
      </div>
    </footer>
  );
};

export default Footer;
