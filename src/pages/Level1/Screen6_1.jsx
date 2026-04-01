import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Screen6_1() {
  const navigate = useNavigate();
  
  // Danh sách linh thú để chọn
  const availableAvatars = ['🦉', '🐻‍❄️', '🐘', '🦁', '🐶', '🐱'];
  
  // Trạng thái 3 ô trống trên gương
  const [selectedGuardians, setSelectedGuardians] = useState([null, null, null]);

  const handleSelectGuardian = (avatar) => {
    // Tìm ô trống đầu tiên để nhét linh thú vào
    const emptyIndex = selectedGuardians.findIndex(g => g === null);
    if (emptyIndex !== -1 && !selectedGuardians.includes(avatar)) {
      const newGuardians = [...selectedGuardians];
      newGuardians[emptyIndex] = avatar;
      setSelectedGuardians(newGuardians);
    }
  };

  const handleRemoveGuardian = (index) => {
    const newGuardians = [...selectedGuardians];
    newGuardians[index] = null;
    setSelectedGuardians(newGuardians);
  };

  const isFull = selectedGuardians.every(g => g !== null);

  return (
    <div className="relative w-full h-screen bg-indigo-950 flex flex-col items-center justify-center p-6 overflow-hidden">
      
      {/* Lời thoại hướng dẫn */}
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="absolute top-10 bg-white/10 backdrop-blur-md px-8 py-4 rounded-3xl border-2 border-indigo-400 z-10 flex items-center gap-4"
      >
        <span className="text-4xl">🐘</span>
        <p className="text-2xl text-indigo-100 font-bold tracking-wide">
          "Mỗi hiệp sĩ đều có đội bảo vệ của mình." [cite: 238]
        </p>
      </motion.div>

      {/* Chiếc gương vàng lớn */}
      <div className="relative w-full max-w-2xl h-96 bg-gradient-to-br from-indigo-300 to-purple-300 rounded-full shadow-[0_0_80px_rgba(250,204,21,0.3)] border-[16px] border-yellow-500 flex flex-col items-center justify-center p-10 mt-10">
        
        <h2 className="text-indigo-900 text-2xl font-extrabold mb-8 uppercase tracking-widest opacity-80">
          Gương Thần Kết Nối
        </h2>

        {/* 3  tròn để chọn linh thú */}
        <div className="flex gap-8">
          {selectedGuardians.map((guardian, index) => (
            <div 
              key={index}
              onClick={() => handleRemoveGuardian(index)}
              className="w-28 h-28 bg-white/50 rounded-full border-4 border-yellow-400 shadow-inner flex items-center justify-center text-6xl cursor-pointer hover:bg-white/80 transition"
            >
              {guardian ? (
                <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }}>
                  {guardian}
                </motion.span>
              ) : (
                <span className="text-indigo-300/50 text-4xl font-bold">?</span>
              )}
            </div>
          ))}
        </div>
        
        {/* Nút Tiếp tục (Chỉ hiện khi đã chọn đủ 3) */}
        <AnimatePresence>
          {isFull && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              onClick={() => navigate('/level1/screen6_3')}
              className="absolute -bottom-6 bg-yellow-400 text-yellow-900 font-extrabold text-xl py-3 px-10 rounded-full shadow-2xl border-4 border-white hover:bg-yellow-300"
            >
              Đội bảo vệ đã sẵn sàng! ➡️
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Khu vực chọn linh thú */}
      <div className="mt-16 flex flex-col items-center">
        <p className="text-indigo-200 mb-4 font-medium text-lg">
          Hãy chọn 3 người lớn (Bố, Mẹ, Thầy Cô...) mà cậu tin tưởng nhất: [cite: 232]
        </p>
        <div className="flex gap-4 bg-white/5 p-4 rounded-3xl border border-indigo-500/50">
          {availableAvatars.map((avatar, idx) => (
            <motion.button
              key={idx}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleSelectGuardian(avatar)}
              className={`text-5xl p-2 rounded-full transition ${selectedGuardians.includes(avatar) ? 'opacity-30 grayscale cursor-not-allowed' : 'hover:bg-indigo-800/50'}`}
            >
              {avatar}
            </motion.button>
          ))}
        </div>
      </div>

    </div>
  );
}