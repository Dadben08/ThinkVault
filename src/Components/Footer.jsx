// Components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-500 items-center text-white text-center py-4 mt-12">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} NoteApp. All rights reserved.
      </p>
      <p className="text-xs">Created by Dada Benjamin</p>
    </footer>
  );
};

export default Footer;
