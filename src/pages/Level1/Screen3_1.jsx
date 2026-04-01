import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Screen3_1() {
  const navigate = useNavigate();
  const [isBreathingIn, setIsBreathingIn] = useState(false);
  const [breathCount, setBreathCount] = useState(0);

  const handlePointerDown = () => { if (breathCount < 3) setIsBreathingIn(true); };
  const handlePointerUp = () => {
    if (isBreathingIn && breathCount < 3) {
      setIsBreathingIn(false);
      setBreathCount(prev => prev + 1);
    }
  };

  return (
    <div className="relative w-full h-screen bg-teal-900 flex flex-col items-center justify-center p-6 select-none overflow-hidden">
      <div className="absolute top-10 flex gap-8 items-center z-10">
        <div className="text-7xl">🐰</div>
        <div className="bg-white/80 p-4 rounded-xl shadow-lg border-2 border-teal-300 max-w-sm">
          <p className="text-teal-900 font-medium text-lg">
            "Nếu bạn cảm thấy hoảng sợ, tim đập thình thịch hay muốn khóc òa lên, đó là chuyện rất bình thường. Nào, hãy cùng mình thổi bong bóng để lấy lại bình tĩnh nha."
          </p>
        </div>
        <div className="text-7xl">🐘</div>
      </div>

      <div className="relative flex items-center justify-center w-full h-full z-20" onPointerDown={handlePointerDown} onPointerUp={handlePointerUp} onPointerLeave={handlePointerUp}>
        <motion.div
          animate={{ scale: isBreathingIn ? 3 : 1, opacity: isBreathingIn ? 0.8 : 0.5 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="w-32 h-32 bg-cyan-300 rounded-full shadow-[0_0_50px_rgba(103,232,249,0.8)] border-4 border-cyan-100 flex items-center justify-center cursor-pointer"
        >
          {!isBreathingIn && breathCount < 3 && <span className="text-cyan-900 font-bold text-center px-2">Chạm & GiỮ để Hít vào</span>}
          {isBreathingIn && breathCount < 3 && <span className="text-cyan-900 font-bold text-center px-2 text-sm">Thả tay để Thở ra</span>}
        </motion.div>
      </div>

      <div className="absolute bottom-24 flex gap-4 z-10">
        {[1, 2, 3].map((num) => (
          <div key={num} className={`w-8 h-8 rounded-full border-4 ${breathCount >= num ? 'bg-green-400 border-green-200' : 'bg-transparent border-teal-500'}`} />
        ))}
      </div>
      <p className="absolute bottom-16 text-teal-200 font-bold text-xl z-10">
        Đã hoàn thành: {breathCount}/3 nhịp
      </p>

      <AnimatePresence>
        {breathCount >= 3 && (
          <motion.button
            initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}
            onClick={() => navigate('/level1/screen3_4')}
            className="absolute bottom-10 bg-yellow-400 text-yellow-900 font-extrabold text-2xl py-4 px-10 rounded-full shadow-xl border-4 border-white z-50 hover:bg-yellow-300"
          >
            Trái tim đã êm dịu! Bước tiếp thôi ➡️
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}