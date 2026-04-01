import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Screen4_3() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);

  const handleTouchHead = () => { if (step === 0) setStep(1); };
  const handleTouchMouth = () => { if (step === 1) setStep(2); };
  const handleDragEnd = (event, info) => { if (step === 2 && info.offset.x > 100) setStep(3); };

  return (
    <div className="relative w-full h-screen bg-slate-200 flex flex-col items-center justify-center overflow-hidden">
      <h1 className="absolute top-10 text-3xl font-extrabold text-slate-800 uppercase bg-white px-8 py-2 rounded-full shadow-md">
        Huấn luyện thoát khỏi vòng vây
      </h1>

      <div className="absolute top-24 flex gap-4">
        <span className={`px-4 py-1 rounded-full font-bold ${step >= 0 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>1. Ngẩng cao đầu</span>
        <span className={`px-4 py-1 rounded-full font-bold ${step >= 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>2. Nói dõng dạc</span>
        <span className={`px-4 py-1 rounded-full font-bold ${step >= 2 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>3. Bước đi nhanh</span>
      </div>

      <div className="w-full h-96 relative flex items-end justify-center border-b-8 border-slate-400">
        <motion.div animate={{ x: step === 3 ? -300 : -100, opacity: step === 3 ? 0 : 1 }} transition={{ duration: 1 }} className="absolute bottom-0 text-9xl z-10">🦊</motion.div>
        <motion.div drag={step === 2 ? "x" : false} dragConstraints={{ left: 0, right: 0 }} onDragEnd={handleDragEnd} animate={{ scale: step >= 1 ? 1.1 : 1, x: step === 3 ? 300 : 0 }} transition={{ duration: 0.5 }} className="absolute bottom-0 z-20 flex flex-col items-center justify-center cursor-pointer">
          {step === 0 && <div onClick={handleTouchHead} className="absolute -top-10 w-20 h-20 bg-yellow-400/50 rounded-full animate-ping z-30 flex items-center justify-center text-xs font-bold">Chạm!</div>}
          {step === 1 && <div onClick={handleTouchMouth} className="absolute top-10 w-16 h-16 bg-blue-400/50 rounded-full animate-ping z-30 flex items-center justify-center text-xs font-bold">Chạm!</div>}
          {step === 2 && <div className="absolute -right-20 top-1/2 text-2xl animate-bounce text-blue-600 font-bold whitespace-nowrap">Vuốt tiến ➡️</div>}
          <AnimatePresence>
            {step >= 2 && step < 3 && (
              <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} className="absolute -top-24 -right-32 bg-white px-4 py-2 rounded-2xl shadow-xl border-2 border-slate-300 font-bold text-red-600 w-48 text-center z-40">
                "Hãy tránh đường, tớ phải đi gặp cô giáo ngay bây giờ!"
              </motion.div>
            )}
          </AnimatePresence>
          <span className="text-[150px] drop-shadow-2xl">{step === 0 ? '🐇' : '🐰'}</span>
        </motion.div>
      </div>

      <AnimatePresence>
        {step === 3 && (
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} className="mt-10 flex flex-col items-center bg-white px-10 py-6 rounded-3xl shadow-2xl border-4 border-yellow-400">
            <div className="text-6xl mb-4">🏅</div>
            <h2 className="text-3xl font-bold text-yellow-600 mb-2">Huy chương Bước Chân Quả Cảm</h2>
            <p className="text-slate-600 font-medium text-lg">"Tuyệt đối không xô đẩy. Không ở lại đôi co. Hãy đi thật nhanh đến nơi an toàn."</p>
            <button onClick={() => navigate('/level1/screen5_1')} className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-bold text-xl py-3 px-8 rounded-full transition">
              Đi tiếp ➡️
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}