// src/components/SafeKidsButton.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { playSound } from '../utils/soundPlayer';

export default function SafeKidsButton({ children, onClick, color = "yellow", className = "" }) {
  
  const colors = {
    yellow: "bg-yellow-400 hover:bg-yellow-500 text-yellow-900 shadow-[0_8px_0_rgb(202,138,4)]",
    green: "bg-green-500 hover:bg-green-600 text-white shadow-[0_8px_0_rgb(21,128,61)]",
    blue: "bg-blue-500 hover:bg-blue-600 text-white shadow-[0_8px_0_rgb(29,78,216)]",
    red: "bg-red-500 hover:bg-red-600 text-white shadow-[0_8px_0_rgb(153,27,27)]",
  };

  const handleClick = (e) => {
    playSound('click'); // Tự động phát tiếng click
    if (onClick) onClick(e);
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9, y: 5 }} // Hiệu ứng lún nút xuống
      onClick={handleClick}
      className={`font-extrabold text-2xl py-4 px-10 rounded-full transition-colors flex items-center gap-3 active:shadow-[0_0px_0_transparent] ${colors[color]} ${className}`}
    >
      {children}
    </motion.button>
  );
}