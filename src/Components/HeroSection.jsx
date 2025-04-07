import React from "react";

const HeroSection = ({ onStart }) => {
  return (
    <div className="w-full h-screen bg-gradient-to-r from-blue-500 to-indigo-600 flex flex-col items-center justify-center text-white text-center p-6">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">ThinkVault - Digital Notebook</h1>
      <p className="text-lg md:text-xl max-w-2xl">
        Capture your thoughts, ideas, and tasks in one place. Stay organized and productive with ease.
      </p>
      <button
        onClick={onStart}
        className="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold text-lg rounded-lg shadow-md hover:bg-gray-200 transition duration-300"
      >
        Get Started
      </button>
    </div>
  );
};

export default HeroSection;
