import React from 'react';
import { motion } from 'framer-motion';

export default function Screen6_3() {
  return (
    <div className="relative w-full h-screen bg-yellow-50 flex flex-col items-center justify-center p-6 overflow-hidden">
      
      {/* Cờ SafeKids tung bay */}
      <motion.div 
        animate={{ rotate: [-2, 2, -2] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        className="absolute top-0 left-10 w-24 h-40 bg-blue-600 rounded-b-full shadow-lg flex items-center justify-center border-4 border-t-0 border-yellow-400"
      >
        <span className="text-white font-extrabold text-2xl rotate-90 tracking-widest">SAFEKIDS</span>
      </motion.div>
      <motion.div 
        animate={{ rotate: [2, -2, 2] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        className="absolute top-0 right-10 w-24 h-40 bg-red-500 rounded-b-full shadow-lg flex items-center justify-center border-4 border-t-0 border-yellow-400"
      >
        <span className="text-white font-extrabold text-2xl -rotate-90 tracking-widest">SAFEKIDS</span>
      </motion.div>

      {/* Đại sảnh ánh sáng */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-100 via-transparent to-transparent opacity-80 pointer-events-none" />

      {/* Nhân vật Pipo phong tước cho Thỏ Trắng */}
      <div className="flex items-end justify-center gap-10 z-10 mb-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-9xl drop-shadow-2xl flex flex-col items-center"
        >
          🐘
          {/* Thanh kiếm ánh sáng */}
          <motion.div 
            initial={{ rotate: -45, y: -50, x: 50 }}
            animate={{ rotate: 45, y: -80, x: 100 }}
            transition={{ duration: 2, delay: 1 }}
            className="w-2 h-32 bg-cyan-300 shadow-[0_0_20px_rgba(103,232,249,1)] absolute bottom-10 origin-bottom rounded-full"
          />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-8xl drop-shadow-2xl mt-10"
        >
          🐰
        </motion.div>
      </div>

      {/* Lời thoại Pipo */}
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring" }}
        className="bg-white px-8 py-4 rounded-3xl shadow-xl border-4 border-yellow-400 text-center max-w-2xl z-20 mb-8"
      >
        <p className="text-xl text-gray-800 font-bold leading-relaxed">
          "Từ hôm nay, cậu là Hiệp sĩ bảo vệ nụ cười. Cậu biết nhận ra nguy cơ, biết nói rõ ràng, biết tìm nơi an toàn và biết gọi viện binh." [cite: 247]
        </p>
      </motion.div>

      {/* Phần thưởng và Câu thần chú */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3.5 }}
        className="flex flex-col items-center bg-blue-900 p-8 rounded-[3rem] shadow-2xl border-8 border-yellow-500 z-20"
      >
        <div className="text-7xl mb-4 animate-bounce">🛡️⭐</div>
        <h2 className="text-3xl font-extrabold text-yellow-400 mb-6 uppercase tracking-wider drop-shadow-md">
          Hiệp sĩ Tập sự Dũng Cảm [cite: 248]
        </h2>
        
        <div className="bg-blue-800 p-6 rounded-2xl border-2 border-blue-400 text-center max-w-xl">
          <p className="text-blue-200 font-semibold mb-2 uppercase text-sm tracking-widest">Lời Thề Hiệp Sĩ</p>
          <p className="text-white text-2xl font-bold italic">
            "Con có quyền được an toàn. Con không im lặng một mình." [cite: 248]
          </p>
        </div>

        <button 
          onClick={() => alert("Chúc mừng bạn đã hoàn thành Cấp độ 1! 🥳")}
          className="mt-8 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-extrabold text-xl py-4 px-12 rounded-full shadow-[0_0_40px_rgba(250,204,21,0.6)] hover:scale-105 transition-transform"
        >
          Nhận Huy Hiệu & Hoàn Thành 🎓
        </button>
      </motion.div>

    </div>
  );
}