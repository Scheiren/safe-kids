import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Screen4_1() {
  const navigate = useNavigate();
  const [isSafe, setIsSafe] = useState(false);

  const handleDragEnd = (event, info) => {
    if (info.point.y < window.innerHeight / 2) {
      setIsSafe(true);
    }
  };

  return (
    <div className="relative w-full h-screen flex flex-col overflow-hidden">
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-white px-6 py-3 rounded-full shadow-lg border-2 border-blue-300 z-50 w-[90%] max-w-2xl flex items-center gap-4">
        <span className="text-4xl">🐘</span>
        <p className="text-gray-800 font-bold">
          "Lúc gặp nguy hiểm, một hiệp sĩ thông minh sẽ không đứng lại cãi vã. Hiệp sĩ sẽ nhanh chóng rời đi và tìm đến một nơi an toàn hơn."
        </p>
      </div>

      <div className="flex-1 bg-yellow-100 flex items-center justify-around p-10 border-b-8 border-yellow-300 relative">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-300 via-transparent to-transparent animate-pulse" />
        <div className="bg-white/80 px-6 py-4 rounded-2xl shadow-md border-4 border-green-400 text-center z-10"><span className="text-4xl block mb-2">👩‍🏫</span><span className="font-bold text-green-700">Lớp học</span></div>
        <div className="bg-white/80 px-6 py-4 rounded-2xl shadow-md border-4 border-green-400 text-center z-10"><span className="text-4xl block mb-2">🏫</span><span className="font-bold text-green-700">Phòng Giáo viên</span></div>
        <div className="bg-white/80 px-6 py-4 rounded-2xl shadow-md border-4 border-green-400 text-center z-10"><span className="text-4xl block mb-2">⚕️</span><span className="font-bold text-green-700">Phòng Y tế</span></div>
      </div>

      <div className="flex-1 bg-slate-800 flex items-center justify-center relative">
        <div className="absolute top-4 text-slate-400 font-semibold tracking-widest uppercase">Khu vực góc khuất / Nhà kho vắng vẻ</div>
        {!isSafe && <div className="absolute right-1/4 text-8xl drop-shadow-2xl">🦊</div>}
        <AnimatePresence>
          {!isSafe && (
            <motion.div drag dragConstraints={{ left: -200, right: 200, top: -400, bottom: 50 }} dragElastic={0.2} onDragEnd={handleDragEnd} whileDrag={{ scale: 1.2 }} exit={{ opacity: 0, scale: 0 }} className="text-8xl cursor-grab active:cursor-grabbing drop-shadow-[0_0_30px_rgba(255,255,255,0.2)] z-20">
              🐰<div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white/20 text-white text-xs px-2 py-1 rounded-full whitespace-nowrap">Kéo tớ lên vùng sáng!</div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {isSafe && (
          <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} className="absolute inset-0 bg-white/90 z-50 flex flex-col items-center justify-center">
            <div className="text-9xl mb-6">🐰✨</div>
            <h2 className="text-4xl font-bold text-green-600 mb-4">An toàn rồi!</h2>
            <p className="text-xl font-medium text-gray-700 mb-8">Tuyệt đối không đi vào chỗ vắng, không ở lại đôi co.</p>
            <button onClick={() => navigate('/level1/screen4_3')} className="bg-blue-500 hover:bg-blue-600 text-white font-bold text-2xl py-4 px-12 rounded-full shadow-lg transition">
              Tiếp tục ➡️
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}