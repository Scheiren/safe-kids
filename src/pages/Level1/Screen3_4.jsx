import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Screen3_4() {
  const navigate = useNavigate();
  const [energy, setEnergy] = useState(0);
  const [isCharging, setIsCharging] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const intervalRef = useRef(null);

  const startCharging = () => {
    if (isSuccess) return;
    setIsCharging(true);
    intervalRef.current = setInterval(() => {
      setEnergy((prev) => {
        if (prev >= 100) {
          clearInterval(intervalRef.current);
          setIsSuccess(true);
          return 100;
        }
        return prev + 5;
      });
    }, 100);
  };

  const stopCharging = () => {
    setIsCharging(false);
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (!isSuccess) {
      intervalRef.current = setInterval(() => {
        setEnergy((prev) => {
          if (prev <= 0) { clearInterval(intervalRef.current); return 0; }
          return prev - 10;
        });
      }, 100);
    }
  };

  useEffect(() => { return () => { if (intervalRef.current) clearInterval(intervalRef.current); }; }, []);

  return (
    <div className="relative w-full h-screen bg-slate-900 flex flex-col items-center justify-center p-6 overflow-hidden select-none">
      <h1 className="absolute top-10 text-4xl font-extrabold text-white uppercase tracking-widest drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
        Khu vực tập luyện khẩu lệnh
      </h1>

      <div className="flex w-full max-w-4xl justify-between items-end mb-20 z-10">
        <div className="flex flex-col items-center gap-4">
          <div className="bg-white/90 p-4 rounded-xl shadow-lg border-2 border-blue-400">
            <p className="text-slate-800 font-bold text-center">
              "Dừng ngay lại! Tớ không hề thích điều này."<br/>
              <span className="text-sm text-slate-500 italic">Bạn hãy nhấn giữ nút để nói thật to và rõ nhé!</span>
            </p>
          </div>
          <div className="text-8xl">🐘</div>
        </div>

        <div className="w-24 h-96 bg-slate-700 rounded-full border-8 border-slate-800 flex flex-col-reverse p-2 shadow-inner overflow-hidden relative">
          <motion.div className="w-full bg-gradient-to-t from-red-500 via-orange-500 to-yellow-400 rounded-full" style={{ height: `${energy}%` }} animate={{ height: `${energy}%` }} transition={{ ease: "linear", duration: 0.1 }} />
          <div className="absolute top-8 left-0 w-full border-t-4 border-dashed border-white/50" />
        </div>

        <div className="flex flex-col items-center">
          <div className="text-8xl relative z-10 mb-[-20px]">🐰</div>
          <div className="w-32 h-16 bg-blue-500 rounded-t-full shadow-[0_-10px_30px_rgba(59,130,246,0.8)] border-4 border-b-0 border-blue-300" />
        </div>
      </div>

      {!isSuccess ? (
        <motion.button whileTap={{ scale: 0.9 }} onPointerDown={startCharging} onPointerUp={stopCharging} onPointerLeave={stopCharging} className="bg-red-500 hover:bg-red-600 text-white font-extrabold text-3xl py-6 px-16 rounded-full shadow-[0_10px_0_rgb(153,27,27)] uppercase tracking-wider z-20 flex items-center gap-4 active:shadow-[0_0px_0_rgb(153,27,27)] active:translate-y-[10px]">
          🎙️ GIỮ ĐỂ NÓI
        </motion.button>
      ) : (<div className="h-24" />)}

      <AnimatePresence>
        {isSuccess && (
          <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="absolute inset-0 bg-black/80 z-50 flex flex-col items-center justify-center backdrop-blur-sm">
            <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 10, ease: "linear" }} className="text-9xl drop-shadow-[0_0_100px_rgba(250,204,21,1)]">⭐</motion.div>
            <h2 className="text-5xl font-extrabold text-yellow-400 mt-8 uppercase tracking-widest drop-shadow-2xl">Giọng nói uy lực!</h2>
            <p className="text-white text-2xl mt-4 font-bold">Nói rõ ràng - Thái độ dứt khoát - Không bạo lực.</p>
            <button onClick={() => navigate('/level1/screen4_1')} className="mt-10 bg-green-500 text-white font-bold text-2xl py-4 px-12 rounded-full shadow-xl border-4 border-white hover:bg-green-400 transition">
              Đi tiếp ➡️
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}