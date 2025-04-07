import React from "react";
// import Logo from "../assets/logo.png";
import logo from "../assets/logo.png";


const Header = () => {
  return (
    <header className="bg-blue-500 text-white p-4 flex  items-center justify-start shadow-md ">
      <span className="flex items-center text-xl font-bold">
      <img src={logo} alt="Logo" className="w-10 h-10 mr-3" />
      <h1>ThinkVault</h1>
      </span>

    </header>
  );
};

export default Header;
